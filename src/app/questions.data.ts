// AUTO-GÉNÉRÉ — ne pas modifier directement.
// Éditer src/app/Questions.txt puis relancer : npm run parse-questions

export type Theme =
  | 'Musique'
  | 'Sport'
  | 'Culture Générale'
  | 'Cinéma'
  | 'Histoire'
  | 'Géographie'
  | 'Littérature'
  | 'Sciences'
  | 'Jeux Vidéo'
  | 'Séries TV'
  | 'Cuisine'
  | 'Animaux'
  | 'Art'
  | 'Politique'
  | 'Autres';

export interface Question {
  question: string;
  answer: string;
  options: string[];
  theme?: Theme;
}

export const QUESTIONS: Question[] = [
  {
    theme: 'Musique',
    question:
      'Quel pianiste chinois né en 1982, parfois surnommé "La rockstar du classique", porte un nom rappelant deux fois l’organe charnu situé dans la bouche ?',
    answer: 'Lang Lang',
    options: ['Lang Lang', 'Yuja Wang', 'Yundi Li', 'Khatia Buniatishvili'],
  },
  {
    theme: 'Sport',
    question:
      'Quel nom utilise-t-on au bowling lorsque l’on fait tomber les dix quilles en deux lancers ?',
    answer: 'Spare',
    options: ['Spare', 'Strike', 'Split', 'Turkey'],
  },
  {
    theme: 'Sciences',
    question:
      "Quelle pâtisserie donne son nom à un petit fichier déposé sur le disque dur à l'insu de l'internaute lors de la consultation de certains sites web ?",
    answer: 'Cookie',
    options: ['Cookie', 'Macaron', 'Biscuit', 'Brownie'],
  },
  {
    theme: 'Cinéma',
    question:
      'À quel réalisateur japonais doit-on les films "Rashōmon" (1950) et "Les Sept Samouraïs" (1954) ?',
    answer: 'Akira Kurosawa',
    options: ['Akira Kurosawa', 'Yasujirō Ozu', 'Kenji Mizoguchi', 'Hayao Miyazaki'],
  },
  {
    theme: 'Histoire',
    question:
      'Quel président des États-Unis a présenté en janvier 1918 son programme des Quatorze Points ? Les initiales de son prénom et de son nom sont identiques.',
    answer: 'Woodrow Wilson',
    options: ['Woodrow Wilson', 'Warren G. Harding', 'William Howard Taft', 'Theodore Roosevelt'],
  },
  {
    theme: 'Sciences',
    question:
      'Quel adjectif qualifie la maladie auto-immune appelée entéropathie au gluten, dite "maladie _______" ?',
    answer: 'Coeliaque',
    options: ['Coeliaque', 'Chronique', 'Hépatique', 'Lactique'],
  },
  {
    theme: 'Géographie',
    question:
      'Quelle ville française abrite la Place de Jaude, où se trouve une statue de Vercingétorix réalisée par Auguste Bartholdi ?',
    answer: 'Clermont-Ferrand',
    options: ['Clermont-Ferrand', 'Limoges', 'Dijon', 'Orléans'],
  },
  {
    theme: 'Musique',
    question:
      'À quel groupe italien doit-on les titres "I Wanna Be Your Slave" et "The Loneliest", après leur victoire à l’Eurovision 2021 ?',
    answer: 'Måneskin',
    options: ['Måneskin', 'Subsonica', 'Il Volo', 'Negramaro'],
  },
  {
    theme: 'Cuisine',
    question:
      'Avec quelle plante, appelée aussi Herbe du Saint-Esprit, les religieuses de Niort ont-elles créé une confiserie typique portant le même nom ?',
    answer: 'Angélique',
    options: ['Angélique', 'Réglisse', 'Verveine', 'Gentiane'],
  },
  {
    theme: 'Culture Générale',
    question: 'Dans l’acronyme EHPAD, quel mot est représenté par la lettre D ?',
    answer: 'Dépendantes',
    options: ['Dépendantes', 'Durables', 'Déclarées', 'Domestiques'],
  },
  {
    theme: 'Séries TV',
    question: 'Dans le manga "Haikyū!!", quel sport est au centre de l’intrigue ?',
    answer: 'Volleyball',
    options: ['Volleyball', 'Basketball', 'Baseball', 'Handball'],
  },
  {
    theme: 'Sport',
    question:
      'Quelle sportive française, championne du monde sur route en 2014 et championne olympique de VTT en 2024, a remporté le Tour de France féminin en 2025 ?',
    answer: 'Pauline Ferrand-Prévot',
    options: ['Pauline Ferrand-Prévot', 'Marion Rousse', 'Jeannie Longo', 'Juliette Labous'],
  },
  {
    theme: 'Jeux Vidéo',
    question:
      'Quelle société japonaise, à l’origine du jeu Gradius, a donné son nom au célèbre premier code de triche de l’histoire ?',
    answer: 'Konami',
    options: ['Konami', 'Capcom', 'Nintendo', 'Sega'],
  },
  {
    theme: 'Cinéma',
    question:
      "Quel acteur français s'est éteint dans son domaine de Douchy-Montcorbon, dans le Loiret ?",
    answer: 'Alain Delon',
    options: ['Alain Delon', 'Jean-Paul Belmondo', 'Gérard Depardieu', 'Jean Dujardin'],
  },
  {
    theme: 'Histoire',
    question:
      'Sous quel nom de famille commun sont connus les frères hors-la-loi impliqués dans le braquage de Coffeyville en 1892 ?',
    answer: 'Dalton',
    options: ['Dalton', 'James', 'Younger', 'Earp'],
  },
  {
    theme: 'Animaux',
    question: 'De quelle espèce animale Jane Goodall était-elle spécialiste ?',
    answer: 'Chimpanzés',
    options: ['Chimpanzés', 'Gorilles', 'Orangs-outans', 'Babouins'],
  },
  {
    theme: 'Géographie',
    question:
      'Quel est le nom actuel de la place parisienne anciennement appelée place Louis XV et place de la Révolution ?',
    answer: 'Place de la Concorde',
    options: ['Place de la Concorde', 'Place Vendôme', 'Place de la Bastille', 'Place des Vosges'],
  },
  {
    theme: 'Musique',
    question:
      'Quelle chanson d’Elvis Crespo, immense succès de 1998, a vu son titre repris par Soolking en 2022 ?',
    answer: 'Suavemente',
    options: ['Suavemente', 'Bailando', 'Despacito', 'Vivir Mi Vida'],
  },
  {
    theme: 'Animaux',
    question: 'Quelle couleur est associée au thon albacore ?',
    answer: 'Jaune',
    options: ['Jaune', 'Bleu', 'Rouge', 'Argenté'],
  },
  {
    theme: 'Cinéma',
    question: "Quelle marque est au centre du film 'Le Fondateur', consacré à Ray Kroc ?",
    answer: 'McDonald’s',
    options: ['McDonald’s', 'KFC', 'Burger King', 'Subway'],
  },
  {
    theme: 'Littérature',
    question: 'Quelle année constitue le titre du célèbre roman dystopique de George Orwell ?',
    answer: '1984',
    options: ['1984', 'Fahrenheit 451', 'Le Meilleur des mondes', 'La Ferme des animaux'],
  },
  {
    theme: 'Sport',
    question:
      'Quel super-héros constitue le surnom d’Alain Robert, célèbre pour ses ascensions d’immeubles à mains nues ?',
    answer: 'Spider-Man',
    options: ['Spider-Man', 'Batman', 'Superman', 'Iron Man'],
  },
  {
    theme: 'Jeux Vidéo',
    question: 'Que signifie le sigle FPS dans le domaine du jeu vidéo ?',
    answer: 'First-Person Shooter',
    options: [
      'First-Person Shooter',
      'Fast Play System',
      'Full Power Strategy',
      'Final Player Score',
    ],
  },
  {
    theme: 'Cinéma',
    question:
      "Quel humoriste français, de son vrai nom Solaro, a réalisé le film 'Un p’tit truc en plus' ?",
    answer: 'Artus',
    options: ['Artus', 'Kev Adams', 'Jamel Debbouze', 'Franck Dubosc'],
  },
  {
    theme: 'Politique',
    question: 'Quel est le seul président de la Ve République ayant également été maire de Paris ?',
    answer: 'Jacques Chirac',
    options: [
      'Jacques Chirac',
      'Valéry Giscard d’Estaing',
      'François Mitterrand',
      'Nicolas Sarkozy',
    ],
  },
  {
    theme: 'Sciences',
    question: 'Quel minéral fibreux est responsable de la maladie appelée asbestose ?',
    answer: 'Amiante',
    options: ['Amiante', 'Silice', 'Quartz', 'Gypse'],
  },
  {
    theme: 'Géographie',
    question:
      'Quelle montagne, également appelée Qogir Feng, est le deuxième plus haut sommet du monde (8611 m) ?',
    answer: 'K2',
    options: ['K2', 'Kangchenjunga', 'Lhotse', 'Makalu'],
  },
  {
    theme: 'Musique',
    question:
      'De quel genre musical portugais Amália Rodrigues est-elle considérée comme la reine ? Ce genre est homophone de deux notes de musique.',
    answer: 'Fado',
    options: ['Fado', 'Flamenco', 'Tango', 'Rebetiko'],
  },
  {
    theme: 'Animaux',
    question:
      'Quel chien blanc tacheté de noir, mascotte des pompiers aux États-Unis, doit son nom à une région historique de Croatie ?',
    answer: 'Dalmatien',
    options: ['Dalmatien', 'Beagle', 'Setter anglais', 'Border Collie'],
  },
  {
    theme: 'Sciences',
    question:
      'Quel terme anglais désigne à la fois l’habitacle d’un kayak et la cabine de pilotage d’un avion ?',
    answer: 'Cockpit',
    options: ['Cockpit', 'Fuselage', 'Carlingue', 'Empennage'],
  },
  {
    theme: 'Histoire',
    question:
      'Sur quelle île grecque Charles Champoiseau a-t-il découvert en 1863 la célèbre statue envoyée au Louvre en 1867 ?',
    answer: 'Samothrace',
    options: ['Samothrace', 'Délos', 'Rhodes', 'Lesbos'],
  },
  {
    theme: 'Sport',
    question:
      'Dans quelle ville anglaise William Webb Ellis était-il élève lorsqu’il aurait inventé le rugby en 1823 ?',
    answer: 'Rugby',
    options: ['Rugby', 'Oxford', 'Cambridge', 'Manchester'],
  },
  {
    theme: 'Jeux Vidéo',
    question:
      'Quel jeu vidéo d’Innersloth met en scène des membres d’équipage devant démasquer des imposteurs à bord d’un vaisseau spatial ?',
    answer: 'Among Us',
    options: ['Among Us', 'Fall Guys', 'Stardew Valley', 'Subnautica'],
  },
  {
    theme: 'Séries TV',
    question:
      'De quelle série franco-belge la série américaine "High Potential" est-elle un remake ?',
    answer: 'HPI',
    options: ['HPI', 'Engrenages', 'Profilage', 'Candice Renoir'],
  },
  {
    theme: 'Histoire',
    question: 'Dans quel village des Vosges Jeanne d’Arc est-elle née vers 1412 ?',
    answer: 'Domrémy-la-Pucelle',
    options: ['Domrémy-la-Pucelle', 'Vaucouleurs', 'Chinon', 'Compiègne'],
  },
  {
    theme: 'Sciences',
    question:
      'Sur quelle mer lunaire le module Eagle d’Apollo 11 a-t-il aluni le 20 juillet 1969 ?',
    answer: 'Mer de la Tranquillité',
    options: ['Mer de la Tranquillité', 'Mer des Pluies', 'Mer de la Sérénité', 'Mer du Nectar'],
  },
  {
    theme: 'Géographie',
    question: 'Quelle grande ville d’Australie-Occidentale est traversée par la rivière Swan ?',
    answer: 'Perth',
    options: ['Perth', 'Adélaïde', 'Brisbane', 'Darwin'],
  },
  {
    theme: 'Musique',
    question:
      'De quel compositeur Ludwig von Köchel a-t-il établi le catalogue thématique en 1862 ?',
    answer: 'Mozart',
    options: ['Mozart', 'Haydn', 'Beethoven', 'Schubert'],
  },
  {
    theme: 'Animaux',
    question:
      'Quelle race de chien sibérienne est connue pour son pelage blanc dense et son "sourire" naturel ?',
    answer: 'Samoyède',
    options: ['Samoyède', 'Husky sibérien', 'Akita inu', 'Chow-chow'],
  },
  {
    theme: 'Art',
    question:
      'Quel artiste français réalise depuis 1996 des mosaïques urbaines inspirées d’un jeu vidéo de 1978 ?',
    answer: 'Invader',
    options: ['Invader', 'JR', 'Banksy', 'Shepard Fairey'],
  },
  {
    theme: 'Art',
    question:
      'Quel sculpteur français, de son vrai nom Baldaccini, a donné son nom à la célèbre cérémonie de récompenses du cinéma créée en 1976 ?',
    answer: 'César',
    options: ['César', 'Rodin', 'Maillol', 'Bourdelle'],
  },
  /*ICI*/
  {
    question:
      'Dans quelle variante du billard se jouant à deux ou en équipes de deux sur une grande table et 22 billes, le chinois Zhao Xintong est-il devenu en 2025 le premier asiatique ainsi que le premier amateur à remporter le championnat du monde ?',
    answer: 'Snooker',
    options: ['Snooker', 'Baguette de pain', 'Vitamine D', 'Death Row Records'],
  },
  {
    question:
      'Quelle déesse présente dans une mythologie a laissé son nom à la jument, monture de Link, dans la série de jeux-vidéos The Legend of Zelda ?',
    answer: 'Epona',
    options: ['Epona', 'Led Zeppelin', 'Fromage', 'Bad Bunny'],
  },
  {
    question:
      'De quelle série diffusée sur Netflix et créée par Álex Pina la chanson "My Life Is Going On" de la chanteuse Cecilia Krull est-elle la chanson du thème ?',
    answer: 'La Casa de Papel',
    options: ['La Casa de Papel', 'Truffe', 'One Direction', 'Invader'],
  },
  {
    question:
      'Quelle révolutionnaire montalbanaise, née Marie Gouze, réclame l\'émancipation des femmes par sa rédaction de sa "Déclaration des droits de la femme et de la citoyenne ?',
    answer: 'Olympe de Gouges',
    options: ['Olympe de Gouges', 'K2', 'Saint-Dié-des-Vosges', 'Adolescence'],
  },
  {
    question:
      'Par quelle locution est également désigné le nævus mélanocytaire, souvent présent sur le corps humain ?',
    answer: 'Grain de beauté',
    options: ['Grain de beauté', 'Pétrole', 'Tibo InShape', 'Auguste'],
  },
  {
    question:
      "Quel pays asiatique est composé de trois zones principales : Mindanao au sud et ses 24 millions d'habitants, l'archipel des Visayas au centre et l'île de Luçon et ses 62 millions d'habitants au nord ?",
    answer: 'Philippines',
    options: ['Philippines', 'Bojack Horseman', 'Johnny Cash', 'Rickshaw'],
  },
  {
    question:
      'À quel compositeur français du XVIIe siècle doit-on le célèbre "Te Deum" qui sert désormais de thème au Concours Eurovision de la chanson ? Son nom est également celui d\'un métier.',
    answer: 'Marc-Antoine Charpentier',
    options: ['Marc-Antoine Charpentier', 'Figaro', 'Måneskin', 'Mozart'],
  },
  {
    question:
      "Quel nom porte la larve des lépidoptères ? Cet ordre animal possède un imago (un stade final d'évolution) bien connu également.",
    answer: 'Chenille',
    options: ['Chenille', 'Tokyo Drift', 'Konami', 'Doechii'],
  },
  {
    question:
      'Ayant pour exemple célèbre la phrase "Portez ce vieux whisky au juge blond qui fume", quel nom porte une phrase contenant toutes les lettres de l’alphabet ? Son nom est dérivé du grec signifiant littéralement "toutes les lettres".',
    answer: 'Pangramme',
    options: ['Pangramme', 'Atèle', 'Nouvelle Ecole', 'Aladdin'],
  },
  {
    question:
      'Dans quelle salle les apôtres et Jésus-Christ se sont-ils réunis pour le dernier repas du Messie, la Cène ?',
    answer: 'Cénacle',
    options: ['Cénacle', 'Phare de Cordouan', 'Taureau', 'ScoobyDoo'],
  },
  {
    question:
      "Quel golfeur étasunien né en 1975, vainqueur des Masters en 1997, moins d'un an après être devenu professionnel, possède l'un des plus grands palmarès de l'histoire de son sport ? En 2019, à l'âge de 43 ans, il remporte de nouveau les Masters, onze ans après son dernier titre majeur.",
    answer: 'Tiger Woods',
    options: ['Tiger Woods', 'Pauline Ferrand-Prévot', 'Polyphème', 'Bus'],
  },
  {
    question:
      'Quel nom porte la marque de kombucha créée par Squeezie, et ayant contribué à la popularité de la boisson en France ?',
    answer: 'Ciao Kombucha',
    options: ['Ciao Kombucha', 'Microsoft', 'Jean-Claude Killy', 'Johnny Cash'],
  },
  {
    question:
      'Quel animateur de télévision dont le nom de famille est Fam, présente "N’oubliez pas les paroles" depuis 2007 ? Il est connu par son simple prénom.',
    answer: 'Nagui',
    options: ['Nagui', 'Dépendantes', 'Georges Méliès', 'Sarajevo'],
  },
  {
    question:
      'En dehors de Grover Cleveland, quel est le seul président des Etats-Unis élu pour deux mandats non consécutifs ? Grover Cleveland était à la fois le 22e et le 24e président des USA, de 1885 à 1889 puis de 1893 à 1897.',
    answer: 'Donald Trump',
    options: ['Donald Trump', 'Gotaga', 'Trottoir', 'Bichon'],
  },
  {
    question:
      'Quel minéral ayant pour numéro atomique le 11 est représenté par les lettres Na du fait de son ancienne appellation de natrium ? On retrouve par exemple cet élément dans le sel de table, dont la formule chimique est NaCl.',
    answer: 'Sodium',
    options: ['Sodium', 'Los Angeles', 'Saké', 'Jaipur'],
  },
  {
    question:
      "Quel nom français est également donné à la ville indienne de Varanasi ? Cette ville de l'Uttar Pradesh est la plus sacrée dans l'hindouisme et le jaïnisme et est située sur les bords du fleuve Gange.",
    answer: 'Bénarès',
    options: ['Bénarès', 'World of Warcraft', 'Blanc', 'Beowulf'],
  },
  {
    question:
      'Quel rappeur français issu de la Sexion d\'Assaut a notamment sorti l\'album "Les Yeux plus gros que le monde" en 2014 sur lequel figurent les titres "Je ne dirai rien", "Mme Pavoshko" et "Sur ma route" ?',
    answer: 'Black M',
    options: ['Black M', 'Avion', 'Melodica', 'Oesophage'],
  },
  {
    question:
      'Quel oiseau a laissé son nom à la politique consistant à ne pas voir la réalité en face du fait de son habitude à mettre sa tête sous terre ?',
    answer: 'Autruche',
    options: ['Autruche', 'Beyoncé', 'Ibra', 'Arabie Saoudite'],
  },
  {
    question:
      "Quel journal fondé en 1826 et fêtant donc son bicentenaire cette année fut créé par le chansonnier Maurice Alhoy et l'homme politique Etienne Arago ? Il tient son nom d'un personnage de Beaumarchais.",
    answer: 'Figaro',
    options: ['Figaro', 'Aladdin', 'Artus', 'Pyrénées-Atlantiques'],
  },
  {
    question:
      'Quels petits personnages bleus créés par Peyo ont pour ennemi le chat Azraël et le sorcier Gargamel ?',
    answer: 'Les Schtroumpfs',
    options: ['Les Schtroumpfs', 'T', 'Kirigami', 'Susan Boyle'],
  },
  {
    question:
      'Quel sport se pratique sur un cercle de bottes de paille de riz de 4,55 mètres de diamètre appelé dohyō ?',
    answer: 'Sumo',
    options: ['Sumo', 'Andy Jassy', 'Kevlar', 'Brésil'],
  },
  {
    question:
      'Quelle émission présentée sur Twitch par Domingo mensuellement après avoir existé hebdomadairement entre 2019 et 2024 se présente sous forme de talk-show et évoque par son nom une céréale soufflée ?',
    answer: 'Popcorn',
    options: ['Popcorn', 'Carlito', 'Kitty', 'Ibra'],
  },
  {
    question:
      'À qui doit-on la réalisation du film "Le Voyage dans la Lune" en 1902 ? Ce film muet d\'un réalisateur français est considéré comme étant le tout premier film de science-fiction de l\'Histoire.',
    answer: 'Georges Méliès',
    options: ['Georges Méliès', 'Coeliaque', 'Philippines', 'Dog-sitter'],
  },
  {
    question:
      "Dans quelle ville eut lieu l'assassinat de Sophie Chotek et son époux l'archiduc François-Ferdinand, le 28 juin 1914, et ayant été l'un des éléments déclencheurs de la Première Guerre mondiale ?",
    answer: 'Sarajevo',
    options: ['Sarajevo', 'Ham', 'Bataille d’Iéna', 'Philippines'],
  },
  {
    question: 'De quelle pierre précieuse la nuance exacte de vert est-elle dite smaragdine ?',
    answer: 'Emeraude',
    options: ['Emeraude', 'Tiger Woods', 'Dalmatien', 'Woodrow Wilson'],
  },
  {
    question:
      'Quel état des Etats-Unis est, avec 1,723 million de kilomètres carrés, le plus grand en superficie ?',
    answer: 'Alaska',
    options: ['Alaska', 'One Direction', 'Geta', 'Verbatim'],
  },
  {
    question:
      'En 1972, dans quelle ville de Californie se situe la maison bleue que Maxime Le Forestier décrit comme adossée à la colline dans un de ses titres les plus célèbres ?',
    answer: 'San Francisco',
    options: ['San Francisco', 'The Shining', 'Atèle', 'Fromage'],
  },
  {
    question:
      'Quelle variété de pêche dont le noyau n’adhère pas à la chair se distingue par cette caractéristique du brugnon ?',
    answer: 'Nectarine',
    options: ['Nectarine', 'Nantes', 'Pyrénées-Atlantiques', 'Dalmatien'],
  },
  {
    question:
      'Dans la cuisine indienne, de quelle forme sont les beignets farcis de légumes ou de viande appelés samoussas ou samossas ?',
    answer: 'Triangulaire',
    options: ['Triangulaire', 'Streaker', 'Lassie', 'Chameau'],
  },
  {
    question:
      'Quel écrivain né à Prague et donc de nationalité autrichienne puis tchécoslovaque à la fin de sa vie est dit "sur le rivage" dans un roman d\'Haruki Murakami publié en 2002 ?',
    answer: 'Kafka',
    options: ['Kafka', 'TrackMania', 'Marc-Antoine Charpentier', 'Daniel Balavoine'],
  },
  {
    question:
      'Surnommé "Big Bill", dans QUEL SPORT Bill Tilden détient-il, avec 138 titres en simple, le meilleur palmarès de l\'ère pré-Open, c\'est-à-dire avant 1968 ?',
    answer: 'Tennis',
    options: ['Tennis', 'Globe Trotter', 'Chimpanzés', 'Roberto Heras'],
  },
  {
    question:
      'Quelle série de jeux vidéo de course développée par Nadeo sur laquelle le canadien Carl Jr. est plusieurs fois champion du monde a pour but de conduire des voitures et se concentre sur les capacités de pilotage du joueur ?',
    answer: 'TrackMania',
    options: ['TrackMania', 'Konami', 'Akhénaton', 'Dalton'],
  },
  {
    question:
      'De quel dessin animé créé par Iwao Takamoto est dérivée la série "Velma", appelée "Véra" en français ? Ce personnage fait partie d\'une bande de cinq, créée par la société de production Hanna-Barbera en 1969. On cherche le nom du personnage principal de la série originelle, qui a laissé son nom à la série.',
    answer: 'ScoobyDoo',
    options: ['ScoobyDoo', 'Guerre de Sécession', 'Figaro', 'Nectarine'],
  },
  {
    question:
      'Ayant inspiré le nom d\'un groupe avec notamment pour membres Foda C et Lujipeka, dans quel lycée de Littleton eut lieu, le 20 avril 1999, une tuerie par deux élèves, Eric Harris et Dylan Klebold ? Cette tragédie ayant vu la mort de 14 élèves et professeurs a également inspiré le film "Elephant" de Gus Van Sant.',
    answer: 'Columbine',
    options: ['Columbine', 'Daniel Balavoine', 'Pompon', 'Omega'],
  },
  {
    question:
      "En anatomie, quel adjectif qualifie les côtes n'étant pas rattachées au sternum ? Ce sont les deux paires de côtes les plus basses et elles doivent leur nom à cette particularité.",
    answer: 'Flottantes',
    options: ['Flottantes', 'Bâtonnier', 'Cerveau', 'Motus'],
  },
  {
    question:
      "Quel pays a changé de monnaie en 2026 pour adopter l'euro ? Sous la présidence d'Iliana Iotova, le pays a abandonné le lev, qui était son ancienne monnaie.",
    answer: 'Bulgarie',
    options: ['Bulgarie', 'Sauce Aurore', 'Hêtre', 'Omega'],
  },
  {
    question:
      "Ayant pourtant perdu en finale de Britain's Got Talent en 2009, quelle chanteuse née en Ecosse s'est fait connaître avec sa reprise du titre \"I Dreamed a Dream\", tiré de la comédie musicale Les Misérables ? En quelques jours, sa prestation a été vue plus de 100 millions de fois sur internet, des chiffres qui étaient pour l'époque d'une extrême rareté.",
    answer: 'Susan Boyle',
    options: ['Susan Boyle', 'Claude Monet', 'Nolwenn Leroy', 'Nord'],
  },
  {
    question:
      'Quel arbre de la famille des bignoniacées, également dénommé arbre-fougère ou flamboyant bleu, a laissé son nom au titre d’un roman de Gaël Faye ayant obtenu le prix Renaudot en 2024 ? Son nom contient quatre fois la même voyelle.',
    answer: 'Jacaranda',
    options: ['Jacaranda', 'Mozart', 'Lapin', 'Sodium'],
  },
  {
    question:
      "Sous quel nom de quatre lettres est généralement désigné l'alcool de riz japonais, produit par fermentation et titrant de 11 à 20° ?",
    answer: 'Saké',
    options: ['Saké', 'Darwin', 'Russe', 'Game of Thrones'],
  },
  {
    question:
      "Quel sculpteur animalier français, né en 1855 à Saulieu, est célèbre notamment pour sa réalisation d'un \"Ours blanc\", dont l'un des exemplaires est présent au musée d'Orsay ? Son nom est constitué d'une syllabe redoublée.",
    answer: 'Pompon',
    options: ['Pompon', 'V', 'Molosses', 'Led Zeppelin'],
  },
  {
    question:
      'Avec qui est en couple Travis Kelce, sportif étasunien évoluant au poste de tight end en National Football League depuis 2013 ? Ce pratiquant de football américain, évoluant aux Kansas City Chiefs, est né la même année que sa compagne, en 1989.',
    answer: 'Taylor Swift',
    options: ['Taylor Swift', 'Bus', 'Ernst Gräfenberg', 'Polyphème'],
  },
  {
    question:
      "De quel pays est originaire la chaîne YouTube T-Series s'étant fait connaître lorsqu'elle a dépassé le youtubeur PewDiePie en nombre d'abonnés sur YouTube ? T-Series a été la première chaîne YouTube a dépassé les 100 millions d'abonnés et en compte actuellement plus de 309 millions.",
    answer: 'Inde',
    options: ['Inde', 'Catwoman', 'Troie', 'Gardon'],
  },
  {
    question:
      'Ayant pour juges lors de la saison 5 SDM, Oli et Théodora, quel télé crochet diffusé sur Netflix consiste en un concours entre différents rappeurs, ayant vu la victoire de Fresha la Peufra ou Youssef Swatt\'s notamment est adapté du programme étasunien "Rhythm + Flow". La réponse attendue est constituée de deux mots français.',
    answer: 'Nouvelle Ecole',
    options: ['Nouvelle Ecole', 'Skyrim', 'Sodium', 'Ayrton Senna'],
  },
  {
    question:
      "Dans quelle ville le surintendant des finances Nicolas Fouquet a-t-il été arrêté par d'Artagnan en 1661 ? Cette ville est le chef-lieu d'un département de l'Ouest de la France.",
    answer: 'Nantes',
    options: ['Nantes', 'Chaebol', 'Température de (Pierre) Curie', 'Figaro'],
  },
  {
    question:
      'Quel adjectif tiré des mots latins signifiant "autour" et "jour" qualifie le rythme biologique dont la période est proche de 24 heures ? Ce terme a été inventé par le chronobiologiste roumain Franz Halberg.',
    answer: 'Circadien',
    options: ['Circadien', 'Sarajevo', 'HPI', 'Canberra'],
  },
  {
    question:
      "Quel département français, situé en France métropolitaine, est le plus peuplé ? Sa population, toujours en augmentation, est de plus de 2,6 millions d'habitants.",
    answer: 'Nord',
    options: ['Nord', 'Le Chanteur de Jazz', 'Magnum', 'Kévin'],
  },
  {
    question:
      "Quel mythique groupe de rock a eu pour membres le bassiste John Paul Jones, le batteur John Bonham, le guitariste Jimmy Page et le chanteur Robert Plant ? Le groupe a été actif de 1968 à 1980 et la mort de John Bonham et s'est réuni à quelques reprises depuis.",
    answer: 'Led Zeppelin',
    options: ['Led Zeppelin', 'Scroller', 'Perth', 'Licteur'],
  },
  {
    question:
      'Quel adjectif de nationalité est associé au terme de lévrier dans l’autre nom du chien appelé Barzoï ?',
    answer: 'Russe',
    options: ['Russe', 'Usain Bolt', 'Clash', 'Tuffeau'],
  },
  {
    question:
      "À quel aliment se rapporte l'adjectif caséeux ? Le mot dérive du latin caseus qui désigne cet aliment.",
    answer: 'Fromage',
    options: ['Fromage', 'Mont Fujiyama', 'One Direction', 'Game of Thrones'],
  },
  {
    question:
      'Quel dramaturge d’origine roumaine a écrit Les Chaises en 1952 ? On lui doit également La Cantatrice chauve ainsi que Rhinocéros, deux de ses pièces les plus connues.',
    answer: 'Ionesco',
    options: ['Ionesco', 'Forficule', 'Sulky', 'Patrick Battiston'],
  },
  {
    question:
      'Quel discipline du sport est associée à Jérémy Florès ainsi qu’au très célèbre Kelly Slater ?',
    answer: 'Surf',
    options: ['Surf', 'Judo', 'Baleine', 'Magnum'],
  },
  {
    question:
      "Quel vidéaste possède, depuis le 26 mai 2024, le plus d'abonnés sur YouTube en France ? Il a dépassé le nombre d'abonnés de Squeezie et compte actuellement plus de 26 millions de personnes le suivant sur sa chaîne YouTube.",
    answer: 'Tibo InShape',
    options: ['Tibo InShape', 'Akira Kurosawa', 'Paul Verlaine', 'Fromage'],
  },
  {
    question:
      'Quel groupe ayant interprété le générique de la série télévisée "Friends" fait référence par son nom à un grand peintre hollandais du XVIIe siècle ?',
    answer: 'Rembrandt',
    options: ['Rembrandt', 'Staccato', 'Truffe', 'Cônes'],
  },
  {
    question:
      "Quel roi de France a le deuxième règne le plus long de l'Histoire ? Louis XIV possède le record avec 72 ans et celui-ci a un règne de près de 59 ans. (La réponse est attendue doit être au format Prénom + Numéro)",
    answer: 'Louis XV',
    options: ['Louis XV', 'Ombrelle', 'Tachkent', 'Dormeur'],
  },
  {
    question:
      "Chez l'homme, quel doigt de la main tire son nom de son utilisation à montrer ou désigner des choses ?",
    answer: 'Index',
    options: ['Index', 'Pastèque', 'Saint-Dié-des-Vosges', 'Staccato'],
  },
  {
    question:
      'Dans quel pays se situe le parc floral de Keukenhof ? Il est célèbre pour la production d’une fleur qui fait la renommée du pays tout entier.',
    answer: 'Pays-Bas',
    options: ['Pays-Bas', 'Usain Bolt', 'X', 'Lump'],
  },
  {
    question:
      'Quel chanteur mort en mars 1978 était le propriétaire du moulin de Dannemois, il a été retrouvé mort alors qu’il était censé se rendre à une émission de Michel Drucker ? Ce chanteur était également connu pour sa vie tourmentée et ses goûts très problématiques pour les très jeunes filles.',
    answer: 'Claude François',
    options: ['Claude François', 'Cap Nord', 'Tokyo Drift', 'Doechii'],
  },
  {
    question:
      'Par quel nom plus commun étant également un couvert de table est aussi désigné le coquillage du genre solen ?',
    answer: 'Couteau',
    options: ['Couteau', 'Venus', 'Gmail', 'Led Zeppelin'],
  },
  {
    question:
      'Quel nom argotique désignant les croûtes de pizza est aussi le côté de la route où circulent les piétons ?',
    answer: 'Trottoir',
    options: ['Trottoir', 'Chirac', 'Kevlar', 'Epona'],
  },
  {
    question:
      'Dans la mythologie grecque, quelle amante de Narcisse a été condamnée à répéter les derniers mots ? Elle a laissé son nom à un effet acoustique.',
    answer: 'Echo',
    options: ['Echo', 'Figaro', 'Mickey Mouse', 'Ponte'],
  },
  {
    question:
      "Dans quel sport collectif l'équipe de France a-t-elle été successivement surnommée les Bronzés, les Barjots, les Costauds et les Experts ?",
    answer: 'Handball',
    options: ['Handball', 'Baguette de pain', 'Cristiano Ronaldo', 'Dog-sitter'],
  },
  {
    question:
      'Quel terme emprunté au domaine de la peinture et des arts plastiques désigne le jeu vidéo développé par Sandfall Interactive sous-titré "Expedition 33" et ayant obtenu le titre de Game of the Year 2025 ?',
    answer: 'Clair Obscur',
    options: ['Clair Obscur', 'Roberto Heras', 'Tuffeau', 'Taureau'],
  },
  {
    question:
      "Quel prénom porte l'ange gardien incarné par Mimie Mathy dans une série télévisée depuis 1997 ?",
    answer: 'Joséphine',
    options: ['Joséphine', 'Fado', 'Martin Fourcade', 'Seahawks'],
  },
  {
    question:
      "Quel chef d'état surnommé le \"Duce\" a dirigé l'Italie de 1922 jusqu'à la Seconde Guerre mondiale ? Il est à l'origine de la création du fascisme.",
    answer: 'Benito Mussolini',
    options: ['Benito Mussolini', 'Tennis', '1984', 'Amber Heard'],
  },
  {
    question: 'Quelle partie du corps humain souffre en cas de céphalée ?',
    answer: 'Cerveau',
    options: ['Cerveau', 'Taylor Swift', 'Température de (Pierre) Curie', 'Carlito'],
  },
  {
    question:
      "Quel doyen des phares français, mis en service en 1611, situé au large de l'estuaire de la Gironde est, avec ses 67 mètres de haut, parfois surnommé le roi des phares ?",
    answer: 'Phare de Cordouan',
    options: ['Phare de Cordouan', 'Death Row Records', 'Claude Monet', 'Marathon'],
  },
  {
    question:
      'Quel duo français de musique, actif entre 1993 et 2021 était composé de Thomas Bangalter et Guy-Manuel de Homem-Christo ?',
    answer: 'Daft Punk',
    options: ['Daft Punk', 'Lee Miller', '28', 'Les Voyages de Gulliver'],
  },
  {
    question:
      'À quel poisson de nom scientifique "rutilus rutilus" associe-t-on quelqu’un de frais dans une expression ?',
    answer: 'Gardon',
    options: ['Gardon', 'Woodrow Wilson', 'Etrier', 'Ibra'],
  },
  {
    question:
      'Quel nom désigne un mot comme "KAYAK" ou la phrase "ENGAGE LE JEU QUE JE LE GAGNE", qui peut se lire dans les deux sens ? Le nom est issu du grec signifiant "qui court en arrière".',
    answer: 'Palindrome',
    options: ['Palindrome', 'Europe', 'Licteur', 'Russe'],
  },
  {
    question:
      'Quel grand écrivain français est mort en 1885 dans une avenue qui portait son nom depuis 1881 ? Près de trois millions de personnes ont assisté à ses funérailles.',
    answer: 'Victor Hugo',
    options: ['Victor Hugo', 'Nagui', 'The Voice', 'The Witcher'],
  },
  {
    question:
      "Quel nom est donné à l'épreuve sportive constituée d'un triathlon sur très longues distances ? Il se compose de 3,8 km de natation, 180 km de vélo avant de conclure par un marathon. Son nom est le même qu'un personnage créé par Stan Lee.",
    answer: 'Iron Man',
    options: ['Iron Man', 'Linkin Park', 'Clash', 'Bayern'],
  },
  {
    question:
      "Quel nom, homonyme d'un moyen de transport, est désigné par la lettre B dans le sigle USB dans clé USB ? Il s'agit d'un mot anglais précédé des termes \"Universal Serial\".",
    answer: 'Bus',
    options: ['Bus', 'Anophèle', 'Polyphème', 'Autruche'],
  },
  {
    question:
      "Quelle période de la vie constitue le titre d'une série Netflix avec Owen Cooper et Stephen Graham ? Elle est composée de quatre épisodes tous tournés en un seul et unique plan-séquence et raconte l'histoire d'un jeune de 13 ans accusé du meurtre d'une de ses camarades de classe.",
    answer: 'Adolescence',
    options: ['Adolescence', 'Groom', 'En souris', 'Dormeur'],
  },
  {
    question:
      "Quelle tribu de l'Épire antique, un ancien état du nord de la Grèce, qui était dirigée par la dynastie des Eacides, avait la réputation d’utiliser des chiens de combat pour garder leurs troupeaux ?",
    answer: 'Molosses',
    options: ['Molosses', 'Donald Trump', '1984', 'Jaipur'],
  },
  {
    question:
      "Quel nom de scientifique est donné à la température à laquelle un matériau ferromagnétique perd son aimantation et devient alors paramagnétique ? Par exemple, à partir de 769 degrés celsius, le fer perd son aimantation et atteint ce point. Le scientifique en question fait partie d'une célèbre famille de scientifiques dont quatre membres ont reçu un Prix Nobel.",
    answer: 'Température de (Pierre) Curie',
    options: ['Température de (Pierre) Curie', 'Nagui', 'Alain Delon', 'Spare'],
  },
  {
    question: 'Quel pays constitue la majeure partie de la péninsule arabique ?',
    answer: 'Arabie Saoudite',
    options: ['Arabie Saoudite', 'Colonel Parker', 'Vivaldi', 'Valençay'],
  },
  {
    question:
      'Quelle danse originaire de l\'Angola dont le nom signifie littéralement "fesses dures" a laissé son nom à un titre de 2010 réunissant Lucenzo et Don Omar ? Ce titre a également été la bande originale du film Fast and Furious 5.',
    answer: 'Kuduro',
    options: ['Kuduro', 'Botswana', 'Shogun', 'Chine'],
  },
  {
    question:
      "Quel nom français donné à l'un des Sept Nains accompagnant Blanche-Neige est également l’autre nom sous lequel est connu le crabe tourteau ?",
    answer: 'Dormeur',
    options: ['Dormeur', 'Catwoman', 'Tartan', 'Gaule'],
  },
  {
    question:
      "En quelle langue le mot satori signifie-t-il conscience ? Il désigne des monstres surnaturels capables de lire dans l'esprit des gens.",
    answer: 'Japonais',
    options: ['Japonais', 'Mercredi', 'Corolle', 'Pique'],
  },
  {
    question:
      'Quel sculpteur français né en 1840, maître de Camille Claudel, est le créateur de "La Porte de l\'Enfer" dont l\'élément le plus célèbre est "Le Penseur", sculpture représentant Dante Alighieri.',
    answer: 'Rodin',
    options: ['Rodin', 'Adolescence', 'Paul Verlaine', 'Led Zeppelin'],
  },
  {
    question:
      "Quel perchiste représentant la Suède est l'actuel recordman du monde de sa discipline avec 6,30 mètres franchis ?",
    answer: 'Armand Duplantis',
    options: ['Armand Duplantis', 'Invader', 'Daniel Balavoine', 'Ernst Gräfenberg'],
  },
  {
    question:
      'Quelle lettre est désormais le nouveau nom du réseau social Twitter après son rachat par Elon Musk ?',
    answer: 'X',
    options: ['X', 'Surf', 'Jazz', 'SIM'],
  },
  {
    question:
      'Dans quelle émission télévisée Salvatore, Sébastien et Levon ont-ils formé le groupe Il Cello pour remporter la saison en 2025 ?',
    answer: 'The Voice',
    options: ['The Voice', 'Ange', 'Gmail', 'Bus'],
  },
  {
    question:
      'Quel président français mort au Royaume-Uni fut le seul président de la deuxième République française ?',
    answer: 'Louis-Napoléon Bonaparte',
    options: ['Louis-Napoléon Bonaparte', 'Guerre de Sécession', 'Mérule', 'Bâtonnier'],
  },
  {
    question:
      'Différents des bâtonnets, quels photorécepteurs situés dans la rétine transforment le signal électromagnétique de la lumière en signal nerveux permettant la vision photopique diurne ?',
    answer: 'Cônes',
    options: ['Cônes', 'Olympe de Gouges', 'Sarajevo', 'Atèle'],
  },
  {
    question:
      'Quelle montagne sur laquelle Naps veut se faire un petit pétou est le point culminant de l’île de Honshu ?',
    answer: 'Mont Fujiyama',
    options: ['Mont Fujiyama', 'Hastings', 'Finistère', 'Lump'],
  },
  {
    question:
      "Quel chanteur français est décédé dans un accident d'hélicoptère au Mali sur le rallye Paris-Dakar le 14 janvier 1986 ? Le créateur du Dakar Thierry Sabine est décédé ainsi que les trois autres personnes présentes dans l'appareil.",
    answer: 'Daniel Balavoine',
    options: ['Daniel Balavoine', 'The Voice', 'Chrome', 'One Direction'],
  },
  {
    question:
      'Quelle couleur est également le nom donné à un fruit de la famille des rutacées ayant pour nom scientifique "Citrus sinensis" ?',
    answer: 'Orange',
    options: ['Orange', 'La Casa de Papel', 'Hastings', 'Olympe de Gouges'],
  },
  {
    question:
      "Combien de côtés compte le panneau STOP en France ? C'est le seul panneau à compter ce nombre de côtés.",
    answer: '8',
    options: ['8', 'Spare', 'The Turtles', 'Finistère'],
  },
  {
    question:
      "Quel écrivain franco-algérien avait été incarcéré près d'une année dans son pays d'origine avant d'être gracié par le président Tebboune en novembre 2025 ? Il a été élu à l'Académie française le 29 janvier 2026.",
    answer: 'Boualem Sansal',
    options: ['Boualem Sansal', 'San Francisco', 'Epona', 'Cristiano Ronaldo'],
  },
  {
    question:
      "Quel skieur alpin français a gagné trois titres olympiques lors des Jeux Olympiques de Grenoble en 1968 ? Il a gagné en descente, slalom et slalom géant, lui permettant d'acquérir une très grande notoriété.",
    answer: 'Jean-Claude Killy',
    options: ['Jean-Claude Killy', 'Le Chanteur de Jazz', 'Lunule', 'Pascal Légitimus'],
  },
  {
    question:
      'De quelle série de jeux vidéo le héros principal est-il Geralt de Riv ? Le premier opus sorti en 2007 est suivi de ceux sous-titrés "Assassins of Kings" et "Wild Hunt".',
    answer: 'The Witcher',
    options: ['The Witcher', 'Le Chanteur de Jazz', 'Koh Lanta', 'Bus'],
  },
  {
    question:
      'Quelle année durant laquelle la Palme d\'Or fut remise à Abbas Kiarostami pour "Le Goût de la Cerise" ainsi qu\'à Shōhei Imamura pour son film "L\'Anguille" est également l\'année de sortie du film "Titanic" de James Cameron ?',
    answer: '1997',
    options: ['1997', 'Rugby', 'Diogène', 'Roberto Heras'],
  },
  {
    question:
      'Quel était le premier prénom du premier président du Malawi nommé Banda, devenu président en 1966, 900 ans après une bataille portant son prénom ?',
    answer: 'Hastings',
    options: ['Hastings', 'The Shining', 'Johnny Cash', 'Rhombe'],
  },
  {
    question:
      "Quel nom dérivé du latin désignant une pierre spongieuse et friable désigne la variété de calcaire à l'aspect crayeux qui fut abondamment utilisé dans la vallée de la Loire, en Touraine et en Anjou pour la construction de châteaux durant la Renaissance ? En plus des châteaux, des bâtiments religieux comme la cathédrale de Nantes ont également utilisé cette roche.",
    answer: 'Tuffeau',
    options: ['Tuffeau', 'Gotlib', 'Cristiano Ronaldo', 'Ponte'],
  },
  {
    question:
      'Quelle ville française du département numéro 88 abrite le Festival international de Géographie ? Cette vocation vient du fait que l’Amérique a été baptisée de ce nom du fait du planisphère de Waldseemüller, établi dans cette ville en 1507 ?',
    answer: 'Saint-Dié-des-Vosges',
    options: ['Saint-Dié-des-Vosges', 'Sarajevo', 'Chimpanzés', 'Louis IX'],
  },
  {
    question:
      'Quelle chanteuse a réutilisé l’instrumentale d’une chanson de Kimbra sortie en 2011 avec le chanteur belgo-australien Gotye pour son titre Anxiety en 2025 ?',
    answer: 'Doechii',
    options: ['Doechii', 'Tennis', 'Frégate', 'Ange'],
  },
  {
    question:
      'Pouvant être dit pleureur, pleureuse ou des maisons, quel champignon du genre serpula dissout les constituants du bois dans les habitations ?',
    answer: 'Mérule',
    options: ['Mérule', 'Place de la Concorde', 'Dharamsala', 'Pangramme'],
  },
  {
    question:
      "Quelles sont les deux marques d'équipementiers sportifs fondées par les frères Dassler ? Adolf, surnommé Adi a fondé l'une et son frère Rudolf a fondé l'autre. Ce sont les deuxièmes et troisièmes équipementiers sportifs dans le monde. La réponse attend les DEUX MARQUES.",
    answer: 'Adidas et Puma',
    options: ['Adidas et Puma', 'One Direction', 'Claude Monet', 'Bayern'],
  },
  {
    question:
      "Dans le manga Dragon Ball, combien de boules de cristal sont présentes sur Terre ? Elles possèdent le pouvoir d'exaucer les vœux lorsqu'elles sont réunies, étant donc au centre des convoitises.",
    answer: '7',
    options: ['7', 'Rickshaw', 'Nolwenn Leroy', 'Guerre de Sécession'],
  },
  {
    question:
      "Quel pilote de Formule 1 est mort le lendemain de la mort de Roland Ratzenberger, soit le 1er mai 1994 ? Il est décédé lors du Grand Prix de Saint-Marin alors que Ratzenberger était mort pendant les qualifications, sa notoriété beaucoup plus importante a presque étouffé l'accident ayant eu lieu la veille.",
    answer: 'Ayrton Senna',
    options: ['Ayrton Senna', 'Banane', 'Montréal', 'Arlequin'],
  },
  {
    question:
      'Quel terme anglais signifiant "choc" et souvent utilisé pour désigner un affrontement est associé à "Royale" ou à "Of Clans" dans le nom de jeux vidéos développé et édité par Supercell ?',
    answer: 'Clash',
    options: ['Clash', 'Le Chanteur de Jazz', 'Domrémy-la-Pucelle', 'Sumo'],
  },
  {
    question:
      'Quel animal de fiction est Fievel, petit animal embarquant pour le nouveau monde parce qu’il fuit les chats ?',
    answer: 'Souris',
    options: ['Souris', 'Pauline Ferrand-Prévot', 'Nantes', 'Lump'],
  },
  {
    question:
      "Quelle bataille souvent appelée Victoire de la Belle-Alliance dans les pays germaniques voit la défaite de Napoléon Ier le 18 juin 1815 ? Il s'agit de la dernière grande défaite de Napoléon Ier, au cours des Cent Jours.",
    answer: 'Waterloo',
    options: ['Waterloo', 'Palindrome', 'Ibra', 'Mazarin'],
  },
  {
    question: 'Quelle lettre désigne également la vitamine appelée acide ascorbique ?',
    answer: 'C',
    options: ['C', 'Sophie Adenot', 'ScoobyDoo', 'Carlito'],
  },
  {
    question:
      'Quel pays culminant au mont Titan, ou Monte Titano en italien, est enclavé dans l’Italie ?',
    answer: 'Saint-Marin',
    options: ['Saint-Marin', 'Blockchain', 'K2', 'Marc-Antoine Charpentier'],
  },
  {
    question:
      'Quel groupe de musique a connu le succès notamment avec les titres "Don’t look back in anger" ainsi que "Wonderwall" ? Originaire de Manchester, le groupe est notamment composé des frères Liam et Noah Gallagher, séparés en 2009, ils ont annoncé se reformer en 2024.',
    answer: 'Oasis',
    options: ['Oasis', 'Gmail', 'Echo', 'Bénarès'],
  },
  {
    question:
      'Quelle espèce animale au centre du film "Deux Frères" de Jean-Jacques Annaud sont les plus grands félins du monde lorsqu’ils sont dits blancs mais peuvent aussi être du Bengale ?',
    answer: 'Tigre',
    options: ['Tigre', 'Chameau', 'Kevlar', 'Bus'],
  },
  {
    question:
      'Quel jeu est constitué de deux hémisphères aplatis, réunis par un axe autour duquel s’enroule une ficelle dont l’une des extrémités s’attache au doigt ou est retenue par la main, le but étant de le lancer et de le faire revenir dans un va-et-vient continu ?',
    answer: 'Yo-yo',
    options: ['Yo-yo', 'Sergio Parisse', 'Skyr', 'Jacaranda'],
  },
  {
    question:
      'Au cours du Hajj et de la Omra, autour de quel édifice recouvert par la kiswa se pratique le tawaf ?',
    answer: 'Kaaba',
    options: ['Kaaba', 'Jason', 'Popcorn', 'Jazz'],
  },
  {
    question:
      "Quel numéro est associé au pilote de moto Valentino Rossi ? Il l'a choisi comme numéro définitif au début de sa carrière et a même fondé une écurie actuellement en MotoGP dont le nom est constitué de ses initiales (VR) suivies de ce numéro.",
    answer: '46',
    options: ['46', 'Mer de la Tranquillité', 'Pyrénées-Atlantiques', 'Boualem Sansal'],
  },
  {
    question:
      'Créée par Hiroji Kiyotake, quel personnage féminin pouvant être avec ou sans armure apparaît dans la saga de jeux vidéos Metroid ? Cette chasseuse de primes peut également prendre la forme d\'une boule, la "morphing ball".',
    answer: 'Samus',
    options: ['Samus', 'Bar', 'Russe', 'Iron Man'],
  },
  {
    question:
      'Quel personnage fut créé pour remplacer Oswald, le lapin chanceux ? Ledit personnage est apparu pour la première fois dans le court-métrage "Plane Crazy" en 1928.',
    answer: 'Mickey Mouse',
    options: ['Mickey Mouse', 'Geta', 'Pompon', 'Hannah Montana'],
  },
  {
    question:
      "S'étant illustré durant la Guerre d'Hiver et surnommé \"La Mort Blanche\", de QUELLE NATIONALITÉ était Simo Häyhä, considéré comme le meilleur tireur d'élite de tous les temps ? On lui attribue entre 500 et 700 victimes dans les rangs de l'Armée soviétique.",
    answer: 'Finlandaise',
    options: ['Finlandaise', 'Andy Jassy', 'Linkin Park', 'Canberra'],
  },
  {
    question:
      'Sous quel nom la firme Pfizer commercialise-t-elle le citrate de sildénafil ? Ce produit découvert en 1979 a été nommé en contractant le mot latin signifiant "énergie" et le nom de célèbres chutes d\'eau.',
    answer: 'Viagra',
    options: ['Viagra', 'Inde', 'Ange', 'World of Warcraft'],
  },
  {
    question:
      'Quelle capitale porte un nom signifiant "lieu de rassemblement" en ngunnawal, la langue locale ? La ville a été créée par le couple d\'architectes Walter Burley Griffin et Marion Mahony Griffin.',
    answer: 'Canberra',
    options: ['Canberra', 'Fado', 'Place de la Concorde', 'En souris'],
  },
  {
    question:
      "Quel nom porte l’instrument dont l’ancêtre serait le symplephoxon, ressemblant à un harmonica auquel on a ajouté un clavier ? L'instrument, popularisé entre autres par le musicien de reggae Augustus Pablo, est généralement désigné par antonomase d'une marque déposée par Hohner.",
    answer: 'Melodica',
    options: ['Melodica', 'Tuffeau', 'Boualem Sansal', 'Hannah Montana'],
  },
  {
    question:
      "Également appelée Merveille-du-Pérou, quelle plante de la famille des nyctaginacées tire son nom du fait que ses fleurs ne s’épanouissent que le soir venu ? Le 16 vendémiaire du calendrier républicain était nommé en l'honneur de cette plante.",
    answer: 'Belle-de-nuit',
    options: ['Belle-de-nuit', 'Gorfou', 'Talweg', 'Fromage'],
  },
  {
    question:
      'Quel terme venant du japonais signifiant "véhicule à propulsion humaine" désigne le véhicule bangladais à trois roues utilisé pour le transport de personnes ? Lorsque ces véhicules ont des moteurs, ils sont souvent désignés par le terme de tuk-tuk.',
    answer: 'Rickshaw',
    options: ['Rickshaw', 'Charlie Hebdo', 'Jaune', 'Shogun'],
  },
  {
    question:
      'Quelle couleur est associée au Brésil dans le titre d’un roman de Jean-Christophe Rufin et au Noir dans un roman de Stendhal ?',
    answer: 'Rouge',
    options: ['Rouge', 'Staccato', 'Chine', 'Chimpanzés'],
  },
  {
    question:
      "Quelle épreuve olympique créée en 1896 s'inspire du nom de la bataille datant de 490 avant notre ère pour laquelle l'hémérodrome Philippidès aurait prévenu la ville d'Athènes de la victoire des troupes de Miltiade ?",
    answer: 'Marathon',
    options: ['Marathon', 'Magnum', 'Måneskin', 'Pastèque'],
  },
  {
    question:
      'Quel concept clé du bouddhisme que l’on traduit par amélioration continue a laissé son nom au documentaire d’Inoxtag retraçant sa montée de l’Everest ?',
    answer: 'Kaizen',
    options: ['Kaizen', 'Newton', 'Charlie Hebdo', 'Pique'],
  },
  {
    question:
      'Quel bâtiment associé à Hilltop dans le titre d’un dessin animé s’appelle Princeton-Plainsboro dans la série Docteur House ?',
    answer: 'Hôpital',
    options: ['Hôpital', 'Daniel Balavoine', 'Fromage', 'Palindrome'],
  },
  {
    question:
      'Quel nom le pharaon Aménophis IV a-t-il choisi comme nom de règne aux côtés de son épouse Néfertiti ? Ce 10e pharaon de la XVIIIe dynastie a régné entre 1355/53 et 1338/37 avant notre ère.',
    answer: 'Akhénaton',
    options: ['Akhénaton', 'Tom Nook', '46', 'Iran'],
  },
  {
    question:
      'Quel scientifique ayant laissé son nom au prix récompensant les morts les plus bêtes a publié en 1859, "De l’origine des espèces" ? Il a développé par ses travaux une nouvelle théorie de l\'évolution.',
    answer: 'Darwin',
    options: ['Darwin', 'Haul', 'Geta', 'Scroller'],
  },
  {
    question:
      "Originellement connue sous le nom de Bytown, quel est le nom actuel de la capitale du Canada ? Cette ville de plus d'1 million d'habitants n'est que la quatrième plus grande ville de son pays.",
    answer: 'Ottawa',
    options: ['Ottawa', 'Tom Nook', 'Botswana', '1984'],
  },
  {
    question:
      'Parfois accompagnée des Black Devotion, quelle chanteuse française est l’interprète des chansons "Hôtel de la plage", "Spacer" et "L’école est finie" ? Née en 1945, elle a pour véritable identité Anny Chancel.',
    answer: 'Sheila',
    options: ['Sheila', '7', 'Korrigan', 'Acide acétique'],
  },
  {
    question:
      'Quel petit chien peut-être dit frisé, havanais, bolonais ou maltais ? Ces petits chiens de compagnie sont blancs et ont un pelage soyeux.',
    answer: 'Bichon',
    options: ['Bichon', 'Handball', 'Microsoft', 'Nakamura'],
  },
  {
    question:
      'Quel type de brioche vendéenne possède une Indication géographique protégée depuis 2013 ? Elle est de forme ovale, semblable à une brioche dont la mie est plus serrée.',
    answer: 'Gâche',
    options: ['Gâche', 'A7', 'Tokyo Drift', 'Led Zeppelin'],
  },
  {
    question:
      'Quel surnom Anne Frank donne-t-elle à son amie imaginaire, à qui elle s’adresse dans son journal ?',
    answer: 'Kitty',
    options: ['Kitty', 'Nakamura', 'Olympe de Gouges', 'Bar'],
  },
  {
    question:
      'En 1851, quel était le nom du tout premier voilier à avoir remporté l’America’s Cup ?',
    answer: 'L’America',
    options: ['L’America', 'Fun', 'Bichon', 'Koh Lanta'],
  },
  {
    question:
      'Désignés par les lettres I, O, T, L, J, Z et S, quel nom générique portent les pièces du jeu Tetris ?',
    answer: 'Tétrimino',
    options: ['Tétrimino', 'Massive Attack', 'Samothrace', 'Beowulf'],
  },
  {
    question:
      'Quelle série a pour préquel "House of the Dragon", racontant l’histoire de la maison Targaryen 200 ans avant les événements racontés dans la série originale ?',
    answer: 'Game of Thrones',
    options: ['Game of Thrones', 'X', 'Waterloo', 'L’America'],
  },
  {
    question:
      'Quel empereur romain, ayant régné en 211, fils de Septime Sévère et ayant partagé le trône avec son frère Caracalla avant d’être tué porte le même nom que des chaussures traditionnelles japonaises ?',
    answer: 'Geta',
    options: ['Geta', 'Lusitanie', 'Cockpit', 'Skyrim'],
  },
  {
    question:
      "Quelle fibre nommée poly-paraphénylène téréphtalamide et utilisée pour la protection fut inventée par Stéphanie Kwolek ? Ce polymère fut découvert en 1964 lorsqu'elle travaillait pour DuPont de Nemours.",
    answer: 'Kevlar',
    options: ['Kevlar', 'Flottantes', 'Carrefour', 'Gardon'],
  },
  {
    question: 'Quel est le nom du cap le plus septentrional d’Europe ?',
    answer: 'Cap Nord',
    options: ['Cap Nord', 'Jaune', 'Colombe', 'Jean-Claude Killy'],
  },
  {
    question:
      'Quel chef d’orchestre hongrois est, après Beyoncé, le deuxième a avoir reçu le plus de Grammy Awards ? Il en a reçu 32 sur ses 74 nominations.',
    answer: 'Georg Solti',
    options: ['Georg Solti', 'HPI', 'Shar Pei', 'Nectarine'],
  },
  {
    question:
      'Quel substantif féminin désigne la partie en forme de coupe formant la partie principale du corps des méduses ?',
    answer: 'Ombrelle',
    options: ['Ombrelle', 'Souris', 'Willie Wonka', 'Avion'],
  },
  {
    question:
      "Quel nom porte en France, le coordinateur des avocats inscrits au barreau ? C'est aussi le représentant des avocats à l'égard des autorités civiles ou judiciaires.",
    answer: 'Bâtonnier',
    options: ['Bâtonnier', 'Colombe', 'Skyr', 'Fromage'],
  },
  {
    question:
      'Ayant rédigé un "Discours sur le colonialisme" en 1950, quel théoricien et homme politique martiniquais fut une figure de proue de la négritude ? Il fut également maire de Fort-de-France de 1945 à 2001.',
    answer: 'Aimé Césaire',
    options: ['Aimé Césaire', 'Johnny Cash', 'Dormeur', 'Top Gun'],
  },
  {
    question:
      'Quel sprinter jamaïcain est le recordman du monde du 100m en 9"58 et du 200m en 19"19 ? Il détient ces records depuis les mondiaux d\'athlétisme de Berlin en 2009.',
    answer: 'Usain Bolt',
    options: ['Usain Bolt', 'Ibra', 'Inde', 'Cénacle'],
  },
  {
    question:
      'Prenant place dans le monde imaginaire d’Azeroth, quel MMORPG sorti le 23 novembre 2004 est abrégé par les lettres WoW ?',
    answer: 'World of Warcraft',
    options: ['World of Warcraft', 'Gâche', 'Hallux', 'SIM'],
  },
  {
    question:
      'Quel jeu télévisé de lettres sur le principe du Mastermind fut présenté par Thierry Beccaro pendant près de trois décennies ?',
    answer: 'Motus',
    options: ['Motus', 'Blanc', 'Pascal Légitimus', 'Bulgarie'],
  },
  {
    question:
      'Associé à Chilly, dans le nom d’une ville de l’Essonne, quel cardinal a exercé le pouvoir après la mort de Louis XIII aux côtés d’Anne d’Autriche ?',
    answer: 'Mazarin',
    options: ['Mazarin', '46', 'Georges Méliès', 'Kirigami'],
  },
  {
    question:
      "Quel nom, anciennement dénommé airain, est donné à l'alliage de cuivre et d'étain ? On utilise très souvent ce matériau dans la sculpture.",
    answer: 'Bronze',
    options: ['Bronze', 'Nuremberg', 'Souris', 'Phare de Cordouan'],
  },
  {
    question:
      'De quel département français les villes de Châteaulin, Morlaix et Brest sont-elles les sous-préfectures ?',
    answer: 'Finistère',
    options: ['Finistère', 'The Witcher', 'Popcorn', 'Claude François'],
  },
  {
    question:
      'Quel boys-band ayant interprété le titre "What makes you beautiful" à la cérémonie de clôture des Jeux Olympiques de 2012 comprenait Liam Payne, Zayn Malik, Harry Styles, Niall Horan et Louis Tomlinson ?',
    answer: 'One Direction',
    options: ['One Direction', 'Ciao Kombucha', 'Bunker', 'Palindrome'],
  },
  {
    question:
      'Quelle fleur portant un nom d\'origine turque signifiant "turban" est l\'un des symboles des Pays-Bas, où elle est majoritairement cultivée ?',
    answer: 'Tulipe',
    options: ['Tulipe', 'Columbine', 'Diogène', 'Carlito'],
  },
  {
    question:
      'Quelle spécialité culinaire constituée d’alvéoles juxtaposées peut être de Liège ou de Bruxelles ?',
    answer: 'Gaufre',
    options: ['Gaufre', 'Koh Lanta', 'Dormeur', 'Etrier'],
  },
  {
    question:
      "Quel poème épique rédigé en vieil anglais met en scène le monstre Grendel terrorisant les danois chaque nuit ? L'auteur de cette œuvre, le plus long texte poétique germanique du haut Moyen Âge connu, reste anonyme.",
    answer: 'Beowulf',
    options: ['Beowulf', 'Géorgie', 'Corolle', 'Patrick Battiston'],
  },
  {
    question:
      'Quel rugbyman né en 1983 est le plus capé de la sélection italienne avec 142 sélections, en parallèle de ses 14 ans passés au Stade Français ? Ce troisième-ligne est également le joueur avec le plus de matchs du Tournoi des Six Nations joués (69).',
    answer: 'Sergio Parisse',
    options: ['Sergio Parisse', 'Chine', 'PSP', 'Chirac'],
  },
  {
    question:
      "Quel navigateur internet développé en 2015 par Jon Stephenson von Tetzchner porte le nom d'un célèbre musicien surnommé le Prêtre roux ?",
    answer: 'Vivaldi',
    options: ['Vivaldi', 'Inde', 'Tigre', 'Ayrton Senna'],
  },
  {
    question:
      "Quel film ayant pour acteurs principaux May McAvoy et Al Jolson a été réalisé par Alan Crosland en 1927 ? Il est considéré comme étant le premier film parlant de l'Histoire.",
    answer: 'Le Chanteur de Jazz',
    options: ['Le Chanteur de Jazz', 'Bar', 'Paul Verlaine', 'Gotaga'],
  },
  {
    question:
      "Quelle plante de la famille des oléacées, pouvant être blanc ou rose notamment est associée au surnom de la révolution de 2010/2011 en Tunisie ? Au bout de ces quatre semaines de manifestations, le président depuis Zine el-Abidine Ben Ali a quitté le pouvoir qu'il tenait depuis 1987.",
    answer: 'La Révolution du jasmin',
    options: ['La Révolution du jasmin', '1997', 'Cristiano Ronaldo', 'Clair Obscur'],
  },
  {
    question: 'Quel chercheur allemand ayant inventé le stérilet a laissé son nom au point G ?',
    answer: 'Ernst Gräfenberg',
    options: ['Ernst Gräfenberg', 'Akira Kurosawa', 'Triangulaire', '11'],
  },
  {
    question:
      'Quel pays possède un drapeau appelé le Tiranga, nom signifiant le tricolore, avec au centre une roue appelée chakra d’Ashoka ?',
    answer: 'Inde',
    options: ['Inde', 'Linkin Park', 'SpiderMan', 'Ayrton Senna'],
  },
  {
    question:
      'Quel groupe dont la chanteuse actuelle est Emily Armstrong fut mené jusqu’à son suicide par Chester Bennington ? Ils ont sorti l\'album "From Zero" en novembre 2024, le premier depuis la mort de l\'ancien chanteur.',
    answer: 'Linkin Park',
    options: ['Linkin Park', 'Flottantes', 'Boccia', 'Stéphane'],
  },
  {
    question:
      "Quelle race de chat originaire de Thaïlande et caractérisée par des yeux d'un bleu profond, porte un nom évoquant l'ancien nom de son pays d'origine ?",
    answer: 'Siamois',
    options: ['Siamois', 'Gotlib', 'rue Morgue', 'Steam'],
  },
  {
    question:
      'Quel nom de cinq lettres désigne à la fois un ferme-porte automatique et le métier de Spirou dans la bande dessinée ?',
    answer: 'Groom',
    options: ['Groom', 'Nagui', 'Watt', 'Sophie Adenot'],
  },
  {
    question:
      'Quel personnage féminin créé par Bill Finger et Bob Kane ayant pour véritable identité celle de Selina Kyle est le principal personnage féminin de l’univers de Batman ?',
    answer: 'Catwoman',
    options: ['Catwoman', 'Couleuvrine', 'Barbie', 'Amiante'],
  },
  {
    question:
      'Quel adjectif de nationalité qualifie les assiettes dans l’art du cirque également appelé assiette tournante ?',
    answer: 'Assiettes chinoises',
    options: ['Assiettes chinoises', 'Globe Trotter', 'San Francisco', 'Led Zeppelin'],
  },
  {
    question:
      'Quelle sigle de trois lettres désigne communément la console de jeu sortie en Europe en septembre 2005 et développée par Sony dont le nom est PlayStation Portable ?',
    answer: 'PSP',
    options: ['PSP', 'World of Warcraft', 'Daft Punk', 'C'],
  },
  {
    question:
      "Quel est le seul membre des Inconnus n'ayant pas coréalisé le film \"Les Trois Frères\" en 1995 ? Les deux autres membres du trio étaient coréalisateurs mais lui n'a qu'un rôle d'acteur dans le film.",
    answer: 'Pascal Légitimus',
    options: ['Pascal Légitimus', 'Tachkent', 'Arabie Saoudite', 'Ionesco'],
  },
  {
    question:
      'Quelle statue thérianthrope de 73 mètres de long fut construite vers 2500 avant notre ère en Égypte ?',
    answer: 'Sphinx',
    options: ['Sphinx', 'Chine', 'Bayern', 'Fromage'],
  },
  {
    question:
      "Quel nom tiré du latin désigne également le gros orteil ? Il peut être dit varus ou valgus s'il subit une déviation.",
    answer: 'Hallux',
    options: ['Hallux', 'Tom Nook', 'Assiettes chinoises', '46'],
  },
  {
    question: 'Quelle couleur est commune aux drapeaux du Bénin, du Brésil et de la Belgique ?',
    answer: 'Jaune',
    options: ['Jaune', 'Jean-Claude Killy', 'Bar', 'Liberté'],
  },
  {
    question:
      'Quel modèle associé à 92i dans un titre de Booba est commercialisé par la marque de voitures Bugatti ?',
    answer: 'Veyron',
    options: ['Veyron', 'Led Zeppelin', 'Shogun', 'Blind Test'],
  },
  {
    question:
      'Quel animal, symbole de la ville de Béziers, est un représentant de la famille des camélidés reconnaissable à ses deux bosses ?',
    answer: 'Chameau',
    options: ['Chameau', 'Cockpit', 'Baguette de pain', 'Autruche'],
  },
  {
    question:
      'Quelle lettre grecque ayant laissé son nom à une marque de montre est la dernière de l’alphabet grec, par opposition à l’alpha ?',
    answer: 'Omega',
    options: ['Omega', 'Pétrichor', 'Mozart', 'Newton'],
  },
  {
    question:
      'Dans quelle rue y a-t-il eu un double assassinat selon le titre d’une nouvelle d’Edgar Allan Poe ?',
    answer: 'rue Morgue',
    options: ['rue Morgue', '7', 'Benito Mussolini', 'Sacramento'],
  },
  {
    question:
      "Quel sportif français possède, avec 6 titres olympiques, le record de médailles d'or aux Jeux Olympiques pour un français, toutes disciplines confondues ?",
    answer: 'Martin Fourcade',
    options: ['Martin Fourcade', 'Viagra', 'Finlandaise', 'Sodium'],
  },
  {
    question:
      'Quelle technologie désignée par un nom anglais désigne la méthode de stockage et de transmission d’informations sans autorité centrale, souvent utilisée dans le domaine des cryptomonnaies ?',
    answer: 'Blockchain',
    options: ['Blockchain', 'La Casa de Papel', 'Chine', 'SIM'],
  },
  {
    question:
      'Quel chanteur est le sujet du biopic "Walk the Line" réalisé en 2005 par James Mangold ? L\'actrice Reese Witherspoon obtient l\'Oscar de la meilleure actrice pour son interprétation de June Carter.',
    answer: 'Johnny Cash',
    options: ['Johnny Cash', 'Daniel Balavoine', 'Sergio Parisse', 'Nuremberg'],
  },
  {
    question:
      'Quel nom de trois lettres partagent le premier chimpanzé envoyé dans l’espace et une ville de la Somme où fut emprisonné Louis-Napoléon Bonaparte ?',
    answer: 'Ham',
    options: ['Ham', 'World of Warcraft', 'Benito Mussolini', 'Suavemente'],
  },
  {
    question:
      "Avec une altitude de 10 700 mètres, quelle planète du système solaire culmine au mont Skadi ? Ce mont a été nommé en référence à la déesse nordique des montagnes, de la chasse à l'arc et de l'hiver.",
    answer: 'Venus',
    options: ['Venus', 'Popcorn', 'Carlito', 'Antigone'],
  },
  {
    question: 'Quel est le pays lusophone le plus peuplé du monde ?',
    answer: 'Brésil',
    options: ['Brésil', 'Le Seigneur des Anneaux', 'Pétrole', 'Groom'],
  },
  {
    question:
      'Quel groupe interprète de "Happy Together" porte un nom anglais évoquant des chéloniens ? Ce groupe de rock originaire de Los Angeles a délogé en 1967 les Beatles de la première place des ventes aux USA.',
    answer: 'The Turtles',
    options: ['The Turtles', 'Molosses', 'Faucheurs', 'Veyron'],
  },
  {
    question:
      "Quel nom féminin désigne la partie de la fleur formée par l'ensemble de ses pétales ? Elle se distingue du calice qui lui est constitué de l'ensemble des sépales.",
    answer: 'Corolle',
    options: ['Corolle', 'Yo-yo', 'Kafka', 'Rugby'],
  },
  {
    question:
      'Créé par Alexander Bernhardt, quel jeu de société aux cartes colorées consiste à avoir la plus petite valeur cumulée de ses douze cartes que l’on retourne au fil de la partie ?',
    answer: 'Skyjo',
    options: ['Skyjo', 'Hêtre', 'Chenille', 'Geta'],
  },
  {
    question: 'Quel poisson donne son nom au Quintette en la majeur, D. 667 de Franz Schubert ?',
    answer: 'La Truite',
    options: ['La Truite', 'Columbine', 'Clermont-Ferrand', 'The Witcher'],
  },
  {
    question:
      'Quel footballeur, marié à Georgina Rodriguez est un portugais aux 5 ballons d’or surnommé CR7 ?',
    answer: 'Cristiano Ronaldo',
    options: ['Cristiano Ronaldo', 'V', 'Marc-Antoine Charpentier', 'Cerveau'],
  },
  {
    question:
      'Quel navigateur web a un logo figurant un cercle bleu entouré de rouge, de jaune et de vert ?',
    answer: 'Chrome',
    options: ['Chrome', '4chan', 'Motus', 'Oesophage'],
  },
  {
    question:
      'Quel est le titre français de l’émission inspirée par celle animée par Jeff Probst aux USA et nommée Survivor ?',
    answer: 'Koh Lanta',
    options: ['Koh Lanta', 'Le Vol du Bourdon', 'Oesophage', 'Diogène'],
  },
  {
    question:
      "Quelle province romaine couvrait le sud-ouest de la péninsule ibérique soit la majorité du Portugal actuel ? C'est dans cette province que se rend Astérix dans le dernier album paru en 2025.",
    answer: 'Lusitanie',
    options: ['Lusitanie', 'Lump', 'Canada', 'Frégate'],
  },
  {
    question:
      "Quel continent a laissé son nom à l'un des quatre satellites galiléens de Jupiter ? Découvert en 1610 par Galilée, ce satellite tire son nom d'un personnage de la mythologie grecque.",
    answer: 'Europe',
    options: ['Europe', 'Nolwenn Leroy', 'Valençay', 'Auguste'],
  },
  {
    question:
      "À quel point cardinal associe-t-on le levant ? C'est en effet de ce côté que se lève le Soleil.",
    answer: 'Est',
    options: ['Est', 'Thymine', 'Acide acétique', 'Måneskin'],
  },
  {
    question:
      'Quel groupe à qui l’on doit notamment le titre "Song for Jedi" porte le nom du dieu de la vigne dans la mythologie grecque ? Ce groupe français originaire de Valence et fondé en 1993 a pour chanteur Mathias Malzieu.',
    answer: 'Dionysos',
    options: ['Dionysos', 'Rickshaw', 'Vitamine D', 'Daft Punk'],
  },
  {
    question:
      'Quel arbre ayant pour fruit les faînes est homophone d’un des deux auxiliaires de la langue française ?',
    answer: 'Hêtre',
    options: ['Hêtre', 'The Witcher', 'Cookie', 'Gaule'],
  },
  {
    question:
      'À quelle lettre de l’alphabet latin correspond la croix de Saint-Antoine, sachant que celui-ci a été crucifié sur une croix en forme de Tau ?',
    answer: 'T',
    options: ['T', 'Eiffel65', 'Fromage', 'Scroller'],
  },
  {
    question:
      'À quel poète français du XIXe siècle doit-on les recueils Jadis et naguère, Fêtes Galantes et Poèmes saturniens ?',
    answer: 'Paul Verlaine',
    options: ['Paul Verlaine', 'Geta', 'Samoyède', 'Atari'],
  },
  {
    question:
      'Dans quelle discipline la vénézuélienne Yulimar Rojas détient-elle le record à 15,74m ?',
    answer: 'Triple Saut',
    options: ['Triple Saut', 'Japonais', 'Inde', 'Saint-Marin'],
  },
  {
    question:
      'Quel mot anglais de quatre lettres signifiant butin désigne le principe de vidéo consistant à déballer les vêtements qu’on vient d’acheter ou recevoir et les montrer à sa communauté ?',
    answer: 'Haul',
    options: ['Haul', 'Microsoft', 'Les Voyages de Gulliver', 'Saké'],
  },
  {
    question:
      'Quel film dans lequel Shelley Duvall incarnait Wendy Torrance fut réalisé en 1980 par Stanley Kubrick avec Jack Nicholson, adaptant ainsi un livre de Stephen King ?',
    answer: 'The Shining',
    options: ['The Shining', 'Angélique', 'Darwin', 'Bichon'],
  },
  {
    question:
      'Ayant grandement inspiré le film Monsieur Verdoux de Charlie Chaplin, quel criminel français est surnommé le Barbe-Bleue de Gambais ?',
    answer: 'Henri-Désiré Landru',
    options: ['Henri-Désiré Landru', 'Licteur', 'La Révolution du jasmin', 'Bojack Horseman'],
  },
  {
    question:
      'Quelle huile minérale naturelle a une étymologie latine signifiant "huile de pierre" ?',
    answer: 'Pétrole',
    options: ['Pétrole', 'Wellington', 'Arlequin', 'Sheila'],
  },
  {
    question:
      'Quel nom issu de l’allemand désigne la ligne joignant les points les plus bas d’une vallée ?',
    answer: 'Talweg',
    options: ['Talweg', 'César', 'Ottawa', 'Blanc'],
  },
  {
    question:
      "Quel homme né sous le nom d’Andreas Cornelis van Kuijk aux Pays-Bas est surtout connu pour avoir été l’impresario exclusif d’Elvis Presley ? Son nom est en partie composé d'un grade militaire.",
    answer: 'Colonel Parker',
    options: ['Colonel Parker', 'Le Chanteur de Jazz', 'Pangramme', 'Abracadabra'],
  },
  {
    question:
      'Quel animal de l’ordre des dermaptères est également appelé pince ou perce-oreilles ? Son nom vient du latin signifiant "petits ciseaux"',
    answer: 'Forficule',
    options: ['Forficule', 'Seahawks', 'The Witcher', 'Andy Jassy'],
  },
  {
    question:
      'Quelle sauce veloutée à base de jaune d’oeuf et de sauce tomate porte un nom évoquant un moment de la journée ?',
    answer: 'Sauce Aurore',
    options: ['Sauce Aurore', 'Taureau', 'Blockchain', 'Bayern'],
  },
  {
    question:
      'Quel peintre est l\'auteur du tableau "Impression, Soleil levant" en 1872, dont le titre a été utilisé par le critique Louis Leroy pour baptiser le mouvement impressionniste ?',
    answer: 'Claude Monet',
    options: ['Claude Monet', 'Baguette de pain', 'Rugby', 'Sacramento'],
  },
  {
    question:
      'Combien y a-t-il de joueurs dans chaque équipe au cricket mais également au hockey sur gazon ?',
    answer: '11',
    options: ['11', 'Kirigami', 'Siamois', 'Watt'],
  },
  {
    question:
      'Quelle entreprise étasunienne dont le nom signifie petit et doux a été fondée en 1975 par Paul Allen et Bill Gates ?',
    answer: 'Microsoft',
    options: ['Microsoft', '7', 'Cristiano Ronaldo', 'Benito Mussolini'],
  },
  {
    question:
      'Dans quelle série de films le personnage de Pete Mitchell est-il interprété par Tom Cruise qui est un jeune prodige du pilotage d’avions ?',
    answer: 'Top Gun',
    options: ['Top Gun', 'Echo', 'Bâtonnier', 'Vaillant'],
  },
  {
    question:
      "Dans quelle ville eut lieu le grand procès des dirigeants nazis après la Seconde Guerre mondiale ? S'étant tenu entre le 20 novembre 1945 et le 1er octobre 1946, ce procès a été transposé au cinéma en 2026 par James Vanderbilt.",
    answer: 'Nuremberg',
    options: ['Nuremberg', 'Hêtre', 'Yo-yo', 'Tokyo Drift'],
  },
  {
    question:
      'Quelle unité équivalant à un joule par seconde est l’unité dérivée de puissance du système international et symbolisée par la lettre W ?',
    answer: 'Watt',
    options: ['Watt', 'Epona', 'Bulgarie', 'Nuremberg'],
  },
  {
    question:
      'Quel land allemand est évoqué par la lettre B dans le sigle BMW désignant un constructeur automobile ? Les lettres M et W signifient "Motoren Werke" soit Usines de moteurs',
    answer: 'Bayern',
    options: ['Bayern', 'Johnny Cash', 'Ciao Kombucha', 'X'],
  },
  {
    question:
      'Quelle pratique désignée par un anglicisme de deux mots consiste à essayer de reconnaître l’interprète d’une chanson juste par l’écoute ?',
    answer: 'Blind Test',
    options: ['Blind Test', 'Angélique', 'L’America', 'Victor Hugo'],
  },
  {
    question:
      'Quel légume peut avoir des variétés appelées vitelotte, bintje, Charlotte ou encore ratte du Touquet par exemple ?',
    answer: 'Pomme de terre',
    options: ['Pomme de terre', 'Ombrelle', 'Jazz', 'En éventail'],
  },
  {
    question:
      'Par quel mot composé d’origine anglaise évoquant la sphère terrestre désigne-t-on un voyageur qui parcourt le monde ?',
    answer: 'Globe Trotter',
    options: ['Globe Trotter', 'Bauhaus', 'Omega', 'Pastèque'],
  },
  {
    question:
      'Interprétée par Kate Winslet dans un biopic en 2024, quelle photographe, égérie du surréalisme fut également correspondante de guerre pour Vogue ?',
    answer: 'Lee Miller',
    options: ['Lee Miller', 'Catherine Parr', 'Finistère', 'Bus'],
  },
  {
    question:
      'Quel footballeur et médecin brésilien portait un nom proche de celui d’un philosophe célèbre ? Frère aîné du footballeur Raí, il était engagé politiquement avant son décès en 2011.',
    answer: 'Socrates',
    options: ['Socrates', 'A7', 'Place de la Concorde', 'Truffe'],
  },
  {
    question:
      'Quel forum anglophone a été créé en 2003 par Christopher Poole sous le pseudonyme de moot ? Ce site décrit comme "le trublion du net" par Le Monde a vu notamment la naissance du mouvement Anonymous.',
    answer: '4chan',
    options: ['4chan', 'Eiffel65', 'Emeraude', 'Marathon'],
  },
  {
    question:
      'Ayant laissé son nom à une série TV avec Priyanka Chopra notamment, dans quelle ville de Virginie se situe le camp d’entraînement des recrues du FBI ?',
    answer: 'Quantico',
    options: ['Quantico', 'Grain de beauté', 'Mer de la Tranquillité', 'Wellington'],
  },
  {
    question:
      'Quelle bataille des guerres napoléoniennes ayant eu lieu le 14 octobre 1806 a laissé son nom au pont de Paris enjambant la Seine face à la Tour Eiffel ?',
    answer: 'Bataille d’Iéna',
    options: ['Bataille d’Iéna', 'Black M', 'Palindrome', 'Sheila'],
  },
  {
    question:
      'Avec la cytosine, la guanine et l’adénine, quelle est la quatrième base azotée de l’ADN, associée à l’adénine ?',
    answer: 'Thymine',
    options: ['Thymine', 'David Duchovny', 'Yo-yo', 'Finistère'],
  },
  {
    question:
      'Signifiant citadelle de pierre, quelle ville située près de la frontière avec le Kazakhstan est la capitale de l’Ouzbékistan ?',
    answer: 'Tachkent',
    options: ['Tachkent', 'Kuduro', 'HPI', 'Gâche'],
  },
  {
    question:
      'Par opposition à legato, quel mot désigne, en musique le fait de jouer les notes de manière détachée ?',
    answer: 'Staccato',
    options: ['Staccato', 'Shar Pei', 'Pétrichor', 'Autruche'],
  },
  {
    question:
      'Quel nom peut à la fois désigner une inflorescence des saules par exemple et le petit d’un félin domestique ?',
    answer: 'Chaton',
    options: ['Chaton', 'Rouge', 'Louis-Napoléon Bonaparte', 'Chenille'],
  },
  {
    question:
      'Quelle spécialité laitière islandaise est très proche du yaourt et a un nom valant 22 points au scrabble ?',
    answer: 'Skyr',
    options: ['Skyr', 'Kevlar', 'Nolwenn Leroy', 'Iran'],
  },
  {
    question:
      "Dans la cathédrale de Reims, quel être spirituel est dit « au sourire » dans le nom d'une statue datant d'environ 1240 ? Cette statue est devenue célèbre au moment de son endommagement par un bombardement lors de la Première Guerre mondiale.",
    answer: 'Ange',
    options: ['Ange', 'Aladdin', 'Flottantes', 'Bus'],
  },
  {
    question:
      'Quel nom issu de l’anglais désigne la voiture légère, à deux roues, utilisée pour les courses de trot attelé ?',
    answer: 'Sulky',
    options: ['Sulky', 'Lee Miller', 'Shar Pei', 'Veyron'],
  },
  {
    question:
      'Quel surnom de 4 lettres partagent un youtubeur français d’origine tchétchène associé à TV dans le nom de sa chaîne ainsi qu’un footballeur suédois ayant notamment évolué au Paris Saint-Germain ?',
    answer: 'Ibra',
    options: ['Ibra', 'Jazz', 'Chine', 'Gorfou'],
  },
  {
    question:
      'Quel présentateur de télévision anime 100% Logique, The Floor, Duels en Famille, Tout le monde veut prendre sa place et La carte aux trésors sur France Télévision ?',
    answer: 'Cyril Féraud',
    options: ['Cyril Féraud', 'Joséphine', 'John Isner', 'Eléphant'],
  },
  {
    question:
      "Qui fut de 27 avant notre ère jusqu'à l'an 14 de notre ère le tout premier empereur romain ?",
    answer: 'Auguste',
    options: ['Auguste', 'Handball', 'Chaton', 'Rickshaw'],
  },
  {
    question:
      "Quel scientifique au centre d'un film réalisé par Christopher Nolan est le principal concepteur de la bombe atomique au sein du projet Manhattan ?",
    answer: 'Oppenheimer',
    options: ['Oppenheimer', 'Tartan', 'Angélique', 'Bronze'],
  },
  {
    question:
      'Quel mot est commun au slogan en Iran créé pour la défense des femmes et à la devise française ?',
    answer: 'Liberté',
    options: ['Liberté', 'Acide acétique', 'Sulky', 'K2'],
  },
  {
    question:
      "Quel chanteur de reggaeton portoricain, de son vrai nom Benito Antonio Martinez Ocasio a donné un concert de la mi-temps du Super Bowl 2026 ? Avec plus de 15,8 milliards de streams l'année dernière, il est l'artiste le plus écouté de l'année 2025.",
    answer: 'Bad Bunny',
    options: ['Bad Bunny', 'Rouge', 'Streaker', 'Adolescence'],
  },
  {
    question:
      'Quel animal marin ayant laissé son nom à une marque de sel peut-être à bec, bleue, ou à bosses ?',
    answer: 'Baleine',
    options: ['Baleine', 'Skyrim', 'Auguste', 'Acide acétique'],
  },
  {
    question: 'Quelle est la couleur du drapeau que votre adversaire agite s’il compte se rendre ?',
    answer: 'Blanc',
    options: ['Blanc', 'Bayern', 'Microsoft', 'Doechii'],
  },
  {
    question:
      'Quelle école d’architecture qui fut dirigée par Ludwig Mies van der Rohe jusqu’à sa fermeture en 1933 fut fondée à Weimar par Walter Gropius ?',
    answer: 'Bauhaus',
    options: ['Bauhaus', 'Place de la Concorde', 'PSP', 'Palindrome'],
  },
  {
    question:
      "Quelle franchise évoluant en National Football League et basée à Seattle a remporté le Super Bowl LX face aux New England Patriots sur un score de 29 à 13 ? Il s'agit de leur deuxième victoire au Super Bowl, la première étant en 2013.",
    answer: 'Seahawks',
    options: ['Seahawks', 'ScoobyDoo', 'Chaebol', 'T'],
  },
  {
    question:
      'Quel nom du choc initial au début d’un combat entre sumotoris est aussi celui d’une entreprise pionnière du jeu-vidéo fondée en 1972 ?',
    answer: 'Atari',
    options: ['Atari', 'Tokyo Drift', 'Pays-Bas', 'Fun'],
  },
  {
    question:
      'Quelle série Netflix d’animation créée par Raphael Bob-Waksberg met en scène un cheval acteur connu pour avoir joué dans la sitcom fictive Galipettes en famille ?',
    answer: 'Bojack Horseman',
    options: ['Bojack Horseman', 'Nolwenn Leroy', 'Bichon', 'Tibo InShape'],
  },
  {
    question:
      'Comment nommait-on, dans la Rome antique, les protecteurs des magistrats à imperium, qui possédaient notamment des faisceaux ? Ces faisceaux sont présents sur les armoiries de la France, elles-mêmes présentes sur tous les passeports français.',
    answer: 'Licteur',
    options: ['Licteur', 'Antigone', 'V', 'Banane'],
  },
  {
    question:
      'Quelle constellation étant également présente dans le zodiaque a pour étoile la plus brillante celle nommée Aldébaran ?',
    answer: 'Taureau',
    options: ['Taureau', 'Charlie Hebdo', 'Chaebol', 'L’America'],
  },
  {
    question:
      'Quelle ville abritant le palais des vents est la capitale de l’état indien du Rajasthan ?',
    answer: 'Jaipur',
    options: ['Jaipur', 'Newton', 'Melodica', 'The Voice'],
  },
  {
    question:
      'Quel groupe de blues rock étasunien était mené par le membre du funeste Club des 27 Alan Wilson ? Formé en 1965, le groupe a eu pour grands "On the road again" et "Going Up the Country".',
    answer: 'Canned Heat',
    options: ['Canned Heat', 'Carrefour', 'Inde', 'Blanc'],
  },
  {
    question:
      'Portant un nom signifiant peau de sable, quel chien d’origine chinoise est caractérisé par une peau plissée ?',
    answer: 'Shar Pei',
    options: ['Shar Pei', 'Blind Test', 'Bauhaus', 'Fun'],
  },
  {
    question:
      'Quelle étoffe de laine typique des peuples celtes, constituée de carreaux de couleurs avec des lignes entrecroisées et de multiples couleurs, est traditionnellement utilisée pour la confection des kilts écossais ?',
    answer: 'Tartan',
    options: ['Tartan', 'Andy Jassy', 'Wellington', 'Palindrome'],
  },
  {
    question:
      'Quelle trilogie littéraire également adaptée au cinéma a pour deuxième et troisième volumes "Les Deux Tours" et "Le Retour du Roi" ?',
    answer: 'Le Seigneur des Anneaux',
    options: ['Le Seigneur des Anneaux', '4chan', 'Artus', 'Orange'],
  },
  {
    question:
      'Quel art martial a été codifié par le japonais Jigorō Kanō ? Ce sport fut le premier art martial japonais à intégrer le programme des Jeux Olympiques en 1964.',
    answer: 'Judo',
    options: ['Judo', 'Gâche', 'Thomas Sydenham', 'Canned Heat'],
  },
  {
    question:
      'Quel anglicisme désigne le fait de faire défiler un contenu sur un écran informatique ?',
    answer: 'Scroller',
    options: ['Scroller', 'Cyril Féraud', 'Cap Nord', 'Marathon'],
  },
  {
    question:
      'Quelle actrice apparaissant dans Aquaman est l’ex-épouse de Johnny Depp et lui fut opposée dans un procès retentissant ?',
    answer: 'Amber Heard',
    options: ['Amber Heard', 'Gaufre', 'Handball', 'V'],
  },
  {
    question:
      'Quel roi français fut surnommé Le Prudhomme ou bien, à partir de 1297, Saint Louis ? Quel était donc le numéro de règne du Louis dont le surnom actuel est Saint Louis ?',
    answer: 'Louis IX',
    options: ['Louis IX', 'Iran', 'Charlie Hebdo', 'Bus'],
  },
  {
    question:
      'Dans l’appareil digestif, quel tube transporte les aliments solides vers l’estomac ?',
    answer: 'Oesophage',
    options: ['Oesophage', 'Kevlar', '8', 'Chirac'],
  },
  {
    question:
      "Quel nom est partagé par un quartier de Montpellier et par une héroïne de Sophocle ? L'architecte de ce quartier souhaité par l'ancien maire Georges Frêche est le catalan Ricardo Bofill.",
    answer: 'Antigone',
    options: ['Antigone', 'Ibra', 'One Direction', 'Pyrénées-Atlantiques'],
  },
  {
    question:
      'Ayant utilisé un temps l’alter-ego de Sasha Fierce, quelle chanteuse texane, sœur de Solange Knowles appartenait au groupe Destiny’s Child ?',
    answer: 'Beyoncé',
    options: ['Beyoncé', 'Troie', 'Rembrandt', 'Kitty'],
  },
  {
    question:
      'Quel nom anglais désignant une personne préposée à la garde temporaire de votre chien est formé sur le modèle de baby-sitter ?',
    answer: 'Dog-sitter',
    options: ['Dog-sitter', 'Clash', 'Jules Verne', 'Jaune'],
  },
  {
    question:
      'Quel animal est associé au terme de queue dans la dénomination d’une petite lime ainsi que d’une coiffure caractérisée par une mèche longue à l’arrière du crâne ?',
    answer: 'Rat',
    options: ['Rat', 'Globe Trotter', 'SpiderMan', 'Rembrandt'],
  },
  {
    question:
      'Avec Imbolc, Beltaine et Lugnasad, quelle était la quatrième grande fête annuelle chez les Celtes, considérée parfois, et probablement à tort, comme l’ancêtre d’Halloween ?',
    answer: 'Samain',
    options: ['Samain', 'SpiderMan', 'Olympe de Gouges', 'Antigone'],
  },
  {
    question:
      'Quel cycliste espagnol détient avec 4 victoires le record de victoires sur la Vuelta en 2000, 2003, 2004 et 2005 ? Sa quatrième victoire lui fut retirée pour dopage avant de lui être finalement réattribuée en 2012.',
    answer: 'Roberto Heras',
    options: ['Roberto Heras', 'Invader', 'Tulipe', 'Vivaldi'],
  },
  {
    question:
      "Quel sport est dit « for two » dans le titre de ce qui est généralement considéré comme le premier jeu vidéo de l'Histoire, conçu en 1958 par William Higinbotham et développé par Robert Dvorak ? Il fut développé sur un ordinateur analogique et relié à un oscilloscope qui servait d'écran.",
    answer: 'Tennis',
    options: ['Tennis', 'rue Morgue', 'Trottoir', 'Dionysos'],
  },
  {
    question:
      'De quel épisode de Fast and Furious les Teriyaki Boyz sont-ils à l’origine du thème musical ? Vous pouvez soit donner le nom du film soit le numéro.',
    answer: 'Tokyo Drift',
    options: ['Tokyo Drift', 'Andy Jassy', 'World of Warcraft', 'Atèle'],
  },
  {
    question:
      "Quelle arme, ancêtre de l’arquebuse, possède un nom dérivé de celui d'un serpent non-venimeux présent en France ? Cette pièce d'artillerie était un canon à main pouvant tirer des boulets de pierre ou de métal.",
    answer: 'Couleuvrine',
    options: ['Couleuvrine', 'Kaaba', '28', 'Bénarès'],
  },
  {
    question:
      'Ayant pour nom latin stapes, lequel des osselets est le plus petit et le plus léger os du corps humain ?',
    answer: 'Etrier',
    options: ['Etrier', 'A7', 'Rennes', 'Philippines'],
  },
  {
    question:
      'Nommé Kortz Center dans GTA V, dans quelle ville des USA se situe le campus culturel et de recherche fondé en 1997 nommé Getty Center ?',
    answer: 'Los Angeles',
    options: ['Los Angeles', 'Spare', 'Lassie', 'K2'],
  },
  {
    question:
      'Quel nom porte l’interlude orchestral du troisième acte du "Conte du Tsar Saltan", opéra composé en 1900 par Nikolaï Rimski-Korsakov ?',
    answer: 'Le Vol du Bourdon',
    options: ['Le Vol du Bourdon', 'Bâtonnier', 'Les Voyages de Gulliver', 'Massive Attack'],
  },
  {
    question:
      'Quel botaniste et zoologiste allemand né en 1709 a laissé son nom à une espèce de pygargue, une espèce d’otarie et une vache de mer appelée rhytine ?',
    answer: 'Georg Wilhelm Steller',
    options: ['Georg Wilhelm Steller', 'Fado', 'Est', 'Phare de Cordouan'],
  },
  {
    question:
      'Quel nom désigne l’art japonais du papier découpé, par opposition à l’art du papier plié nommé origami ?',
    answer: 'Kirigami',
    options: ['Kirigami', 'Adolescence', 'Gaufre', 'Sumo'],
  },
  {
    question:
      "Dans la mythologie grecque, quel fils d’Eson et de Polymédé est à la tête des Argonautes ? Leur objectif est d'aller récupérer la Toison d'Or en Colchide.",
    answer: 'Jason',
    options: ['Jason', 'Philippines', 'Venus', 'Dormeur'],
  },
  {
    question:
      'Quel prénom partagent les sportifs français nommés Vauquelin en cyclisme, Séraphin en basket et Mayer en décathlon ?',
    answer: 'Kévin',
    options: ['Kévin', 'Martin Fourcade', 'Tennis', 'Gotaga'],
  },
  {
    question:
      'Quelle lettre est associée à Mister dans le pseudonyme sur internet d’Yvick Le Texier ?',
    answer: 'V',
    options: ['V', 'Jules Verne', '46', 'Gmail'],
  },
  {
    question:
      'Quel héros de Disney accompagné du singe cleptomane Abu, est l’ennemi de Jafar et vole sur un tapis avec Jasmine ?',
    answer: 'Aladdin',
    options: ['Aladdin', 'Triangulaire', 'Ernst Gräfenberg', 'Siamois'],
  },
  {
    question:
      'Quel perche utilisée pour faire tomber les fruits des arbres est homonyme d’une région historique conquise par Jules César ?',
    answer: 'Gaule',
    options: ['Gaule', 'Los Angeles', 'John Adams', 'Kevlar'],
  },
  {
    question:
      'Quel nom porte la marque blanche à la base de l’ongle, en forme de croissant de lune ?',
    answer: 'Lunule',
    options: ['Lunule', 'Shar Pei', 'Cyril Féraud', 'Eiffel65'],
  },
  {
    question:
      'Quelle ville originellement appelée Ville-Marie est la plus peuplée de la province canadienne du Québec ?',
    answer: 'Montréal',
    options: ['Montréal', 'Grain de beauté', 'Bad Bunny', 'Chimpanzés'],
  },
  {
    question:
      'Associé à "Jones" dans le nom d’un groupe de punk-rock français, quel nom Haribo a-t-il donné à ses bonbons en forme de fraise ?',
    answer: 'Tagada',
    options: ['Tagada', 'Le Vol du Bourdon', 'Tachkent', 'Chaton'],
  },
  {
    question: 'Quel fruit a pour variétés la kankanbou, la corne, la Cavendish et la plantain ?',
    answer: 'Banane',
    options: ['Banane', 'Colombe', 'Antigone', 'Bar'],
  },
  {
    question:
      'Quelle spécialité culinaire française d’un poids de 250 grammes a été classée par l’Unesco en 2022 ?',
    answer: 'Baguette de pain',
    options: ['Baguette de pain', 'Bar', 'Saint-Dié-des-Vosges', 'Pascal Légitimus'],
  },
  {
    question:
      "À quel compositeur doit-on l’opéra Nixon in China représenté pour la première fois en 1987 ? Il est le parfait homonyme d'un président étasunien.",
    answer: 'John Adams',
    options: ['John Adams', 'Bauhaus', 'Truffe', 'Konami'],
  },
  {
    question:
      'Par quel nom anglais désigne-t-on un exhibitionniste rentrant sur le terrain pendant un match de sport ? L\'équivalent québécois de ce terme anglais est "nu-vite".',
    answer: 'Streaker',
    options: ['Streaker', 'TrackMania', 'Wellington', 'Louis IX'],
  },
  {
    question: 'Quel homme d’affaires américain a succédé à Jeff Bezos à la tête d’Amazon en 2021 ?',
    answer: 'Andy Jassy',
    options: ['Andy Jassy', 'Dharamsala', 'Cockpit', 'Index'],
  },
  {
    question:
      'Quel personnage de roman pour la jeunesse fut créé par Eric Knight en 1938 avant d’être interprété par Pal en 1943 ?',
    answer: 'Lassie',
    options: ['Lassie', 'Newton', 'Frégate', 'Iron Man'],
  },
  {
    question:
      'Quel nom partagent un anarchiste ayant jeté une bombe dans la chambre des députés français en 1893 et un pigeon voyageur de la Seconde Guerre mondiale auquel un film a été consacré en 2005 ?',
    answer: 'Vaillant',
    options: ['Vaillant', 'HPI', 'Korrigan', 'Barbie'],
  },
  {
    question:
      'Quel instrument de musique à vent datant du paléolithique se servant du frottement de l’air pour produire un son a le même nom que l’ancienne dénomination du losange ?',
    answer: 'Rhombe',
    options: ['Rhombe', 'Kafka', 'Atari', 'Diogène'],
  },
  {
    question:
      "Quelle ville de l'Indre dans laquelle se situe le château ayant appartenu à Talleyrand a laissé son nom à un fromage pyramidal tronqué ?",
    answer: 'Valençay',
    options: ['Valençay', 'Thymine', 'Cap Nord', 'Domrémy-la-Pucelle'],
  },
  {
    question:
      'Quel groupe originaire de Bristol dont le chanteur est Robert del Naja, fondateur du style trip hop, a sorti l’album Mezzanine en 1998 ?',
    answer: 'Massive Attack',
    options: ['Massive Attack', 'Ponte', 'Vitamine D', 'Suavemente'],
  },
  {
    question: 'Par quel nom sont plus couramment désignés les arachnides appelés opilions ?',
    answer: 'Faucheurs',
    options: ['Faucheurs', 'Suavemente', 'Andy Jassy', '4chan'],
  },
  {
    question:
      'Pouvant faire preuve d’une extrême générosité et également capable d’horribles vengeances, quelle créature légendaire du folklore breton est généralement comparée à un lutin ?',
    answer: 'Korrigan',
    options: ['Korrigan', 'Jaune', 'Usain Bolt', 'PSP'],
  },
  {
    question:
      'Dans le conte de Perrault, en quoi les chevaux du carrosse de Cendrillon se transforment-ils passé minuit ?',
    answer: 'En souris',
    options: ['En souris', 'Etrier', '28', 'Ham'],
  },
  {
    question:
      "Quelle nouvelle règle d’exclusion temporaire au rugby est aussi le nom d’un obstacle de sable au golf ? Ce terme issu de l'anglais désigne aussi un espace fortifié.",
    answer: 'Bunker',
    options: ['Bunker', 'Darwin', 'K2', 'Liberté'],
  },
  {
    question:
      'Quel acronyme de trois lettres associé à une carte à puce insérée dans un téléphone signifie Subscriber Identity Module ?',
    answer: 'SIM',
    options: ['SIM', 'K2', 'Tigre', 'Rhombe'],
  },
  {
    question:
      'Quel jour de la semaine constitue le prénom de la fille Adams incarnée Lisa Loring, Christina Ricci puis par Jenna Ortega dans une série dédiée réalisée par Tim Burton ?',
    answer: 'Mercredi',
    options: ['Mercredi', 'Sulky', 'Black M', 'Jason'],
  },
  {
    question:
      "Quel nom a-t-on donné au scandale d'espionnage révélé par deux journalistes du Washington Post, Bob Woodward et Carl Bernstein, ayant conduit à la démission de Richard Nixon en 1974 du poste de président des USA ?",
    answer: 'Watergate',
    options: ['Watergate', 'Lee Miller', 'SIM', 'Koh Lanta'],
  },
  {
    question:
      'Quelle vitamine, également connue sous le nom de calciférol est synthétisée par le corps humain suite à une exposition au Soleil ?',
    answer: 'Vitamine D',
    options: ['Vitamine D', 'Emeraude', 'Nord', '28'],
  },
  {
    question:
      'Quel département français a pour sous-préfectures Oloron-Sainte-Marie ainsi que la ville de Bayonne ?',
    answer: 'Pyrénées-Atlantiques',
    options: ['Pyrénées-Atlantiques', 'The Shining', 'Gotaga', 'Couteau'],
  },
  {
    question:
      'De quel personnage de la série Heroes s’est inspirée la chanteuse Aya Coco Danioko pour son pseudonyme ?',
    answer: 'Nakamura',
    options: ['Nakamura', 'Rouge', 'Staccato', 'Figaro'],
  },
  {
    question:
      'Quelle plante du genre citrullus à la chair allant du jaune au rouge vif est parfois appelée melon d’eau ?',
    answer: 'Pastèque',
    options: ['Pastèque', 'Barbie', 'Staccato', 'Yo-yo'],
  },
  {
    question:
      'Selon une expression signifiant que les médisances ne vous atteignent pas, quel animal n’est pas atteint par la bave du crapaud ?',
    answer: 'Colombe',
    options: ['Colombe', 'Emeraude', 'Grain de beauté', 'V'],
  },
  {
    question:
      'Quel philosophe cynique qui vivait selon la légende dans un tonneau aurait dit à Alexandre le Grand de s’ôter de son Soleil ?',
    answer: 'Diogène',
    options: ['Diogène', 'Darwin', 'Stéphane', 'Liberté'],
  },
  {
    question:
      "Face à quel tennisman étasunien Nicolas Mahut a-t-il perdu le plus long match de l’histoire de son sport lors du tournoi de Wimbledon en 2010 ? Ce match a duré 11 heures et 5 minutes, s'est étendu sur trois jours et s'est terminé sur le score de 6-4, 3-6, 67-7, 7-63, 70-68, le français ayant perdu cette rencontre.",
    answer: 'John Isner',
    options: ['John Isner', 'Linkin Park', 'Samothrace', 'Cyril Féraud'],
  },
  {
    question:
      'Ayant pour véritable nom Corentin Houssein et fondateur de Gentle Mates, quel streamer français surnommé The French Monster est un ancien joueur professionnel de Call of Duty et le plus titré sur console ?',
    answer: 'Gotaga',
    options: ['Gotaga', 'Chameau', 'Dog-sitter', 'Avion'],
  },
  {
    question:
      'Tenant également le rôle principal de la série Californication, quel acteur a incarné Fox Mulder aux côtés de Gillian Anderson dans X-Files : aux frontières du réel ?',
    answer: 'David Duchovny',
    options: ['David Duchovny', 'César', 'Streaker', '1997'],
  },
  {
    question:
      'Au cours de quel conflit ont eu lieu les batailles d’Antietam, étant le premier grand affrontement du conflit ; de Gettysburg voyant le général Meade remporter la victoire face à Robert E. Lee ? La campagne d’Appomatox, deux ans après Gettysburg, la reddition du général Lee.',
    answer: 'Guerre de Sécession',
    options: ['Guerre de Sécession', 'John Isner', 'Antigone', 'Sumo'],
  },
  {
    question:
      'Quelle espèce de moustique transmet le parasite du genre plasmodium responsable du paludisme ? Son nom vient du grec signifiant "sans bénéfice"',
    answer: 'Anophèle',
    options: ['Anophèle', 'Rodin', 'Louis XV', 'Dalton'],
  },
  {
    question:
      "Quelle ville ayant fait l'objet d'un très célèbre récit a son site archéologue situé à Hissarlik, nom signifiant en truc \"lieu de la forteresse\". La ville était également appelée Ilios ou Ilion à l'époque antique.",
    answer: 'Troie',
    options: ['Troie', 'Pauline Ferrand-Prévot', 'A7', 'Valençay'],
  },
  {
    question:
      'Quel label de musique fondé par Suge Knight et Dr. Dre, label phare du gangsta rap étasunien des années 1990 porte un nom anglais faisant référence au couloir de la mort ?',
    answer: 'Death Row Records',
    options: ['Death Row Records', 'Andy Jassy', 'Suavemente', 'En éventail'],
  },
  {
    question:
      'Quel autre nom donné au genre de singes surnommé singe-araignée est homophone d\'un synonyme du mot "orthèse" ? Ce singe-araignée est surnommé comme tel du fait de la longueur de ses membres, dont sa queue préhensile.',
    answer: 'Atèle',
    options: ['Atèle', 'Fromage', 'Black M', 'Atari'],
  },
  {
    question:
      'Quel adverbe latin signifiant « selon les termes exacts » est également le nom d’une marque produisant notamment des CD et des DVD ?',
    answer: 'Verbatim',
    options: ['Verbatim', 'Dormeur', 'Konami', 'Aimé Césaire'],
  },
  {
    question:
      'Quel écrivain français né à Nantes en 1828, ville dans laquelle se trouve un musée portant son nom, est l\'auteur de "Vingt Mille Lieues sous les Mers" ou "Le Tour du Monde en 80 Jours" ?',
    answer: 'Jules Verne',
    options: ['Jules Verne', 'Bad Bunny', 'Roberto Heras', 'Johnny Cash'],
  },
  {
    question:
      'Quel prénom les sportifs français nommés Caristan, Traineau et Diagana partagent-ils ? Caristan et Diagana étaient des athlètes et Traineau était lui judoka.',
    answer: 'Stéphane',
    options: ['Stéphane', 'T', 'Bâtonnier', 'Oppenheimer'],
  },
  {
    question:
      'Quel pseudonyme le fils de Guy Carlier a-t-il choisi pour s’associer à McFly dans le nom de leur chaîne YouTube ?',
    answer: 'Carlito',
    options: ['Carlito', 'Index', 'Shogun', 'Ayrton Senna'],
  },
  {
    question:
      'Quel personnage fut incarné par Gene Wilder en 1971 ainsi que par Johnny Depp en 2005 dans les films Charlie et la Chocolaterie ? Ce personnage fut également interprété par Timothée Chalamet dans un film dédié réalisé par Paul King en 2023.',
    answer: 'Willie Wonka',
    options: ['Willie Wonka', 'Jazz', 'Abracadabra', 'Beyoncé'],
  },
  {
    question:
      'Dans les locaux de quel journal satirique français eut lieu, le 7 janvier 2015, un attentat ayant ôté la vie de 12 personnes ?',
    answer: 'Charlie Hebdo',
    options: ['Charlie Hebdo', 'Index', 'Streaker', 'David Duchovny'],
  },
  {
    question:
      'Quelle coordonnée servant à définir la position d’un point le représentant verticalement est opposée à l’abscisse ?',
    answer: 'Ordonnée',
    options: ['Ordonnée', 'Chaebol', 'Domrémy-la-Pucelle', '46'],
  },
  {
    question:
      "Bien que Los Angeles et San Francisco soient les deux villes les plus peuplées de cet état, quelle ville est la capitale de l'état étasunien de la Californie ?",
    answer: 'Sacramento',
    options: ['Sacramento', 'First-Person Shooter', 'Roberto Heras', 'Iran'],
  },
  {
    question:
      'Quel style musical a vu son aventure retracée dans un documentaire de Louis Panassié de 1972 mettant en scène Duke Ellington et Louis Armstrong notamment ?',
    answer: 'Jazz',
    options: ['Jazz', 'Kevlar', 'Diogène', 'Inde'],
  },
  {
    question:
      'Pouvant être appelé rhinarium, quelle partie d’un animal peut aussi être un champignon du Périgord ?',
    answer: 'Truffe',
    options: ['Truffe', 'Orange', 'Inde', 'Ayrton Senna'],
  },
  {
    question:
      'Quelle enseigne de grande surface française tire son nom du fait que son premier magasin était situé à un croisement de routes ?',
    answer: 'Carrefour',
    options: ['Carrefour', 'Cyril Féraud', 'Banane', 'Nectarine'],
  },
  {
    question: 'Quel roman satirique datant de 1721 met en scène un personnage prénommé Lemuel ?',
    answer: 'Les Voyages de Gulliver',
    options: ['Les Voyages de Gulliver', 'Chirac', 'Thymine', 'Boccia'],
  },
  {
    question:
      'Quel footballeur né en 1957 à Amnéville fut, pendant la nuit de Séville, percuté par le gardien allemand Harald Schumacher avant de sortir sur civière ?',
    answer: 'Patrick Battiston',
    options: ['Patrick Battiston', 'Watergate', 'Saint-Marin', 'Auguste'],
  },
  {
    question:
      'Quelle plate-forme de distribution en ligne de jeux vidéo développée par Valve et au logo bleu porte un nom anglais signifiant vapeur ?',
    answer: 'Steam',
    options: ['Steam', 'En souris', 'Orange', 'Andy Jassy'],
  },
  {
    question:
      'Incarné par John Hillerman, dans quelle série John Quayle Higgins III est-il le majordome ? Ce personnage généralement désigné par le simple nom de Higgins est apparu dans une série diffusée entre 1980 et 1988.',
    answer: 'Magnum',
    options: ['Magnum', 'Nolwenn Leroy', 'Coeliaque', 'Polyphème'],
  },
  {
    question:
      'Quel pays africain constituait le protectorat britannique du Bechuanaland entre 1885 et son indépendance en 1966 ? On cherche le nom actuel du pays.',
    answer: 'Botswana',
    options: ['Botswana', 'Haul', 'Skyrim', 'Jacaranda'],
  },
  {
    question:
      'Quel médecin anglais du XVIIe siècle est associé dans l’autre nom de la danse de Saint-Guy au terme de chorée ?',
    answer: 'Thomas Sydenham',
    options: ['Thomas Sydenham', 'Willie Wonka', 'Streaker', 'Pétrichor'],
  },
  {
    question:
      'Dans quel pays se trouve la municipalité d’Eeyou Istchee Baie-James, plus grande ville du monde par sa superficie avec 335 000 km² ?',
    answer: 'Canada',
    options: ['Canada', 'A7', 'Jason', 'Marc-Antoine Charpentier'],
  },
  {
    question:
      'Quelle chanteuse londonienne née en 1999 et interprète des titres "Man I need", "So Easy (To fall in love)" ou "Nice to each other" a reçu le Grammy Award de la meilleure nouvelle artiste de l\'année en 2026 ?',
    answer: 'Olivia Dean',
    options: ['Olivia Dean', 'Fado', 'Vivaldi', 'Woodrow Wilson'],
  },
  {
    question:
      'Également appelé cycloptère, quel nom désigne un animal dont les œufs constituent un succédané du caviar ?',
    answer: 'Lump',
    options: ['Lump', 'Spare', 'Hallux', 'Orange'],
  },
  {
    question:
      'Quel terme désignant un joueur de baccarat est également un personnage influent dans la mafia ?',
    answer: 'Ponte',
    options: ['Ponte', 'Colombe', 'Siamois', 'Seahawks'],
  },
  {
    question:
      'Représenté surprenant Galatée dans les bras d\'Acis dans une sculpture de la fontaine Médicis réalisée par Auguste Ottin, quel cyclope de la mythologie grecque également associé au mythe d\'Ulysse porte un nom signifiant "qui parle beaucoup" ou "dont on parle beaucoup" ?',
    answer: 'Polyphème',
    options: ['Polyphème', 'Hôpital', 'Adidas et Puma', 'Daniel Balavoine'],
  },
  {
    question:
      'Dans quelle ville se situe le stade appelé Roazhon Park, sachant que Roazhon est le nom de la ville en langue bretonne ?',
    answer: 'Rennes',
    options: ['Rennes', 'Motus', 'Woodrow Wilson', 'Bataille d’Iéna'],
  },
  {
    question: 'Quel est le service de messagerie électronique lancé en avril 2004 par Google ?',
    answer: 'Gmail',
    options: ['Gmail', 'Hallux', 'PSP', 'Beowulf'],
  },
  {
    question:
      'Interprétée dans un film de Greta Gerwig par Margot Robbie, quelle poupée fut créée en 1959 ?',
    answer: 'Barbie',
    options: ['Barbie', 'Echo', 'Russe', 'Tokyo Drift'],
  },
  {
    question:
      'De quel appareil l\'invention est-elle contestée entre Clément Ader et son "Eole" datant de 1891 et le "Flyer" des frères Wright datant de 1903 ?',
    answer: 'Avion',
    options: ['Avion', 'Canada', 'Groom', 'Pyrénées-Atlantiques'],
  },
  {
    question:
      'Quel scientifique anglais du XVIIe siècle est à l\'origine en 1687, dans son ouvrage "Philosophiæ naturalis principia mathematica", de la description de la loi universelle de la gravitation ?',
    answer: 'Newton',
    options: ['Newton', 'Ordonnée', 'Auguste', 'Olympe de Gouges'],
  },
  {
    question: 'Quel état des USA est homonyme d’un pays situé dans le Caucase ?',
    answer: 'Géorgie',
    options: ['Géorgie', 'Pauline Ferrand-Prévot', 'Aimé Césaire', 'Massive Attack'],
  },
  {
    question:
      'Héroïne de la série de TF1 Brocéliande, à quelle chanteuse native de la région doit-on l’album « Bretonne » ?',
    answer: 'Nolwenn Leroy',
    options: ['Nolwenn Leroy', 'Epona', 'Louis-Napoléon Bonaparte', 'Pascal Légitimus'],
  },
  {
    question:
      'Quel animal est élevé dans le cadre de la cuniculture ou de la cuniculiculture ? Le terme est lié étymologiquement au mot "conil" qui désignait également l\'animal en ancien français.',
    answer: 'Lapin',
    options: ['Lapin', 'John Isner', 'Chenille', 'Pyrénées-Atlantiques'],
  },
  {
    question: 'Selon l’expression, lorsqu’on se la coule douce, comment sont les doigts de pied ?',
    answer: 'En éventail',
    options: ['En éventail', 'Rugby', 'Victor Hugo', 'Bâtonnier'],
  },
  {
    question:
      'Quel bédéiste né en 1934 et décédé en 2016 a créé les personnages de "Gai-Luron", "Les Aventures de Superdupont" et la "Rubrique-à-brac" ? Ce co-créateur des "Dingodossiers" avec René Goscinny a reçu le Grand Prix du Festival d\'Angoulême en 1991.',
    answer: 'Gotlib',
    options: ['Gotlib', 'The Turtles', 'Massive Attack', 'Lump'],
  },
  {
    question:
      'Quel sport dans lequel Aurélie Aubert fut championne paralympique en 2024 s’apparente à de la pétanque handisport et tire son nom de l’italien signifiant boule ?',
    answer: 'Boccia',
    options: ['Boccia', 'Johnny Cash', 'Pastèque', 'Scroller'],
  },
  {
    question:
      'Quel tanuki est un agent immobilier à qui l’on doit rembourser des dettes apparaissant dans le jeu vidéo Animal Crossing ?',
    answer: 'Tom Nook',
    options: ['Tom Nook', 'Pascal Légitimus', 'Joséphine', 'Sauce Aurore'],
  },
  {
    question:
      "Présentée par Elisabeth Quin, combien de minutes l’émission d’Arte comporte-t-elle dans son titre ? Malgré son titre, l'émission peut durer jusqu'à 46 minutes désormais.",
    answer: '28',
    options: ['28', 'Epona', 'Pangramme', 'Jason'],
  },
  {
    question:
      'Quelle femme, interprétée par Alicia Vikander dans le film Le Jeu de la Reine de Karim Aïnouz fut la sixième et dernière épouse d’Henri VIII ? Elle est également la troisième à porter ce prénom.',
    answer: 'Catherine Parr',
    options: ['Catherine Parr', 'Benito Mussolini', 'Mer de la Tranquillité', 'Saké'],
  },
  {
    question: 'Quel adjectif autre qu’éthanoïque qualifie l’acide composant le vinaigre ?',
    answer: 'Acide acétique',
    options: ['Acide acétique', 'Magnum', 'Tulipe', 'Boccia'],
  },
  {
    question:
      "Quelle ville surnommée la petite Lhassa est la ville de résidence du Dalaï-lama depuis son exil du Tibet en 1959 ? Elle est située dans l'état de l'Himachal Pradesh, dans le nord de l'Inde.",
    answer: 'Dharamsala',
    options: ['Dharamsala', 'Pangramme', 'Souris', 'Ciao Kombucha'],
  },
  {
    question:
      'De QUEL GROUPE formé en 2008 Nate Ruess, qui a chanté en duo sur la chanson "Just Give Me A Reason" avec Pink était-il le chanteur ? Ce groupe a notamment connu le succès avec la chanson "We are young" avec Janelle Monáe et a pour nom un adjectif anglais également utilisé dans la langue française.',
    answer: 'Fun',
    options: ['Fun', 'Willie Wonka', 'Tuffeau', 'Konami'],
  },
  {
    question:
      'Quel animal possédant une espèce dite dorée proche du manchot, parfois appelé manchot à aigrettes, vit, tout comme lui, en Antarctique ?',
    answer: 'Gorfou',
    options: ['Gorfou', 'Vaillant', 'Ernst Gräfenberg', 'Roberto Heras'],
  },
  {
    question:
      'À l’instar de Samsung, quel nom désigne un conglomérat sud-coréen de domaines variés, entretenant des participations croisées, dirigé par la famille fondatrice ?',
    answer: 'Chaebol',
    options: ['Chaebol', 'Cap Nord', 'SpiderMan', 'Doechii'],
  },
  {
    question:
      'Ayant laissé son nom au grand rideau des théâtres, quel personnage de la Commedia dell’arte est connu pour ses costumes colorés ?',
    answer: 'Arlequin',
    options: ['Arlequin', 'Sodium', 'Sheila', 'Lusitanie'],
  },
  {
    question:
      'Quel créateur et organisateur de la Kings World Cup de football est l’ancien compagnon de la chanteuse colombienne Shakira ?',
    answer: 'Pique',
    options: ['Pique', 'Martin Fourcade', 'Skyrim', 'Pays-Bas'],
  },
  {
    question:
      'Quelle archéologue et aventurière est l\'héroïne principale de la série de jeux vidéo "Tomb Raider" ? Elle a été incarnée au cinéma par Angelina Jolie puis par Alicia Vikander.',
    answer: 'Lara Croft',
    options: ['Lara Croft', 'John Adams', 'Kaizen', 'Streaker'],
  },
  {
    question:
      'Dans quelle série télévisée diffusée à partir de 2006 Miley Stewart était-elle incarnée par Miley Cyrus ?',
    answer: 'Hannah Montana',
    options: ['Hannah Montana', 'Bayern', 'Géorgie', '1984'],
  },
  {
    question:
      "Ayant permis l'organisation d'un débarquement en Normandie en juin 1944, DANS QUEL PAYS s'est tenue la première rencontre réunissant Winston Churchill, Joseph Staline et Franklin D. Roosevelt entre novembre et décembre 1943 lors de la Conférence de Téhéran ?",
    answer: 'Iran',
    options: ['Iran', 'Pays-Bas', 'Bénarès', 'Eléphant'],
  },
  {
    question:
      "De quel pays est originaire un taïkonaute ? Chaque pays possède sa variante nationale du terme d'astronaute qui lui est propre aux USA.",
    answer: 'Chine',
    options: ['Chine', 'Chrome', 'Amiante', 'Rennes'],
  },
  {
    question:
      'Quelle ville devant son nom à Arthur Wellesley, militaire et homme politique anglais du XIXe siècle, est la troisième ville la plus peuplée de Nouvelle-Zélande ainsi que la capitale de son pays ?',
    answer: 'Wellington',
    options: ['Wellington', 'Tuffeau', 'Victor Hugo', 'Waterpolo'],
  },
  {
    question:
      "Quelle formule magique est également le titre d'une chanson de Lady Gaga datant de 2025 ? Elle est issue de l'album Mayhem et le clip fut présenté au cours de la cérémonie des Grammy Awards.",
    answer: 'Abracadabra',
    options: ['Abracadabra', 'Dionysos', 'Couleuvrine', 'Vitamine D'],
  },
  {
    question:
      'Quel poisson de la famille des moronidés peut aussi désigner un débit de boissons où les consommateurs s’appuient sur un comptoir ?',
    answer: 'Bar',
    options: ['Bar', 'Paul Verlaine', 'Usain Bolt', 'Viagra'],
  },
  {
    question:
      'Quel nom désignant la bile des animaux de boucherie est associée à des chevaliers dans un célèbre duo humoristique ?',
    answer: 'Fiel',
    options: ['Fiel', 'Rat', 'Bichon', 'Etrier'],
  },
  {
    question:
      "Dans quel art, le premier dans la classification des arts, se sont illustrés le mexicain Luis Barragán, l'australien Glenn Murcutt et le portugais Alvaro Siza, tous trois récipiendaires du prix Pritzker ?",
    answer: 'Architecture',
    options: ['Architecture', 'Palindrome', 'One Direction', 'Amber Heard'],
  },
  {
    question:
      "Quel sport, l'un des premiers sports collectifs à faire son apparition aux Jeux Olympiques, ce en 1900, voit ses pratiquants arborer des bonnets de bain blancs, bleus ou rouges pour les gardiens ?",
    answer: 'Waterpolo',
    options: ['Waterpolo', 'Nuremberg', 'Handball', 'Thomas Sydenham'],
  },
  {
    question:
      "Quel est le nom du cinquième opus de la série de jeux vidéo The Elder Scrolls ? Il suit directement l'opus nommé Oblivion et est sorti en 2011.",
    answer: 'Skyrim',
    options: ['Skyrim', 'Oasis', 'Anophèle', 'Ange'],
  },
  {
    question:
      'Quelle série adaptée d’un livre de James Clavell avec Anna Sawai et Hiroyuki Sanada a remporté l’Emmy Award de la meilleure série dramatique en 2024 ? Le livre avait déjà été adapté dans une mini-série de 1980 avec Richard Chamberlain et Toshirō Mifune.',
    answer: 'Shogun',
    options: ['Shogun', 'Trottoir', 'Carrefour', 'rue Morgue'],
  },
  {
    question:
      "Si l’âne représente le parti démocrate, quel animal de l'ordre des proboscidiens représente les républicains aux USA ?",
    answer: 'Eléphant',
    options: ['Eléphant', 'Gardon', 'Georges Méliès', 'Place de la Concorde'],
  },
  {
    question:
      "Quelle femme est la première française depuis Claudie Haigneré, il y a trente ans, à être partie pour l'espace, le 13 février ?",
    answer: 'Sophie Adenot',
    options: ['Sophie Adenot', 'Clermont-Ferrand', 'Suavemente', 'Jason'],
  },
  {
    question:
      'Quelle autoroute ayant laissé son nom à une mixtape et une chanson du rappeur SCH est surnommée autoroute du soleil ? Cette autoroute relie Oullins-Pierre-Bénite, à côté de Lyon, à Marseille. La réponse attend une lettre et un chiffre.',
    answer: 'A7',
    options: ['A7', 'Blockchain', 'Adolescence', 'Vitamine D'],
  },
  {
    question:
      "Ayant représenté Saint-Marin à l'Eurovision 2025 où il finit dernier, QUEL GROUPE ayant connu un succès international en 1999 fut cofondé par le DJ Gabry Ponte ?",
    answer: 'Eiffel65',
    options: ['Eiffel65', 'Forficule', 'Georg Wilhelm Steller', 'Pompon'],
  },
  {
    question:
      "Quel oiseau reconnaissable à son sac gulaire rouge est présent sur le drapeau des Kiribati ? Il porte le même nom qu'un type de bateau.",
    answer: 'Frégate',
    options: ['Frégate', 'Guerre de Sécession', 'Dalmatien', 'Bulgarie'],
  },
  {
    question:
      'Quel nom issu du grec signifiant "sang de la pierre" désigne l’odeur caractéristique de la terre après la pluie ?',
    answer: 'Pétrichor',
    options: ['Pétrichor', 'Massive Attack', 'Wellington', 'Tétrimino'],
  },
];
