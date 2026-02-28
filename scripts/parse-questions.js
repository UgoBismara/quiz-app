#!/usr/bin/env node
/**
 * parse-questions.js
 * Lit src/app/Questions.txt et génère src/app/questions.data.ts
 *
 * Format du fichier Questions.txt (par ligne de réponse) :
 *   \tRéponse                              ← minimal
 *   \tRéponse\tCatégorie                   ← avec catégorie
 *   \tRéponse\tCatégorie\tDifficulté       ← avec catégorie + difficulté
 *   \tRéponse\tCatégorie\tDifficulté\tFaux1\tFaux2\tFaux3  ← complet
 *
 * Les champs au-delà de la réponse sont optionnels.
 * Pour les options QCM manquantes, le script pioche des distracteurs
 * aléatoires parmi toutes les autres réponses du fichier.
 */

const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '../src/app/Questions.txt');
const OUT = path.join(__dirname, '../src/app/questions.data.ts');

// ─── Transformations connues sur les réponses ─────────────────────────────────
const ANSWER_TRANSFORMS = {
  'Adidas / Puma': 'Adidas et Puma',
  'Adidas / Puma\t': 'Adidas et Puma',
  'Domrémy / Domrémy-la-Pucelle': 'Domrémy-la-Pucelle',
  'Olympe de Gouge': 'Olympe de Gouges',
  Mäneskin: 'Måneskin',
};

function transformAnswer(raw) {
  const trimmed = raw.trim();

  // Transformations explicites
  if (ANSWER_TRANSFORMS[trimmed]) return ANSWER_TRANSFORMS[trimmed];

  // Supprimer le contenu entre parenthèses en fin de réponse
  // Ex: "Dépendantes (Établissement...)"  → "Dépendantes"
  // Ex: "Bayern (Bayerische)"             → "Bayern"
  // Ex: "Liberté (Femme, Vie, Liberté)"  → "Liberté"
  // Mais PAS "Température de (Pierre) Curie" (parenthèse au milieu)
  const trailParen = trimmed.match(/^(.+?)\s+\([^)]+\)\s*$/);
  if (trailParen) {
    const base = trailParen[1].trim();
    // Ne supprimer que si la parenthèse est après le premier mot
    if (!base.includes('(')) return base;
  }

  return trimmed;
}

// ─── Parsing du fichier ───────────────────────────────────────────────────────
const content = fs.readFileSync(SRC, 'utf8');
const lines = content.split('\n');

const entries = []; // { question, answer, category, difficulty, wrongOpts }
let state = 'question';
let currentQ = null;

for (const line of lines) {
  const trimmed = line.trim();

  // Ligne vide → on ignore, sans changer l'état
  if (trimmed === '') continue;

  // En-têtes de section
  if (trimmed.startsWith('LA TABLE DES SAVOIRS')) continue;
  if (trimmed.startsWith('Questions du')) {
    state = 'question';
    currentQ = null;
    continue;
  }

  if (state === 'question') {
    // Longue ligne = question (même heuristic si on est désynchronisé)
    currentQ = trimmed;
    state = 'answer';
  } else {
    // state === 'answer'

    if (trimmed.length > 150) {
      // Texte explicatif trop long pour être une réponse (ex : Épire antique)
      // → on considère que c'est la QUESTION suivante, en écrasant currentQ
      currentQ = trimmed;
      // state reste 'answer' (on attend encore la vraie réponse)
      continue;
    }

    // C'est une réponse
    // La ligne commence soit par \t (tab) soit pas — on parse les champs
    const rawFields = line.startsWith('\t') ? line.substring(1).split('\t') : trimmed.split('\t');

    const answerRaw = rawFields[0];
    const category = rawFields[1] ? rawFields[1].trim() : undefined;
    const difficulty = rawFields[2] ? rawFields[2].trim() : undefined;
    const wrongOpts = rawFields
      .slice(3)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    const answer = transformAnswer(answerRaw);

    if (currentQ && answer) {
      entries.push({ question: currentQ, answer, category, difficulty, wrongOpts });
    }

    currentQ = null;
    state = 'question';
  }
}

console.log(`Parsed ${entries.length} questions.`);

// ─── Génération des distracteurs ─────────────────────────────────────────────
const allAnswers = entries.map((e) => e.answer);

function getDistractors(answer, need = 3) {
  const pool = allAnswers.filter((a) => a !== answer);
  // Fisher-Yates shuffle (sur une copie)
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, need);
}

// ─── Génération du fichier TypeScript ────────────────────────────────────────
function esc(str) {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r/g, '');
}

const out = [];
out.push('// AUTO-GÉNÉRÉ — ne pas modifier directement.');
out.push('// Éditer src/app/Questions.txt puis relancer : npm run parse-questions');
out.push('');
out.push("export type Difficulty = 'facile' | 'moyen' | 'difficile';");
out.push('');
out.push('export interface Question {');
out.push('  question: string;');
out.push('  answer: string;');
out.push('  /** options[0] est toujours la bonne réponse */');
out.push('  options: string[];');
out.push('  category?: string;');
out.push('  difficulty?: Difficulty;');
out.push('}');
out.push('');
out.push('export const QUESTIONS: Question[] = [');

for (const e of entries) {
  // Compléter les options QCM
  const missing = Math.max(0, 3 - e.wrongOpts.length);
  const fillers = missing > 0 ? getDistractors(e.answer, missing) : [];
  const wrongAll = [...e.wrongOpts, ...fillers].slice(0, 3);
  const options = [e.answer, ...wrongAll];

  out.push('  {');
  out.push(`    question: '${esc(e.question)}',`);
  out.push(`    answer: '${esc(e.answer)}',`);
  out.push(`    options: [${options.map((o) => `'${esc(o)}'`).join(', ')}],`);
  if (e.category) out.push(`    category: '${esc(e.category)}',`);
  if (e.difficulty) out.push(`    difficulty: '${esc(e.difficulty)}',`);
  out.push('  },');
}

out.push('];');
out.push('');

fs.writeFileSync(OUT, out.join('\n'), 'utf8');
console.log(`✓ Fichier généré : src/app/questions.test.data.ts (${entries.length} questions)`);
