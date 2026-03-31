import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Question, QUESTIONS } from './questions.data';

function levenshtein(a: string, b: string): number {
  const m = a.length,
    n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
  );
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
  return dp[m][n];
}

interface SessionRecord {
  date: string;
  score: number;
  maxScore: number;
  nb: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showWikiPopup: boolean = false;
  wikiPopupText: string = '';
  private wikiRequestId = 0;
  private wikiParagraphs: string[] = [];
  private wikiCurrentAnswer = '';

  // ─── Stats ───────────────────────────────────────────────────────────────
  statsHistory: SessionRecord[] = [];
  statsVisible = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadStats();
    this.loadMastery();
  }

  // ─── Mastery par question ─────────────────────────────────────────────────
  questionMastery: Record<string, number> = {};

  private loadMastery() {
    try {
      const raw = localStorage.getItem('quiz-app-mastery');
      this.questionMastery = raw ? JSON.parse(raw) : {};
    } catch {
      this.questionMastery = {};
    }
  }

  private saveMastery() {
    localStorage.setItem('quiz-app-mastery', JSON.stringify(this.questionMastery));
  }

  get currentMastery(): number {
    if (!this.selectedQuestions.length || this.currentIndex >= this.selectedQuestions.length) return 0;
    return this.questionMastery[this.selectedQuestions[this.currentIndex].question] ?? 0;
  }

  // ─── Stats localStorage ───────────────────────────────────────────────────
  private loadStats() {
    try {
      const raw = localStorage.getItem('quiz-app-stats');
      this.statsHistory = raw ? JSON.parse(raw) : [];
    } catch {
      this.statsHistory = [];
    }
  }

  private saveSession() {
    const record: SessionRecord = {
      date: new Date().toLocaleDateString('fr-FR'),
      score: this.score,
      maxScore: this.selectedQuestions.length * 5,
      nb: this.selectedQuestions.length,
    };
    this.statsHistory = [...this.statsHistory, record].slice(-20);
    localStorage.setItem('quiz-app-stats', JSON.stringify(this.statsHistory));
  }

  bestScore(): number {
    return this.statsHistory.length
      ? Math.max(...this.statsHistory.map((s) => Math.round((s.score / s.maxScore) * 100)))
      : 0;
  }

  // ─── Wiki popup ───────────────────────────────────────────────────────────
  openWikiPopup(answer: string) {
    this.showWikiPopup = true;

    // Paragraphes déjà en cache pour cette réponse → juste en choisir un nouveau
    if (answer === this.wikiCurrentAnswer && this.wikiParagraphs.length > 0) {
      this.wikiPopupText = this.pickWikiParagraph();
      return;
    }

    this.wikiPopupText = 'Chargement...';
    this.wikiCurrentAnswer = answer;
    this.wikiParagraphs = [];

    const requestId = ++this.wikiRequestId;
    const url = `https://fr.wikipedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrsearch=${encodeURIComponent(answer)}&gsrlimit=1&prop=extracts&exlimit=1&explaintext=true`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    fetch(url, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        clearTimeout(timeout);
        if (requestId !== this.wikiRequestId) return;
        const pages = data?.query?.pages;
        if (!pages) {
          this.wikiPopupText = 'Aucune information trouvée.';
        } else {
          const page = Object.values(pages)[0] as any;
          const fullText: string = (page?.extract || '').trim();
          if (!fullText) {
            this.wikiPopupText = 'Aucune information trouvée.';
          } else {
            const pronounStart = /^(Il |Elle |Ils |Elles |Son |Sa |Ses |Leur |Leurs |Celui |Celle |Ceux |Celles |Ce fut|Cette |Ces |Y |En |Après |Lors |Dès lors|Depuis lors)/i;
            this.wikiParagraphs = fullText
              .split(/\n+/)
              .map((p: string) => p.trim())
              .filter((p: string) => p.length > 60 && !/^=+/.test(p) && !pronounStart.test(p))
              .map((p: string) => {
                const sentences = p.match(/[^.!?]+[.!?]+/g) || [];
                return sentences.slice(0, 2).join(' ').trim() || p.substring(0, 300);
              });
            this.wikiPopupText = this.pickWikiParagraph();
          }
        }
        this.cdr.detectChanges();
      })
      .catch((err) => {
        clearTimeout(timeout);
        if (requestId !== this.wikiRequestId) return;
        this.wikiPopupText = err?.name === 'AbortError'
          ? 'Délai dépassé. Vérifiez votre connexion.'
          : 'Aucune information trouvée.';
        this.cdr.detectChanges();
      });
  }

  private pickWikiParagraph(): string {
    if (this.wikiParagraphs.length === 0) return 'Aucune information trouvée.';
    const others = this.wikiParagraphs.filter((p) => p !== this.wikiPopupText);
    const pool = others.length > 0 ? others : this.wikiParagraphs;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  closeWikiPopup() {
    this.showWikiPopup = false;
  }

  showLastExtraInfo: boolean = false;
  lastExtraInfo: string | null = null;
  lastExtraQuestionIndex: number | null = null;
  @ViewChild('answerInput') answerInput!: ElementRef;

  questions: Question[] = QUESTIONS;

  selectedQuestions: Question[] = [];
  currentIndex = 0;
  score = 0;
  totalQuestions = 3;
  userAnswer = '';
  started = false;
  finished = false;
  attemptStage: 0 | 1 | 2 = 0;
  lastWrongOption: string | null = null;
  shuffledOptions: string[] = [];
  selectedOption: string | null = null;
  showFeedback = false;
  inputFeedback: 'correct' | 'wrong' | null = null;
  answeredCorrectlyInText = false;
  wasFuzzy = false;
  streak = 0;

  startQuiz() {
    if (
      !this.totalQuestions ||
      this.totalQuestions < 1 ||
      this.totalQuestions > this.questions.length
    ) {
      alert('Nombre invalide !');
      return;
    }

    this.selectedQuestions = [...this.questions]
      .sort(() => 0.5 - Math.random())
      .slice(0, this.totalQuestions);

    this.started = true;
    this.finished = false;
    this.currentIndex = 0;
    this.score = 0;
    this.userAnswer = '';
    this.attemptStage = 0;
    this.lastWrongOption = null;
    this.showFeedback = false;
    this.shuffledOptions = [];
    this.selectedOption = null;
    this.inputFeedback = null;
    this.wasFuzzy = false;
    this.streak = 0;

    setTimeout(() => this.focusInput(), 100);
  }

  submitAnswer() {
    if (!this.userAnswer.trim()) return;

    const correct = this.selectedQuestions[this.currentIndex].answer;
    const userNorm = this.userAnswer.toLowerCase().trim();
    const correctNorm = correct.toLowerCase();
    const isExact = userNorm === correctNorm;
    const threshold = Math.min(2, Math.max(1, Math.floor(correctNorm.length / 7)));
    const isFuzzy = !isExact && levenshtein(userNorm, correctNorm) <= threshold;

    if (isExact || isFuzzy) {
      this.inputFeedback = 'correct';
      this.wasFuzzy = isFuzzy;
      this.score += 5;
      this.streak++;
      const qKey = this.selectedQuestions[this.currentIndex].question;
      this.questionMastery[qKey] = (this.questionMastery[qKey] ?? 0) + 1;
      this.saveMastery();
    } else {
      this.inputFeedback = 'wrong';
      this.wasFuzzy = false;
      this.streak = 0;
    }

    this.answerInput?.nativeElement.blur();
  }

  continueAfterFeedback() {
    this.showLastExtraInfo = false;
    this.answeredCorrectlyInText = false;
    this.wasFuzzy = false;
    this.closeWikiPopup();
    if (this.inputFeedback === 'correct') {
      this.userAnswer = '';
      this.inputFeedback = null;
      this.selectedOption = null;
      this.showFeedback = false;
      this.attemptStage = 0;
      this.shuffledOptions = [];
      this.lastWrongOption = null;

      this.currentIndex++;
      if (this.currentIndex < this.selectedQuestions.length) {
        setTimeout(() => this.focusInput(), 50);
      } else {
        this.saveSession();
        this.finished = true;
      }
    } else {
      const qKey = this.selectedQuestions[this.currentIndex].question;
      this.questionMastery[qKey] = 0;
      this.saveMastery();
      this.attemptStage = 1;
      this.showFeedback = false;
      this.selectedOption = null;
      const opts = [...this.selectedQuestions[this.currentIndex].options];
      this.shuffledOptions = opts.sort(() => 0.5 - Math.random());
      this.inputFeedback = null;
      this.userAnswer = '';
    }
  }

  selectOption(option: string) {
    const correct = this.selectedQuestions[this.currentIndex].answer;
    this.selectedOption = option;
    this.showFeedback = true;
    this.answeredCorrectlyInText = false;

    if (option === correct) {
      if (this.attemptStage === 1) this.score += 3;
      else if (this.attemptStage === 2) this.score += 1;
    } else if (this.attemptStage === 1) {
      this.lastWrongOption = option;
    }
  }

  nextQuestionAfterQcm() {
    this.closeWikiPopup();

    const correct = this.selectedQuestions[this.currentIndex].answer;
    const wasCorrect = this.selectedOption === correct;

    if (this.attemptStage === 1 && !wasCorrect) {
      // Passer à 2 choix : retirer la mauvaise réponse choisie + une autre
      this.attemptStage = 2;
      this.showFeedback = false;
      this.selectedOption = null;

      const allOpts = this.selectedQuestions[this.currentIndex].options;
      const remainingWrong = allOpts.filter((o) => o !== correct && o !== this.lastWrongOption);
      const keepWrong = remainingWrong[Math.floor(Math.random() * remainingWrong.length)];
      this.shuffledOptions = [correct, keepWrong].sort(() => 0.5 - Math.random());
    } else {
      // Question suivante
      this.currentIndex++;
      this.attemptStage = 0;
      this.shuffledOptions = [];
      this.selectedOption = null;
      this.showFeedback = false;
      this.userAnswer = '';
      this.answeredCorrectlyInText = false;
      this.lastWrongOption = null;

      if (this.currentIndex < this.selectedQuestions.length) {
        setTimeout(() => this.focusInput(), 50);
      } else {
        this.saveSession();
        this.finished = true;
      }
    }
  }

  focusInput() {
    this.answerInput?.nativeElement.focus();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (!this.started && !this.finished) {
      if (event.key === 'Enter') this.startQuiz();
      return;
    }
    if (this.finished) {
      if (event.key === 'Enter') this.restart();
      return;
    }
    if (this.currentIndex >= this.selectedQuestions.length) return;

    switch (event.key) {
      case 'Enter':
        if (this.inputFeedback) {
          event.preventDefault();
          this.continueAfterFeedback();
        } else if (this.showFeedback) {
          event.preventDefault();
          this.nextQuestionAfterQcm();
        }
        break;

      case '1':
      case '2':
      case '3':
      case '4': {
        if (this.attemptStage > 0 && !this.showFeedback) {
          const idx = parseInt(event.key) - 1;
          if (idx < this.shuffledOptions.length) {
            event.preventDefault();
            this.selectOption(this.shuffledOptions[idx]);
          }
        }
        break;
      }

      case ' ': {
        const active = document.activeElement;
        const isTextInput = active instanceof HTMLInputElement && active.type === 'text';
        if (isTextInput) break;

        if (this.inputFeedback === 'correct' || this.showFeedback) {
          event.preventDefault();
          this.openWikiPopup(this.selectedQuestions[this.currentIndex].answer);
        }
        break;
      }
    }
  }

  restart() {
    this.started = false;
    this.finished = false;
  }
}
