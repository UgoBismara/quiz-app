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
  | 'Internet'
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
    question:
      'Quel pianiste chinois né en 1982 et parfois surnommé "La rockstar du classique" porte un nom rappelant deux fois l’organe charnu placé dans la bouche ?',
    answer: 'Lang Lang',
    options: ['Lang Lang', 'Yuja Wang', 'Khatia Buniatishvili', 'Daniil Trifonov'],
    theme: 'Musique',
  },
  {
    question:
      'Quel nom utilise-t-on au bowling lorsque l’on fait tomber les dix quilles en deux lancers ?',
    answer: 'Spare',
    options: ['Spare', 'Strike', 'Split', 'Turkey'],
    theme: 'Sport',
  },
  {
    question:
      "Quelle pâtisserie donne son nom à un petit fichier déposé sur le disque dur à l'insu de l'internaute, lors de la consultation de certains sites web, et qui conserve des informations en vue d'une connexion ultérieure ?",
    answer: 'Cookie',
    options: ['Cookie', 'Macaron', 'Brownie', 'Muffin'],
    theme: 'Sciences',
  },
  {
    question:
      'À quel réalisateur japonais doit-on les films "Rashōmon" en 1950 et "Les Sept Samouraïs" en 1954 ? Né en 1910 et décédé en 1998, il est considéré comme le cinéaste japonais le plus influent du XXe siècle.',
    answer: 'Akira Kurosawa',
    options: ['Akira Kurosawa', 'Yasujirō Ozu', 'Kenji Mizoguchi', 'Hayao Miyazaki'],
    theme: 'Cinéma',
  },
  {
    question:
      "Quel président des Etats-Unis a présenté, en janvier 1918, son programme des Quatorze Points, présentant ses solutions pour à la fois mettre fin à la Première Guerre mondiale et reconstruire l'Europe ? Les initiales de son prénom et de son nom sont identiques.",
    answer: 'Woodrow Wilson',
    options: ['Woodrow Wilson', 'Theodore Roosevelt', 'Franklin D. Roosevelt', 'Warren Harding'],
    theme: 'Histoire',
  },
  {
    question:
      'Quel adjectif qualifie la maladie auto-immune, caractérisée par une atrophie villositaire également appelée entéropathie au gluten ? Ce terme est dérivé du mot grec désignant le ventre ou les viscères. On l\'appelle "maladie _______"',
    answer: 'Coeliaque',
    options: ['Coeliaque', 'Chronique', 'Virale', 'Héréditaire'],
    theme: 'Sciences',
  },
  {
    question:
      "Quelle ville française abrite la Place de Jaude ? Cette place majeure de la ville abrite une statue de Vercingétorix réalisée par Auguste Bartholdi. Cette ville est la préfecture d'un département de la région abrégée en AURA.",
    answer: 'Clermont-Ferrand',
    options: ['Clermont-Ferrand', 'Limoges', 'Dijon', 'Poitiers'],
    theme: 'Géographie',
  },
  {
    question:
      'À quel groupe de musique italien doit-on notamment les titres "I wanna be your slave", "Baby Said", et "The Loneliest", après leur victoire à l’Eurovision 2021 ? Leur nom signifie "Clair de Lune" en danois.',
    answer: 'Måneskin',
    options: ['Måneskin', 'Il Volo', 'Negramaro', 'Subsonica'],
    theme: 'Musique',
  },
  {
    question:
      "Avec quelle plante, parfois appelée Herbe du Saint-Esprit, des religieuses originaires de la ville de Niort ont-elle réalisé une confiserie typique de la ville ? La plante et la confiserie partagent d’ailleurs le même nom, elle-même homonyme d'un prénom féminin.",
    answer: 'Angélique',
    options: ['Angélique', 'Verveine', 'Réglisse', 'Lavande'],
    theme: 'Cuisine',
  },
  {
    question:
      "Dans l’acronyme EHPAD désignant un type d'établissement d'hébergement, quel mot est représenté par la lettre D ?",
    answer: 'Dépendantes',
    options: ['Dépendantes', 'Durables', 'Domestiques', 'Déclarées'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Dans le manga écrit par Haruichi Furudate intitulé "Haikyū!!", quel sport est au centre de l\'intrigue ?',
    answer: 'Volleyball',
    options: ['Volleyball', 'Basketball', 'Handball', 'Baseball'],
    theme: 'Séries TV',
  },
  {
    question:
      'Quelle sportive française, championne du monde de la course en ligne cycliste en 2014, championne olympique de VTT en 2024, a remporté le Tour de France féminin en 2025 ?',
    answer: 'Pauline Ferrand-Prévot',
    options: ['Pauline Ferrand-Prévot', 'Jeannie Longo', 'Juliette Labous', 'Marion Rousse'],
    theme: 'Sport',
  },
  {
    question:
      "Développé dans le jeu vidéo Gradius, quelle société japonaise de développement et d'édition de jeux vidéo a laissé son nom au tout premier code de triche de l'Histoire, réutilisé à de nombreuses reprises dans d'autres jeux ?",
    answer: 'Konami',
    options: ['Konami', 'Nintendo', 'Capcom', 'Sega'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      "Quel acteur français s'est éteint dans le domaine de La Brûlerie, situé dans le Loiret, dans la ville de Douchy Montcorbon, où l'acteur a passé la fin de sa vie ?",
    answer: 'Alain Delon',
    options: ['Alain Delon', 'Jean-Paul Belmondo', 'Jean-Louis Trintignant', 'Philippe Noiret'],
    theme: 'Cinéma',
  },
  {
    question:
      "Sous quel nom de famille commun sont connus les frères hors-la-loi ayant sévi dans l'Ouest étasunien de 1890 à 1892 et impliqués dans un braquage à Coffeyville notamment ? Ces frères étaient connus sous les prénoms de Bob, Grat, Bill et Emmett et ils ont inspiré de célèbres gangsters de fiction.",
    answer: 'Dalton',
    options: ['Dalton', 'James', 'Younger', 'Earp'],
    theme: 'Histoire',
  },
  {
    question:
      "De quelle espèce animale la britannique Jane Goodall était-elle spécialiste ? Cette éthologue décédée en 2025 s'était installée en Tanzanie en 1960 pour mieux étudier cet animal dans son habitat naturel.",
    answer: 'Chimpanzés',
    options: ['Chimpanzés', 'Gorilles', 'Orangs-outans', 'Babouins'],
    theme: 'Animaux',
  },
  {
    question:
      "S'étant également appelée place Louis XV, place de la Révolution et place Louis XVI, quel est le nom actuel de la place de Paris qui constitue, avec 7,56 hectares, la plus grande place de la capitale française ? Elle est située dans le 8e arrondissement au bout de l'avenue la plus célèbre du monde.",
    answer: 'Place de la Concorde',
    options: ['Place de la Concorde', 'Place Vendôme', 'Place des Vosges', 'Place de la Bastille'],
    theme: 'Géographie',
  },
  {
    question:
      'Quelle chanson de merengue, dont le titre fut repris par le rappeur Soolking en 2022, est le plus grand succès du chanteur portoricain Elvis Crespo en 1998 ?',
    answer: 'Suavemente',
    options: ['Suavemente', 'Bailando', 'La Bomba', 'Vivir Mi Vida'],
    theme: 'Musique',
  },
  {
    question: "Quelle couleur est associée au thon dans l'autre nom du poisson appelé albacore ?",
    answer: 'Jaune',
    options: ['Jaune', 'Rouge', 'Bleu', 'Vert'],
    theme: 'Animaux',
  },
  {
    question:
      'Quelle marque, mise en avant dans le film Le Fondateur en 2014, fut rachetée par Ray Kroc en 1961 à deux frères prénommés Richard et Maurice, fit de lui un milliardaire ?',
    answer: 'McDonald’s',
    options: ['McDonald’s', 'Burger King', 'KFC', 'Subway'],
    theme: 'Culture Générale',
  },
  {
    question:
      "Quelle année constitue le titre d'un roman dystopique écrit par George Orwell dans les années 1940 ? Le titre correspond à celui de l'année de rédaction du livre avec les deux derniers chiffres inversés.",
    answer: '1984',
    options: ['1984', '1974', '1994', '2004'],
    theme: 'Littérature',
  },
  {
    question:
      "Quel super-héros constitue le surnom d’Alain Robert, grand escaladeur français ? Alain Robert est notamment connu pour ses montées d'immeubles à mains nues.",
    answer: 'SpiderMan',
    options: ['SpiderMan', 'Batman', 'Superman', 'Daredevil'],
    theme: 'Sport',
  },
  {
    question:
      'Dans le domaine du jeu vidéo, que signifie le sigle FPS, qualifiant un type de jeu comme Doom ou Call of Duty, mettant le joueur en vue subjective ?',
    answer: 'First-Person Shooter',
    options: ['First-Person Shooter', 'Free Play System', 'Fast Player Style', 'Full Power Shot'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      'De son vrai nom Solaro, quel humoriste français apparu dans "Le Bureau des Légendes" a réalisé le film "Un p’tit truc en plus" en 2024 ?',
    answer: 'Artus',
    options: ['Artus', 'Jarry', 'Kev Adams', 'Gad Elmaleh'],
    theme: 'Cinéma',
  },
  {
    question:
      'Qui est le seul président de la République française ayant également été maire de Paris ? Il a été président au cours de la Ve République.',
    answer: 'Chirac',
    options: ['Chirac', 'Mitterrand', 'Sarkozy', 'Hollande'],
    theme: 'Politique',
  },
  {
    question:
      "Quel minéral à texture fibreuse, souvent présent dans les toitures, est responsable de l'asbestose ?",
    answer: 'Amiante',
    options: ['Amiante', 'Silice', 'Quartz', 'Plomb'],
    theme: 'Sciences',
  },
  {
    question:
      'Également appelé Qogir Feng en chinois, quelle montagne est le deuxième plus haut sommet du monde, avec ses 8611 mètres ?',
    answer: 'K2',
    options: ['K2', 'Kangchenjunga', 'Lhotse', 'Makalu'],
    theme: 'Géographie',
  },
  {
    question: 'De quel genre musical Amalia Rodrigues est-elle considérée comme la reine ?',
    answer: 'Fado',
    options: ['Fado', 'Flamenco', 'Tango', 'Samba'],
    theme: 'Musique',
  },
  {
    question:
      'Quel chien blanc tacheté de noir, mascotte des pompiers aux États-Unis, doit son nom à une région historique de Croatie ?',
    answer: 'Dalmatien',
    options: ['Dalmatien', 'Beagle', 'Setter anglais', 'Border Collie'],
    theme: 'Animaux',
  },
  {
    question:
      'Quel nom anglais désigne à la fois le trou d’un kayak et la partie avant d’un avion où se trouvent les pilotes ?',
    answer: 'Cockpit',
    options: ['Cockpit', 'Cabin', 'Deck', 'Hangar'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Sur quelle île de la Méditerranée Charles Champoiseau a-t-il découvert en 1863 une célèbre statue envoyée au Louvre ?',
    answer: 'Samothrace',
    options: ['Samothrace', 'Crète', 'Rhodes', 'Chypre'],
    theme: 'Histoire',
  },
  {
    question:
      'Dans quelle ville William Webb Ellis était-il scolarisé lorsqu’il aurait inventé le rugby ?',
    answer: 'Rugby',
    options: ['Rugby', 'Oxford', 'Cambridge', 'Manchester'],
    theme: 'Sport',
  },
  {
    question:
      "Quel jeu vidéo développé et édité par Innersloth dans lequel chaque joueur incarne un membre d'un équipage spatial pouvant être soit imposteur soit coéquipier ? Le nom anglais de ce jeu est constitué de deux mots.",
    answer: 'Among Us',
    options: ['Among Us', 'Dead by Daylight', 'Fall Guys', 'The Forest'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      'De quelle série franco-belge la série "High Potential", avec Kaitlin Olson dans le rôle principal, est-elle un remake ?',
    answer: 'HPI',
    options: ['HPI', 'Engrenages', 'Profilage', 'Capitaine Marleau'],
    theme: 'Séries TV',
  },
  {
    question:
      "Dans quel village de l’actuel département des Vosges considère-t-on que Jeanne d'Arc est née ?",
    answer: 'Domrémy-la-Pucelle',
    options: ['Domrémy-la-Pucelle', 'Chinon', 'Orléans', 'Reims'],
    theme: 'Histoire',
  },
  {
    question:
      'Sur quelle mer le module Eagle de la mission Apollo 11 a-t-il aluni le 20 juillet 1969 ?',
    answer: 'Mer de la Tranquillité',
    options: ['Mer de la Tranquillité', 'Mer des Pluies', 'Mer du Nectar', 'Mer des Crises'],
    theme: 'Sciences',
  },
  {
    question:
      "Quelle ville d'Australie-Occidentale, traversée par la rivière Swan, compte plus de deux millions d’habitants ?",
    answer: 'Perth',
    options: ['Perth', 'Adélaïde', 'Brisbane', 'Canberra'],
    theme: 'Géographie',
  },
  {
    question:
      'De quel compositeur Ludwig von Köchel a-t-il publié le catalogue complet des œuvres en 1862 ?',
    answer: 'Mozart',
    options: ['Mozart', 'Beethoven', 'Haydn', 'Schubert'],
    theme: 'Musique',
  },
  {
    question:
      'Quelle race de chien au pelage blanc dense, originaire de Sibérie, semble arborer un sourire naturel ?',
    answer: 'Samoyède',
    options: ['Samoyède', 'Husky sibérien', 'Spitz japonais', 'Akita inu'],
    theme: 'Animaux',
  },
  {
    question:
      'Quel artiste mosaïste français réalise depuis 1996 des mosaïques inspirées d’un jeu vidéo de 1978 de la société Taito ?',
    answer: 'Invader',
    options: ['Invader', 'JR', 'Banksy', 'Blek le Rat'],
    theme: 'Art',
  },
  {
    question:
      'Quel sculpteur français, de son vrai nom Baldaccini, a donné son nom à une célèbre récompense du cinéma ?',
    answer: 'César',
    options: ['César', 'Rodin', 'Maillol', 'Bourdelle'],
    theme: 'Cinéma',
  },
  {
    question:
      'Dans quelle variante du billard à 22 billes Zhao Xintong est-il devenu champion du monde en 2025 ?',
    answer: 'Snooker',
    options: ['Snooker', 'Billard américain', 'Billard français', 'Blackball'],
    theme: 'Sport',
  },
  {
    question:
      'Quelle déesse a donné son nom à la jument de Link dans la série The Legend of Zelda ?',
    answer: 'Epona',
    options: ['Epona', 'Athéna', 'Artémis', 'Héra'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      'De quelle série Netflix créée par Álex Pina la chanson "My Life Is Going On" est-elle le thème ?',
    answer: 'La Casa de Papel',
    options: ['La Casa de Papel', 'Elite', 'Narcos', 'Lupin'],
    theme: 'Séries TV',
  },
  {
    question:
      'Quelle révolutionnaire, née Marie Gouze, a rédigé la "Déclaration des droits de la femme et de la citoyenne" ?',
    answer: 'Olympe de Gouges',
    options: ['Olympe de Gouges', 'Madame Roland', 'Théroigne de Méricourt', 'Charlotte Corday'],
    theme: 'Histoire',
  },
  {
    question: 'Par quelle locution désigne-t-on également le nævus mélanocytaire ?',
    answer: 'Grain de beauté',
    options: ['Grain de beauté', 'Tache de rousseur', 'Cicatrice', 'Papillome'],
    theme: 'Sciences',
  },
  {
    question:
      "Quel pays asiatique est composé notamment de Mindanao, des Visayas et de l'île de Luçon ?",
    answer: 'Philippines',
    options: ['Philippines', 'Indonésie', 'Malaisie', 'Vietnam'],
    theme: 'Géographie',
  },
  {
    question:
      'Quel compositeur français du XVIIe siècle a composé le "Te Deum" devenu thème de l’Eurovision ?',
    answer: 'Marc-Antoine Charpentier',
    options: ['Marc-Antoine Charpentier', 'Lully', 'Rameau', 'Couperin'],
    theme: 'Musique',
  },
  {
    question: 'Quel nom porte la larve des lépidoptères ?',
    answer: 'Chenille',
    options: ['Chenille', 'Chrysalide', 'Nymphe', 'Asticot'],
    theme: 'Animaux',
  },
  {
    question:
      'Ayant pour exemple célèbre la phrase "Portez ce vieux whisky au juge blond qui fume", quel nom porte une phrase contenant toutes les lettres de l’alphabet ?',
    answer: 'Pangramme',
    options: ['Pangramme', 'Anagramme', 'Palindrome', 'Acrostiche'],
    theme: 'Littérature',
  },
  {
    question:
      'Dans quelle salle les apôtres et Jésus-Christ se sont-ils réunis pour le dernier repas, la Cène ?',
    answer: 'Cénacle',
    options: ['Cénacle', 'Sacristie', 'Basilique', 'Crypte'],
    theme: 'Histoire',
  },
  {
    question:
      "Quel golfeur américain né en 1975, vainqueur des Masters en 1997 et 2019, possède l'un des plus grands palmarès de l'histoire ?",
    answer: 'Tiger Woods',
    options: ['Tiger Woods', 'Phil Mickelson', 'Rory McIlroy', 'Jordan Spieth'],
    theme: 'Sport',
  },
  {
    question: 'Quel nom porte la marque de kombucha créée par Squeezie ?',
    answer: 'Ciao Kombucha',
    options: ['Ciao Kombucha', 'Karma Kombucha', 'Captain Kombucha', 'Jomo Kombucha'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quel animateur, dont le nom de famille est Fam, présente "N’oubliez pas les paroles" depuis 2007 ?',
    answer: 'Nagui',
    options: ['Nagui', 'Cyril Hanouna', 'Michel Drucker', 'Laurent Ruquier'],
    theme: 'Culture Générale',
  },
  {
    question:
      'En dehors de Grover Cleveland, quel est le seul président des États-Unis élu pour deux mandats non consécutifs ?',
    answer: 'Donald Trump',
    options: ['Donald Trump', 'Joe Biden', 'Barack Obama', 'George W. Bush'],
    theme: 'Politique',
  },
  {
    question: 'Quel élément chimique de numéro atomique 11 est représenté par le symbole Na ?',
    answer: 'Sodium',
    options: ['Sodium', 'Potassium', 'Magnésium', 'Lithium'],
    theme: 'Sciences',
  },
  {
    question: 'Quel nom français est également donné à la ville indienne de Varanasi ?',
    answer: 'Bénarès',
    options: ['Bénarès', 'Calcutta', 'Bombay', 'Madras'],
    theme: 'Géographie',
  },
  {
    question:
      'Quel rappeur français issu de la Sexion d\'Assaut a sorti l\'album "Les Yeux plus gros que le monde" en 2014 ?',
    answer: 'Black M',
    options: ['Black M', 'Maître Gims', 'Soprano', 'Nekfeu'],
    theme: 'Musique',
  },
  {
    question:
      'Quel oiseau a donné son nom à une politique consistant à refuser de voir la réalité en face ?',
    answer: 'Autruche',
    options: ['Autruche', 'Paon', 'Corbeau', 'Hibou'],
    theme: 'Animaux',
  },
  {
    question: "Quel journal fondé en 1826 tient son nom d'un personnage de Beaumarchais ?",
    answer: 'Figaro',
    options: ['Figaro', 'Le Monde', 'Libération', 'L’Humanité'],
    theme: 'Littérature',
  },
  {
    question: 'Quels petits personnages bleus créés par Peyo ont pour ennemi Gargamel ?',
    answer: 'Les Schtroumpfs',
    options: ['Les Schtroumpfs', 'Les Minions', 'Les Razmoket', 'Les Barbapapa'],
    theme: 'Littérature',
  },
  {
    question: 'Quel sport se pratique sur un cercle appelé dohyō ?',
    answer: 'Sumo',
    options: ['Sumo', 'Judo', 'Kendo', 'Lutte'],
    theme: 'Sport',
  },
  {
    question: 'Quelle émission Twitch présentée par Domingo porte le nom d’une céréale soufflée ?',
    answer: 'Popcorn',
    options: ['Popcorn', 'After Foot', 'Clique', 'Quotidien'],
    theme: 'Jeux Vidéo',
  },
  {
    question: 'À qui doit-on la réalisation du film "Le Voyage dans la Lune" en 1902 ?',
    answer: 'Georges Méliès',
    options: ['Georges Méliès', 'Louis Lumière', 'Charlie Chaplin', 'Jean Renoir'],
    theme: 'Cinéma',
  },
  {
    question: "Dans quelle ville eut lieu l'assassinat de l'archiduc François-Ferdinand en 1914 ?",
    answer: 'Sarajevo',
    options: ['Sarajevo', 'Vienne', 'Budapest', 'Belgrade'],
    theme: 'Histoire',
  },
  {
    question: 'De quelle pierre précieuse la nuance de vert est-elle dite smaragdine ?',
    answer: 'Emeraude',
    options: ['Emeraude', 'Saphir', 'Topaze', 'Rubis'],
    theme: 'Sciences',
  },
  {
    question:
      'Quel État des États-Unis est, avec 1,723 million de kilomètres carrés, le plus grand en superficie ?',
    answer: 'Alaska',
    options: ['Alaska', 'Texas', 'Californie', 'Montana'],
    theme: 'Géographie',
  },
  {
    question:
      'En 1972, dans quelle ville de Californie se situe la maison bleue décrite par Maxime Le Forestier ?',
    answer: 'San Francisco',
    options: ['San Francisco', 'Los Angeles', 'San Diego', 'Sacramento'],
    theme: 'Musique',
  },
  {
    question:
      'Quelle variété de pêche dont le noyau n’adhère pas à la chair se distingue du brugnon ?',
    answer: 'Nectarine',
    options: ['Nectarine', 'Brugnon', 'Abricot', 'Prune'],
    theme: 'Cuisine',
  },
  {
    question: 'Dans la cuisine indienne, de quelle forme sont les samoussas ?',
    answer: 'Triangulaire',
    options: ['Triangulaire', 'Ronde', 'Carrée', 'Ovale'],
    theme: 'Cuisine',
  },
  {
    question:
      'Quel écrivain né à Prague est dit "sur le rivage" dans un roman d’Haruki Murakami publié en 2002 ?',
    answer: 'Kafka',
    options: ['Kafka', 'Rilke', 'Kundera', 'Hesse'],
    theme: 'Littérature',
  },
  {
    question: 'Dans quel sport Bill Tilden détient-il le meilleur palmarès de l’ère pré-Open ?',
    answer: 'Tennis',
    options: ['Tennis', 'Golf', 'Baseball', 'Boxe'],
    theme: 'Sport',
  },
  {
    question:
      'Quelle série de jeux vidéo de course développée par Nadeo met l’accent sur le pilotage et la précision ?',
    answer: 'TrackMania',
    options: ['TrackMania', 'Gran Turismo', 'Need for Speed', 'Forza Motorsport'],
    theme: 'Jeux Vidéo',
  },
  {
    question: 'De quel dessin animé créé par Hanna-Barbera est dérivée la série "Velma" ?',
    answer: 'ScoobyDoo',
    options: ['ScoobyDoo', 'Tom et Jerry', 'Les Pierrafeu', 'Yogi Bear'],
    theme: 'Séries TV',
  },
  {
    question: 'Dans quel lycée de Littleton eut lieu la tuerie du 20 avril 1999 ?',
    answer: 'Columbine',
    options: ['Columbine', 'Littleton High', 'Jefferson High', 'Lincoln High'],
    theme: 'Histoire',
  },
  {
    question: 'En anatomie, quel adjectif qualifie les côtes non rattachées au sternum ?',
    answer: 'Flottantes',
    options: ['Flottantes', 'Vraies', 'Fausse', 'Thoraciques'],
    theme: 'Sciences',
  },
  {
    question: "Quel pays a adopté l'euro en 2026 en abandonnant le lev ?",
    answer: 'Bulgarie',
    options: ['Bulgarie', 'Roumanie', 'Croatie', 'Hongrie'],
    theme: 'Géographie',
  },
  {
    question: 'Quelle chanteuse écossaise s’est fait connaître avec "I Dreamed a Dream" en 2009 ?',
    answer: 'Susan Boyle',
    options: ['Susan Boyle', 'Adele', 'Duffy', 'Leona Lewis'],
    theme: 'Musique',
  },
  {
    question: 'Quel arbre a donné son nom au roman "Jacaranda" de Gaël Faye ?',
    answer: 'Jacaranda',
    options: ['Jacaranda', 'Baobab', 'Cèdre', 'Acacia'],
    theme: 'Littérature',
  },
  {
    question: 'Sous quel nom de quatre lettres désigne-t-on l’alcool de riz japonais ?',
    answer: 'Saké',
    options: ['Saké', 'Umeshu', 'Shochu', 'Soju'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quel sculpteur animalier français, auteur d’un célèbre "Ours blanc", porte un nom redoublé ?',
    answer: 'Pompon',
    options: ['Pompon', 'Barye', 'Frémiet', 'Bugatti'],
    theme: 'Art',
  },
  {
    question: 'Avec quelle chanteuse Travis Kelce est-il en couple ?',
    answer: 'Taylor Swift',
    options: ['Taylor Swift', 'Ariana Grande', 'Selena Gomez', 'Katy Perry'],
    theme: 'Culture Générale',
  },
  {
    question: 'De quel pays est originaire la chaîne YouTube T-Series ?',
    answer: 'Inde',
    options: ['Inde', 'Pakistan', 'Bangladesh', 'Sri Lanka'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quel télé-crochet Netflix adapté de "Rhythm + Flow" s’intitule en français en deux mots ?',
    answer: 'Nouvelle Ecole',
    options: ['Nouvelle Ecole', 'La Relève', 'Rappeurs en Scène', 'Flow Urbain'],
    theme: 'Séries TV',
  },
  {
    question: 'Dans quelle ville Nicolas Fouquet a-t-il été arrêté en 1661 ?',
    answer: 'Nantes',
    options: ['Nantes', 'Rennes', 'Angers', 'Tours'],
    theme: 'Histoire',
  },
  {
    question: 'Quel adjectif qualifie un rythme biologique proche de 24 heures ?',
    answer: 'Circadien',
    options: ['Circadien', 'Ultradien', 'Infradien', 'Bihebdomadaire'],
    theme: 'Sciences',
  },
  {
    question: 'Quel département français métropolitain est le plus peuplé ?',
    answer: 'Nord',
    options: ['Nord', 'Bouches-du-Rhône', 'Rhône', 'Seine-Saint-Denis'],
    theme: 'Géographie',
  },
  {
    question:
      'Quel mythique groupe de rock composé de John Paul Jones, John Bonham, Jimmy Page et Robert Plant a été actif de 1968 à 1980 ?',
    answer: 'Led Zeppelin',
    options: ['Led Zeppelin', 'The Who', 'Deep Purple', 'Pink Floyd'],
    theme: 'Musique',
  },
  {
    question: 'Quel adjectif de nationalité est associé au lévrier appelé Barzoï ?',
    answer: 'Russe',
    options: ['Russe', 'Polonais', 'Hongrois', 'Ukrainien'],
    theme: 'Animaux',
  },
  {
    question: "À quel aliment se rapporte l'adjectif caséeux ?",
    answer: 'Fromage',
    options: ['Fromage', 'Lait', 'Pain', 'Beurre'],
    theme: 'Cuisine',
  },
  {
    question: 'Quel dramaturge d’origine roumaine a écrit Les Chaises en 1952 ?',
    answer: 'Ionesco',
    options: ['Ionesco', 'Beckett', 'Camus', 'Anouilh'],
    theme: 'Littérature',
  },
  {
    question: 'À quel sport sont associés Jérémy Florès et Kelly Slater ?',
    answer: 'Surf',
    options: ['Surf', 'Voile', 'Natation', 'Plongée'],
    theme: 'Sport',
  },
  {
    question: "Quel vidéaste détient depuis mai 2024 le record d'abonnés YouTube en France ?",
    answer: 'Tibo InShape',
    options: ['Tibo InShape', 'Squeezie', 'Cyprien', 'Michou'],
    theme: 'Internet',
  },
  {
    question:
      'Quel groupe interprète le générique de la série "Friends" et fait référence à un peintre hollandais ?',
    answer: 'Rembrandt',
    options: ['Rembrandt', 'The Corrs', 'The Cranberries', 'Counting Crows'],
    theme: 'Musique',
  },
  {
    question:
      "Quel roi de France a eu le deuxième plus long règne de l'Histoire ? (Format : Prénom + Numéro)",
    answer: 'Louis XV',
    options: ['Louis XV', 'Louis XIII', 'Louis XVI', 'Henri IV'],
    theme: 'Histoire',
  },
  {
    question: 'Quel doigt tire son nom de son usage pour désigner ?',
    answer: 'Index',
    options: ['Index', 'Majeur', 'Annulaire', 'Auriculaire'],
    theme: 'Sciences',
  },
  {
    question: 'Dans quel pays se situe le parc floral de Keukenhof ?',
    answer: 'Pays-Bas',
    options: ['Pays-Bas', 'Belgique', 'Danemark', 'Allemagne'],
    theme: 'Géographie',
  },
  {
    question: 'Quel chanteur mort en 1978 était propriétaire du moulin de Dannemois ?',
    answer: 'Claude François',
    options: ['Claude François', 'Joe Dassin', 'Daniel Balavoine', 'Serge Lama'],
    theme: 'Musique',
  },
  {
    question: 'Quel nom commun désigne aussi le coquillage du genre solen ?',
    answer: 'Couteau',
    options: ['Couteau', 'Huître', 'Palourde', 'Moule'],
    theme: 'Animaux',
  },
  {
    question: 'Quel nom argotique désigne à la fois les croûtes de pizza et le bord de la route ?',
    answer: 'Trottoir',
    options: ['Trottoir', 'Quignon', 'Croûton', 'Talus'],
    theme: 'Culture Générale',
  },
  {
    question: 'Quelle amante de Narcisse a été condamnée à répéter les derniers mots ?',
    answer: 'Echo',
    options: ['Echo', 'Daphné', 'Héra', 'Perséphone'],
    theme: 'Littérature',
  },
  {
    question: "Dans quel sport l'équipe de France fut surnommée les Barjots et les Experts ?",
    answer: 'Handball',
    options: ['Handball', 'Basketball', 'Football', 'Rugby'],
    theme: 'Sport',
  },
  {
    question:
      'Quel jeu vidéo sous-titré "Expedition 33" porte un terme emprunté aux arts plastiques ?',
    answer: 'Clair Obscur',
    options: ['Clair Obscur', 'Pointillisme', 'Fresque', 'Estampe'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Quel prénom porte l'ange gardien incarné par Mimie Mathy ?",
    answer: 'Joséphine',
    options: ['Joséphine', 'Marie', 'Clara', 'Angélique'],
    theme: 'Séries TV',
  },
  {
    question: 'Quel chef d’État surnommé le "Duce" a dirigé l’Italie ?',
    answer: 'Benito Mussolini',
    options: ['Benito Mussolini', 'Francisco Franco', 'Hitler', 'Victor-Emmanuel III'],
    theme: 'Histoire',
  },
  {
    question: 'Quelle partie du corps souffre en cas de céphalée ?',
    answer: 'Cerveau',
    options: ['Cerveau', 'Estomac', 'Foie', 'Cœur'],
    theme: 'Sciences',
  },
  {
    question:
      "Quel phare surnommé le roi des phares est situé au large de l'estuaire de la Gironde ?",
    answer: 'Phare de Cordouan',
    options: ['Phare de Cordouan', 'Phare d’Eckmühl', 'Phare de la Jument', 'Phare d’Ar-Men'],
    theme: 'Géographie',
  },
  {
    question:
      'Quel duo composé de Thomas Bangalter et Guy-Manuel de Homem-Christo a été actif jusqu’en 2021 ?',
    answer: 'Daft Punk',
    options: ['Daft Punk', 'Justice', 'Air', 'Cassius'],
    theme: 'Musique',
  },
  {
    question: 'À quel poisson associe-t-on quelqu’un de frais dans une expression ?',
    answer: 'Gardon',
    options: ['Gardon', 'Merlan', 'Hareng', 'Maquereau'],
    theme: 'Animaux',
  },
  {
    question: 'Quel mot peut se lire dans les deux sens comme "KAYAK" ?',
    answer: 'Palindrome',
    options: ['Palindrome', 'Anagramme', 'Lipogramme', 'Calligramme'],
    theme: 'Littérature',
  },
  {
    question:
      'Quel écrivain français est mort en 1885 devant près de trois millions de personnes ?',
    answer: 'Victor Hugo',
    options: ['Victor Hugo', 'Émile Zola', 'Balzac', 'Dumas'],
    theme: 'Littérature',
  },
  {
    question:
      'Quel nom désigne un triathlon longue distance de 3,8 km natation, 180 km vélo et marathon ?',
    answer: 'Iron Man',
    options: ['Iron Man', 'Décathlon', 'UltraTrail', 'Spartan Race'],
    theme: 'Sport',
  },
  {
    question: "Quel mot anglais précédé de 'Universal Serial' correspond au B de USB ?",
    answer: 'Bus',
    options: ['Bus', 'Base', 'Binary', 'Bridge'],
    theme: 'Culture Générale',
  },
  {
    question:
      "Quelle série Netflix en plan-séquence raconte l'histoire d'un jeune accusé de meurtre ?",
    answer: 'Adolescence',
    options: ['Adolescence', 'Skins', 'Euphoria', 'Elite'],
    theme: 'Séries TV',
  },
  {
    question: "Quelle tribu antique d'Épire était réputée pour ses chiens de combat ?",
    answer: 'Molosses',
    options: ['Molosses', 'Spartiates', 'Illyriens', 'Thessaliens'],
    theme: 'Histoire',
  },
  {
    question:
      'Quel scientifique a donné son nom à la température où un matériau perd son aimantation ?',
    answer: 'Température de (Pierre) Curie',
    options: [
      'Température de (Pierre) Curie',
      'Température de Newton',
      'Température de Joule',
      'Température de Faraday',
    ],
    theme: 'Sciences',
  },
  {
    question: 'Quel pays constitue la majeure partie de la péninsule arabique ?',
    answer: 'Arabie Saoudite',
    options: ['Arabie Saoudite', 'Oman', 'Yémen', 'Émirats arabes unis'],
    theme: 'Géographie',
  },
  {
    question: 'Quelle danse angolaise a donné son nom à un tube de 2010 de Lucenzo et Don Omar ?',
    answer: 'Kuduro',
    options: ['Kuduro', 'Samba', 'Forró', 'Lambada'],
    theme: 'Musique',
  },
  {
    question: "Quel nom d'un des Sept Nains est aussi celui du crabe tourteau ?",
    answer: 'Dormeur',
    options: ['Dormeur', 'Timide', 'Atchoum', 'Simplet'],
    theme: 'Culture Générale',
  },
  {
    question: 'En quelle langue le mot satori signifie-t-il conscience ?',
    answer: 'Japonais',
    options: ['Japonais', 'Chinois', 'Coréen', 'Vietnamien'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quel sculpteur français, maître de Camille Claudel, est l’auteur de "La Porte de l’Enfer" ?',
    answer: 'Rodin',
    options: ['Rodin', 'Bourdelle', 'Carpeaux', 'Maillol'],
    theme: 'Art',
  },
  {
    question: 'Quel perchiste suédois détient le record du monde avec 6,30 m ?',
    answer: 'Armand Duplantis',
    options: ['Armand Duplantis', 'Renaud Lavillenie', 'Thiago Braz', 'Sam Kendricks'],
    theme: 'Sport',
  },
  {
    question: 'Quelle lettre est devenue le nouveau nom de Twitter ?',
    answer: 'X',
    options: ['X', 'Z', 'T', 'Q'],
    theme: 'Internet',
  },
  {
    question: 'Dans quelle émission le groupe Il Cello a-t-il remporté la saison 2025 ?',
    answer: 'The Voice',
    options: ['The Voice', 'Nouvelle Ecole', 'Star Academy', 'La France a un Incroyable Talent'],
    theme: 'Séries TV',
  },
  {
    question: 'Quel président fut le seul de la Deuxième République française ?',
    answer: 'Louis-Napoléon Bonaparte',
    options: ['Louis-Napoléon Bonaparte', 'Adolphe Thiers', 'Mac Mahon', 'Jules Grévy'],
    theme: 'Histoire',
  },
  {
    question: 'Quels photorécepteurs permettent la vision diurne ?',
    answer: 'Cônes',
    options: ['Cônes', 'Bâtonnets', 'Cornée', 'Cristallin'],
    theme: 'Sciences',
  },
  {
    question: 'Quelle montagne est le point culminant de l’île de Honshu ?',
    answer: 'Mont Fujiyama',
    options: ['Mont Fujiyama', 'Mont Haku', 'Mont Tate', 'Mont Asama'],
    theme: 'Géographie',
  },
  {
    question:
      "Quel chanteur français est décédé dans un accident d'hélicoptère au Mali sur le rallye Paris-Dakar le 14 janvier 1986 ?",
    answer: 'Daniel Balavoine',
    options: ['Daniel Balavoine', 'Michel Berger', 'Jean-Jacques Goldman', 'Serge Gainsbourg'],
    theme: 'Musique',
  },
  {
    question:
      'Quelle couleur est également le nom donné à un fruit de la famille des rutacées ayant pour nom scientifique "Citrus sinensis" ?',
    answer: 'Orange',
    options: ['Orange', 'Citron', 'Mandarine', 'Pamplemousse'],
    theme: 'Cuisine',
  },
  {
    question: 'Combien de côtés compte le panneau STOP en France ?',
    answer: '8',
    options: ['6', '7', '8', '10'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quel écrivain franco-algérien a été gracié par le président Tebboune en novembre 2025 et élu à l’Académie française en janvier 2026 ?',
    answer: 'Boualem Sansal',
    options: ['Boualem Sansal', 'Kamel Daoud', 'Yasmina Khadra', 'Tahar Ben Jelloun'],
    theme: 'Littérature',
  },
  {
    question:
      'Quel skieur alpin français a remporté trois titres olympiques aux JO de Grenoble en 1968 ?',
    answer: 'Jean-Claude Killy',
    options: ['Jean-Claude Killy', 'Luc Alphand', 'Alexis Pinturault', 'Alberto Tomba'],
    theme: 'Sport',
  },
  {
    question: 'De quelle série de jeux vidéo le héros principal est-il Geralt de Riv ?',
    answer: 'The Witcher',
    options: ['The Witcher', 'Skyrim', 'Dragon Age', 'Dark Souls'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      "Quelle année est à la fois celle de la sortie du film Titanic et d'une double Palme d’Or à Cannes ?",
    answer: '1997',
    options: ['1994', '1997', '1999', '2001'],
    theme: 'Cinéma',
  },
  {
    question:
      'Quel était le premier prénom du président du Malawi Banda, devenu président en 1966 ?',
    answer: 'Hastings',
    options: ['Hastings', 'Nelson', 'Robert', 'Kenneth'],
    theme: 'Histoire',
  },
  {
    question:
      'Quelle pierre calcaire claire fut largement utilisée pour les châteaux de la Loire à la Renaissance ?',
    answer: 'Tuffeau',
    options: ['Tuffeau', 'Granit', 'Basalte', 'Ardoise'],
    theme: 'Art',
  },
  {
    question: 'Quelle ville des Vosges abrite le Festival international de Géographie ?',
    answer: 'Saint-Dié-des-Vosges',
    options: ['Saint-Dié-des-Vosges', 'Épinal', 'Nancy', 'Metz'],
    theme: 'Géographie',
  },
  {
    question: "Quelle rappeuse américaine a sorti le titre 'Anxiety' en 2025 ?",
    answer: 'Doechii',
    options: ['Doechii', 'Cardi B', 'Nicki Minaj', 'Doja Cat'],
    theme: 'Musique',
  },
  {
    question: 'Quel champignon lignivore détruit les charpentes en bois dans les habitations ?',
    answer: 'Mérule',
    options: ['Mérule', 'Cèpe', 'Girolle', 'Morille'],
    theme: 'Sciences',
  },
  {
    question: 'Quelles marques ont été fondées par les frères Dassler ?',
    answer: 'Adidas et Puma',
    options: ['Adidas et Puma', 'Nike et Reebok', 'Asics et Mizuno', 'Fila et Lotto'],
    theme: 'Sport',
  },
  {
    question: 'Combien de boules de cristal sont présentes sur Terre dans Dragon Ball ?',
    answer: '7',
    options: ['5', '6', '7', '9'],
    theme: 'Séries TV',
  },
  {
    question: 'Quel pilote de F1 est décédé le 1er mai 1994 lors du Grand Prix de Saint-Marin ?',
    answer: 'Ayrton Senna',
    options: ['Ayrton Senna', 'Alain Prost', 'Michael Schumacher', 'Nigel Mansell'],
    theme: 'Sport',
  },
  {
    question:
      "Quel mot anglais est associé aux jeux 'Royale' et 'Of Clans' développés par Supercell ?",
    answer: 'Clash',
    options: ['Clash', 'Battle', 'Strike', 'War'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Quel animal est Fievel dans le film d’animation 'Fievel et le Nouveau Monde' ?",
    answer: 'Souris',
    options: ['Souris', 'Lapin', 'Chat', 'Écureuil'],
    theme: 'Cinéma',
  },
  {
    question: 'Quelle bataille marque la défaite finale de Napoléon Ier en 1815 ?',
    answer: 'Waterloo',
    options: ['Waterloo', 'Austerlitz', 'Iéna', 'Wagram'],
    theme: 'Histoire',
  },
  {
    question: 'Quelle lettre désigne la vitamine appelée acide ascorbique ?',
    answer: 'C',
    options: ['A', 'B', 'C', 'D'],
    theme: 'Sciences',
  },
  {
    question: 'Quel pays enclavé dans l’Italie culmine au mont Titano ?',
    answer: 'Saint-Marin',
    options: ['Saint-Marin', 'Andorre', 'Liechtenstein', 'Monaco'],
    theme: 'Géographie',
  },
  {
    question:
      "Quel groupe de Manchester est connu pour 'Wonderwall' et 'Don’t Look Back in Anger' ?",
    answer: 'Oasis',
    options: ['Oasis', 'Blur', 'Radiohead', 'The Verve'],
    theme: 'Musique',
  },
  {
    question: "Quelle espèce animale est au centre du film 'Deux Frères' ?",
    answer: 'Tigre',
    options: ['Tigre', 'Lion', 'Panthère', 'Guépard'],
    theme: 'Animaux',
  },
  {
    question:
      'Quel jeu consiste à lancer un objet relié par une ficelle pour le faire revenir dans la main ?',
    answer: 'Yo-yo',
    options: ['Yo-yo', 'Diabolo', 'Toupie', 'Cerf-volant'],
    theme: 'Autres',
  },
  {
    question: 'Autour de quel édifice se pratique le tawaf lors du Hajj ?',
    answer: 'Kaaba',
    options: ['Kaaba', 'Mosquée Al-Aqsa', 'Mosquée du Prophète', 'Dôme du Rocher'],
    theme: 'Culture Générale',
  },
  {
    question: 'Quel numéro est associé au pilote de moto Valentino Rossi ?',
    answer: '46',
    options: ['46', '93', '99', '27'],
    theme: 'Sport',
  },
  {
    question:
      "Quel personnage féminin apparaît dans la saga Metroid et peut se transformer en 'morphing ball' ?",
    answer: 'Samus',
    options: ['Samus', 'Lara Croft', 'Bayonetta', 'Zelda'],
    theme: 'Jeux Vidéo',
  },
  {
    question: 'Quel personnage a été créé pour remplacer Oswald le lapin chanceux en 1928 ?',
    answer: 'Mickey Mouse',
    options: ['Mickey Mouse', 'Donald Duck', 'Dingo', 'Bugs Bunny'],
    theme: 'Cinéma',
  },
  {
    question: "De quelle nationalité était le sniper Simo Häyhä, surnommé 'La Mort Blanche' ?",
    answer: 'Finlandaise',
    options: ['Finlandaise', 'Suédoise', 'Russe', 'Norvégienne'],
    theme: 'Histoire',
  },
  {
    question: 'Sous quel nom Pfizer commercialise-t-il le citrate de sildénafil ?',
    answer: 'Viagra',
    options: ['Viagra', 'Cialis', 'Levitra', 'Prozac'],
    theme: 'Sciences',
  },
  {
    question: "Quelle capitale australienne signifie 'lieu de rassemblement' en langue ngunnawal ?",
    answer: 'Canberra',
    options: ['Canberra', 'Sydney', 'Melbourne', 'Perth'],
    theme: 'Géographie',
  },
  {
    question: 'Quel instrument à clavier proche de l’harmonica est popularisé par Augustus Pablo ?',
    answer: 'Melodica',
    options: ['Melodica', 'Accordéon', 'Clavinet', 'Harmonium'],
    theme: 'Musique',
  },
  {
    question: "Quelle plante appelée aussi 'Merveille-du-Pérou' fleurit uniquement le soir ?",
    answer: 'Belle-de-nuit',
    options: ['Belle-de-nuit', 'Primevère', 'Camélia', 'Lys'],
    theme: 'Animaux',
  },
  {
    question:
      'Quel véhicule à trois roues d’origine asiatique est aussi appelé tuk-tuk lorsqu’il est motorisé ?',
    answer: 'Rickshaw',
    options: ['Rickshaw', 'Pousse-pousse', 'Calèche', 'Gondole'],
    theme: 'Culture Générale',
  },
  {
    question: 'Quelle couleur est associée au Brésil chez Rufin et au Noir chez Stendhal ?',
    answer: 'Rouge',
    options: ['Rouge', 'Vert', 'Jaune', 'Bleu'],
    theme: 'Littérature',
  },
  {
    question: 'Quelle épreuve olympique s’inspire de la bataille de 490 av. J.-C. ?',
    answer: 'Marathon',
    options: ['Marathon', 'Décathlon', 'Triathlon', 'Pentathlon'],
    theme: 'Sport',
  },
  {
    question:
      'Quel concept japonais signifiant amélioration continue a donné son nom au documentaire d’Inoxtag ?',
    answer: 'Kaizen',
    options: ['Kaizen', 'Zen', 'Bushido', 'Satori'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel bâtiment s'appelle Princeton-Plainsboro dans la série Docteur House ?",
    answer: 'Hôpital',
    options: ['Hôpital', 'Université', 'Tribunal', 'Laboratoire'],
    theme: 'Séries TV',
  },
  {
    question: 'Quel nom de règne choisit le pharaon Aménophis IV ?',
    answer: 'Akhénaton',
    options: ['Akhénaton', 'Ramsès II', 'Toutânkhamon', 'Khéops'],
    theme: 'Histoire',
  },
  {
    question: "Quel scientifique a publié 'De l’origine des espèces' en 1859 ?",
    answer: 'Darwin',
    options: ['Darwin', 'Mendel', 'Pasteur', 'Lamarck'],
    theme: 'Sciences',
  },
  {
    question: 'Quel est le nom actuel de la capitale du Canada, anciennement appelée Bytown ?',
    answer: 'Ottawa',
    options: ['Ottawa', 'Toronto', 'Montréal', 'Vancouver'],
    theme: 'Géographie',
  },
  {
    question:
      'Parfois accompagnée des Black Devotion, quelle chanteuse française est l’interprète des chansons "Hôtel de la plage", "Spacer" et "L’école est finie" ? Née en 1945, elle a pour véritable identité Anny Chancel.',
    answer: 'Sheila',
    options: ['Sheila', 'Sylvie Vartan', 'France Gall', 'Françoise Hardy'],
    theme: 'Musique',
  },
  {
    question: 'Quel petit chien peut être frisé, havanais, bolonais ou maltais ?',
    answer: 'Bichon',
    options: ['Bichon', 'Caniche', 'Shih Tzu', 'Coton de Tuléar'],
    theme: 'Animaux',
  },
  {
    question: 'Quelle brioche vendéenne bénéficie d’une IGP depuis 2013 ?',
    answer: 'Gâche',
    options: ['Gâche', 'Brioche tressée', 'Fougasse', 'Panettone'],
    theme: 'Cuisine',
  },
  {
    question: 'Quel surnom Anne Frank donne-t-elle à son amie imaginaire dans son journal ?',
    answer: 'Kitty',
    options: ['Kitty', 'Anna', 'Lies', 'Margot'],
    theme: 'Littérature',
  },
  {
    question: 'Quel voilier a remporté la première America’s Cup en 1851 ?',
    answer: 'L’America',
    options: ['L’America', 'Endeavour', 'Shamrock', 'Britannia'],
    theme: 'Sport',
  },
  {
    question: 'Comment appelle-t-on les pièces du jeu Tetris (I, O, T, L, J, Z, S) ?',
    answer: 'Tétrimino',
    options: ['Tétrimino', 'Bloc', 'Pixel', 'Polymino'],
    theme: 'Jeux Vidéo',
  },
  {
    question: 'Quelle série est le préquel de House of the Dragon ?',
    answer: 'Game of Thrones',
    options: ['Game of Thrones', 'The Witcher', 'Vikings', 'Rome'],
    theme: 'Séries TV',
  },
  {
    question:
      'Quel empereur romain porte le même nom que des sandales japonaises traditionnelles ?',
    answer: 'Geta',
    options: ['Geta', 'Néron', 'Commode', 'Hadrien'],
    theme: 'Histoire',
  },
  {
    question:
      'Quelle fibre synthétique inventée par Stéphanie Kwolek est utilisée dans les gilets pare-balles ?',
    answer: 'Kevlar',
    options: ['Kevlar', 'Nylon', 'Polyester', 'Téflon'],
    theme: 'Sciences',
  },
  {
    question: 'Quel est le cap le plus septentrional d’Europe ?',
    answer: 'Cap Nord',
    options: ['Cap Nord', 'Cap Finisterre', 'Cap Matapan', 'Cap Roca'],
    theme: 'Géographie',
  },
  {
    question: 'Quel chef d’orchestre hongrois détient 32 Grammy Awards ?',
    answer: 'Georg Solti',
    options: ['Georg Solti', 'Herbert von Karajan', 'Leonard Bernstein', 'Claudio Abbado'],
    theme: 'Musique',
  },
  {
    question:
      'Quel substantif féminin désigne la partie en forme de coupe constituant le corps principal des méduses ?',
    answer: 'Ombrelle',
    options: ['Ombrelle', 'Tentacule', 'Polype', 'Cloche'],
    theme: 'Sciences',
  },
  {
    question: 'Comment appelle-t-on en France le coordinateur des avocats inscrits au barreau ?',
    answer: 'Bâtonnier',
    options: ['Bâtonnier', 'Procureur', 'Greffier', 'Avoué'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel auteur martiniquais a rédigé 'Discours sur le colonialisme' en 1950 ?",
    answer: 'Aimé Césaire',
    options: ['Aimé Césaire', 'Frantz Fanon', 'Léopold Sédar Senghor', 'Édouard Glissant'],
    theme: 'Littérature',
  },
  {
    question: 'Quel sprinter jamaïcain détient le record du monde du 100 m en 9"58 ?',
    answer: 'Usain Bolt',
    options: ['Usain Bolt', 'Yohan Blake', 'Justin Gatlin', 'Tyson Gay'],
    theme: 'Sport',
  },
  {
    question: 'Quel MMORPG sorti en 2004 est abrégé par les lettres WoW ?',
    answer: 'World of Warcraft',
    options: ['World of Warcraft', 'Guild Wars', 'Elder Scrolls Online', 'Final Fantasy XIV'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      'Quel jeu télévisé de lettres présenté par Thierry Beccaro reposait sur un principe proche du Mastermind ?',
    answer: 'Motus',
    options: ['Motus', 'Des chiffres et des lettres', 'Slam', 'Questions pour un champion'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quel cardinal a exercé le pouvoir aux côtés d’Anne d’Autriche après la mort de Louis XIII ?',
    answer: 'Mazarin',
    options: ['Mazarin', 'Richelieu', 'Colbert', 'Sully'],
    theme: 'Histoire',
  },
  {
    question: 'Quel nom porte l’alliage de cuivre et d’étain autrefois appelé airain ?',
    answer: 'Bronze',
    options: ['Bronze', 'Laiton', 'Acier', 'Étain'],
    theme: 'Sciences',
  },
  {
    question:
      'Dans quel département se situent les sous-préfectures de Châteaulin, Morlaix et Brest ?',
    answer: 'Finistère',
    options: ['Finistère', 'Côtes-d’Armor', 'Morbihan', 'Ille-et-Vilaine'],
    theme: 'Géographie',
  },
  {
    question: "Quel boys-band interprète 'What Makes You Beautiful' ?",
    answer: 'One Direction',
    options: ['One Direction', 'Backstreet Boys', 'NSYNC', 'Take That'],
    theme: 'Musique',
  },
  {
    question:
      "Quelle fleur symbole des Pays-Bas porte un nom d’origine turque signifiant 'turban' ?",
    answer: 'Tulipe',
    options: ['Tulipe', 'Jacinthe', 'Narcisse', 'Pivoine'],
    theme: 'Géographie',
  },
  {
    question: 'Quelle spécialité belge peut être de Liège ou de Bruxelles ?',
    answer: 'Gaufre',
    options: ['Gaufre', 'Crêpe', 'Blinis', 'Pancake'],
    theme: 'Cuisine',
  },
  {
    question: 'Quel poème épique en vieil anglais met en scène le monstre Grendel ?',
    answer: 'Beowulf',
    options: ['Beowulf', 'L’Edda', 'La Chanson de Roland', 'Nibelungenlied'],
    theme: 'Littérature',
  },
  {
    question: 'Quel rugbyman italien est le plus capé de la sélection avec 142 sélections ?',
    answer: 'Sergio Parisse',
    options: ['Sergio Parisse', 'Martin Castrogiovanni', 'Jonny Wilkinson', 'Antoine Dupont'],
    theme: 'Sport',
  },
  {
    question: "Quel navigateur internet porte le nom du compositeur surnommé le 'Prêtre roux' ?",
    answer: 'Vivaldi',
    options: ['Vivaldi', 'Opera', 'Brave', 'Edge'],
    theme: 'Internet',
  },
  {
    question: 'Quel film de 1927 est considéré comme le premier film parlant de l’histoire ?',
    answer: 'Le Chanteur de Jazz',
    options: ['Le Chanteur de Jazz', 'Metropolis', 'Nosferatu', 'Citizen Kane'],
    theme: 'Cinéma',
  },
  {
    question: 'Quelle plante a donné son nom à la révolution tunisienne de 2010-2011 ?',
    answer: 'Jasmin',
    options: ['Jasmin', 'Olivier', 'Palmier', 'Laurier'],
    theme: 'Histoire',
  },
  {
    question: 'Quel chercheur allemand a donné son nom au point G ?',
    answer: 'Ernst Gräfenberg',
    options: ['Ernst Gräfenberg', 'Sigmund Freud', 'Alfred Kinsey', 'Wilhelm Reich'],
    theme: 'Sciences',
  },
  {
    question: 'Quel pays possède un drapeau appelé Tiranga ?',
    answer: 'Inde',
    options: ['Inde', 'Népal', 'Sri Lanka', 'Bangladesh'],
    theme: 'Géographie',
  },
  {
    question: 'Quel groupe fut mené par Chester Bennington jusqu’en 2017 ?',
    answer: 'Linkin Park',
    options: ['Linkin Park', 'Green Day', 'Sum 41', 'Muse'],
    theme: 'Musique',
  },
  {
    question: 'Quelle race de chat originaire de Thaïlande possède des yeux bleu profond ?',
    answer: 'Siamois',
    options: ['Siamois', 'Persan', 'Maine Coon', 'Bengal'],
    theme: 'Animaux',
  },
  {
    question: 'Quel mot de cinq lettres désigne à la fois un ferme-porte et le métier de Spirou ?',
    answer: 'Groom',
    options: ['Groom', 'Page', 'Huissier', 'Portier'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quel personnage féminin de l’univers de Batman a pour véritable identité Selina Kyle ?',
    answer: 'Catwoman',
    options: ['Catwoman', 'Batgirl', 'Harley Quinn', 'Poison Ivy'],
    theme: 'Séries TV',
  },
  {
    question: 'Quel adjectif qualifie les assiettes tournantes dans l’art du cirque ?',
    answer: 'Chinoises',
    options: ['Chinoises', 'Italiennes', 'Japonaises', 'Mexicaines'],
    theme: 'Autres',
  },
  {
    question: 'Quel sigle désigne la console PlayStation Portable ?',
    answer: 'PSP',
    options: ['PSP', 'PSV', 'NDS', 'GBA'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Quel membre des Inconnus n’a pas coréalisé 'Les Trois Frères' ?",
    answer: 'Pascal Légitimus',
    options: ['Pascal Légitimus', 'Didier Bourdon', 'Bernard Campan', 'Élie Semoun'],
    theme: 'Cinéma',
  },
  {
    question:
      'Quelle statue thérianthrope de 73 mètres de long fut construite vers 2500 av. J.-C. en Égypte ?',
    answer: 'Sphinx',
    options: ['Sphinx', 'Colosse de Memnon', 'Statue de Ramsès II', 'Obélisque de Louxor'],
    theme: 'Histoire',
  },
  {
    question: 'Quel nom tiré du latin désigne le gros orteil ?',
    answer: 'Hallux',
    options: ['Hallux', 'Phalange', 'Tibia', 'Rotule'],
    theme: 'Sciences',
  },
  {
    question: 'Quelle couleur est commune aux drapeaux du Bénin, du Brésil et de la Belgique ?',
    answer: 'Jaune',
    options: ['Jaune', 'Vert', 'Rouge', 'Noir'],
    theme: 'Géographie',
  },
  {
    question: 'Quel modèle de Bugatti est associé à 92i dans un titre de Booba ?',
    answer: 'Veyron',
    options: ['Veyron', 'Chiron', 'Divo', 'Mistral'],
    theme: 'Musique',
  },
  {
    question: 'Quel animal à deux bosses est symbole de la ville de Béziers ?',
    answer: 'Chameau',
    options: ['Chameau', 'Dromadaire', 'Lama', 'Alpaga'],
    theme: 'Animaux',
  },
  {
    question: 'Quelle dernière lettre de l’alphabet grec a donné son nom à une marque horlogère ?',
    answer: 'Omega',
    options: ['Omega', 'Sigma', 'Delta', 'Theta'],
    theme: 'Culture Générale',
  },
  {
    question: 'Dans quelle rue Poe situe-t-il un double assassinat ?',
    answer: 'rue Morgue',
    options: ['rue Morgue', 'Baker Street', 'Fleet Street', 'rue Broca'],
    theme: 'Littérature',
  },
  {
    question: 'Quel sportif français détient 6 titres olympiques en biathlon ?',
    answer: 'Martin Fourcade',
    options: ['Martin Fourcade', 'Teddy Riner', 'Tony Estanguet', 'Alain Bernard'],
    theme: 'Sport',
  },
  {
    question: 'Quelle technologie décentralisée est utilisée pour les cryptomonnaies ?',
    answer: 'Blockchain',
    options: ['Blockchain', 'Cloud', 'VPN', 'Intranet'],
    theme: 'Internet',
  },
  {
    question: "Quel chanteur est au centre du film 'Walk the Line' ?",
    answer: 'Johnny Cash',
    options: ['Johnny Cash', 'Elvis Presley', 'Bob Dylan', 'Roy Orbison'],
    theme: 'Musique',
  },
  {
    question:
      'Quel nom de trois lettres désigne un chimpanzé envoyé dans l’espace et une ville de la Somme ?',
    answer: 'Ham',
    options: ['Ham', 'Ami', 'Eu', 'Aix'],
    theme: 'Histoire',
  },
  {
    question: 'Sur quelle planète se situe le mont Skadi ?',
    answer: 'Venus',
    options: ['Venus', 'Mars', 'Mercure', 'Jupiter'],
    theme: 'Sciences',
  },
  {
    question: 'Quel est le pays lusophone le plus peuplé du monde ?',
    answer: 'Brésil',
    options: ['Brésil', 'Portugal', 'Angola', 'Mozambique'],
    theme: 'Géographie',
  },
  {
    question: "Quel groupe interprète 'Happy Together' ?",
    answer: 'The Turtles',
    options: ['The Turtles', 'The Monkees', 'The Byrds', 'The Beach Boys'],
    theme: 'Musique',
  },
  {
    question: 'Comment appelle-t-on l’ensemble des pétales d’une fleur ?',
    answer: 'Corolle',
    options: ['Corolle', 'Calice', 'Pistil', 'Étamine'],
    theme: 'Sciences',
  },
  {
    question: 'Quel jeu de cartes colorées consiste à avoir la plus petite valeur cumulée ?',
    answer: 'Skyjo',
    options: ['Skyjo', 'Uno', 'Skip-Bo', 'Phase 10'],
    theme: 'Culture Générale',
  },
  {
    question: 'Quel poisson donne son nom au Quintette D.667 de Schubert ?',
    answer: 'La Truite',
    options: ['La Truite', 'Le Saumon', 'La Carpe', 'Le Brochet'],
    theme: 'Musique',
  },
  {
    question: 'Quel footballeur portugais est surnommé CR7 ?',
    answer: 'Cristiano Ronaldo',
    options: ['Cristiano Ronaldo', 'Luis Figo', 'Eusébio', 'Pepe'],
    theme: 'Sport',
  },
  {
    question: 'Quel navigateur web possède un logo bleu, rouge, jaune et vert ?',
    answer: 'Chrome',
    options: ['Chrome', 'Firefox', 'Edge', 'Opera'],
    theme: 'Internet',
  },
  {
    question: 'Quel est le titre français de Survivor ?',
    answer: 'Koh Lanta',
    options: ['Koh Lanta', 'Fort Boyard', 'Pékin Express', 'The Island'],
    theme: 'Séries TV',
  },
  {
    question: 'Quelle province romaine couvrait la majorité du Portugal actuel ?',
    answer: 'Lusitanie',
    options: ['Lusitanie', 'Hispanie', 'Aquitaine', 'Bétique'],
    theme: 'Histoire',
  },
  {
    question: 'Quel satellite galiléen de Jupiter porte le nom d’un continent ?',
    answer: 'Europe',
    options: ['Europe', 'Io', 'Callisto', 'Ganymède'],
    theme: 'Sciences',
  },
  {
    question: 'À quel point cardinal correspond le levant ?',
    answer: 'Est',
    options: ['Est', 'Ouest', 'Nord', 'Sud'],
    theme: 'Géographie',
  },
  {
    question: "Quel groupe français interprète 'Song for Jedi' ?",
    answer: 'Dionysos',
    options: ['Dionysos', 'Indochine', 'Noir Désir', 'Phoenix'],
    theme: 'Musique',
  },
  {
    question: 'Quel arbre produit des faînes ?',
    answer: 'Hêtre',
    options: ['Hêtre', 'Chêne', 'Orme', 'Bouleau'],
    theme: 'Sciences',
  },
  {
    question: 'À quelle lettre correspond la croix de Saint-Antoine ?',
    answer: 'T',
    options: ['T', 'X', 'Y', 'L'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel poète a écrit 'Fêtes galantes' ?",
    answer: 'Paul Verlaine',
    options: ['Paul Verlaine', 'Arthur Rimbaud', 'Charles Baudelaire', 'Victor Hugo'],
    theme: 'Littérature',
  },
  {
    question: 'Dans quelle discipline Yulimar Rojas détient-elle le record ?',
    answer: 'Triple Saut',
    options: ['Triple Saut', 'Saut en longueur', 'Hauteur', 'Perche'],
    theme: 'Sport',
  },
  {
    question: 'Quel mot anglais désigne une vidéo de déballage ?',
    answer: 'Haul',
    options: ['Haul', 'Unbox', 'Loot', 'Drop'],
    theme: 'Internet',
  },
  {
    question: 'Quel film de Kubrick adapte Stephen King avec Jack Nicholson ?',
    answer: 'The Shining',
    options: ['The Shining', 'Orange mécanique', 'Barry Lyndon', 'Psychose'],
    theme: 'Cinéma',
  },
  {
    question: 'Quel criminel français est surnommé le Barbe-Bleue de Gambais ?',
    answer: 'Henri-Désiré Landru',
    options: ['Henri-Désiré Landru', 'Jacques Mesrine', 'Pierre Rivière', 'Joseph Vacher'],
    theme: 'Histoire',
  },
  {
    question:
      "Quelle huile minérale naturelle a une étymologie latine signifiant 'huile de pierre' ?",
    answer: 'Pétrole',
    options: ['Pétrole', 'Bitume', 'Kérosène', 'Naphta'],
    theme: 'Sciences',
  },
  {
    question:
      'Quel nom issu de l’allemand désigne la ligne joignant les points les plus bas d’une vallée ?',
    answer: 'Talweg',
    options: ['Talweg', 'Crête', 'Isobare', 'Delta'],
    theme: 'Géographie',
  },
  {
    question:
      'Quel homme né sous le nom d’Andreas Cornelis van Kuijk est surtout connu comme l’impresario exclusif d’Elvis Presley ?',
    answer: 'Colonel Parker',
    options: ['Colonel Parker', 'Brian Epstein', 'Phil Spector', 'Sam Phillips'],
    theme: 'Musique',
  },
  {
    question: 'Quel insecte de l’ordre des dermaptères est aussi appelé perce-oreilles ?',
    answer: 'Forficule',
    options: ['Forficule', 'Scolopendre', 'Cloporte', 'Staphylin'],
    theme: 'Animaux',
  },
  {
    question:
      'Quelle sauce veloutée à base de jaune d’œuf et de sauce tomate porte un nom évoquant un moment de la journée ?',
    answer: 'Sauce Aurore',
    options: ['Sauce Aurore', 'Sauce Hollandaise', 'Sauce Béarnaise', 'Sauce Choron'],
    theme: 'Cuisine',
  },
  {
    question: "Quel peintre est l'auteur du tableau 'Impression, Soleil levant' (1872) ?",
    answer: 'Claude Monet',
    options: ['Claude Monet', 'Auguste Renoir', 'Camille Pissarro', 'Édouard Manet'],
    theme: 'Art',
  },
  {
    question: 'Combien y a-t-il de joueurs dans chaque équipe au cricket et au hockey sur gazon ?',
    answer: '11',
    options: ['11', '9', '7', '15'],
    theme: 'Sport',
  },
  {
    question:
      "Quelle entreprise fondée en 1975 par Bill Gates et Paul Allen signifie 'micro-ordinateur' et 'logiciel' ?",
    answer: 'Microsoft',
    options: ['Microsoft', 'Apple', 'Oracle', 'IBM'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Dans quelle série de films Pete Mitchell, interprété par Tom Cruise, est-il pilote de chasse ?',
    answer: 'Top Gun',
    options: ['Top Gun', 'Mission Impossible', 'Pearl Harbor', 'Armageddon'],
    theme: 'Cinéma',
  },
  {
    question:
      'Dans quelle ville eut lieu le grand procès des dirigeants nazis après la Seconde Guerre mondiale ?',
    answer: 'Nuremberg',
    options: ['Nuremberg', 'Berlin', 'Munich', 'Vienne'],
    theme: 'Histoire',
  },
  {
    question: 'Quelle unité équivalant à un joule par seconde est symbolisée par la lettre W ?',
    answer: 'Watt',
    options: ['Watt', 'Volt', 'Ampère', 'Ohm'],
    theme: 'Sciences',
  },
  {
    question: 'Quel land allemand est évoqué par la lettre B dans le sigle BMW ?',
    answer: 'Bayern',
    options: ['Bayern', 'Berlin', 'Brandebourg', 'Bade-Wurtemberg'],
    theme: 'Géographie',
  },
  {
    question:
      'Quelle pratique consiste à reconnaître une chanson uniquement à l’écoute d’un extrait ?',
    answer: 'Blind Test',
    options: ['Blind Test', 'Playback', 'Karaoké', 'Freestyle'],
    theme: 'Musique',
  },
  {
    question: 'Quel légume possède des variétés appelées vitelotte, bintje ou ratte ?',
    answer: 'Pomme de terre',
    options: ['Pomme de terre', 'Carotte', 'Navet', 'Betterave'],
    theme: 'Cuisine',
  },
  {
    question: 'Quel mot composé d’origine anglaise désigne un voyageur parcourant le monde ?',
    answer: 'Globe Trotter',
    options: ['Globe Trotter', 'Backpacker', 'Routard', 'Explorateur'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quelle photographe surréaliste fut incarnée par Kate Winslet dans un biopic en 2024 ?',
    answer: 'Lee Miller',
    options: ['Lee Miller', 'Diane Arbus', 'Annie Leibovitz', 'Dorothea Lange'],
    theme: 'Art',
  },
  {
    question:
      'Quel footballeur brésilien, frère de Raí, portait un nom proche d’un philosophe grec ?',
    answer: 'Socrates',
    options: ['Socrates', 'Zico', 'Romário', 'Kaká'],
    theme: 'Sport',
  },
  {
    question:
      'Quel forum anglophone créé en 2003 est associé à la naissance du mouvement Anonymous ?',
    answer: '4chan',
    options: ['4chan', 'Reddit', 'Tumblr', 'Imgur'],
    theme: 'Culture Générale',
  },
  {
    question: 'Dans quelle ville de Virginie se situe le centre d’entraînement du FBI ?',
    answer: 'Quantico',
    options: ['Quantico', 'Richmond', 'Norfolk', 'Arlington'],
    theme: 'Géographie',
  },
  {
    question:
      'Quelle bataille napoléonienne du 14 octobre 1806 a donné son nom à un pont parisien ?',
    answer: 'Bataille d’Iéna',
    options: [
      'Bataille d’Iéna',
      'Bataille d’Austerlitz',
      'Bataille de Wagram',
      'Bataille de Leipzig',
    ],
    theme: 'Histoire',
  },
  {
    question:
      'Avec la cytosine, la guanine et l’adénine, quelle est la quatrième base azotée de l’ADN, associée à l’adénine ?',
    answer: 'Thymine',
    options: ['Thymine', 'Uracile', 'Cytosine', 'Guanine'],
    theme: 'Sciences',
  },
  {
    question: "Signifiant 'citadelle de pierre', quelle ville est la capitale de l’Ouzbékistan ?",
    answer: 'Tachkent',
    options: ['Tachkent', 'Achgabat', 'Bichkek', 'Douchanbé'],
    theme: 'Géographie',
  },
  {
    question:
      'Par opposition à legato, quel mot désigne en musique le fait de jouer les notes de manière détachée ?',
    answer: 'Staccato',
    options: ['Staccato', 'Legato', 'Andante', 'Sforzando'],
    theme: 'Musique',
  },
  {
    question: 'Quel nom peut désigner à la fois une inflorescence de saule et le petit d’un chat ?',
    answer: 'Chaton',
    options: ['Chaton', 'Bourgeon', 'Cabri', 'Pistil'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quelle spécialité laitière islandaise proche du yaourt porte un nom valant 22 points au Scrabble ?',
    answer: 'Skyr',
    options: ['Skyr', 'Kéfir', 'Faisselle', 'Ricotta'],
    theme: 'Cuisine',
  },
  {
    question: "Dans la cathédrale de Reims, quel être spirituel est surnommé 'au sourire' ?",
    answer: 'Ange',
    options: ['Ange', 'Apôtre', 'Chérubin', 'Archange'],
    theme: 'Art',
  },
  {
    question:
      'Quel nom issu de l’anglais désigne la voiture légère utilisée pour les courses de trot attelé ?',
    answer: 'Sulky',
    options: ['Sulky', 'Buggy', 'Roadster', 'Fiacre'],
    theme: 'Sport',
  },
  {
    question:
      'Quel surnom de quatre lettres partagent un youtubeur français d’origine tchétchène et Zlatan Ibrahimović ?',
    answer: 'Ibra',
    options: ['Ibra', 'Zlat', 'Zizou', 'Kaka'],
    theme: 'Sport',
  },
  {
    question:
      'Quel animateur présente 100% Logique et La carte aux trésors sur France Télévisions ?',
    answer: 'Cyril Féraud',
    options: ['Cyril Féraud', 'Nagui', 'Arthur', 'Jean-Luc Reichmann'],
    theme: 'Autres',
  },
  {
    question: 'Qui fut le tout premier empereur romain de 27 av. J.-C. à 14 ap. J.-C. ?',
    answer: 'Auguste',
    options: ['Auguste', 'Néron', 'Trajan', 'Caligula'],
    theme: 'Histoire',
  },
  {
    question:
      'Quel scientifique fut le principal concepteur de la bombe atomique dans le cadre du projet Manhattan ?',
    answer: 'Oppenheimer',
    options: ['Oppenheimer', 'Einstein', 'Fermi', 'Bohr'],
    theme: 'Sciences',
  },
  {
    question:
      'Quel mot est commun au slogan iranien pour la défense des femmes et à la devise française ?',
    answer: 'Liberté',
    options: ['Liberté', 'Égalité', 'Justice', 'Dignité'],
    theme: 'Politique',
  },
  {
    question:
      'Quel chanteur de reggaeton portoricain, de son vrai nom Benito Antonio Martinez Ocasio a donné un concert de la mi-temps du Super Bowl 2026 ? Avec plus de 15,8 milliards de streams l’année dernière, il est l’artiste le plus écouté de l’année 2025.',
    answer: 'Bad Bunny',
    options: ['Bad Bunny', 'J Balvin', 'Daddy Yankee', 'Maluma'],
    theme: 'Musique',
  },
  {
    question:
      'Quel animal marin, pouvant être à bec ou à bosse, a donné son nom à une marque de sel ?',
    answer: 'Baleine',
    options: ['Baleine', 'Dauphin', 'Phoque', 'Orque'],
    theme: 'Animaux',
  },
  {
    question: 'Quelle est la couleur du drapeau brandi pour signifier la reddition ?',
    answer: 'Blanc',
    options: ['Blanc', 'Rouge', 'Noir', 'Vert'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quelle école d’architecture fondée à Weimar par Walter Gropius fut dirigée par Mies van der Rohe jusqu’en 1933 ?',
    answer: 'Bauhaus',
    options: ['Bauhaus', 'De Stijl', 'Arts & Crafts', 'Constructivisme'],
    theme: 'Art',
  },
  {
    question:
      'Quelle franchise NFL basée à Seattle a remporté le Super Bowl en 2014 face aux Denver Broncos ?',
    answer: 'Seahawks',
    options: ['Seahawks', 'Broncos', 'Patriots', '49ers'],
    theme: 'Sport',
  },
  {
    question:
      'Quel nom du choc initial en sumo est aussi celui d’une entreprise pionnière du jeu vidéo fondée en 1972 ?',
    answer: 'Atari',
    options: ['Atari', 'Sega', 'Nintendo', 'Taito'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      'Quelle série Netflix d’animation met en scène un cheval acteur ancien héros de sitcom ?',
    answer: 'Bojack Horseman',
    options: ['Bojack Horseman', 'Big Mouth', 'Rick and Morty', 'Disenchantment'],
    theme: 'Séries TV',
  },
  {
    question:
      'Comment appelait-on dans la Rome antique les gardes portant des faisceaux et protégeant les magistrats ?',
    answer: 'Licteur',
    options: ['Licteur', 'Prétorien', 'Centurion', 'Tribun'],
    theme: 'Histoire',
  },
  {
    question: 'Quelle constellation du zodiaque a pour étoile la plus brillante Aldébaran ?',
    answer: 'Taureau',
    options: ['Taureau', 'Gémeaux', 'Orion', 'Persée'],
    theme: 'Sciences',
  },
  {
    question:
      'Quelle ville est la capitale de l’État indien du Rajasthan et abrite le Palais des Vents ?',
    answer: 'Jaipur',
    options: ['Jaipur', 'Udaipur', 'Jodhpur', 'Bhopal'],
    theme: 'Géographie',
  },
  {
    question:
      "Quel groupe de blues rock formé en 1965 est notamment connu pour 'On the Road Again' ?",
    answer: 'Canned Heat',
    options: [
      'Canned Heat',
      'Creedence Clearwater Revival',
      'The Doors',
      'The Allman Brothers Band',
    ],
    theme: 'Musique',
  },
  {
    question:
      "Quel chien d’origine chinoise, au nom signifiant 'peau de sable', est connu pour sa peau plissée ?",
    answer: 'Shar Pei',
    options: ['Shar Pei', 'Chow-Chow', 'Akita Inu', 'Shiba Inu'],
    theme: 'Animaux',
  },
  {
    question:
      'Quelle étoffe de laine à carreaux colorés est traditionnellement utilisée pour confectionner les kilts écossais ?',
    answer: 'Tartan',
    options: ['Tartan', 'Tweed', 'Gabardine', 'Velours'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle trilogie comprend les volumes 'Les Deux Tours' et 'Le Retour du Roi' ?",
    answer: 'Le Seigneur des Anneaux',
    options: ['Le Seigneur des Anneaux', 'Le Monde de Narnia', 'À la Croisée des Mondes', 'Dune'],
    theme: 'Littérature',
  },
  {
    question:
      'Quel art martial japonais codifié par Jigorō Kanō est devenu discipline olympique en 1964 ?',
    answer: 'Judo',
    options: ['Judo', 'Karaté', 'Aïkido', 'Kendo'],
    theme: 'Sport',
  },
  {
    question: 'Quel anglicisme désigne le fait de faire défiler un contenu sur un écran ?',
    answer: 'Scroller',
    options: ['Scroller', 'Uploader', 'Streamer', 'Browser'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quelle actrice, apparue dans Aquaman, fut opposée à Johnny Depp dans un procès médiatisé ?',
    answer: 'Amber Heard',
    options: ['Amber Heard', 'Margot Robbie', 'Scarlett Johansson', 'Gal Gadot'],
    theme: 'Cinéma',
  },
  {
    question: 'Quel roi de France, canonisé en 1297, est connu sous le nom de Saint Louis ?',
    answer: 'Louis IX',
    options: ['Louis IX', 'Louis VIII', 'Louis X', 'Louis VII'],
    theme: 'Histoire',
  },
  {
    question: 'Quel tube transporte les aliments de la bouche vers l’estomac ?',
    answer: 'Oesophage',
    options: ['Oesophage', 'Trachée', 'Duodénum', 'Pharynx'],
    theme: 'Sciences',
  },
  {
    question: 'Quel nom est partagé par un quartier de Montpellier et une héroïne de Sophocle ?',
    answer: 'Antigone',
    options: ['Antigone', 'Électre', 'Médée', 'Hélène'],
    theme: 'Littérature',
  },
  {
    question:
      'Quelle chanteuse texane, ex-membre des Destiny’s Child, a utilisé l’alter ego Sasha Fierce ?',
    answer: 'Beyoncé',
    options: ['Beyoncé', 'Rihanna', 'Alicia Keys', 'Whitney Houston'],
    theme: 'Musique',
  },
  {
    question: 'Quel terme anglais désigne une personne gardant temporairement un chien ?',
    answer: 'Dog-sitter',
    options: ['Dog-sitter', 'Pet-sitter', 'Kennel keeper', 'Dog walker'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel animal est associé à l’expression 'queue-de-rat' ?",
    answer: 'Rat',
    options: ['Rat', 'Souris', 'Renard', 'Lézard'],
    theme: 'Animaux',
  },
  {
    question:
      'Quelle fête celte, parfois considérée comme l’ancêtre d’Halloween, complétait Imbolc, Beltaine et Lugnasad ?',
    answer: 'Samain',
    options: ['Samain', 'Yule', 'Ostara', 'Beltane'],
    theme: 'Histoire',
  },
  {
    question:
      'Quel cycliste espagnol détient quatre victoires sur la Vuelta au début des années 2000 ?',
    answer: 'Roberto Heras',
    options: ['Roberto Heras', 'Alberto Contador', 'Miguel Indurain', 'Alejandro Valverde'],
    theme: 'Sport',
  },
  {
    question: "Quel sport est mentionné dans le tout premier jeu vidéo 'Tennis for Two' de 1958 ?",
    answer: 'Tennis',
    options: ['Tennis', 'Ping-pong', 'Squash', 'Badminton'],
    theme: 'Jeux Vidéo',
  },
  {
    question: 'Quel film de la saga Fast & Furious est associé au morceau des Teriyaki Boyz ?',
    answer: 'Tokyo Drift',
    options: ['Tokyo Drift', 'Fast Five', 'Fast & Furious 6', 'Furious 7'],
    theme: 'Cinéma',
  },
  {
    question:
      'Quelle arme ancienne, ancêtre de l’arquebuse, tire son nom d’un serpent non venimeux ?',
    answer: 'Couleuvrine',
    options: ['Couleuvrine', 'Bombarde', 'Arquebuse', 'Baliste'],
    theme: 'Histoire',
  },
  {
    question:
      'Quel osselet de l’oreille, nommé stapes en latin, est le plus petit os du corps humain ?',
    answer: 'Etrier',
    options: ['Etrier', 'Marteau', 'Enclume', 'Rotule'],
    theme: 'Sciences',
  },
  {
    question: 'Dans quelle ville américaine se situe le Getty Center ?',
    answer: 'Los Angeles',
    options: ['Los Angeles', 'San Diego', 'San Francisco', 'Phoenix'],
    theme: 'Géographie',
  },
  {
    question: "Quel interlude orchestral du 'Conte du Tsar Saltan' est mondialement connu ?",
    answer: 'Le Vol du Bourdon',
    options: ['Le Vol du Bourdon', 'Danse macabre', 'Casse-Noisette', 'Boléro'],
    theme: 'Musique',
  },
  {
    question:
      'Quel naturaliste allemand né en 1709 a donné son nom à une espèce de pygargue et à la rhytine ?',
    answer: 'Georg Wilhelm Steller',
    options: ['Georg Wilhelm Steller', 'Carl von Linné', 'Alexander von Humboldt', 'Ernst Haeckel'],
    theme: 'Sciences',
  },
  {
    question: 'Comment appelle-t-on l’art japonais du papier découpé ?',
    answer: 'Kirigami',
    options: ['Kirigami', 'Origami', 'Ukiyo-e', 'Ikebana'],
    theme: 'Art',
  },
  {
    question: 'Quel héros grec mène les Argonautes à la conquête de la Toison d’Or ?',
    answer: 'Jason',
    options: ['Jason', 'Thésée', 'Persée', 'Achille'],
    theme: 'Histoire',
  },
  {
    question: 'Quel prénom partagent les sportifs français Vauquelin, Séraphin et Mayer ?',
    answer: 'Kévin',
    options: ['Kévin', 'Julien', 'Thomas', 'Nicolas'],
    theme: 'Sport',
  },
  {
    question:
      "Quelle lettre est associée à 'Mister' dans le pseudonyme de Yvick Letexier (Mister V) ?",
    answer: 'V',
    options: ['V', 'X', 'M', 'Z'],
    theme: 'Culture Générale',
  },
  {
    question: 'Quel héros Disney vole sur un tapis magique accompagné du singe Abu ?',
    answer: 'Aladdin',
    options: ['Aladdin', 'Hercule', 'Simba', 'Tarzan'],
    theme: 'Cinéma',
  },
  {
    question:
      'Quel outil servant à faire tomber les fruits est homonyme d’une région conquise par Jules César ?',
    answer: 'Gaule',
    options: ['Gaule', 'Perche', 'Serpe', 'Houe'],
    theme: 'Culture Générale',
  },
  {
    question: 'Comment appelle-t-on la marque blanche en forme de croissant à la base de l’ongle ?',
    answer: 'Lunule',
    options: ['Lunule', 'Cuticule', 'Phalange', 'Épiderme'],
    theme: 'Sciences',
  },
  {
    question:
      'Quelle ville originellement appelée Ville-Marie est la plus peuplée de la province canadienne du Québec ?',
    answer: 'Montréal',
    options: ['Montréal', 'Québec', 'Gatineau', 'Laval'],
    theme: 'Géographie',
  },
  {
    question:
      "Associé à 'Jones' dans le nom d’un groupe de punk-rock français, quel nom Haribo a-t-il donné à ses bonbons en forme de fraise ?",
    answer: 'Tagada',
    options: ['Tagada', 'Dragibus', 'Chamallow', 'Rotella'],
    theme: 'Musique',
  },
  {
    question: 'Quel fruit a pour variétés la kankanbou, la corne, la Cavendish et la plantain ?',
    answer: 'Banane',
    options: ['Banane', 'Mangue', 'Papaye', 'Ananas'],
    theme: 'Cuisine',
  },
  {
    question:
      'Quelle spécialité culinaire française d’un poids de 250 grammes a été classée par l’Unesco en 2022 ?',
    answer: 'Baguette de pain',
    options: ['Baguette de pain', 'Croissant', 'Camembert', 'Cassoulet'],
    theme: 'Cuisine',
  },
  {
    question:
      'À quel compositeur doit-on l’opéra Nixon in China représenté pour la première fois en 1987 ?',
    answer: 'John Adams',
    options: ['John Adams', 'Philip Glass', 'Steve Reich', 'Leonard Bernstein'],
    theme: 'Art',
  },
  {
    question:
      'Par quel nom anglais désigne-t-on un exhibitionniste rentrant sur le terrain pendant un match de sport ?',
    answer: 'Streaker',
    options: ['Streaker', 'Pitch invader', 'Line jumper', 'Freerunner'],
    theme: 'Sport',
  },
  {
    question: 'Quel homme d’affaires américain a succédé à Jeff Bezos à la tête d’Amazon en 2021 ?',
    answer: 'Andy Jassy',
    options: ['Andy Jassy', 'Tim Cook', 'Satya Nadella', 'Sundar Pichai'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quel personnage de roman pour la jeunesse fut créé par Eric Knight en 1938 avant d’être interprété par Pal en 1943 ?',
    answer: 'Lassie',
    options: ['Lassie', 'Rintintin', 'Belle', 'Milou'],
    theme: 'Littérature',
  },
  {
    question:
      'Quel nom partagent un anarchiste ayant jeté une bombe dans la chambre des députés en 1893 et un pigeon voyageur de la Seconde Guerre mondiale ?',
    answer: 'Vaillant',
    options: ['Vaillant', 'Courage', 'Fidèle', 'Héros'],
    theme: 'Histoire',
  },
  {
    question:
      'Quel instrument de musique à vent datant du paléolithique a le même nom que l’ancienne dénomination du losange ?',
    answer: 'Rhombe',
    options: ['Rhombe', 'Ocarina', 'Flûte', 'Cornemuse'],
    theme: 'Art',
  },
  {
    question: "Quelle ville de l'Indre a laissé son nom à un fromage pyramidal tronqué ?",
    answer: 'Valençay',
    options: ['Valençay', 'Rocamadour', 'Brie', 'Langres'],
    theme: 'Géographie',
  },
  {
    question: 'Quel groupe originaire de Bristol a sorti l’album Mezzanine en 1998 ?',
    answer: 'Massive Attack',
    options: ['Massive Attack', 'Portishead', 'Blur', 'Radiohead'],
    theme: 'Musique',
  },
  {
    question: 'Par quel nom sont plus couramment désignés les arachnides appelés opilions ?',
    answer: 'Faucheurs',
    options: ['Faucheurs', 'Scorpions', 'Tiques', 'Araignées-loups'],
    theme: 'Animaux',
  },
  {
    question:
      'Quelle créature légendaire du folklore breton est généralement comparée à un lutin ?',
    answer: 'Korrigan',
    options: ['Korrigan', 'Gnome', 'Gobelin', 'Faradet'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Dans le conte de Perrault, en quoi les chevaux du carrosse de Cendrillon se transforment-ils passé minuit ?',
    answer: 'En souris',
    options: ['En souris', 'En citrouille', 'En lézards', 'En rats'],
    theme: 'Littérature',
  },
  {
    question:
      'Quelle règle d’exclusion temporaire au rugby est aussi le nom d’un obstacle de sable au golf ?',
    answer: 'Bunker',
    options: ['Bunker', 'Scrum', 'Drop', 'Hooker'],
    theme: 'Sport',
  },
  {
    question: 'Quel acronyme signifie Subscriber Identity Module ?',
    answer: 'SIM',
    options: ['SIM', 'CPU', 'USB', 'GPS'],
    theme: 'Sciences',
  },
  {
    question: 'Quel jour de la semaine est le prénom de la fille Adams incarnée par Jenna Ortega ?',
    answer: 'Mercredi',
    options: ['Mercredi', 'Lundi', 'Mardi', 'Dimanche'],
    theme: 'Séries TV',
  },
  {
    question: "Quel scandale d'espionnage conduisit à la démission de Richard Nixon en 1974 ?",
    answer: 'Watergate',
    options: ['Watergate', 'Irangate', 'Pentagon Papers', 'Monicagate'],
    theme: 'Politique',
  },
  {
    question:
      'Quelle vitamine, également appelée calciférol, est synthétisée par le corps humain grâce au Soleil ?',
    answer: 'Vitamine D',
    options: ['Vitamine D', 'Vitamine C', 'Vitamine A', 'Vitamine B12'],
    theme: 'Sciences',
  },
  {
    question:
      'Quel département français a pour sous-préfectures Oloron-Sainte-Marie ainsi que la ville de Bayonne ?',
    answer: 'Pyrénées-Atlantiques',
    options: ['Pyrénées-Atlantiques', 'Hautes-Pyrénées', 'Landes', 'Gironde'],
    theme: 'Géographie',
  },
  {
    question:
      'De quel personnage de la série Heroes s’est inspirée Aya Coco Danioko pour son pseudonyme ?',
    answer: 'Nakamura',
    options: ['Nakamura', 'Petrelli', 'Sylar', 'Bennett'],
    theme: 'Séries TV',
  },
  {
    question: 'Quelle plante du genre Citrullus est parfois appelée melon d’eau ?',
    answer: 'Pastèque',
    options: ['Pastèque', 'Melon', 'Citrouille', 'Courgette'],
    theme: 'Cuisine',
  },
  {
    question:
      'Selon l’expression, par quel animal la bave du crapaud n’atteint-elle pas la blanche colombe ?',
    answer: 'Colombe',
    options: ['Colombe', 'Cygne', 'Paon', 'Aigle'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quel philosophe cynique aurait demandé à Alexandre le Grand de s’ôter de son Soleil ?',
    answer: 'Diogène',
    options: ['Diogène', 'Socrate', 'Platon', 'Aristote'],
    theme: 'Histoire',
  },
  {
    question:
      'Face à quel joueur Nicolas Mahut a-t-il perdu le plus long match de l’histoire du tennis à Wimbledon en 2010 ?',
    answer: 'John Isner',
    options: ['John Isner', 'Andy Murray', 'Novak Djokovic', 'Roger Federer'],
    theme: 'Sport',
  },
  {
    question:
      'Quel streamer français, fondateur de Gentle Mates, est surnommé The French Monster ?',
    answer: 'Gotaga',
    options: ['Gotaga', 'Squeezie', 'ZeratoR', 'Locklear'],
    theme: 'Jeux Vidéo',
  },
  {
    question: 'Quel acteur a incarné Fox Mulder dans X-Files ?',
    answer: 'David Duchovny',
    options: ['David Duchovny', 'Kyle MacLachlan', 'Bryan Cranston', 'Kiefer Sutherland'],
    theme: 'Séries TV',
  },
  {
    question: 'Au cours de quel conflit eurent lieu les batailles d’Antietam et de Gettysburg ?',
    answer: 'Guerre de Sécession',
    options: [
      'Guerre de Sécession',
      'Première Guerre mondiale',
      'Guerre d’Indépendance américaine',
      'Guerre de Corée',
    ],
    theme: 'Histoire',
  },
  {
    question: 'Quelle espèce de moustique transmet le parasite responsable du paludisme ?',
    answer: 'Anophèle',
    options: ['Anophèle', 'Aedes', 'Culex', 'Tipule'],
    theme: 'Sciences',
  },
  {
    question:
      'Quelle ville antique appelée Ilios ou Ilion correspond au site archéologique d’Hissarlik ?',
    answer: 'Troie',
    options: ['Troie', 'Mycènes', 'Sparte', 'Athènes'],
    theme: 'Histoire',
  },
  {
    question:
      'Quel label fondé par Dr. Dre et Suge Knight fut emblématique du gangsta rap des années 1990 ?',
    answer: 'Death Row Records',
    options: ['Death Row Records', 'Bad Boy Records', 'Def Jam', 'Aftermath Entertainment'],
    theme: 'Musique',
  },
  {
    question: 'Quel autre nom du singe-araignée est homophone d’un synonyme d’orthèse ?',
    answer: 'Atèle',
    options: ['Atèle', 'Babouin', 'Macaque', 'Capucin'],
    theme: 'Animaux',
  },
  {
    question:
      "Quel adverbe latin signifiant 'selon les termes exacts' est aussi une marque de supports numériques ?",
    answer: 'Verbatim',
    options: ['Verbatim', 'Ipso facto', 'Ad vitam', 'In situ'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel écrivain français est l’auteur de 'Vingt Mille Lieues sous les Mers' ?",
    answer: 'Jules Verne',
    options: ['Jules Verne', 'Victor Hugo', 'Émile Zola', 'Guy de Maupassant'],
    theme: 'Littérature',
  },
  {
    question: 'Quel prénom partagent les sportifs français Caristan, Traineau et Diagana ?',
    answer: 'Stéphane',
    options: ['Stéphane', 'Pascal', 'Christophe', 'Olivier'],
    theme: 'Sport',
  },
  {
    question:
      'Quel pseudonyme le fils de Guy Carlier a-t-il choisi pour former le duo McFly et Carlito ?',
    answer: 'Carlito',
    options: ['Carlito', 'Cyprien', 'Norman', 'Mastu'],
    theme: 'Autres',
  },
  {
    question:
      'Quel personnage est incarné par Gene Wilder, Johnny Depp et Timothée Chalamet dans différentes adaptations ?',
    answer: 'Willie Wonka',
    options: ['Willie Wonka', 'Edward aux mains d’argent', 'Mary Poppins', 'Peter Pan'],
    theme: 'Cinéma',
  },
  {
    question: 'Dans les locaux de quel journal satirique eut lieu l’attentat du 7 janvier 2015 ?',
    answer: 'Charlie Hebdo',
    options: ['Charlie Hebdo', 'Le Canard Enchaîné', 'Libération', 'Le Monde'],
    theme: 'Politique',
  },
  {
    question: 'Quelle coordonnée est opposée à l’abscisse ?',
    answer: 'Ordonnée',
    options: ['Ordonnée', 'Tangente', 'Hypoténuse', 'Vecteur'],
    theme: 'Sciences',
  },
  {
    question: 'Quelle est la capitale de l’État américain de Californie ?',
    answer: 'Sacramento',
    options: ['Sacramento', 'Los Angeles', 'San Diego', 'San Jose'],
    theme: 'Géographie',
  },
  {
    question: 'Quel style musical est associé à Duke Ellington et Louis Armstrong ?',
    answer: 'Jazz',
    options: ['Jazz', 'Blues', 'Soul', 'Swing'],
    theme: 'Musique',
  },
  {
    question: 'Quelle partie du museau d’un chien est aussi un champignon du Périgord ?',
    answer: 'Truffe',
    options: ['Truffe', 'Museau', 'Vibrisse', 'Moustache'],
    theme: 'Animaux',
  },
  {
    question:
      'Quelle enseigne française tire son nom du fait que son premier magasin était situé à un croisement de routes ?',
    answer: 'Carrefour',
    options: ['Carrefour', 'Auchan', 'Leclerc', 'Casino'],
    theme: 'Culture Générale',
  },
  {
    question: 'Quel roman satirique publié en 1726 met en scène le personnage de Lemuel Gulliver ?',
    answer: 'Les Voyages de Gulliver',
    options: ['Les Voyages de Gulliver', 'Candide', 'Robinson Crusoé', 'Don Quichotte'],
    theme: 'Littérature',
  },
  {
    question:
      'Quel footballeur français fut violemment percuté par Harald Schumacher lors de la demi-finale France–RFA de 1982 ?',
    answer: 'Patrick Battiston',
    options: ['Patrick Battiston', 'Michel Platini', 'Alain Giresse', 'Dominique Rocheteau'],
    theme: 'Sport',
  },
  {
    question:
      "Quelle plateforme de distribution de jeux vidéo développée par Valve porte un nom signifiant 'vapeur' en anglais ?",
    answer: 'Steam',
    options: ['Steam', 'Origin', 'Epic Games Store', 'GOG'],
    theme: 'Jeux Vidéo',
  },
  {
    question: 'Dans quelle série John Quayle Higgins III est-il le majordome de Thomas Magnum ?',
    answer: 'Magnum',
    options: ['Magnum', 'Columbo', 'Dallas', 'Deux flics à Miami'],
    theme: 'Séries TV',
  },
  {
    question: 'Quel pays africain correspond à l’ancien protectorat britannique du Bechuanaland ?',
    answer: 'Botswana',
    options: ['Botswana', 'Lesotho', 'Eswatini', 'Namibie'],
    theme: 'Géographie',
  },
  {
    question:
      'Quel médecin anglais a donné son nom à la chorée de Sydenham, aussi appelée danse de Saint-Guy ?',
    answer: 'Thomas Sydenham',
    options: ['Thomas Sydenham', 'William Harvey', 'Edward Jenner', 'Robert Hooke'],
    theme: 'Sciences',
  },
  {
    question: 'Dans quel pays se situe la municipalité d’Eeyou Istchee Baie-James ?',
    answer: 'Canada',
    options: ['Canada', 'États-Unis', 'Russie', 'Brésil'],
    theme: 'Géographie',
  },
  {
    question:
      'Quelle chanteuse londonienne née en 1999 a remporté le Grammy Award de la meilleure nouvelle artiste en 2026 ?',
    answer: 'Olivia Dean',
    options: ['Olivia Dean', 'Raye', 'Dua Lipa', 'Jorja Smith'],
    theme: 'Musique',
  },
  {
    question:
      'Quel poisson, aussi appelé cycloptère, produit des œufs utilisés comme succédané du caviar ?',
    answer: 'Lump',
    options: ['Lump', 'Esturgeon', 'Hareng', 'Cabillaud'],
    theme: 'Animaux',
  },
  {
    question:
      'Quel terme désigne à la fois un joueur de baccarat et un personnage influent dans la mafia ?',
    answer: 'Ponte',
    options: ['Ponte', 'Parrain', 'Consigliere', 'Capo'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quel cyclope de la mythologie grecque, amoureux de Galatée, est associé au mythe d’Ulysse ?',
    answer: 'Polyphème',
    options: ['Polyphème', 'Argos', 'Chiron', 'Minos'],
    theme: 'Histoire',
  },
  {
    question: 'Dans quelle ville se situe le stade Roazhon Park ?',
    answer: 'Rennes',
    options: ['Rennes', 'Brest', 'Nantes', 'Lorient'],
    theme: 'Sport',
  },
  {
    question: 'Quel service de messagerie électronique a été lancé par Google en 2004 ?',
    answer: 'Gmail',
    options: ['Gmail', 'Yahoo Mail', 'Outlook', 'Proton Mail'],
    theme: 'Sciences',
  },
  {
    question:
      'Quelle poupée créée en 1959 est incarnée par Margot Robbie dans un film de Greta Gerwig ?',
    answer: 'Barbie',
    options: ['Barbie', 'Bratz', 'Polly Pocket', 'Cabbage Patch Kids'],
    theme: 'Cinéma',
  },
  {
    question: 'Quel appareil est au cœur de la rivalité entre Clément Ader et les frères Wright ?',
    answer: 'Avion',
    options: ['Avion', 'Hélicoptère', 'Dirigeable', 'Hydravion'],
    theme: 'Sciences',
  },
  {
    question: "Quel scientifique est l’auteur des 'Principia Mathematica' publiés en 1687 ?",
    answer: 'Newton',
    options: ['Newton', 'Galilée', 'Kepler', 'Descartes'],
    theme: 'Sciences',
  },
  {
    question: 'Quel État des USA est homonyme d’un pays situé dans le Caucase ?',
    answer: 'Géorgie',
    options: ['Géorgie', 'Californie', 'Floride', 'Virginie'],
    theme: 'Géographie',
  },
  {
    question: 'À quelle chanteuse bretonne doit-on l’album « Bretonne » ?',
    answer: 'Nolwenn Leroy',
    options: ['Nolwenn Leroy', 'Hélène Ségara', 'Jenifer', 'Zaz'],
    theme: 'Musique',
  },
  {
    question: 'Quel animal est élevé dans le cadre de la cuniculture ?',
    answer: 'Lapin',
    options: ['Lapin', 'Lièvre', 'Chinchilla', 'Furet'],
    theme: 'Animaux',
  },
  {
    question: 'Selon l’expression, quand on se la coule douce, comment sont les doigts de pied ?',
    answer: 'En éventail',
    options: ['En éventail', 'En bataille', 'En accordéon', 'En spirale'],
    theme: 'Culture Générale',
  },
  {
    question: 'Quel auteur de bande dessinée a créé Gai-Luron et Superdupont ?',
    answer: 'Gotlib',
    options: ['Gotlib', 'Franquin', 'Uderzo', 'Moebius'],
    theme: 'Art',
  },
  {
    question:
      "Quel sport paralympique s’apparente à la pétanque et tire son nom de l’italien signifiant 'boule' ?",
    answer: 'Boccia',
    options: ['Boccia', 'Curling', 'Goalball', 'Pétanque'],
    theme: 'Sport',
  },
  {
    question: 'Quel tanuki est l’agent immobilier de la série de jeux vidéo Animal Crossing ?',
    answer: 'Tom Nook',
    options: ['Tom Nook', 'K.K. Slider', 'Blathers', 'Redd'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      'Combien de minutes sont mentionnées dans le titre de l’émission d’Arte présentée par Élisabeth Quin ?',
    answer: '28',
    options: ['28', '30', '52', '60'],
    theme: 'Culture Générale',
  },
  {
    question: 'Quelle fut la sixième et dernière épouse d’Henri VIII ?',
    answer: 'Catherine Parr',
    options: ['Catherine Parr', 'Anne Boleyn', 'Jane Seymour', 'Catherine Howard'],
    theme: 'Histoire',
  },
  {
    question: 'Quel adjectif autre qu’éthanoïque qualifie l’acide composant le vinaigre ?',
    answer: 'Acétique',
    options: ['Acétique', 'Citrique', 'Lactique', 'Tartrique'],
    theme: 'Sciences',
  },
  {
    question: "Quelle ville indienne est surnommée la 'petite Lhassa' ?",
    answer: 'Dharamsala',
    options: ['Dharamsala', 'Katmandou', 'Jaipur', 'Varanasi'],
    theme: 'Géographie',
  },
  {
    question: 'De quel groupe Nate Ruess était-il le chanteur ?',
    answer: 'Fun',
    options: ['Fun', 'Train', 'Maroon 5', 'OneRepublic'],
    theme: 'Musique',
  },
  {
    question: 'Quel oiseau proche du manchot vit en Antarctique et possède une espèce dite dorée ?',
    answer: 'Gorfou',
    options: ['Gorfou', 'Albatros', 'Pétrel', 'Cormoran'],
    theme: 'Animaux',
  },
  {
    question: 'Quel terme désigne un conglomérat sud-coréen comme Samsung ?',
    answer: 'Chaebol',
    options: ['Chaebol', 'Keiretsu', 'Holding', 'Trust'],
    theme: 'Culture Générale',
  },
  {
    question: 'Quel personnage de la Commedia dell’arte est connu pour son costume coloré ?',
    answer: 'Arlequin',
    options: ['Arlequin', 'Pierrot', 'Pantalon', 'Scaramouche'],
    theme: 'Art',
  },
  {
    question: 'Quel ancien footballeur est à l’origine de la Kings World Cup ?',
    answer: 'Pique',
    options: ['Pique', 'Iniesta', 'Ramos', 'Xavi'],
    theme: 'Sport',
  },
  {
    question: 'Quelle archéologue est l’héroïne de la série de jeux vidéo Tomb Raider ?',
    answer: 'Lara Croft',
    options: ['Lara Croft', 'Samus Aran', 'Aloy', 'Bayonetta'],
    theme: 'Jeux Vidéo',
  },
  {
    question: 'Dans quelle série Miley Stewart est-elle incarnée par Miley Cyrus ?',
    answer: 'Hannah Montana',
    options: ['Hannah Montana', 'iCarly', 'Victorious', 'Glee'],
    theme: 'Séries TV',
  },
  {
    question: 'Dans quel pays s’est tenue la conférence de Téhéran en 1943 ?',
    answer: 'Iran',
    options: ['Iran', 'Turquie', 'Égypte', 'Irak'],
    theme: 'Histoire',
  },
  {
    question: 'De quel pays est originaire un taïkonaute ?',
    answer: 'Chine',
    options: ['Chine', 'Japon', 'Corée du Sud', 'Inde'],
    theme: 'Sciences',
  },
  {
    question: 'Quelle est la capitale de la Nouvelle-Zélande ?',
    answer: 'Wellington',
    options: ['Wellington', 'Auckland', 'Christchurch', 'Dunedin'],
    theme: 'Géographie',
  },
  {
    question:
      'Quelle formule magique est aussi le titre d’une chanson de Lady Gaga sortie en 2025 ?',
    answer: 'Abracadabra',
    options: ['Abracadabra', 'Hocus Pocus', 'Alakazam', 'Shazam'],
    theme: 'Musique',
  },
  {
    question:
      'Quel poisson de la famille des moronidés peut aussi désigner un débit de boissons où les consommateurs s’appuient sur un comptoir ?',
    answer: 'Bar',
    options: ['Bar', 'Lieu', 'Mulet', 'Merlan'],
    theme: 'Animaux',
  },
  {
    question: 'Quel mot désigne la bile et un célèbre duo comique ?',
    answer: 'Fiel',
    options: ['Fiel', 'Sucre', 'Sel', 'Poivre'],
    theme: 'Culture Générale',
  },
  {
    question: 'Dans quel art se sont illustrés Luis Barragán et Álvaro Siza ?',
    answer: 'Architecture',
    options: ['Architecture', 'Peinture', 'Sculpture', 'Cinéma'],
    theme: 'Art',
  },
  {
    question: 'Quel sport collectif aquatique figure au programme olympique depuis 1900 ?',
    answer: 'Waterpolo',
    options: ['Waterpolo', 'Natation synchronisée', 'Plongeon', 'Handball'],
    theme: 'Sport',
  },
  {
    question: 'Quel est le cinquième opus de la série The Elder Scrolls sorti en 2011 ?',
    answer: 'Skyrim',
    options: ['Skyrim', 'Morrowind', 'Daggerfall', 'Arena'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      'Quelle série adaptée d’un roman de James Clavell a remporté l’Emmy Award de la meilleure série dramatique en 2024 ?',
    answer: 'Shogun',
    options: ['Shogun', 'The Crown', 'Succession', 'The Last of Us'],
    theme: 'Séries TV',
  },
  {
    question: 'Quel animal représente le Parti républicain aux États-Unis ?',
    answer: 'Eléphant',
    options: ['Eléphant', 'Bison', 'Aigle', 'Cheval'],
    theme: 'Politique',
  },
  {
    question:
      "Quelle femme est la première Française depuis Claudie Haigneré, il y a trente ans, à être partie pour l'espace le 13 février 2025 ?",
    answer: 'Sophie Adenot',
    options: ['Sophie Adenot', 'Claudie Haigneré', 'Samantha Cristoforetti', 'Peggy Whitson'],
    theme: 'Sciences',
  },
  {
    question:
      "Quelle autoroute surnommée 'autoroute du Soleil' relie Lyon à Marseille et a donné son nom à une mixtape du rappeur SCH ? (une lettre et un chiffre)",
    answer: 'A7',
    options: ['A7', 'A6', 'A9', 'A8'],
    theme: 'Géographie',
  },
  {
    question:
      "Quel groupe, cofondé par le DJ Gabry Ponte et connu pour son tube 'Blue (Da Ba Dee)' en 1999, a représenté Saint-Marin à l’Eurovision 2025 ?",
    answer: 'Eiffel65',
    options: ['Eiffel65', "Gigi D'Agostino", 'Vengaboys', 'Aqua'],
    theme: 'Musique',
  },
  {
    question:
      'Quel oiseau au sac gulaire rouge figure sur le drapeau des Kiribati et porte le même nom qu’un type de navire ?',
    answer: 'Frégate',
    options: ['Frégate', 'Albatros', 'Goéland', 'Cormoran'],
    theme: 'Animaux',
  },
  {
    question:
      "Quel mot issu du grec signifiant 'sang de la pierre' désigne l’odeur de la terre après la pluie ?",
    answer: 'Pétrichor',
    options: ['Pétrichor', 'Effluve', 'Ozone', 'Senteur'],
    theme: 'Culture Générale',
  },
  {
    question:
      'À quel écrivain français doit-on Les Provinciales, quelques années avant Les Pensées ?',
    answer: 'Blaise Pascal',
    options: ['Blaise Pascal', 'Jean de La Fontaine', 'Voltaire', 'Montesquieu'],
    theme: 'Littérature',
  },
  {
    question: 'Quel français est le sportif le plus médaillé des Jeux Olympiques de Paris 2024 ?',
    answer: 'Léon Marchand',
    options: ['Léon Marchand', 'Teddy Riner', 'Florent Manaudou', 'Renaud Lavillenie'],
    theme: 'Sport',
  },
  {
    question: "Quel type d'être surnaturel est présent sur le logo de l'application Snapchat ?",
    answer: 'Fantôme',
    options: ['Fantôme', 'Diable', 'Esprit', 'Spectre'],
    theme: 'Culture Générale',
  },
  {
    question:
      "Quel mot constitue le titre d'une émission présentée par Thierry Beccaro sur France 2 de 1990 à 2019 ?",
    answer: 'Motus',
    options: ['Motus', 'Pyramide', 'Intervilles', 'Des chiffres et des lettres'],
    theme: 'Séries TV',
  },
  {
    question:
      'Quelle ville, qui fut fondée par la légende selon Sémiramis, est associée à la merveille antique des Jardins Suspendus ?',
    answer: 'Babylone',
    options: ['Babylone', 'Ninive', 'Persépolis', 'Ur'],
    theme: 'Histoire',
  },
  {
    question:
      'Quel astronome né à Toruń est celui ayant introduit et/ou développé la théorie de l’héliocentrisme, soit de la position centrale du Soleil dans le système solaire ?',
    answer: 'Nicolas Copernic',
    options: ['Nicolas Copernic', 'Galilée', 'Johannes Kepler', 'Tycho Brahe'],
    theme: 'Sciences',
  },
  {
    question:
      'Quelle ville considérée comme le paradis des assureurs est le chef-lieu des Deux-Sèvres ?',
    answer: 'Niort',
    options: ['Niort', 'Poitiers', 'La Rochelle', 'Angoulême'],
    theme: 'Géographie',
  },
  {
    question:
      'Quelle ville au centre de la chanson « Empire State of Mind » de Jay-Z et Alicia Keys est surnommée « Big Apple » chez les anglophones ?',
    answer: 'New York',
    options: ['New York', 'Los Angeles', 'Chicago', 'Boston'],
    theme: 'Géographie',
  },
  {
    question: 'Quel oiseau de la famille des apodidés porte un nom rappelant celui d’un fouet ?',
    answer: 'Martinet',
    options: ['Martinet', 'Hirondelle', 'Faucon', 'Alouette'],
    theme: 'Animaux',
  },
  {
    question:
      "Présent dans le titre d'un poème de Charles Cros, quel adjectif qualifie le hareng salé puis fumé à froid ?",
    answer: 'Saur',
    options: ['Saur', 'Fumé', 'Salé', 'Séché'],
    theme: 'Cuisine',
  },
  {
    question:
      'À quel célèbre écrivain étranger adepte du roman fantastique ou d’horreur doit-on "La chaîne du destin" en 1875, "Le joyau des sept étoiles" en 1903 et "La dame au linceul" en 1909 ?',
    answer: 'Bram Stoker',
    options: ['Bram Stoker', 'Edgar Allan Poe', 'H. P. Lovecraft', 'Mary Shelley'],
    theme: 'Littérature',
  },
  {
    question:
      "Dans quel pays la victoire des athlètes Lee Bhekempilo Eppie, Letsile Tebogo, Bayapo Ndori et Busang Collen Kebinatshipi au relais 4x400m masculin aux championnats du monde d'athlétisme 2025, fut-elle célébrée par un jour férié le 29 septembre, décrété par le président Duma Boko, la veille de la fête nationale du pays ?",
    answer: 'Botswana',
    options: ['Botswana', 'Kenya', 'Afrique du Sud', 'Namibie'],
    theme: 'Sport',
  },
  {
    question:
      "Animateur du FloodCast avec Adrien Ménielle et ancien membre de Golden Moustache, quel réalisateur français a réalisé Nous, les Leroy en 2024 ? Son nom est homophone d'un écrivain français du XIXe siècle.",
    answer: 'Flober',
    options: ['Flober', 'Flaubert', 'Dupont', 'Delacroix'],
    theme: 'Cinéma',
  },
  {
    question:
      'Sous quel pseudonyme s’est fait connaître David Strajmayster, acteur principal de Samantha Oups ? Un nom patronymique est partagé par un lapin de fiction qui dessinait dans un dessin-animé, toujours avec Yoko sa coccinelle.',
    answer: 'Doudi',
    options: ['Doudi', 'Gaspard', 'Léonard', 'Barnabé'],
    theme: 'Séries TV',
  },
  {
    question:
      'Qui était le seul humain de tous les temps non présent dans le champ de la photographie prise le 21 juillet 1969 présentant deux astronautes et la Terre en arrière-plan ?',
    answer: 'Michael Collins',
    options: ['Michael Collins', 'Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarine'],
    theme: 'Histoire',
  },
  {
    question:
      "Quel élément chimique de numéro atomique 83 est associé au pseudonyme utilisé par Nicolas Sarkozy dans l’affaire des écoutes ? Cet élément, le dernier du groupe des pnictogènes, porte un nom issu de l'arabe.",
    answer: 'Bismuth',
    options: ['Bismuth', 'Antimoine', 'Arsenic', 'Phosphore'],
    theme: 'Sciences',
  },
  {
    question:
      'Quel comté anglais, dont la capitale est Exeter, a laissé son nom à une période géologique précédée par le Silurien et suivie par le Carbonifère ?',
    answer: 'Devon',
    options: ['Devon', 'Kent', 'Sussex', 'Cornwall'],
    theme: 'Géographie',
  },
  {
    question:
      'Quel groupe de rock originaire de Glasgow est mené par le chanteur Alex Kapranos depuis 2001 ? Ce chanteur est également le compagnon de la chanteuse française Clara Luciani.',
    answer: 'Franz Ferdinand',
    options: ['Franz Ferdinand', 'Arctic Monkeys', 'The Strokes', 'Kasabian'],
    theme: 'Musique',
  },
  {
    question:
      'Tout comme l’axolotl, comment se nomme la capacité qu’ont certains animaux à conserver constamment un état larvaire ?',
    answer: 'Néoténie',
    options: ['Néoténie', 'Métamorphose', 'Mue', 'Hibernation'],
    theme: 'Sciences',
  },
  {
    question:
      'Appelé collimage au Québec, quel loisir créatif désigné par un nom anglais consiste à personnaliser un album de photos, de souvenirs, un journal intime ?',
    answer: 'Scrapbooking',
    options: ['Scrapbooking', 'Collage', 'Patchwork', 'Origami'],
    theme: 'Art',
  },
  {
    question:
      'Ayant pour morale « Patience et longueur de temps font plus force ni que rage », quelle fable de La Fontaine met en scène un rongeur et le roi des animaux ?',
    answer: 'Le Lion et le Rat',
    options: [
      'Le Lion et le Rat',
      'Le Lièvre et la Tortue',
      'Le Loup et l’Agneau',
      'Le Corbeau et le Renard',
    ],
    theme: 'Littérature',
  },
  {
    question:
      "Quel tenniswoman française a remporté en 2013 le tournoi de Wimbledon ? Il s'agit de la dernière française ayant gagné un tournoi du Grand Chelem.",
    answer: 'Marion Bartoli',
    options: ['Marion Bartoli', 'Amélie Mauresmo', 'Mary Pierce', 'Kristina Mladenovic'],
    theme: 'Sport',
  },
  {
    question:
      'Sous quel pseudonyme est connue l’influenceuse Kenza Benchrif, au cœur de nombreuses polémiques dont une d’extorsion de fonds, la valant d’être emprisonnée dans le courant de l’été 2024 ?',
    answer: 'Poupette Kenza',
    options: ['Poupette Kenza', 'EnjoyPhoenix', 'Nabilla', 'Léna Situations'],
    theme: 'Autres',
  },
  {
    question:
      'Quel mouvement cinématographique ayant laissé son nom à un film de Richard Linklater en 2026 a pour principaux représentants Jean-Luc Godard, François Truffaut par exemple ? Ce mouvement du cinéma français des années 1950/1960 voit son commencement débattu mais on remonte parfois jusqu\'au court-métrage intitulé "La Pointe courte" tourné par Agnès Varda en 1954.',
    answer: 'Nouvelle vague',
    options: ['Nouvelle vague', 'Néoréalisme', 'Expressionnisme', 'Nouvel Hollywood'],
    theme: 'Cinéma',
  },
  {
    question:
      "Quel directeur de la publication de Charlie Hebdo, assassiné en 2015, avait pour vrai nom Stéphane Charbonnier, véritable identité d'où il a tiré son pseudonyme ?",
    answer: 'Charb',
    options: ['Charb', 'Cabu', 'Wolinski', 'Tignous'],
    theme: 'Politique',
  },
  {
    question:
      'Prénommé Heinrich, quel médecin allemand né en 1842 a laissé son nom à un type d’oedème ?',
    answer: 'Quincke',
    options: ['Quincke', 'Koch', 'Pasteur', 'Virchow'],
    theme: 'Sciences',
  },
  {
    question:
      'Quelle place de Venise abrite un grand campanile reconstruit au début du XXe siècle ?',
    answer: 'Place Saint-Marc',
    options: ['Place Saint-Marc', 'Place Navone', 'Place d’Espagne', 'Place San Carlo'],
    theme: 'Géographie',
  },
  {
    question:
      'Quel prénom féminin fêté le 13 décembre est commun à des chansons de Daniel Balavoine et Pascal Obispo ?',
    answer: 'Lucie',
    options: ['Lucie', 'Marie', 'Sophie', 'Julie'],
    theme: 'Musique',
  },
  {
    question:
      'Quel mot désigne les insectes du genre tipula, n’ayant aucun rapport avec quelque personne de la même famille ?',
    answer: 'Cousin',
    options: ['Cousin', 'Moustique', 'Moucheron', 'Libellule'],
    theme: 'Animaux',
  },
  {
    question: 'Quel aliment peut être cuisiné miroir, parfait ou mollet ?',
    answer: 'Oeuf',
    options: ['Oeuf', 'Pomme de terre', 'Fromage', 'Poisson'],
    theme: 'Cuisine',
  },
  {
    question:
      'Apparue pour la première fois dans "L\'Affaire Protheroe", quelle vieille dame anglaise résolvant des enquêtes est l\'héroïne de douze romans écrits par Agatha Christie ?',
    answer: 'Miss Marple',
    options: ['Miss Marple', 'Hercule Poirot', 'Sherlock Holmes', 'Jane Marple'],
    theme: 'Littérature',
  },
  {
    question:
      'Quel pilote automobile fut le fondateur de l’écurie Copersucar, où se trouvait son frère, un brésilien double champion du monde de Formule 1 ?',
    answer: 'Wilson Fittipaldi',
    options: ['Wilson Fittipaldi', 'Emerson Fittipaldi', 'Nelson Piquet', 'Ayrton Senna'],
    theme: 'Sport',
  },
  {
    question:
      'Quelle marque sud-coréenne détient la chaîne YouTube ayant publié Baby Shark, la vidéo la plus visionnée du site ?',
    answer: 'Pinkfong',
    options: ['Pinkfong', 'Samsung', 'Hyundai', 'LG'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Dans quel pays actuel est né le cinéaste Otar Iosseliani, il a été naturalisé français en 1982 avant de réaliser le film "Adieu, plancher des vaches !" puis de présider la Femis ?',
    answer: 'Géorgie',
    options: ['Géorgie', 'Russie', 'Arménie', 'Ukraine'],
    theme: 'Cinéma',
  },
  {
    question:
      'Quelle locution latine ayant constitué la devise de la famille Médicis signifie "hâte-toi lentement" ?',
    answer: 'Festina lente',
    options: ['Festina lente', 'Carpe diem', 'Alea jacta est', 'Veni vidi vici'],
    theme: 'Histoire',
  },
  {
    question:
      'Quel gaz, de formule chimique NH₃, incolore et irritant peut brûler les yeux et les poumons à concentration élevée ?',
    answer: 'Ammoniac',
    options: ['Ammoniac', 'Méthane', 'Propane', 'Butane'],
    theme: 'Sciences',
  },
  {
    question:
      "Quelle île a pour nom local celui de Boriquén ? Ce nom vient de la langue taïno, qui était une langue arawakienne s'étant éteinte dans la région au XIXe siècle.",
    answer: 'Porto Rico',
    options: ['Porto Rico', 'Cuba', 'Jamaïque', 'Haïti'],
    theme: 'Géographie',
  },
  {
    question:
      'Quel titre du duo entre Janet et Michael Jackson paru en 1995 a fait l’objet du clip le plus cher de l’histoire, plus de 7 millions de dollars ?',
    answer: 'Scream',
    options: ['Scream', 'Thriller', 'Bad', 'Black or White'],
    theme: 'Musique',
  },
  {
    question:
      'Quel organe situé dans la bouche des mollusques se présente sous une forme de râpe et est désigné par un nom de 6 lettres ?',
    answer: 'Radula',
    options: ['Radula', 'Mandibule', 'Proboscis', 'Carapace'],
    theme: 'Sciences',
  },
  {
    question:
      'Quel nom anglais signifiant trèfle désigne le trèfle irlandais, l’un des symboles du pays ?',
    answer: 'Shamrock',
    options: ['Shamrock', 'Clover', 'Thistle', 'Heather'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Dans quelle œuvre, parfois considérée comme étant le tout premier roman, et parue en 1605, apparaissent les personnages de Chevillard, Dulcinée et Sancho Panza ?',
    answer: 'Don Quichotte',
    options: ['Don Quichotte', 'Lazarillo de Tormes', 'Gargantua', 'Le Roman de Renart'],
    theme: 'Littérature',
  },
  {
    question:
      "Sur quel hippodrome français situé dans l'Oise se court le fameux Prix de Diane ? Cette course, l'une des plus prestigieuses du circuit, fut créée en 1843.",
    answer: 'Hippodrome de Chantilly',
    options: [
      'Hippodrome de Chantilly',
      'Hippodrome de Longchamp',
      'Hippodrome de Deauville',
      'Hippodrome de Vincennes',
    ],
    theme: 'Sport',
  },
  {
    question:
      'Quelle console sortie le 3 mars 2017 est commercialisée par Nintendo ? Elle fait suite à la Wii U dans la liste des consoles Nintendo et une version 2 est sortie en 2025.',
    answer: 'Switch',
    options: ['Switch', 'Wii', 'GameCube', 'Nintendo DS'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      'Quel animateur de l’émission Le fou du roi, est également l’animateur du concert du 14 juillet et de Secrets d’Histoire ?',
    answer: 'Stéphane Bern',
    options: ['Stéphane Bern', 'Nagui', 'Michel Drucker', 'Laurent Ruquier'],
    theme: 'Culture Générale',
  },
  {
    question:
      "Dans quel pays l'empereur Mutsuhito, empereur entre 1867 et 1912, est-il désormais connu sous le nom de Meiji ? Pendant son règne, le pays a connu un grand essor culturel et industriel.",
    answer: 'Japon',
    options: ['Japon', 'Chine', 'Corée du Sud', 'Thaïlande'],
    theme: 'Histoire',
  },
  {
    question:
      'Quelle hormone souvent produite en cas de stress est produite par les glandes surrénales et le système nerveux central ? Elle est également appelée épinéphrine.',
    answer: 'Adrénaline',
    options: ['Adrénaline', 'Cortisol', 'Dopamine', 'Sérotonine'],
    theme: 'Sciences',
  },
  {
    question:
      "Quelle région d'Italie, la plus peuplée avec plus de 10 millions d'habitants, soit un sixième du pays, a pour capitale la ville de Milan ?",
    answer: 'Lombardie',
    options: ['Lombardie', 'Piémont', 'Vénétie', 'Toscane'],
    theme: 'Géographie',
  },
  {
    question:
      'Quel genre musical ayant laissé son nom à une chanson d’Ottawan est mis à l’honneur dans le film de John Badham, La Fièvre du samedi soir ?',
    answer: 'Disco',
    options: ['Disco', 'Funk', 'Rock', 'Soul'],
    theme: 'Musique',
  },
  {
    question:
      'Quelle espèce de mysticètes a laissé son nom aux branches en métal composant l’armature d’un parapluie ?',
    answer: 'Baleine',
    options: ['Baleine', 'Rorqual', 'Cachalot', 'Dauphin'],
    theme: 'Animaux',
  },
  {
    question:
      'Quel ouvrier travaillant la soie à Lyon est associée à la cervelle dans une spécialité fromagère locale ?',
    answer: 'Canut',
    options: ['Canut', 'Tisserand', 'Fileur', 'Soier'],
    theme: 'Cuisine',
  },
  {
    question:
      'À quel peintre né en 1863 à Adalsbruk doit-on Puberté et Mélancolie, exposés au musée national d’Oslo ?',
    answer: 'Edvard Munch',
    options: ['Edvard Munch', 'Gustav Klimt', 'Egon Schiele', 'Claude Monet'],
    theme: 'Art',
  },
  {
    question:
      'Quel jeu, parfois appelé babette ou jeu de poches, est désigné par un nom anglais et consiste à lancer des poches remplies de maïs dans un trou présent sur une planche inclinée ?',
    answer: 'Cornhole',
    options: ['Cornhole', 'Bowling', 'Shuffleboard', 'Croquet'],
    theme: 'Sport',
  },
  {
    question:
      'Dans une série de jeux vidéo sortie à partir de 2007 et dont le premier opus est "L\'Étrange Village" et le dernier, à venir est "Le Nouveau Monde à Vapeur", quel est le nom du professeur portant un haut de de forme et aidé par Luke à résoudre des enquêtes ?',
    answer: 'Professeur Layton',
    options: ['Professeur Layton', 'Phoenix Wright', 'Hershel Layton', 'Sherlock Holmes'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      'Quel film de 1997 évoque le diamant appelé "Cœur de l’océan" ? La présence de ce bijou est un des nombreux ajouts scénaristiques dans ce film inspiré d\'un drame réel.',
    answer: 'Titanic',
    options: ['Titanic', 'Roméo + Juliette', 'Pearl Harbor', 'The Great Gatsby'],
    theme: 'Cinéma',
  },
  {
    question:
      'Quelle association de protection des animaux fut fondée à Vancouver en 1977 par Paul Watson à la suite de son départ de Greenpeace ?',
    answer: 'Sea Shepherd Conservation Society',
    options: ['Sea Shepherd Conservation Society', 'Greenpeace', 'WWF', 'PETA'],
    theme: 'Animaux',
  },
  {
    question:
      "Quel mot masculin désigne le symbole permettant de marquer une racine carrée ? C'est également un terme employé en linguistique.",
    answer: 'Radical',
    options: ['Radical', 'Indice', 'Coefficient', 'Exposant'],
    theme: 'Sciences',
  },
  {
    question:
      'Quels sont les DEUX pays asiatiques toujours actuellement séparés par le 38e parallèle nord ? Cette séparation a été le résultat d’une guerre importante de la Guerre Froide. La réponse attend DEUX PAYS',
    answer: 'Corée du Nord et du Sud',
    options: [
      'Corée du Nord et du Sud',
      'Chine et Mongolie',
      'Inde et Pakistan',
      'Vietnam et Laos',
    ],
    theme: 'Histoire',
  },
  {
    question:
      "Quelle résine solide obtenue après distillation de la térébenthine est utilisée sur les crins de l’archet des violons ? Le nom provient d'une cité grecque d'Ionie qui était réputée pour produire cette substance.",
    answer: 'Colophane',
    options: ['Colophane', 'Résine', 'Ambre', 'Gomme laque'],
    theme: 'Art',
  },
  {
    question:
      'De quel arbuste de la famille des bixacées extrait-on une poudre orangée donnant notamment sa couleur à la mimolette ?',
    answer: 'Roucou',
    options: ['Roucou', 'Safran', 'Curcuma', 'Paprika'],
    theme: 'Cuisine',
  },
  {
    question:
      'Quel jeu de société de stratégie créé par le français Albert Lamorisse en 1957 fut originellement créé sous le nom "La Conquête du Monde ?"',
    answer: 'Risk',
    options: ['Risk', 'Diplomacy', 'Stratego', 'Axis & Allies'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      'Quel peintre espagnol est l\'auteur des tableaux "Saturne dévorant un de ses fils", ou encore des célèbres "Dos de Mayo" et "Tres de Mayo" représentant des soldats français fusillant des Espagnols au cours des guerres napoléoniennes ?',
    answer: 'Francisco de Goya',
    options: ['Francisco de Goya', 'Diego Velázquez', 'Pablo Picasso', 'Salvador Dalí'],
    theme: 'Art',
  },
  {
    question: "De quelle ville, capitale de l'Ecosse, s'élancera le Tour de France en 2027 ?",
    answer: 'Edimbourg',
    options: ['Edimbourg', 'Glasgow', 'Aberdeen', 'Inverness'],
    theme: 'Sport',
  },
  {
    question:
      "De quelle entreprise Jeff Bezos est-il le fondateur en 1994 ? Le logo de cette entreprise indique en partie une flèche allant du A jusqu'au Z pour signifier l'ampleur du catalogue proposé.",
    answer: 'Amazon',
    options: ['Amazon', 'eBay', 'Alibaba', 'Google'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quelle série télévisée dans laquelle Bella Ramsey incarne Ellie et Pedro Pascal incarne Joel Miller est adaptée d’un jeu vidéo de type survival horror ?',
    answer: 'The last of us',
    options: ['The last of us', 'The Walking Dead', 'Stranger Things', 'Westworld'],
    theme: 'Séries TV',
  },
  {
    question:
      'Qui a succédé en 2013 à Hu Jintao en tant que Président de la République Populaire de Chine ? Il est toujours en poste depuis.',
    answer: 'Xi Jinping',
    options: ['Xi Jinping', 'Li Keqiang', 'Deng Xiaoping', 'Jiang Zemin'],
    theme: 'Politique',
  },
  {
    question:
      "Quelle sœur jumelle d'Apollon dans la mythologie grecque a laissé son nom au programme visant à renvoyer des humains sur la Lune d'ici quelques années ? Le nom anglais d'Apollon est Apollo, le nom du programme actuel est donc directement lié au premier.",
    answer: 'Artémis',
    options: ['Artémis', 'Athéna', 'Héra', 'Aphrodite'],
    theme: 'Histoire',
  },
  {
    question: 'Quel est le nom de la rivière coulant sous le pont du Gard ?',
    answer: 'Gard',
    options: ['Gard', 'Rhône', 'Hérault', 'Tarn'],
    theme: 'Géographie',
  },
  {
    question:
      'Quel oiseau de la famille des alcidés est associé, dans une chanson ayant représenté le Luxembourg lors du Concours Eurovision de la chanson de l’année 1980, au terme "papa" ?',
    answer: 'Pingouin',
    options: ['Pingouin', 'Macareux', 'Guillemot', 'Manchot'],
    theme: 'Animaux',
  },
  {
    question:
      "Quel est l'unique autre représentant de la famille zoologique à laquelle appartient l'okapi ? L'okapi est endémique des forêts de la République Démocratique du Congo ne fut découvert scientifiquement qu'en 1901 par Henry Johnston.",
    answer: 'Girafe',
    options: ['Girafe', 'Zèbre', 'Antilope', 'Chameau'],
    theme: 'Animaux',
  },
  {
    question:
      "Quelle marque dont les mannequins sont appelés Anges porte le même prénom qu'une ex-Spice Girl ?",
    answer: 'Victoria’s Secret',
    options: ['Victoria’s Secret', 'Calvin Klein', 'Agent Provocateur', 'Intimissimi'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Ayant laissé son nom au syndrome dont souffrait notamment John Merrick, quel dieu grec avait la possibilité de changer de forme à volonté ?',
    answer: 'Protée',
    options: ['Protée', 'Zeus', 'Hermès', 'Poséidon'],
    theme: 'Histoire',
  },
  {
    question:
      "Qui a remporté une médaille d'or olympique une heure avant la victoire de son épouse Dana Zátopková au lancer du javelot ? C'est l'une des trois médailles olympiques remportées par ce célèbre athlète cette année-là.",
    answer: 'Emil Zatopek',
    options: ['Emil Zatopek', 'Paavo Nurmi', 'Carl Lewis', 'Usain Bolt'],
    theme: 'Sport',
  },
  {
    question:
      "Quel nom désignant un rassemblement de scouts à l’échelle d’un pays ou du monde est également le nom de l'opus de Super Mario Party paru en octobre 2024 sur Nintendo Switch ?",
    answer: 'Jamboree',
    options: ['Jamboree', 'Camporee', 'Rallye', 'Expédition'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      "Quel test tenant son nom d'une autrice de BD étasunienne prénommée Alison permet de vérifier si une œuvre de fiction met en scène au moins deux femmes discutant de quelque chose d’autre qu’un homme ?",
    answer: 'Test de Bechdel',
    options: ['Test de Bechdel', 'Test de Turing', 'Test de Rorschach', 'Test de Milgram'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Nommée en l’honneur du père de l’alphabet coréen, roi surnommé Le Grand, quelle ville nouvelle de Corée du Sud est prévue pour remplacer Séoul en tant que capitale',
    answer: 'Sejong',
    options: ['Sejong', 'Busan', 'Incheon', 'Daegu'],
    theme: 'Géographie',
  },
  {
    question:
      "Quel mathématicien né dans l'Empire timouride vers 1380 a laissé son nom au théorème également connu sous le nom de loi des cosinus, couramment utilisé en trigonométrie et généralisant le théorème de Pythagore ?",
    answer: 'Al-Kashi',
    options: ['Al-Kashi', 'Al-Khwarizmi', 'Euclide', 'Pythagore'],
    theme: 'Sciences',
  },
  {
    question:
      'Quel massif montagneux européen culminant à 1493 mètres au Feldberg a laissé son nom à une pâtisserie ?',
    answer: 'Forêt-Noire',
    options: ['Forêt-Noire', 'Vosges', 'Jura', 'Alpes'],
    theme: 'Géographie',
  },
  {
    question:
      "Quel nom porté par la base aéronavale de Lorient l’est aussi par un célèbre bagad breton ? Ce bagad est cité également dans le titre d'une chanson d'Alain Souchon.",
    answer: 'Lann Bihoué',
    options: ['Lann Bihoué', 'Quimper', 'Lorient', 'Brest'],
    theme: 'Musique',
  },
  {
    question:
      "Combien de pattes possèdent les scorpions ? Ils appartiennent à la même classe d'animaux que les faucheux.",
    answer: '8',
    options: ['8', '6', '10', '12'],
    theme: 'Animaux',
  },
  {
    question:
      "Quelles sont les deux noms représentés par les lettres LU dans le nom d'une biscuiterie fondée à Nantes en 1846 ?",
    answer: 'Lefèvre-Utile',
    options: ['Lefèvre-Utile', 'Leroux-Union', 'Lemoine-Urbain', 'Lafont-Ulysse'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Ayant pour nom de famille Uzumaki, quel personnage de fiction créé par Masashi Kishimoto a pour ambition de devenir Hokage ? Ce titre est conféré au chef du village de Konoha.',
    answer: 'Naruto',
    options: ['Naruto', 'Sasuke', 'Kakashi', 'Itachi'],
    theme: 'Séries TV',
  },
  {
    question:
      'De quel pays est originaire Zheng Qinwen, la championne olympique actuelle de tennis, ayant remporté le tournoi aux Jeux Olympiques de Paris en 2024 en battant la croate Donna Vekić ?',
    answer: 'Chine',
    options: ['Chine', 'Japon', 'Corée du Sud', 'Thaïlande'],
    theme: 'Sport',
  },
  {
    question:
      'Quelle locution latine constituant le nom de la chaîne YouTube de Benjamin Brillaud consacrée à l’Histoire signifie « bien noter que » ?',
    answer: 'Nota Bene',
    options: ['Nota Bene', 'Carpe Diem', 'Ad Hoc', 'In Fine'],
    theme: 'Histoire',
  },
  {
    question:
      'Quel animateur du Morning Live sur M6 est le réalisateur du film Fatal en 2010, dans lequel il incarne le personnage de Robert Lafondue ?',
    answer: 'Michael Youn',
    options: ['Michael Youn', 'Vincent Desagnat', 'Michaël Gregorio', 'Jamel Debbouze'],
    theme: 'Cinéma',
  },
  {
    question:
      "Quel nom partagent un dirigeant haïtien assassiné en 2021 prénommé Jovenel ainsi qu'un prophète juif ?",
    answer: 'Moïse',
    options: ['Moïse', 'David', 'Salomon', 'Isaïe'],
    theme: 'Histoire',
  },
  {
    question:
      'Quel nom porte le bruit violent de la foudre qui accompagne l’éclair au cours d’un orage ?',
    answer: 'Tonnerre',
    options: ['Tonnerre', 'Éclair', 'Foudre', 'Orage'],
    theme: 'Sciences',
  },
  {
    question:
      'Quelle île française ayant une superficie de 8 722 km² est scindée en deux départements ?',
    answer: 'Corse',
    options: ['Corse', 'Guadeloupe', 'Martinique', 'Réunion'],
    theme: 'Géographie',
  },
  {
    question: 'De quelle île sont originaires les chanteurs de reggae Peter Tosh et Bob Marley ?',
    answer: 'Jamaïque',
    options: ['Jamaïque', 'Cuba', 'Haïti', 'Trinité-et-Tobago'],
    theme: 'Musique',
  },
  {
    question:
      'Quel nom désignant la fibre de protéine filée par les araignées est un nom de tissu produit par le bombyx du mûrier ?',
    answer: 'Soie',
    options: ['Soie', 'Laine', 'Coton', 'Lin'],
    theme: 'Animaux',
  },
  {
    question:
      'Quel mois du calendrier républicain, situé entre Ventôse et Floréal, est un mois de printemps ? Ce mois est associé à une monnaie dite "franc ______" ayant eu cours en France de 1803 à 1914.',
    answer: 'Germinal',
    options: ['Germinal', 'Floréal', 'Prairial', 'Ventôse'],
    theme: 'Histoire',
  },
  {
    question:
      'Racontant l’histoire de filles ayant été adoptées par un riche propriétaire, quelle série de romans due à l’Irlandaise Lucinda Riley entre 2014 et 2023 est l’une des plus vendues au monde ces dernières années ?',
    answer: 'Les Sept Soeurs',
    options: ['Les Sept Soeurs', 'Les Chroniques de Bridgerton', 'After', 'Outlander'],
    theme: 'Littérature',
  },
  {
    question:
      'Quel sport, dans lequel Thierry Lincou fut le premier joueur hors du Commonwealth à devenir numéro un mondial, voit deux égyptiens actuellement champions du monde Mostafa Asal pour les hommes et Nour El Sherbini pour les femmes ?',
    answer: 'Squash',
    options: ['Squash', 'Badminton', 'Tennis de table', 'Padel'],
    theme: 'Sport',
  },
  {
    question:
      "Quel Pokémon représenté par un maillage polygonal dit low-poly évolue en des versions dites 2 et Z ? Il est parfois décrit comme le premier Pokémon créé artificiellement, et est de type Normal, apparaissant dans la première génération de Pokémon. Il est à l'origine de nombreuses crises d'épilepsie au Japon lors d'un épisode de la série animée.",
    answer: 'Porygon',
    options: ['Porygon', 'Magnéti', 'Mewtwo', 'Voltorbe'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      'Quelle actrice, apparaissant dans le clip Paradis d’Orelsan, est une franco-iranienne et la personnalité francophone la plus suivie sur Instagram ? Engagée contre les positions du gouvernement de son pays d\'origine, elle a notamment joué dans la série "Invasion" sur Apple TV.',
    answer: 'Golshifteh Farahani',
    options: ['Golshifteh Farahani', 'Leïla Bekhti', 'Adèle Exarchopoulos', 'Sofia Boutella'],
    theme: 'Cinéma',
  },
  {
    question:
      'Assassiné par Yigal Amir, jeune étudiant juif ultranationaliste israélien, quel premier ministre israélien était le signataire des accords d’Oslo en 1993 pour son pays avec Yasser Arafat pour la Palestine en tant que premier ministre de son pays de 1992 à son assassinat en 1995 ?',
    answer: 'Yithzak Rabin',
    options: ['Yithzak Rabin', 'Shimon Peres', 'Ariel Sharon', 'Benjamin Netanyahou'],
    theme: 'Politique',
  },
  {
    question:
      'Quelle maladie pulmonaire citée par Pierre Bachelet dans Les Corons, est provoquée par l’inhalation de poussières de silice dans les mines notamment ?',
    answer: 'Silicose',
    options: ['Silicose', 'Asbestose', 'Tuberculose', 'Pneumonie'],
    theme: 'Sciences',
  },
  {
    question: 'Quel est le département français qui compte le moins de communes ?',
    answer: 'Paris',
    options: ['Paris', 'Hauts-de-Seine', 'Seine-Saint-Denis', 'Val-de-Marne'],
    theme: 'Géographie',
  },
  {
    question:
      'Quel instrument à 47 cordes était l’instrument de prédilection d’Aimée Emilie dite Lily Laskine ?',
    answer: 'Harpe',
    options: ['Harpe', 'Piano', 'Clavecin', 'Guitare'],
    theme: 'Musique',
  },
  {
    question:
      'Rappelant des nymphes de la mythologie grecque, quel est le nom générique donné aux larves des odonates, demoiselles et libellules ?',
    answer: 'Naïade',
    options: ['Naïade', 'Nymphe', 'Larve', 'Chrysalide'],
    theme: 'Animaux',
  },
  {
    question:
      "S’appelant kunik originellement, quelle locution de deux mots désigne le fait que deux personnes se frottent mutuellement le bout du nez avec leur nez ? C'est une forme d'expression d'affection inspirée d'une pratique d'un peuple non-occidental.",
    answer: 'Bisou d’esquimau',
    options: ['Bisou d’esquimau', 'Baiser papillon', 'Baiser soufflé', 'Baiser volé'],
    theme: 'Culture Générale',
  },
  {
    question:
      "Quel nom est donné à l'article rédigé par Emile Zola et paru en titre du journal \"L'Aurore\" en 1898, adressé au président français Félix Faure et ayant joué un rôle majeur dans la dénonciation de l'affaire Dreyfus ?",
    answer: 'J’accuse',
    options: ['J’accuse', 'Manifeste', 'Lettre ouverte', 'Plaidoyer'],
    theme: 'Histoire',
  },
  {
    question:
      "Quelle ville accueille depuis 1905 l'Open d'Australie de tennis ? Le tournoi s'est joué de 1905 à 1987 sur gazon avant de passer sur dur en 1988.",
    answer: 'Melbourne',
    options: ['Melbourne', 'Sydney', 'Brisbane', 'Perth'],
    theme: 'Sport',
  },
  {
    question:
      'Quel périphérique informatique servant à pointer sur l’écran fut appelé par erreur "mulot" par Jacques Chirac ?',
    answer: 'Souris',
    options: ['Souris', 'Clavier', 'Trackpad', 'Joystick'],
    theme: 'Sciences',
  },
  {
    question:
      'Quel animal est dit "d\'or" dans le nom de la récompense suprême décernée au festival du film de Berlin ?',
    answer: 'Ours',
    options: ['Ours', 'Lion', 'Palme', 'Aigle'],
    theme: 'Cinéma',
  },
  {
    question:
      'Quel philosophe grec, lui-même élève de Platon, fut le précepteur d’Alexandre le Grand ?',
    answer: 'Aristote',
    options: ['Aristote', 'Socrate', 'Épicure', 'Zénon'],
    theme: 'Histoire',
  },
  {
    question:
      'Quel avion supersonique de conception franco-britannique fut piloté pour la première fois par André Turcat en 1969 au-dessus de Toulouse ?',
    answer: 'Concorde',
    options: ['Concorde', 'Mirage III', 'Boeing 747', 'Airbus A300'],
    theme: 'Sciences',
  },
  {
    question:
      'Quelle ville est l’enfer du jeu dans un film de Jean Delannoy ainsi que dans une chanson du Grand Orchestre du Splendid, avant d’être une région administrative spéciale chinoise ?',
    answer: 'Macao',
    options: ['Macao', 'Hong Kong', 'Shanghai', 'Canton'],
    theme: 'Géographie',
  },
  {
    question:
      'Quelle chanteuse australienne à la célèbre frange et ne montrant son visage qu’en de rares occasions est l’interprète de Chandelier ?',
    answer: 'Sia',
    options: ['Sia', 'Lorde', 'Kylie Minogue', 'Dua Lipa'],
    theme: 'Musique',
  },
  {
    question: 'Quel type d’amphiprion sont, dans le film, Corail et Marin, les parents de Nemo ?',
    answer: 'Poisson clown',
    options: ['Poisson clown', 'Poisson chirurgien', 'Poisson-lune', 'Poisson ange'],
    theme: 'Animaux',
  },
  {
    question:
      'Quel type de sac se portant autour de la taille tire son nom de sa forme rappelant celle d’un fruit ?',
    answer: 'Banane',
    options: ['Banane', 'Besace', 'Sac cabas', 'Sac à dos'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Ayant pour capitale la ville d’Amaurote, quel pays imaginaire a été créé en 1516 par Thomas More ? Le nom de ce pays est devenu désormais un nom commun.',
    answer: 'Utopia',
    options: ['Utopia', 'Atlantide', 'Eldorado', 'Avalon'],
    theme: 'Littérature',
  },
  {
    question:
      'Quel pilote automobile autrichien a remporté le championnat de Formule 1 en 1970 alors qu’il s’est tué lors des essais libres de Monza, faisant de lui le seul à avoir été sacré champion à titre posthume encore à ce jour ?',
    answer: 'Jochen Rindt',
    options: ['Jochen Rindt', 'Niki Lauda', 'Gerhard Berger', 'Jacky Ickx'],
    theme: 'Sport',
  },
  {
    question:
      'Dans le sigle BATX représentant l’équivalent des GAFAM en Chine, quelle entreprise, fondée par Jack Ma, est symbolisée par la lettre A ?',
    answer: 'Alibaba',
    options: ['Alibaba', 'Tencent', 'Baidu', 'Xiaomi'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quel interprète du président Snow dans les films Hunger Games fut rendu célèbre grâce à ses rôles dans De l’or pour les braves, Les 12 Salopards et MASH ?',
    answer: 'Donald Sutherland',
    options: ['Donald Sutherland', 'Robert Duvall', 'Gene Hackman', 'Clint Eastwood'],
    theme: 'Cinéma',
  },
  {
    question:
      "Représenté sur le billet de 2 dollars américain, quel président de 1801 à 1809 fut le 3ème des USA ? Il fut aussi le principal rédacteur de la déclaration d'Indépendance du pays.",
    answer: 'Thomas Jefferson',
    options: ['Thomas Jefferson', 'John Adams', 'James Madison', 'George Washington'],
    theme: 'Histoire',
  },
  {
    question:
      "Quel nom porte la discontinuité dénommée également limite noyau-manteau, et qui constitue la séparation de ces deux éléments à l'intérieur de notre planète ? Nommée en l'honneur d'un sismologue prénommé Beno, elle partage son nom avec un autre allemand célèbre du XVe siècle.",
    answer: 'Discontinuité de Gutenberg',
    options: [
      'Discontinuité de Gutenberg',
      'Discontinuité de Mohorovičić',
      'Discontinuité de Lehmann',
      'Discontinuité de Conrad',
    ],
    theme: 'Sciences',
  },
  {
    question:
      'Quel lac éthiopien constituant la source du Nil Bleu porte un nom homonyme d\'un synonyme récent de "prostituée" largement utilisé sur les réseaux pour désigner des femmes vues comme superficielles ?',
    answer: 'Lac Tana',
    options: ['Lac Tana', 'Lac Victoria', 'Lac Turkana', 'Lac Malawi'],
    theme: 'Géographie',
  },
  {
    question:
      'Quel homme, acteur principal de la série Le Remplaçant diffusée sur TF1 en 2021 formait auparavant un duo musical avec Bruno Lopes alias Kool Shen ?',
    answer: 'Joeystarr',
    options: ['Joeystarr', 'MC Solaar', 'Booba', 'Oxmo Puccino'],
    theme: 'Séries TV',
  },
  {
    question:
      'Quelle partie végétative des champignons, également appelé blanc de champignon, est formé par un ensemble de filaments plus ou moins ramifiés ?',
    answer: 'Mycélium',
    options: ['Mycélium', 'Spore', 'Hyphes', 'Chapeau'],
    theme: 'Sciences',
  },
  {
    question:
      'Quel nom désigne le kebab traditionnel des cuisines levantine, arménienne et turque ? Le nom de ce plat est d\'origine turque et signifie "ça tourne".',
    answer: 'Chawarma',
    options: ['Chawarma', 'Döner', 'Kebab', 'Gyros'],
    theme: 'Cuisine',
  },
  {
    question:
      'Quelle série de bande dessinée créée par William met en scène Marine et Wendy, deux sœurs se chamaillant ?',
    answer: 'Les Sisters',
    options: ['Les Sisters', 'Les Nombrils', 'Titeuf', 'Lou !'],
    theme: 'Littérature',
  },
  {
    question:
      "Quelle récompense sportive fut reçue pour la première fois en 1956 par l'anglais Stanley Matthews ?",
    answer: 'Ballon d’Or',
    options: ['Ballon d’Or', 'Soulier d’or', 'Golden Boy', 'FIFA The Best'],
    theme: 'Sport',
  },
  {
    question: 'Dans un jeu développé par Orteil, sur quel biscuit faut-il cliquer à l’infini ?',
    answer: 'Cookie Clicker',
    options: ['Cookie Clicker', 'Gingerbread Clicker', 'Cake Clicker', 'Biscuit Factory'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      'Créé par Helen Aberson en 1939, quel est le nom de l’animal qui fut au centre d’un film de Disney en 1941 ?',
    answer: 'Dumbo',
    options: ['Dumbo', 'Bambi', 'Simba', 'Baloo'],
    theme: 'Cinéma',
  },
  {
    question: 'Quel prénom est commun aux rois de France surnommés Le Bel, le Simple et le Grand ?',
    answer: 'Charles',
    options: ['Charles', 'Louis', 'Philippe', 'Henri'],
    theme: 'Histoire',
  },
  {
    question:
      "Quel numéro porte la dernière mission du programme Apollo ayant emmené des hommes sur la Lune ? Ronald Evans, Eugene Cernan et Harrison Schmitt étaient tous les trois membres de l'équipage.",
    answer: 'Apollo 17',
    options: ['Apollo 17', 'Apollo 15', 'Apollo 16', 'Apollo 13'],
    theme: 'Sciences',
  },
  {
    question:
      "Quelle ville constitue l'extrémité ouest du transsibérien, sachant que l'extrémité est se situe dans la ville de Vladivostok ?",
    answer: 'Moscou',
    options: ['Moscou', 'Saint-Pétersbourg', 'Kazan', 'Novossibirsk'],
    theme: 'Géographie',
  },
  {
    question:
      'Quelle chanteuse québécoise des titres Feel Good et Confetti a interprété Ensemble avec son compagnon Aliocha Schneider ?',
    answer: 'Charlotte Cardin',
    options: ['Charlotte Cardin', 'Cœur de pirate', 'Angèle', 'Loud'],
    theme: 'Musique',
  },
  {
    question:
      'Quel autre nom de la colocase, plante tropicale cultivée pour son rhizome,, est homophone d’un jeu comprenant 78 cartes ?',
    answer: 'Tarot',
    options: ['Tarot', 'Bingo', 'Belote', 'Rami'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quel métier, désigné argotiquement par le terme baveux, Olivier Metzner et Jacques Vergès pratiquaient-ils ?',
    answer: 'Avocat',
    options: ['Avocat', 'Juge', 'Procureur', 'Notaire'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quel héros de bande dessinée créé par Pierre Élie Ferrier dit Pef est connu pour ses nombreux jeux de mots et calembours et déformations de phrases ?',
    answer: 'Le Prince de Motordu',
    options: ['Le Prince de Motordu', 'Astérix', 'Gaston Lagaffe', 'Spirou'],
    theme: 'Littérature',
  },
  {
    question:
      "Pour quel pays le fondeur Johannes Høsflot Klæbo est-il devenu le sportif le plus titré des Jeux Olympiques d'hiver lors des Jeux de Milano-Cortina 2026 ? Il a remporté 6 médailles d'or lors de cette édition, portant son total de titres olympiques à 11.",
    answer: 'Norvège',
    options: ['Norvège', 'Suède', 'Finlande', 'Allemagne'],
    theme: 'Sport',
  },
  {
    question:
      'Fondé par Jack Dorsey en 2019, quel site est devenu un réseau social alternatif à Twitter suite au rachat de celui-ci par Elon Musk ? Le logo de ce site est un papillon bleu.',
    answer: 'BlueSky',
    options: ['BlueSky', 'Threads', 'Mastodon', 'Hive'],
    theme: 'Sciences',
  },
  {
    question:
      'Quel super-héros créé en 1964 sous l’identité de Matt Murdock est interprété par Charlie Cox dans la série télévisée de Marvel ?',
    answer: 'Daredevil',
    options: ['Daredevil', 'Punisher', 'Spider-Man', 'Iron Fist'],
    theme: 'Séries TV',
  },
  {
    question:
      "Quel commodore britannique ayant laissé un ultimatum d'ouverture au Japon en 1853 est le parfait homonyme d’un acteur américano-canadien né en 1969 ?",
    answer: 'Matthew Perry',
    options: ['Matthew Perry', 'John Wayne', 'Tom Hardy', 'Hugh Grant'],
    theme: 'Histoire',
  },
  {
    question:
      'En partant du Soleil, quelle est la première planète à posséder au moins un satellite naturel ?',
    answer: 'Terre',
    options: ['Terre', 'Mars', 'Jupiter', 'Saturne'],
    theme: 'Sciences',
  },
  {
    question:
      "Combien de fuseaux horaires différents utilisent la Chine de l'ouest à l'est de son territoire ?",
    answer: '1',
    options: ['1', '2', '3', '5'],
    theme: 'Géographie',
  },
  {
    question:
      'Quelle comédie musicale a été adaptée dans les pays anglophones sous le nom de "Tycoon" ?',
    answer: 'Starmania',
    options: ['Starmania', 'Notre-Dame de Paris', 'Les Misérables', 'Roméo et Juliette'],
    theme: 'Musique',
  },
  {
    question:
      'Quelle partie du corps du souverain pontife a laissé son nom à une variété de figue provençale ?',
    answer: 'La couille du pape',
    options: ['La couille du pape', 'La main du pape', 'Le cœur du pape', 'Le nez du pape'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quel nom porte la cuisine typiquement japonaise, souvent acrobatique, proche de la plancha, consistant à cuire des aliments directement sur une plaque chauffante ?',
    answer: 'Teppanyaki',
    options: ['Teppanyaki', 'Sushi', 'Tempura', 'Yakitori'],
    theme: 'Cuisine',
  },
  {
    question:
      'Quel co-lauréat avec Gordon Bunshaft du Prix Pritzker en 1988 est connu pour avoir conçu avec Lucio Costa la ville de Brasilia ?',
    answer: 'Oscar Niemeyer',
    options: ['Oscar Niemeyer', 'Le Corbusier', 'Frank Lloyd Wright', 'I. M. Pei'],
    theme: 'Art',
  },
  {
    question:
      "Quelle nageuse française a remporté l'or olympique sur 400 mètres nage libre aux Jeux Olympiques d'Athènes en 2004 ?",
    answer: 'Laure Manaudou',
    options: ['Laure Manaudou', 'Camille Muffat', 'Florence Arthaud', 'Stéphanie Cohen-Aloro'],
    theme: 'Sport',
  },
  {
    question:
      "Quel prénom porte le vidéaste d'origine roumaine nommé Iov, s'étant fait connaître à l'origine sous le pseudonyme de Monsieur Dream et ayant occupé la place de youtubeur le plus suivi de France pendant des années ?",
    answer: 'Cyprien',
    options: ['Cyprien', 'Squeezie', 'Natoo', 'Norman'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quel nageur français quadri-amputé a traversé le Lac Titicaca à la nage en 2021 avant de prendre la présentation de Slam à la télévision ?',
    answer: 'Théo Curin',
    options: ['Théo Curin', 'David Douillet', 'Fabien Gilot', 'Yannick Agnel'],
    theme: 'Sport',
  },
  {
    question:
      'Quel fils d’Aurelia Cotta fut assassiné aux Ides de Mars de l’an 44 avant notre ère ? Ce personnage est un célèbre romain.',
    answer: 'César',
    options: ['César', 'Brutus', 'Marc Antoine', 'Octave'],
    theme: 'Histoire',
  },
  {
    question:
      'Quel nom composé anglais évoquant un sport dont les pratiquants souffrent souvent de ce mal désigne également la tendinite appelée épicondylite latérale ?',
    answer: 'Tennis-elbow',
    options: ['Tennis-elbow', 'Golf-elbow', 'Badminton-elbow', 'Squash-elbow'],
    theme: 'Sport',
  },
  {
    question:
      'Quelle île française a pour arrondissements ceux de Saint-Benoît, Saint-Paul et Saint-Pierre en plus de celui de son chef-lieu, Saint-Denis ?',
    answer: 'La Réunion',
    options: ['La Réunion', 'Mayotte', 'Guadeloupe', 'Martinique'],
    theme: 'Géographie',
  },
  {
    question:
      'En 2007, quelle chanteuse écossaise du titre "This is the life" porte le même nom qu\'une célèbre chaîne de fast-food ?',
    answer: 'Amy MacDonald',
    options: ['Amy MacDonald', 'Duffy', 'KT Tunstall', 'Paolo Nutini'],
    theme: 'Musique',
  },
  {
    question: 'Quelle allure du cheval est située entre le pas et le galop ?',
    answer: 'Trot',
    options: ['Trot', 'Trotter', 'Amble', 'Canter'],
    theme: 'Animaux',
  },
  {
    question:
      'Quel nom donné à une partie nulle au jeu de go, est homophone d’une partie en boucherie souvent associé à l’agneau ?',
    answer: 'Gigot',
    options: ['Gigot', 'Jarret', 'Épaule', 'Collier'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      "Quel nom partagent un écrivain italien prix Nobel de littérature en 1959 et la fête religieuse célébrée le dimanche suivant Pâques ? Ces deux noms sont également homonymes d'un personnage de roman français créé en 1831 et resté très célèbre.",
    answer: 'Quasimodo',
    options: ['Quasimodo', 'Dante', 'Pétrarque', 'Manzoni'],
    theme: 'Littérature',
  },
  {
    question:
      "Dans quel sport Luke Littler, surnommé The Nuke, est-il double champion du monde en 2025 et 2026 ? Âgé de seulement 19 ans, il est parfois déjà considéré comme l'un des meilleurs joueurs toutes époques confondues.",
    answer: 'Fléchettes',
    options: ['Fléchettes', 'Billard', 'Tennis de table', 'Bowling'],
    theme: 'Sport',
  },
  {
    question:
      'Quel terme tiré de l’anglais signifiant ruine désigne sur internet une personne s’inquiétant de l’effondrement de la civilisation lié à la surpopulation, à la pollution et au réchauffement climatique ?',
    answer: 'Doomer',
    options: ['Doomer', 'Boomer', 'Zoomer', 'Foomer'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quel pape italo-américain incarné par Jude Law a été inventé pour la série intitulée The Young Pope ? La réponse attend un NOM + Numéro',
    answer: 'Pie XIII',
    options: ['Pie XIII', 'Jean-Paul II', 'Benoît XVI', 'François I'],
    theme: 'Séries TV',
  },
  {
    question:
      "Comme son étymologie grecque l'indique, combien de rameurs étaient traditionnellement utilisés dans le bateau de guerre antique appelé pentécontère ?",
    answer: '50',
    options: ['50', '100', '25', '75'],
    theme: 'Histoire',
  },
  {
    question:
      'Dans le système des groupes sanguins ABO, quel groupe sanguin, dont le rhésus est négatif, est dit donneur universel ? On peut utiliser le sang de ces personnes pour toutes les transfusions sanguines et il est donc le plus recherché dans les campagnes de don du sang.',
    answer: 'O',
    options: ['O', 'A', 'B', 'AB'],
    theme: 'Sciences',
  },
  {
    question:
      "Quel massif montagneux doit son nom à un géologue et minéralogiste français né dans l'Isère en 1750 ? Cet homme prénommé Déodat Gratet fut le premier à étudier le type particulier de roche prédominant dans la région.",
    answer: 'Dolomites',
    options: ['Dolomites', 'Alpes', 'Pyrénées', 'Massif central'],
    theme: 'Géographie',
  },
  {
    question:
      'Sous quel pseudonyme s’est fait connaître le chanteur Denis Quillard, ayant choisi son pseudonyme en référence au nom du graphiste à qui l’on doit le logo des cigarettes Gauloises et s’étant par la suite associé à une chanteuse uruguayenne ?',
    answer: 'Jacno',
    options: ['Jacno', 'Jean-Michel Jarre', 'Serge Gainsbourg', 'Etienne Daho'],
    theme: 'Musique',
  },
  {
    question:
      'Quel singe américain, reconnaissable à la puissance de son cri, est également appelé alouate ?',
    answer: 'Singe hurleur',
    options: ['Singe hurleur', 'Singe araignée', 'Capucin', 'Mandrill'],
    theme: 'Animaux',
  },
  {
    question:
      "Basée sur une racine anglaise signifiant mélanger, quel nom désigne l'art du mélange des boissons et de la création de cocktails ?",
    answer: 'Mixologie',
    options: ['Mixologie', 'Œnologie', 'Distillation', 'Brassage'],
    theme: 'Cuisine',
  },
  {
    question:
      'Anciennement appelé quadragésime, quelle période de jeûne du catholicisme dure 40 jours ?',
    answer: 'Carême',
    options: ['Carême', 'Avent', 'Pentecôte', 'Épiphanie'],
    theme: 'Histoire',
  },
  {
    question:
      "Lors de quels grands tours cyclistes les tours du Mortirolo et de l'Angliru sont-ils au programme ? Ils font régulièrement office de juges de paix et constituent les étapes-reines de ces tours.",
    answer: 'Italie et Espagne',
    options: [
      'Italie et Espagne',
      'France et Belgique',
      'Suisse et Allemagne',
      'Portugal et Pays-Bas',
    ],
    theme: 'Sport',
  },
  {
    question:
      "De quelle entreprise étasunienne Tim Cook est-il le PDG depuis 2011 ? Il a pris la suite d'un PDG qui avait démissionné pour raisons de santé.",
    answer: 'Apple',
    options: ['Apple', 'Microsoft', 'Google', 'Amazon'],
    theme: 'Culture Générale',
  },
  {
    question: 'Qui incarnera Michael Jackson dans le futur biopic "Jackson" en 2026 ?',
    answer: 'Jaafar Jackson',
    options: ['Jaafar Jackson', 'Taj Jackson', 'Omarion', 'Bruno Mars'],
    theme: 'Cinéma',
  },
  {
    question:
      "Sous quel nom est plus connue la native des Trois-Îlets en Martinique en 1763, Marie Josèphe Rose Tascher de La Pagerie ? Elle eut un premier mariage en 1779 lui laissant son nom sous lequel elle est encore connue aujourd'hui ainsi qu'un second, de 1796 à 1809.",
    answer: 'Joséphine de Beauharnais',
    options: [
      'Joséphine de Beauharnais',
      'Marie-Antoinette',
      'Madame de Pompadour',
      'Charlotte Corday',
    ],
    theme: 'Histoire',
  },
  {
    question:
      'Par quel nom féminin désigne-t-on l’équivalent français du yard ou un mot pour désigner le sexe masculin ?',
    answer: 'Verge',
    options: ['Verge', 'Toise', 'Coudée', 'Lieue'],
    theme: 'Culture Générale',
  },
  {
    question: 'Quel pays est le plus important en superficie du continent océanien ?',
    answer: 'Australie',
    options: ['Australie', 'Nouvelle-Zélande', 'Papouasie-Nouvelle-Guinée', 'Fidji'],
    theme: 'Géographie',
  },
  {
    question:
      'Quel crooner étasunien, surnommé "The Voice" est notamment célèbre pour ses version de "My Way", "Fly Me To The Moon" et son interprétation de "Somethin\' stupid" avec sa fille prénommée Nancy, également chanteuse ?',
    answer: 'Frank Sinatra',
    options: ['Frank Sinatra', 'Dean Martin', 'Tony Bennett', 'Nat King Cole'],
    theme: 'Musique',
  },
  {
    question:
      "Quel nom porte le cri du cheval ? Le nom est dérivé d'une onomatopée décrivant le bruit que celui-ci fait lorsqu'il produit son cri.",
    answer: 'Hennissement',
    options: ['Hennissement', 'Rugissement', 'Braiment', 'Glapissement'],
    theme: 'Animaux',
  },
  {
    question:
      "Quelle ancienne fonctionnalité de MSN permettait d'envoyer une secousse d'écran avec un bruit pour attirer l'attention ?",
    answer: 'Wizz',
    options: ['Wizz', 'Buzz', 'Ping', 'Flash'],
    theme: 'Autres',
  },
  {
    question:
      'Sous quel nom, évoquant un massif montagneux des Alpes, Jean Bruller, fondateur des éditions de Minuit et auteur du Silence de la Mer, s’est-il fait connaître ?',
    answer: 'Vercors',
    options: ['Vercors', 'Mont Blanc', 'Écrins', 'Chartreuse'],
    theme: 'Littérature',
  },
  {
    question:
      'Quel nom latin signifiant « je bouge » désigne chacun des symboles présents sur le drapeau paralympique ?',
    answer: 'Agito',
    options: ['Agito', 'Citius', 'Fortius', 'Altius'],
    theme: 'Sport',
  },
  {
    question:
      'Quelle youtubeuse, spécialisée dans les tutoriels beauté, s’est fait connaître sous le nom d’Enjoy Phoenix avant de diffuser son véritable nom et de participer notamment à Danse avec les Stars ?',
    answer: 'Marie Lopez',
    options: ['Marie Lopez', 'Sananas', 'Natoo', 'Léna Situations'],
    theme: 'Autres',
  },
  {
    question:
      "Incarnant Steve dans le film Minecraft, quel acteur ayant doublé Po dans Kung Fu Panda en VO s’est fait connaître dans Rock Academy ? Son nom est homonyme de celui d'une couleur en langue anglaise.",
    answer: 'Jack Black',
    options: ['Jack Black', 'Chris Pratt', 'Will Smith', 'Adam Sandler'],
    theme: 'Cinéma',
  },
  {
    question:
      "Combien de pays sont signataires des traités de Rome en 1957 permettant la création de la C.E.E, communauté économique européenne, véritable ancêtre de l'Union Européenne ?",
    answer: '6',
    options: ['6', '9', '12', '15'],
    theme: 'Histoire',
  },
  {
    question:
      "Quelle ville anglaise a laissé son nom à l'échelle classifiant en sept échelons les différents types de selles ? Les excréments humains sont rangés entre constipation et diarrhée.",
    answer: 'L’échelle de Bristol',
    options: [
      'L’échelle de Bristol',
      'L’échelle d’Oxford',
      'L’échelle de Cambridge',
      'L’échelle de Manchester',
    ],
    theme: 'Sciences',
  },
  {
    question:
      "Quel bâtiment français doit-on à l'architecte Stephen Sauvestre ? C'est à lui qu'on doit la forme emblématique de ce monument, il a notamment travaillé avec les ingénieurs Maurice Koechlin et Emile Nouguier.",
    answer: 'Tour Eiffel',
    options: ['Tour Eiffel', 'Arc de Triomphe', 'Panthéon', 'Montparnasse'],
    theme: 'Art',
  },
  {
    question:
      'Quel chanteur à qui l’on doit le titre "Save tonight", est le frère d’une célèbre chanteuse suédoise qui avait connu son plus grand succès international en duo en 1994 ? Leur nom de famille est celui d\'un fruit en anglais.',
    answer: 'Eagle-Eye Cherry',
    options: ['Eagle-Eye Cherry', 'Lenny Kravitz', 'Jason Mraz', 'James Blunt'],
    theme: 'Musique',
  },
  {
    question:
      'Quel nom désigne à la fois une plante de la famille des lamiacées et le lézard Jésus-Christ ? Ce nom tiré de la mythologie grecque est également utilisé dans la saga Harry Potter.',
    answer: 'Basilic',
    options: ['Basilic', 'Mandragore', 'Romarin', 'Origan'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quel locution anglaise de deux mots désigne le jour de janvier considéré comme étant le jour le plus déprimant de l’année ?',
    answer: 'Blue Monday',
    options: ['Blue Monday', 'Black Friday', 'Green Sunday', 'Red Tuesday'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quel nom de serpent constituant le nom du mouvement artistique cofondé par Pierre Alechinsky est l’acronyme des villes de Copenhague, Bruxelles et Amsterdam ?',
    answer: 'Cobra',
    options: ['Cobra', 'Python', 'Boa', 'Viper'],
    theme: 'Art',
  },
  {
    question:
      'Quel nom, issu de l’italien signifiant supporter, porte l’animation visuelle organisée par des supporters dans les tribunes d’un stade ?',
    answer: 'Tifo',
    options: ['Tifo', 'Chant', 'Ola', 'Fresque'],
    theme: 'Sport',
  },
  {
    question:
      'Quel nom, suivi par le mot Legacy dans le titre d’un jeu vidéo de 2023, est le nom anglais de l’école de Poudlard ?',
    answer: 'Hogwarts',
    options: ['Hogwarts', 'Beauxbatons', 'Durmstrang', 'Ilvermorny'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      "Quel nom porte l'industrie cinématographique typiquement indienne et largement associée à la ville de Mumbai, anciennement dénommée Bombay ? Son nom est dérivé d'un haut lieu de l'industrie cinématographique étasunienne.",
    answer: 'Bollywood',
    options: ['Bollywood', 'Kollywood', 'Tollywood', 'Nollywood'],
    theme: 'Cinéma',
  },
  {
    question:
      "Quel volcan indonésien entré en éruption en 1883 serait à l'origine du bruit le plus fort jamais entendu par l'être humain ?",
    answer: 'Krakatoa',
    options: ['Krakatoa', 'Tambora', 'Merapi', 'Agung'],
    theme: 'Géographie',
  },
  {
    question:
      'Dans le sigle TDAH désignant un trouble déficit de l’attention, quel mot est désigné par la lettre H ?',
    answer: 'Hyperactivité',
    options: ['Hyperactivité', 'Hypersensibilité', 'Hérédité', 'Habileté'],
    theme: 'Sciences',
  },
  {
    question:
      "Fondée en 1959, pour quelle région n'ayant pas d'existence nationale mais se partageant entre deux pays, l'organisation Euskadi ta Askatasuna lutte-t-elle pour l'indépendance ?",
    answer: 'Pays Basque',
    options: ['Pays Basque', 'Catalogne', 'Andalousie', 'Galice'],
    theme: 'Politique',
  },
  {
    question:
      'Quel chanteur français, interprète des titres "Attention mesdames et monsieur", "C\'est la fête" ou "Une belle histoire" enregistrées avec Le Big Bazar, est également le père d\'une fille prénommée Laurette, décédée d\'une leucémie en 2002 à l\'âge de 22 ans et pour qui il a fondé une association luttant contre cette maladie ?',
    answer: 'Michel Fugain',
    options: ['Michel Fugain', 'Michel Sardou', 'Julien Clerc', 'Alain Souchon'],
    theme: 'Musique',
  },
  {
    question:
      "Quel fruit du genre Punica est homonyme d’un État dont la capitale est Saint-Georges ainsi que d'une ville espagnole ?",
    answer: 'Grenade',
    options: ['Grenade', 'Orange', 'Citron', 'Figue'],
    theme: 'Cuisine',
  },
  {
    question:
      "Selon une expression signifiant que l'on atténue ses propos, dans quel liquide alcoolisé met-on de l'eau ?",
    answer: 'Vin',
    options: ['Vin', 'Whisky', 'Rhum', 'Cognac'],
    theme: 'Culture Générale',
  },
  {
    question:
      "De quel pays est originaire l'écrivain Abdulrazak Gurnah, récipiendaire du Prix Nobel de Littérature en 2021 ? Il s'agit du premier écrivain de son pays à recevoir ce prix.",
    answer: 'Tanzanie',
    options: ['Tanzanie', 'Kenya', 'Ouganda', 'Éthiopie'],
    theme: 'Littérature',
  },
  {
    question:
      'Quel joueur de baseball japonais né en 1994 joue aux Dodgers de Los Angeles depuis 2024 ? Il a signé le contrat sportif le plus lucratif de tous les temps avec 680 millions de dollars sur dix ans.',
    answer: 'Shohei Ohtani',
    options: ['Shohei Ohtani', 'Ichiro Suzuki', 'Yu Darvish', 'Masahiro Tanaka'],
    theme: 'Sport',
  },
  {
    question:
      'Titre d’une chanson de Vald, quel nom désignant l’ensemble des dieux mésopotamiens est également utilisé dans Assassin’s Creed pour parfois désigner les créateurs des artéfacts, ceux-qui-étaient-là-avant ?',
    answer: 'Anunnaki',
    options: ['Anunnaki', 'Olympiens', 'Ases', 'Titans'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      "Époux de Jane Fonda, quel magnat des médias américains est le fondateur des chaînes de télévision TBS ainsi que CNN ? Il est également connu pour avoir fait un don d'un milliard de dollars à la Fondation des Nations Unies.",
    answer: 'Ted Turner',
    options: ['Ted Turner', 'Rupert Murdoch', 'Oprah Winfrey', 'Jeff Bezos'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quel souverain français fut le seul à porter le titre de roi des Français, contrairement aux autres qui portaient le titre de Roi de France ? Il régna de 1830 à 1848 au cours de la monarchie de Juillet.',
    answer: 'Louis-Philippe Ier',
    options: ['Louis-Philippe Ier', 'Louis XVI', 'Charles X', 'Napoléon III'],
    theme: 'Histoire',
  },
  {
    question: 'Quelle planète du système solaire est étudiée par la poséidologie ?',
    answer: 'Neptune',
    options: ['Neptune', 'Uranus', 'Saturne', 'Jupiter'],
    theme: 'Sciences',
  },
  {
    question:
      'Sur quel fleuve Sud-Américain sont situées des chutes d’eau à la frontière argentino-brésilienne ? Ces chutes ont été inscrites au patrimoine mondial de l’UNESCO en 1984.',
    answer: 'Iguazu',
    options: ['Iguazu', 'Amazone', 'Paraná', 'Orénoque'],
    theme: 'Géographie',
  },
  {
    question:
      'De quel groupe a fait partie avec les chanteurs Taboo et Will I Am la chanteuse Fergie qui a sorti le single "Glamorous" en 2006 en duo avec Ludacris ?',
    answer: 'Black Eyed Peas',
    options: ['Black Eyed Peas', "Destiny's Child", 'Pussycat Dolls', 'Spice Girls'],
    theme: 'Musique',
  },
  {
    question:
      'Quelle plante de la famille des théacées est originaire du Japon où est-elle connue sous le nom de tsubaki ? Cette plante est également un prénom féminin.',
    answer: 'Camélia',
    options: ['Camélia', 'Azalée', 'Magnolia', 'Hortensia'],
    theme: 'Cuisine',
  },
  {
    question:
      'Quel cépage blanc dont le nom est apparu pour la première fois en 1435 est originaire de la vallée du Rhin et de la Moselle et est typique d’Alsace ?',
    answer: 'Riesling',
    options: ['Riesling', 'Chardonnay', 'Sauvignon', 'Gewurztraminer'],
    theme: 'Cuisine',
  },
  {
    question:
      'Dans la religion chrétienne, comment s’appelle la mère de Jésus Christ et compagne de Joseph ?',
    answer: 'Marie',
    options: ['Marie', 'Élisabeth', 'Marthe', 'Anne'],
    theme: 'Histoire',
  },
  {
    question:
      'En escrime, avec l’épée et le sabre, quelle est la 3e arme utilisée dans les compétitions officielles ?',
    answer: 'Fleuret',
    options: ['Fleuret', 'Rapière', 'Dague', 'Estoc'],
    theme: 'Sport',
  },
  {
    question:
      'Quel jeu vidéo développé en 1984 par Alexei Pajitnov, considéré comme le plus vendu de l’histoire, consiste en un puzzle vertical de pièces de 4 cases ?',
    answer: 'Tétris',
    options: ['Tétris', 'Columns', 'Dr. Mario', 'Puyo Puyo'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      'Quel acteur français, ayant fait ses débuts dans la série Un gars, une fille a obtenu l’oscar du meilleur acteur pour son rôle dans The Artist ?',
    answer: 'Jean Dujardin',
    options: ['Jean Dujardin', 'Jean Reno', 'Omar Sy', 'Vincent Cassel'],
    theme: 'Cinéma',
  },
  {
    question:
      "Sous quel nom est connue la bataille surnommée bataille des Trois Empereurs et ayant eu lieu en Tchéquie actuelle le 2 décembre 1805, un an après le couronnement de Napoléon Ier en tant qu'empereur ?",
    answer: 'Bataille d’Austerlitz',
    options: [
      'Bataille d’Austerlitz',
      'Bataille de Waterloo',
      'Bataille d’Iéna',
      'Bataille de Wagram',
    ],
    theme: 'Histoire',
  },
  {
    question:
      "En géométrie, comment qualifie-t-on un angle de 180° donc dont les deux côtés sont dans le prolongement l'un de l'autre?",
    answer: 'Plat',
    options: ['Plat', 'Aigu', 'Obtus', 'Droit'],
    theme: 'Sciences',
  },
  {
    question: 'De combien de départements est composée la région Bretagne ?',
    answer: '4',
    options: ['4', '3', '5', '6'],
    theme: 'Géographie',
  },
  {
    question:
      'A quelle chanteuse née Mathilde Gerner doit-on les titres Ta Marinière et Amour Censure ? Son pseudonyme signifie "étoile" en japonais.',
    answer: 'Hoshi',
    options: ['Hoshi', 'Angèle', 'Pomme', 'Zaz'],
    theme: 'Musique',
  },
  {
    question:
      'Quel nom désignant également une petite quantité est l’autre nom de la panthère des neiges ou léopard des neiges ?',
    answer: 'Once',
    options: ['Once', 'Bribe', 'Soupçon', 'Goutte'],
    theme: 'Animaux',
  },
  {
    question:
      'En Angleterre, par quel mot désigne-t-on une petite maison de campagne élégante et simple ?',
    answer: 'Cottage',
    options: ['Cottage', 'Manor', 'Villa', 'Bungalow'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Dans la mythologie grecque, quel héros, fils d’Ethra, est le père Hippolyte et le compagnon d’Ariane ? Il est celui qui a tué le Minotaure, enfermé dans le Labyrinthe.',
    answer: 'Thésée',
    options: ['Thésée', 'Persée', 'Héraclès', 'Jason'],
    theme: 'Histoire',
  },
  {
    question:
      "Pour quel pays le basketteur Oscar Schmidt est-il le meilleur marqueur de l'histoire des Jeux olympiques avec 1093 points d'inscrits ? Il a eu une longévité exceptionnelle, jouant jusqu'à l'âge de 45 ans.",
    answer: 'Brésil',
    options: ['Brésil', 'Argentine', 'Espagne', 'États-Unis'],
    theme: 'Sport',
  },
  {
    question:
      "En informatique, quel nom de cinq lettres sous forme d'acronyme désigne l’unité de performance des processeurs, calculant le nombre d’opérations en virgule flottante par seconde ?",
    answer: 'FLOPS',
    options: ['FLOPS', 'MIPS', 'HERTZ', 'BYTES'],
    theme: 'Sciences',
  },
  {
    question:
      "Quel personnage de dessin animé est le héros d’une série d'animation éponyme créée en 1999 par Stephen Hillenburg ?",
    answer: 'Bob l’éponge',
    options: ['Bob l’éponge', 'Patrick Étoile', 'Sandy Écureuil', 'Carlo Tentacules'],
    theme: 'Séries TV',
  },
  {
    question:
      'Quelle famille, dont la branche principale a disparu en 1743 et originaire de la ville de Florence, a régné sur le Grand-duché de Toscane à partir du XVIe siècle ?',
    answer: 'Médicis',
    options: ['Médicis', 'Borgia', 'Sforza', 'Este'],
    theme: 'Histoire',
  },
  {
    question:
      'Quel élément chimique de numéro atomique 92 est le principal carburant utilisé dans les centrales nucléaires ?',
    answer: 'Uranium',
    options: ['Uranium', 'Plutonium', 'Thorium', 'Radium'],
    theme: 'Sciences',
  },
  {
    question:
      "Dans quel pays de 26 millions d'habitants la langue nationale est-elle le haoussa, parlée par près de la moitié de la population ? Un autre quart de la population parle le songhaï ou le zarma.",
    answer: 'Niger',
    options: ['Niger', 'Nigeria', 'Mali', 'Tchad'],
    theme: 'Géographie',
  },
  {
    question:
      'Quelle cérémonie organisée pour la première fois par Yard et Booska-P en 2023 récompense des artistes de musique urbaine ?',
    answer: 'Les Flammes',
    options: ['Les Flammes', 'Les Victoires de la musique', 'NRJ Music Awards', 'Les MTV Awards'],
    theme: 'Musique',
  },
  {
    question:
      'Quel animal d’Océanie, seul marsupial du genre Setonix, est un petit herbivore nocturne qui se reconnaît à ses oreilles rondes et qui ressemble à un sourire ?',
    answer: 'Quokka',
    options: ['Quokka', 'Kangourou', 'Wallaby', 'Koala'],
    theme: 'Animaux',
  },
  {
    question:
      'Quel terme anglais désigne un appartement situé au dernier étage d’un immeuble ou d’un palace ayant généralement une grande terrasse et un jardin de toiture ? Ce terme est l\'équivalent du français "appartement-terrasse".',
    answer: 'Penthouse',
    options: ['Penthouse', 'Loft', 'Duplex', 'Studio'],
    theme: 'Culture Générale',
  },
  {
    question: 'Dans Les Aventures de Tintin, quel personnage se prénomme Tryphon ?',
    answer: 'Tryphon Tournesol',
    options: ['Tryphon Tournesol', 'Haddock', 'Dupond', 'Tintin'],
    theme: 'Littérature',
  },
  {
    question:
      'Dans quel sport l’irlandais Josh Van der Flier a-t-il succédé au français Antoine Dupont au titre de meilleur joueur du monde fin 2022 ?',
    answer: 'Rugby',
    options: ['Rugby', 'Football', 'Handball', 'Cricket'],
    theme: 'Sport',
  },
  {
    question:
      'Quelle norme de télécommunications est symbolisée par un symbole bleu rappelant la rune de Harald à la dent bleue ?',
    answer: 'Bluetooth',
    options: ['Bluetooth', 'WiFi', 'NFC', 'Zigbee'],
    theme: 'Sciences',
  },
  {
    question:
      'Quel est le nom de famille des acteurs Lionnel, Simon et Alexandre, présents au générique de la série Kaamelott ?',
    answer: 'Astier',
    options: ['Astier', 'Dupont', 'Bernard', 'Durand'],
    theme: 'Séries TV',
  },
  {
    question:
      "Quelle grande ville antique avait Ostie pour principal port ? Une ville du même nom est proche du site antique mais n'est pourtant pas la même ville.",
    answer: 'Rome',
    options: ['Rome', 'Athènes', 'Carthage', 'Alexandrie'],
    theme: 'Histoire',
  },
  {
    question: 'En arithmétique, quel est l’élément neutre de la multiplication ?',
    answer: '1',
    options: ['1', '0', '-1', '2'],
    theme: 'Sciences',
  },
  {
    question: 'Avec le Chili, quel autre pays partage la région de la Patagonie ?',
    answer: 'Argentine',
    options: ['Argentine', 'Bolivie', 'Pérou', 'Uruguay'],
    theme: 'Géographie',
  },
  {
    question:
      "Quel groupe français cofondé par les frères Nicola et Stéphane Sirkis est l'auteur des chansons Trois nuits par semaine, Tes yeux noirs et L'Aventurier ?",
    answer: 'Indochine',
    options: ['Indochine', 'Téléphone', 'Noir Désir', 'Trust'],
    theme: 'Musique',
  },
  {
    question:
      'Quel mot de trois lettres désigne la construction faite par les oiseaux pour servir d’abri à leur progéniture ?',
    answer: 'Nid',
    options: ['Nid', 'Aire', 'Logis', 'Abri'],
    theme: 'Animaux',
  },
  {
    question:
      "Quel numéro de téléphone à 3 chiffres permet de contacter le Service national d'accueil téléphonique pour l'enfance en danger ?",
    answer: '119',
    options: ['119', '112', '115', '116'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quel tableau de Rembrandt, représentant pourtant une scène diurne, doit son nom à un noircissement dû aux apprêts utilisés par le peintre ?',
    answer: 'La Ronde de Nuit',
    options: [
      'La Ronde de Nuit',
      'La Leçon d’anatomie du docteur Tulp',
      'Le Syndic des drapiers',
      'Bethsabée au bain',
    ],
    theme: 'Art',
  },
  {
    question:
      'Quel est le nom du stade ayant accueilli le premier deux finales de coupe du monde de football, en 1970 et en 1986 ?',
    answer: 'Estadio Azteca',
    options: ['Estadio Azteca', 'Maracanã', 'Wembley Stadium', 'Camp Nou'],
    theme: 'Sport',
  },
  {
    question:
      'Ayant récompensé en mars 2025 Prince of Persia: The Lost Crown, quelle récompense française de l’industrie du jeu doit son nom à un célèbre animal évoqué dans la mythologie grecque ?',
    answer: 'Pégase',
    options: ['Pégase', 'Griffon', 'Hydre', 'Minotaure'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      'Quel homme considéré comme le créateur de la Mostra de Venise a laissé son nom à la coupe récompensant les meilleurs acteurs lors du festival ?',
    answer: 'Giuseppe Volpi',
    options: ['Giuseppe Volpi', 'Federico Fellini', 'Luchino Visconti', 'Vittorio De Sica'],
    theme: 'Cinéma',
  },
  {
    question:
      'Quelle ville dans laquelle est né le compositeur Ludwig van Beethoven était la capitale de la République Fédérale Allemande ?',
    answer: 'Bonn',
    options: ['Bonn', 'Berlin', 'Hambourg', 'Munich'],
    theme: 'Géographie',
  },
  {
    question:
      'En 1928, quel bactériologiste britannique est le premier à isoler la pénicilline ? Pour ce fait, il a reçu le Prix Nobel de physiologie ou médecine en 1945.',
    answer: 'Alexander Fleming',
    options: ['Alexander Fleming', 'Louis Pasteur', 'Robert Koch', 'Joseph Lister'],
    theme: 'Sciences',
  },
  {
    question:
      'Dans quel pays Prabowo Subianto est-il devenu président de la République occupant ainsi le poste que son beau-père Suharto avait déjà occupé de 1965 à 1998 ?',
    answer: 'Indonésie',
    options: ['Indonésie', 'Malaisie', 'Philippines', 'Thaïlande'],
    theme: 'Politique',
  },
  {
    question:
      "Quel auteur-compositeur-interprète britannique né à Rangoon est le créateur des albumes Five Leaves Left, Bryter Layter et Pink Moon, son plus grand succès qu'il ne connaîtra pourtant car il est décédé à 26 ans en 1974 d'une overdose d'antidépresseurs ?",
    answer: 'Nick Drake',
    options: ['Nick Drake', 'David Bowie', 'Elton John', 'George Harrison'],
    theme: 'Musique',
  },
  {
    question:
      'Quel nom de sept lettres désigne également la chouette des neiges ? Cette espèce appelée ukpik par les inuits est souvent dite "des neiges", elle constitue l\'emblème aviaire du Québec.',
    answer: 'Harfang',
    options: ['Harfang', 'Effraie', 'Chevêche', 'Hibou'],
    theme: 'Animaux',
  },
  {
    question:
      "Quel terme issu du latin signifiant soi-même désigne, en philosophie, ce qui fait qu'un être est lui-même et non pas autre chose ? Ce terme a laissé son nom au deuxième album de Damso.",
    answer: 'Ipséité',
    options: ['Ipséité', 'Altérité', 'Identité', 'Subjectivité'],
    theme: 'Littérature',
  },
  {
    question:
      "Quel Dieu de la mythologie romaine est le roi des dieux et donc, par syncrétisme, l'équivalent du Zeus grec ?",
    answer: 'Jupiter',
    options: ['Jupiter', 'Mars', 'Neptune', 'Apollon'],
    theme: 'Histoire',
  },
  {
    question: 'Combien de cercles entrelacés se trouvent sur le drapeau olympique ?',
    answer: '5',
    options: ['5', '4', '6', '7'],
    theme: 'Sport',
  },
  {
    question:
      "Par quel mot composé issu du vocabulaire des jeux vidéo, désigne-t-on un classement théorique de personnages, de personnalités ou d'objets en fonction d'un critère ?",
    answer: 'Tierlist',
    options: ['Tierlist', 'Leaderboard', 'Ranking', 'Classement'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      'Quel film d’animation des studios Pixar, sorti en 2012, met en scène la princesse écossaise Mérida ?',
    answer: 'Rebelle',
    options: ['Rebelle', 'Raiponce', 'La Reine des Neiges', 'Vaiana'],
    theme: 'Cinéma',
  },
  {
    question:
      "Quel accessoire pour fusils fut inventé à Bayonne au XVIIe siècle ? Son utilisation existait déjà et s'est répandue bien encore après.",
    answer: 'Bayonette',
    options: ['Bayonette', 'Baïonnette', 'Sabre', 'Dague'],
    theme: 'Histoire',
  },
  {
    question:
      "Quel os du corps humain relie l’articulation du genou à l’articulation de la hanche ? Il s'agit de l'os le plus long du corps humain.",
    answer: 'Fémur',
    options: ['Fémur', 'Tibia', 'Humérus', 'Péroné'],
    theme: 'Sciences',
  },
  {
    question: 'Quel continent possède la température moyenne la plus élevée ?',
    answer: 'Afrique',
    options: ['Afrique', 'Asie', 'Amérique du Sud', 'Océanie'],
    theme: 'Géographie',
  },
  {
    question:
      'En musique, quel terme de 4 lettres désigne à la fois une voix située sous le ténor et un instrument un peu plus grand que le violon ?',
    answer: 'Alto',
    options: ['Alto', 'Basse', 'Soprano', 'Ténor'],
    theme: 'Musique',
  },
  {
    question:
      'A partir de quelle plante graminée, pouvant être dur ou tendre, fabrique-t-on la farine la plus consommée en France ?',
    answer: 'Blé',
    options: ['Blé', 'Orge', 'Seigle', 'Maïs'],
    theme: 'Cuisine',
  },
  {
    question:
      'Quel adjectif, à ne pas confondre avec celui qualifiant une publication ayant lieu deux fois par mois, qualifie un journal paraissant tous les deux mois ?',
    answer: 'Bimestriel',
    options: ['Bimestriel', 'Bimensuel', 'Hebdomadaire', 'Trimestriel'],
    theme: 'Culture Générale',
  },
  {
    question:
      "Quel ustensile domestique utilisé dans la préparation d'une pâtisserie est également le nom donné au découpage classique d'une bande dessinée ? Utilisant des cases de tailles identiques, ce découpage peut effectivement rappeler la forme de l'ustensile. La réponse attendue est en UN SEUL MOT.",
    answer: 'Gaufrier',
    options: ['Gaufrier', 'Moule', 'Fouet', 'Spatule'],
    theme: 'Art',
  },
  {
    question:
      'Dans quel sport s’illustrent Agustin Tapia et Arturo Coello, premier et deuxième au classement mondial en individuel et évoluant ensemble en paire ?',
    answer: 'Paddle',
    options: ['Paddle', 'Tennis', 'Squash', 'Badminton'],
    theme: 'Sport',
  },
  {
    question:
      'Quel terme tiré du coréen désigne le phénomène consistant à fabriquer et manger des plats en quantité exagérée tout en se filmant ?',
    answer: 'Mugbang',
    options: ['Mugbang', 'Vlog', 'ASMR', 'Foodporn'],
    theme: 'Culture Générale',
  },
  {
    question:
      "En couple avec le fils de Jon Bon Jovi, quelle actrice étasunienne est l’interprète principale des séries Enola Holmes et Stranger Things ? Son nom de famille est également celui d'une couleur en langue anglaise.",
    answer: 'Millie Bobbie Brown',
    options: ['Millie Bobbie Brown', 'Emma Stone', 'Scarlett Johansson', 'Natalie Portman'],
    theme: 'Séries TV',
  },
  {
    question:
      "Quelle femme politique britannique détient le record du mandat le plus court au poste de Premier ministre du Royaume-Uni ? Ayant fait face au décès d'Elizabeth II, elle a démissionné seulement 49 jours après sa prise de fonction.",
    answer: 'Liz Truss',
    options: ['Liz Truss', 'Theresa May', 'Margaret Thatcher', 'Boris Johnson'],
    theme: 'Politique',
  },
  {
    question:
      'Quel cosmologiste britannique, partisan de la théorie de l’état stationnaire, principal détracteur du Big-Bang, lui a donné son nom ? Il était partisan de sa théorie de l\'état stationnaire et a créé le terme "Big Bang" pour se moquer de cette grosse explosion.',
    answer: 'Fred Hoyle',
    options: ['Fred Hoyle', 'Stephen Hawking', 'Isaac Newton', 'Roger Penrose'],
    theme: 'Sciences',
  },
  {
    question:
      'Quel pays actuel est né de la fusion en 1964 du Tanganyika et de Zanzibar ? Le premier ministre du Tanganyika, Julius Nyerere, est devenu le premier président ensuite le premier président du pays.',
    answer: 'Tanzanie',
    options: ['Tanzanie', 'Kenya', 'Ouganda', 'Zambie'],
    theme: 'Géographie',
  },
  {
    question:
      'Quel athlète, actuel recordman du monde de sa discipline a sorti le titre "Feelin\' Myself" sous le nom de Mondo ?',
    answer: 'Duplantis',
    options: ['Duplantis', 'Bolt', 'Farah', 'Phelps'],
    theme: 'Sport',
  },
  {
    question:
      "Quel arbre de la famille des ébénacées fournit le fruit appelé kaki ? Le nom de cet arbre provient de l'algonquin et fut répertorié pour la première fois par René-Robert Cavelier de La Salle en 1682.",
    answer: 'Plaqueminier',
    options: ['Plaqueminier', 'Pommier', 'Cerisier', 'Noyer'],
    theme: 'Cuisine',
  },
  {
    question:
      'Titre d’une chanson de Mr Giscard, quelle spécialité vietnamienne est un plat parfois appelé soupe tonkinoise composé de bouillon de viande et de nouilles de riz, agrémentés de divers ingrédients ?',
    answer: 'Phở',
    options: ['Phở', 'Ramen', 'Bún', 'Laksa'],
    theme: 'Cuisine',
  },
  {
    question:
      'Quel écrivain figure à la 3e et 1ère place des 100 meilleurs romans en langue anglaise du XXe siècle respectivement avec Portrait de l’artiste en jeune homme et Ulysse ?',
    answer: 'James Joyce',
    options: ['James Joyce', 'Virginia Woolf', 'George Orwell', 'Ernest Hemingway'],
    theme: 'Littérature',
  },
  {
    question:
      'À Hampden Park, à Glasgow, le 12 mai 1976, contre quelle équipe allemande l’AS Saint-Etienne échoue-t-il en finale de coupe des clubs champions ?',
    answer: 'Bayern München',
    options: ['Bayern München', 'Borussia Dortmund', 'Hambourg SV', 'Schalke 04'],
    theme: 'Sport',
  },
  {
    question:
      'Quel compositeur japonais né est connu pour être le principal compositeur des musiques de Nintendo ? Il a composé les bandes originales des Super Mario et The Legend of Zelda notamment.',
    answer: 'Kōji Kondō',
    options: ['Kōji Kondō', 'Nobuo Uematsu', 'Yoko Shimomura', 'Akira Yamaoka'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      "Quel acteur associé à la disparition de Natalie Wood est connu pour avoir incarné, aux côté de Stefanie Powers, Jonathan Hart dans la série Pour l’amour du risque ? Il porte le même nom de famille qu'un compositeur allemand.",
    answer: 'Wagner',
    options: ['Wagner', 'Harrison', 'Douglas', 'Eastwood'],
    theme: 'Séries TV',
  },
  {
    question:
      'Quel prénom partagent une jeune fille célèbre atteinte de progéria décédée en 2020 et l’actuelle reine de Jordanie, épouse d’Abdallah II ?',
    answer: 'Rania',
    options: ['Rania', 'Leila', 'Amina', 'Nadia'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Dans la tectonique des plaques, comment appelle-t-on le processus par lequel une plaque océanique plonge sous une autre plaque ?',
    answer: 'Subduction',
    options: ['Subduction', 'Érosion', 'Collision', 'Divergence'],
    theme: 'Sciences',
  },
  {
    question:
      "Avec quel pays la France partage-t-elle sa souveraineté sur l'île antillaise de Saint-Martin ? La capitale de la partie française est Marigot et l'autre est Philipsburg.",
    answer: 'Pays-Bas',
    options: ['Pays-Bas', 'Royaume-Uni', 'Espagne', 'Portugal'],
    theme: 'Géographie',
  },
  {
    question:
      'Quel groupe de RnB féminin était composé de LaTavia Roberson, LeToya Luckett, Michelle Williams, Farrah Franklin, Kelly Rowland et Beyoncé Knowles ? Il était actif de 1990 à 2006.',
    answer: "Destiny's Child",
    options: ["Destiny's Child", 'TLC', 'Spice Girls', 'Sugababes'],
    theme: 'Musique',
  },
  {
    question:
      'Quel mot désigne l’organe constituant les sonnettes des serpents ? Cet organe, constitué de plaques cornées sur la queue du serpent à sonnette.',
    answer: 'Cascabelle',
    options: ['Cascabelle', 'Carapace', 'Écaille', 'Crête'],
    theme: 'Animaux',
  },
  {
    question: 'Quelle fut la dernière année du XXe siècle ?',
    answer: '2000',
    options: ['2000', '1999', '2001', '1998'],
    theme: 'Histoire',
  },
  {
    question:
      "Quel peintre français né à Rodez en 1919 et mort en 2022 est célèbre pour ses nombreux tableaux noirs ? Sa nuance de noir utilisée est qualifiée d'outrenoir ou de noir-lumière.",
    answer: 'Pierre Soulages',
    options: ['Pierre Soulages', 'Claude Monet', 'Henri Matisse', 'Georges Braque'],
    theme: 'Art',
  },
  {
    question:
      'Quel pilote français ayant terminé 3e au rallye Dakar en 2024, a remporté 9 titres consécutifs de champion du monde des rallyes ?',
    answer: 'Sébastien Loeb',
    options: ['Sébastien Loeb', 'Sébastien Ogier', 'Carlos Sainz', 'Petter Solberg'],
    theme: 'Sport',
  },
  {
    question:
      'Quel nom porte le duo de youtubeurs et de streamers formé de Laink et Terracid publiant des vidéos depuis 2008 ?',
    answer: 'Wankil',
    options: ['Wankil', 'McFly et Carlito', 'Bigflo et Oli', 'Squeezie'],
    theme: 'Autres',
  },
  {
    question:
      'Quel animateur emblématique de M6 présente les émissions « Top chef » et « Pékin Express » ?',
    answer: 'Rottenberg',
    options: ['Rottenberg', 'Denis Brogniart', 'Cyril Hanouna', 'Nagui'],
    theme: 'Séries TV',
  },
  {
    question:
      "Quel temple dédié à Athéna est le plus grand édifice présent sur l'Acropole d'Athènes ? Sa construction a été instiguée par le stratège Périclès au Ve siècle avant notre ère.",
    answer: 'Parthénon',
    options: ['Parthénon', 'Panthéon', 'Colisée', 'Acropole'],
    theme: 'Histoire',
  },
  {
    question:
      "Quel préfixe d'origine grecque doit-on utiliser pour multiplier par 100 l’élément qui le suit ?",
    answer: 'Hecto',
    options: ['Hecto', 'Centi', 'Kilo', 'Milli'],
    theme: 'Sciences',
  },
  {
    question:
      "Quel pays possède pour régions l'Aragon et la Castille, toutes deux citées dans le titre d'une chanson de Boby Lapointe ?",
    answer: 'Espagne',
    options: ['Espagne', 'Italie', 'Portugal', 'France'],
    theme: 'Géographie',
  },
  {
    question:
      'En 2018, quelle chanteuse est l’interprète des titres Jalousie, La Loi de Murphy et Flou sur son album Brol ? Son nom de famille complet est Van Laeken.',
    answer: 'Angèle',
    options: ['Angèle', 'Pomme', 'Hoshi', 'Zazie'],
    theme: 'Musique',
  },
  {
    question:
      "Quel fruit d'un arbre de la famille des broméliacées pouvant être de la variété Victoria, est parfois utilisé dans la variété de pizza dite hawaïenne ?",
    answer: 'Ananas',
    options: ['Ananas', 'Mangue', 'Papaye', 'Banane'],
    theme: 'Cuisine',
  },
  {
    question:
      'Constituant l\'antonyme du mot nomade, comment qualifie-t-on une personne qui reste installée au même endroit ? Le terme dérive du latin signifiant "être assis".',
    answer: 'Sédentaire',
    options: ['Sédentaire', 'Nomade', 'Mobile', 'Errant'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quel peintre, à qui l’on doit le tableau Les Mariés de la Tour Eiffel, est l’auteur des plafonds de l’Opéra Garnier à Paris, inaugurés en 1964 ?',
    answer: 'Marc Chagall',
    options: ['Marc Chagall', 'Pablo Picasso', 'Henri Matisse', 'Georges Braque'],
    theme: 'Art',
  },
  {
    question:
      "Dans quel discipline le grec Emmanouíl Karalís est-il devenu le deuxième meilleur performeur de l'histoire avec un saut à 6,17 mètres ?",
    answer: 'Saut à la perche',
    options: ['Saut à la perche', 'Saut en hauteur', 'Saut en longueur', 'Triple saut'],
    theme: 'Sport',
  },
  {
    question: 'Quelle console de Sony est la console de salon la plus vendue de tous les temps ?',
    answer: 'Ps2',
    options: ['Ps2', 'Ps4', 'Ps5', 'Ps3'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      'Quel prénom porte le jeune ami roux, compagnon de Harry Potter et Hermione Granger dans la saga de J.K. Rowling ?',
    answer: 'Ron',
    options: ['Ron', 'Draco', 'Neville', 'Seamus'],
    theme: 'Littérature',
  },
  {
    question:
      'Quel roi de France né à Versailles en 1754 fut nommé Louis Capet au moment de sa condamnation à mort en 1793 ?',
    answer: 'Louis XVI',
    options: ['Louis XVI', 'Louis XV', 'Louis XIV', 'Louis XVIII'],
    theme: 'Histoire',
  },
  {
    question:
      "Quelle expression grecque signifiant « J’ai trouvé », Archimède aurait-il prononcé dans son bain ? Il l'aurait prononcé en ayant l'esprit occupé par le problème de la pesée de la couronne du roi Hiéron II.",
    answer: 'Eureka',
    options: ['Eureka', 'Carpe Diem', 'Alea Jacta Est', 'Veni Vidi Vici'],
    theme: 'Sciences',
  },
  {
    question:
      "Quelle ville d'Egypte fut fondée en 331 avant notre ère par un grand conquérant également roi de Macédoine ?",
    answer: 'Alexandrie',
    options: ['Alexandrie', 'Le Caire', 'Gizeh', 'Memphis'],
    theme: 'Histoire',
  },
  {
    question:
      'Quel groupe mené par Joelle Mogensen, interprète de "J\'ai encore rêvé d\'elle" en 1975, porte nom faisant référence à une phrase célèbre de contes ?',
    answer: 'Il Était Une Fois',
    options: ['Il Était Une Fois', 'Les Forbans', 'Téléphone', 'Images'],
    theme: 'Musique',
  },
  {
    question:
      'Quelle plante de la famille des Lamiacées, parfois appelée herbe royale, est employée en cuisine notamment pour la soupe au pistou et le pesto italien ?',
    answer: 'Basilic',
    options: ['Basilic', 'Thym', 'Romarin', 'Sauge'],
    theme: 'Cuisine',
  },
  {
    question: 'De quel pays est originaire la marque LEGO, fondée par Ole Kirk Christiansen ?',
    answer: 'Danemark',
    options: ['Danemark', 'Suède', 'Norvège', 'Finlande'],
    theme: 'Culture Générale',
  },
  {
    question:
      ' À quel architecte né en 1944 à Chicago doit-on la réalisation de la Trump Tower Chicago ainsi que de la Burj Khalifa ?',
    answer: 'Adrian Smith',
    options: ['Adrian Smith', 'Norman Foster', 'Frank Gehry', 'Renzo Piano'],
    theme: 'Art',
  },
  {
    question:
      "Quel tennisman étasunien vainqueur de l'US Open 1971 et de Wimbledon 1972 a laissé son nom à un modèle de chaussures produit par Adidas à partir de 1978 ? Ces chaussures de tennis sont vendues à plus de 70 millions d'exemplaires dans le monde.",
    answer: 'Stan Smith',
    options: ['Stan Smith', 'John McEnroe', 'Björn Borg', 'Jimmy Connors'],
    theme: 'Sport',
  },
  {
    question:
      'Sur quel battle royale développé par Epic Games et dont Bugha fut le premier champion du monde en solo, Myles Smith a-t-il fait un concert en 2024 ? Marshmello, Travis Scott avaient également réalisé des concerts sur ce jeu.',
    answer: 'Fortnite',
    options: ['Fortnite', 'Apex Legends', 'PUBG', 'Warzone'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      'Quel acteur ayant épousé Jada Pinkett a été découvert dans Le Prince de Bel-Air au début des années 1990 ? Son fils Jaden est également acteur.',
    answer: 'Will Smith',
    options: ['Will Smith', 'Eddie Murphy', 'Denzel Washington', 'Jamie Foxx'],
    theme: 'Cinéma',
  },
  {
    question:
      'En 1776, quel économiste écossais, père du concept de Main Invisible est l\'auteur de "Recherches sur la nature et les causes de la richesse des nations", considéré comme un des fondements théoriques du capitalisme.',
    answer: 'Adam Smith',
    options: ['Adam Smith', 'David Ricardo', 'John Maynard Keynes', 'Karl Marx'],
    theme: 'Politique',
  },
  {
    question:
      "Quel os appelé péroné dans l'ancienne nomenclature forme, avec le tibia, le squelette de la jambe ?",
    answer: 'Fibula',
    options: ['Fibula', 'Fémur', 'Humérus', 'Radius'],
    theme: 'Sciences',
  },
  {
    question:
      'Quel pays a été formé par la réunification des royaumes de Champassak, Luang Prabang et Vientiane, ville devenue la capitale du pays ?',
    answer: 'Laos',
    options: ['Laos', 'Cambodge', 'Vietnam', 'Thaïlande'],
    theme: 'Géographie',
  },
  {
    question:
      'Quel groupe mené par Morrissey et Johnny Marr a interprété "Heaven Knows I\'m Miserable Now", "Back to the old house" et "There is a light that never goes out" notamment. Ce groupe est associé à une célèbre réplique du film 500 jours ensemble.',
    answer: 'The Smiths',
    options: ['The Smiths', 'The Cure', 'Joy Division', 'Oasis'],
    theme: 'Musique',
  },
  {
    question:
      'Quelle plante, associé au terme de "sacré" dans le titre d\'une chanson de Dick Annegarn, appartient à la même famille botanique que le pélargonium dont il est proche ?',
    answer: 'Géranium',
    options: ['Géranium', 'Bégonia', 'Hortensia', 'Camélia'],
    theme: 'Cuisine',
  },
  {
    question:
      "Quelle marque fut fondée par Ingvar Kamprad, ayant grandi dans la ferme d'Elmtaryd, proche du village d'Agunnaryd ?",
    answer: 'Ikea',
    options: ['Ikea', 'H&M', 'Lego', 'Volvo'],
    theme: 'Culture Générale',
  },
  {
    question:
      "Quel polonais à qui l'on doit une étude surnommée \"Fausses Notes\" est également le compositeur d'une Marche Funèbre en 1837 ? Il fut également le compagnon de l'écrivaine George Sand.",
    answer: 'Frédéric Chopin',
    options: ['Frédéric Chopin', 'Franz Liszt', 'Robert Schumann', 'Johannes Brahms'],
    theme: 'Musique',
  },
  {
    question:
      'Quelle nation est représentée dans le football par une équipe surnommée Les Fennecs ? Elle a pour meilleur buteur Islam Slimani.',
    answer: 'Algérie',
    options: ['Algérie', 'Tunisie', 'Maroc', 'Égypte'],
    theme: 'Sport',
  },
  {
    question:
      'Quel nombre est associé à XBOX dans le nom de la console créée par Microsoft et sortie en 2005, principale concurrente de la PlayStation 3 ?',
    answer: '360',
    options: ['360', '720', 'One', '365'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      'Quel grand acteur français est apparu dans Le Guépard, Monsieur Klein, La Piscine, Le Cercle Rouge et Astérix aux Jeux Olympiques notamment ?',
    answer: 'Alain Delon',
    options: ['Alain Delon', 'Jean-Paul Belmondo', 'Gérard Depardieu', 'Yves Montand'],
    theme: 'Cinéma',
  },
  {
    question:
      'Quel prénom portait roi de France, qui accéda au trône en 987, a donné son nom à la dynastie des Capétiens ?',
    answer: 'Hugues',
    options: ['Hugues', 'Philippe', 'Louis', 'Charles'],
    theme: 'Histoire',
  },
  {
    question:
      'Quel mouvement du corps humain, lors duquel les fibres musculaires du myocarde se contractent afin d’expulser le sang, est l’antonyme de diastole ?',
    answer: 'Systole',
    options: ['Systole', 'Inspiration', 'Expiration', 'Contraction'],
    theme: 'Sciences',
  },
  {
    question:
      "Quel est le seul pays qui soit traversé à la fois par l'équateur et par le tropique du Capricorne ?",
    answer: 'Brésil',
    options: ['Brésil', 'Indonésie', 'République Démocratique du Congo', 'Kenya'],
    theme: 'Géographie',
  },
  {
    question:
      'Quel groupe mené par Benoît Poher a connu différents succès avec "Le Graal", "Le Chemin" et surtout "Dernière danse" ?',
    answer: 'Kyo',
    options: ['Kyo', 'Indochine', 'BB Brunes', 'Superbus'],
    theme: 'Musique',
  },
  {
    question:
      "Quelle petite fleur, parfois appelée galanthine d'hiver, a un nom imagé évoquant le fait qu’elle fleurit à la fin de l’hiver en traversant le sol glacé ? C'est également le nom de l'association fondée par Lino Ventura et dédiée aux personnes handicapées.",
    answer: 'Perce-neige',
    options: ['Perce-neige', 'Edelweiss', 'Jonquille', 'Primevère'],
    theme: 'Animaux',
  },
  {
    question:
      'Comment appelle-t-on la partie du lit, souvent réalisée en bois et comprenant fréquemment des lattes, sur laquelle repose le matelas ?',
    answer: 'Sommier',
    options: ['Sommier', 'Matelas', 'Cadre', 'Dossier'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quelle divinité du panthéon égyptien souvent représenté avec une tête de chacal était considérée comme maître des nécropoles et le protecteur des embaumeurs ?',
    answer: 'Anubis',
    options: ['Anubis', 'Osiris', 'Horus', 'Seth'],
    theme: 'Histoire',
  },
  {
    question:
      "Depuis 1977, de quelle ville s'élancent les cyclistes allant jusqu'à Roubaix lors de la course surnommée l'Enfer du Nord ?",
    answer: 'Compiègne',
    options: ['Compiègne', 'Paris', 'Lille', 'Amiens'],
    theme: 'Sport',
  },
  {
    question:
      "Prenant place pendant la Seconde Guerre mondiale et à l'origine développée par Muse Software, quelle série de jeux vidéo permet d'incarner B. J. Blazkowicz qui combat les Allemands ?",
    answer: 'Wolfenstein',
    options: ['Wolfenstein', 'Call of Duty', 'Medal of Honor', 'Battlefield'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      'Quelle série animée diffusée sur Nickelodeon et Gulli, met en scène Lincoln et ses 10 sœurs ?',
    answer: 'Bienvenue chez les Loud',
    options: ['Bienvenue chez les Loud', 'Les Simpson', 'Adventure Time', 'Phineas et Ferb'],
    theme: 'Séries TV',
  },
  {
    question:
      'Avec le coq et le mouton, quel troisième animal fut envoyé dans les airs par les frères Montgolfier lors du premier essai de leur ballon en 1783 ?',
    answer: 'Canard',
    options: ['Canard', 'Chien', 'Chat', 'Lapin'],
    theme: 'Histoire',
  },
  {
    question:
      'En mathématiques, comment appelle-t-on une droite ou une courbe qui s’approche indéfiniment d’une courbe sans jamais la couper ? Le nom vient du grec signifiant "sans rencontre".',
    answer: 'Asymptote',
    options: ['Asymptote', 'Tangente', 'Sécante', 'Parallèle'],
    theme: 'Sciences',
  },
  {
    question:
      "Quel détroit stratégique sur laquelle se situe la ville de Bandar Abbas sépare le golfe Persique de l'Océan Indien ? L'Iran, les Emirats Arabes Unis et le sultanat d'Oman ont accès à ce détroit.",
    answer: "Détroit d'Ormuz",
    options: ["Détroit d'Ormuz", 'Détroit de Gibraltar', 'Détroit de Béring', 'Détroit de Malacca'],
    theme: 'Géographie',
  },
  {
    question:
      "Dérivant de l'ekonting africain, quel instrument à cordes, typiquement nord-américain, est proche la guitare mais se compose d'une caisse de résonance sur laquelle est tendue une membrane ? Earl Scruggs en est un instrumentiste célèbre.",
    answer: 'Banjo',
    options: ['Banjo', 'Ukulélé', 'Mandoline', 'Balalaïka'],
    theme: 'Musique',
  },
  {
    question:
      'Quelle espèce de perroquet en danger critique d’extinction, parfois appelé "perroquet hibou" est endémique de Nouvelle-Zélande ? Il s\'agit de la seule espèce de perroquet nocturne.',
    answer: 'Kakapo',
    options: ['Kakapo', 'Ara', 'Perruche', 'Cacatoès'],
    theme: 'Animaux',
  },
  {
    question:
      'En ethnologie, comment nomme-t-on la pratique qui consiste à se marier exclusivement entre membres de la même catégorie sociale et au sein d’une même aire géographique ?',
    answer: 'Endogamie',
    options: ['Endogamie', 'Exogamie', 'Polygamie', 'Monogamie'],
    theme: 'Sciences',
  },
  {
    question: 'Sous quel véritable patronyme est né le dramaturge Molière en 1622 ?',
    answer: 'Jean Baptiste Poquelin',
    options: ['Jean Baptiste Poquelin', 'Jean Racine', 'Pierre Corneille', 'Beaumarchais'],
    theme: 'Littérature',
  },
  {
    question: "En mètres, quelle est la longueur d'un bassin olympique de natation ?",
    answer: '50',
    options: ['50', '25', '100', '75'],
    theme: 'Sport',
  },
  {
    question:
      "Avec la boxe, le tennis, le baseball et le golf, quel était le cinquième sport jouable à l'origine dans le jeu vidéo Wii Sports sorti en 2006 ?",
    answer: 'Bowling',
    options: ['Bowling', 'Football', 'Basketball', 'Hockey'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      'De quel film provient la fameuse réplique "La vie c\'est comme une boite de chocolat, on ne sait jamais sur quoi on va tomber" ?',
    answer: 'Forrest Gump',
    options: ['Forrest Gump', 'Rain Man', 'Le Terminal', 'Seul au monde'],
    theme: 'Cinéma',
  },
  {
    question:
      'En quelle année, lors de laquelle il fut couronné, François Ier a-t-il affronté les mercenaires suisses lors de la bataille de Marignan ?',
    answer: '1515',
    options: ['1515', '1492', '1525', '1530'],
    theme: 'Histoire',
  },
  {
    question:
      'Quel est le nom français de la constellation ayant pour étoile principale Procyon et qui a pour nom latin canis minor ?',
    answer: 'Petit Chien',
    options: ['Petit Chien', 'Grand Chien', 'Dragon', 'Centaure'],
    theme: 'Sciences',
  },
  {
    question:
      'Quel archipel de l\'océan Atlantique doit son nom à un mot latin signifiant "chien" et non pas, comme l\'on pourrait le penser au premier abord, à des oiseaux ?',
    answer: 'Les Canaries',
    options: ['Les Canaries', 'Les Açores', 'Les Baléares', 'Le Cap-Vert'],
    theme: 'Géographie',
  },
  {
    question:
      "Quel duo musical se composait à la fois d'Andrew Ridgeley et de George Michael ? Fondé en 1981, il a connu le succès avec Wake me up before you go go et Last Christmas notamment.",
    answer: 'Wham!',
    options: ['Wham!', 'Pet Shop Boys', 'Eurythmics', 'Modern Talking'],
    theme: 'Musique',
  },
  {
    question:
      'Quel fruit à écorce, renfermé dans une bogue, désigne également, de façon imagée, une décharge électrique ou un coup de poing ?',
    answer: 'Châtaigne',
    options: ['Châtaigne', 'Noisette', 'Amande', 'Noix'],
    theme: 'Cuisine',
  },
  {
    question:
      "Quel mot apparu pour la première fois en 1944 et créé par Donald Watson désigne la pratique également appelée végétalisme intégral, donc les personnes refusant de consommer tout produit d'origine animale ?",
    answer: 'Vegan',
    options: ['Vegan', 'Végétarien', 'Flexitarien', 'Crudivore'],
    theme: 'Culture Générale',
  },
  {
    question:
      "Dans la Bible, quel patriarche, neveu d'Abraham ayant échappé à la destruction de Sodome, voit sa femme changée en statue de sel ?",
    answer: 'Loth',
    options: ['Loth', 'Isaac', 'Jacob', 'Moïse'],
    theme: 'Histoire',
  },
  {
    question:
      "Quel entraîneur de natation est commun à Léon Marchand et à Michael Phelps ? Il est nommé en 2024 directeur de l'équipe de natation de l'Université du Texas à Austin.",
    answer: 'Bob Bowman',
    options: ['Bob Bowman', 'Philippe Lucas', 'Dave Salo', 'Eddie Reese'],
    theme: 'Sport',
  },
  {
    question:
      'Adaptée au cinéma en 2022 avec Tom Holland dans le rôle principal, quelle série de jeux vidéo créée par le studio Naughty Dog suit essentiellement les aventures du chasseur de trésor Nathan Drake ?',
    answer: 'Uncharted',
    options: ['Uncharted', 'Tomb Raider', "Assassin's Creed", 'Far Cry'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      "Ayant laissé son nom à une chanson de Feu! Chatterton, quelle femme fut la traductrice de l’expédition puis la compagne d’Hernan Cortés ? Elle assista les Espagnols lors de la conquête de l'empire aztèque.",
    answer: 'La Malinche',
    options: ['La Malinche', 'Isabelle la Catholique', 'Frida Kahlo', 'Sor Juana'],
    theme: 'Histoire',
  },
  {
    question:
      'Quelle forêt a laissé son nom à une série franco-belge avec Nolwenn Leroy dans le rôle de la biologiste Fanny Legoff enquêtant sur la disparition de sa meilleure amie ?',
    answer: 'Brocéliande',
    options: ['Brocéliande', 'Forêt Noire', 'Forêt de Sherwood', 'Amazonie'],
    theme: 'Séries TV',
  },
  {
    question:
      'Désigné par le terme incus dans la nouvelle nomenclature, quel osselet de l’oreille se place entre les deux autres ?',
    answer: 'Enclume',
    options: ['Enclume', 'Marteau', 'Étrier', 'Rotule'],
    theme: 'Sciences',
  },
  {
    question:
      'Quel site naturel constituant un célèbre site touristique est observable depuis la Tour Skylon ? Cette tour de 160 mètres de haut fut inaugurée en 1965.',
    answer: 'Chutes du Niagara',
    options: ['Chutes du Niagara', 'Grand Canyon', 'Chutes Victoria', 'Mont Rushmore'],
    theme: 'Géographie',
  },
  {
    question:
      'Quel rappeur ayant pour véritable nom Lamine Diakité et qui tient son nom d’un personnage d’un film de Joe Dante datant de 1984 a interprété les titres "Attendez-moi", "Mon CV", et "Normal" notamment ?',
    answer: 'Guizmo',
    options: ['Guizmo', 'Nekfeu', 'Orelsan', 'Vald'],
    theme: 'Musique',
  },
  {
    question:
      "Quelle gomme-résine aromatique est tirée d'un arbre de la famille des burséracées parfois appelé balsamier ?",
    answer: 'Myrrhe',
    options: ['Myrrhe', 'Encens', 'Benjoin', 'Copal'],
    theme: 'Sciences',
  },
  {
    question:
      "Quel jeu, dont l’ancêtre est le jonchet, est composé de 41 pièces allongées ? C'est également un nom pour désigner l'empereur du Japon et une marque de biscuits.",
    answer: 'Mikado',
    options: ['Mikado', 'Dominos', 'Kapla', 'Tangram'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      "Quel roi d'Athènes était, dans la mythologie grecque, le père de Thésée ? Il s'est jeté dans la mer qui porte aujourd'hui son nom, croyant son fils mort face au Minotaure.",
    answer: 'Égée',
    options: ['Égée', 'Minos', 'Priam', 'Agamemnon'],
    theme: 'Culture Générale',
  },
  {
    question:
      'Quel nom masculin désigne le produit dont on enduit la semelle des skis pour améliorer la glisse ?',
    answer: 'Fart',
    options: ['Fart', 'Paraffine', 'Résine', 'Grip'],
    theme: 'Sport',
  },
  {
    question:
      "Quel nom de deux lettres est donnée à l'adresse constituant le numéro d'identification unique attribué à chaque équipement faisant partie d'un même réseau informatique ?",
    answer: 'IP',
    options: ['IP', 'MAC', 'DNS', 'URL'],
    theme: 'Sciences',
  },
  {
    question:
      "Dans quel film d'Alain Chabat, Alain Chabat joue-t-il lui-même le rôle d'un chien devenu humain ?",
    answer: 'Didier',
    options: ['Didier', 'RRRrrrr!!!', 'Santa & Cie', 'Astérix & Obélix : Mission Cléopâtre'],
    theme: 'Cinéma',
  },
  {
    question:
      'Quelle étendue d\'eau avait pour nom latin celui de "mare nostrum", nom signifiant "notre mer" et qui fait référence à un ensemble relativement vaste.',
    answer: 'Mer Méditerranée',
    options: ['Mer Méditerranée', 'Mer Noire', 'Mer Rouge', 'Mer Égée'],
    theme: 'Histoire',
  },
  {
    question: "Avec le cuivre, quel métal est l'autre composant du laiton ?",
    answer: 'Zinc',
    options: ['Zinc', 'Étain', 'Aluminium', 'Nickel'],
    theme: 'Sciences',
  },
  {
    question:
      "Quelle grande ville portuaire située à l'embouchure du fleuve Elbe est la deuxième ville la plus peuplée de son pays ?",
    answer: 'Hambourg',
    options: ['Hambourg', 'Brême', 'Rotterdam', 'Anvers'],
    theme: 'Géographie',
  },
  {
    question:
      "Quelle chanteuse de soul, jazz et gospel née en 1942 est l'interprète du succès Respect ? C'est une reprise modifiée du titre du même nom d'Otis Redding.",
    answer: 'Aretha Franklin',
    options: ['Aretha Franklin', 'Nina Simone', 'Etta James', 'Tina Turner'],
    theme: 'Musique',
  },
  {
    question:
      "Quel animal, dont le nom scientifique est Phoenicopterus Roseus, retrouve-t-on en Camargue et doit sa teinte colorée aux crevettes qu'il ingurgite ?",
    answer: 'Flamant rose',
    options: ['Flamant rose', 'Cigogne blanche', 'Spatule blanche', 'Héron cendré'],
    theme: 'Animaux',
  },
  {
    question:
      "Parfois appelé spoiler, comment appelle-t-on en France l'élément de carrosserie que l'on rajoute à l'arrière de la voiture pour améliorer son aérodynamisme ?",
    answer: 'Aileron',
    options: ['Aileron', 'Becquet', 'Diffuseur', 'Déflecteur'],
    theme: 'Autres',
  },
  {
    question:
      "Paru en 1858 et présentant les personnages de Camille et Madeleine de Fleurville, comment s'intitule la suite des Malheurs de Sophie ? Il s'agit du second volet de la trilogie de la Comtesse de Ségur, le troisième étant \"Les Vacances\".",
    answer: 'Les Petites Filles Modèles',
    options: ['Les Petites Filles Modèles', 'Les Vacances', 'Un Bon Petit Diable', 'Les Deux Nigauds'],
    theme: 'Littérature',
  },
  {
    question:
      "Quel animal de la famille des macropodidés sert d'emblème et de surnom à l'équipe australienne de rugby à XV ?",
    answer: 'Wallaby',
    options: ['Wallaby', 'Kangourou', 'Wombat', 'Koala'],
    theme: 'Sport',
  },
  {
    question:
      "Quelle série de jeux vidéo de combat, développée par Midway puis NetherRealm Studios, possède un dragon sur son logo ? Le premier jeu est sorti en 1992 et 28 jeux sont sortis dont 11 principaux.",
    answer: 'Mortal Kombat',
    options: ['Mortal Kombat', 'Street Fighter', 'Tekken', 'Injustice'],
    theme: 'Jeux Vidéo',
  },
  {
    question:
      "Quel animal italien de fiction fut créé en 1962, d'abord pour une publicité pour de la lessive, puis héros de la série télévisée du même nom ? Il est entouré de ses amis Valeriano, Priscilla et Pierrot.",
    answer: 'Calimero',
    options: ['Calimero', 'Barbapapa', 'Spirou', 'Pollux'],
    theme: 'Séries TV',
  },
  {
    question:
      "Quelle enseignante allemande, née sous le nom d'Eißner, députée pendant la république de Weimar, est à l'initiative de la création de la Journée internationale du droit des femmes ?",
    answer: 'Clara Zetkin',
    options: ['Clara Zetkin', 'Rosa Luxemburg', 'Simone de Beauvoir', 'Alexandra Kollontaï'],
    theme: 'Histoire',
  },
  {
    question:
      "Quelle femme, pionnière des soins infirmiers modernes, née en 1820 et ayant exercé pendant plusieurs conflits dont la Guerre de Crimée, a laissé son nom au serment prêté par les infirmières avant d'exercer ?",
    answer: 'Florence Nightingale',
    options: ['Florence Nightingale', 'Mary Seacole', 'Dorothea Dix', 'Clara Barton'],
    theme: 'Histoire',
  },
  {
    question:
      "Dans quel pays asiatique peut-on payer ses achats avec des chhertums , que l'on peut troquer au nombre de cent contre un ngultrum ?",
    answer: 'Bhoutan',
    options: ['Bhoutan', 'Népal', 'Cambodge', 'Myanmar'],
    theme: 'Géographie',
  },
  {
    question:
      "Quelle chanteuse étasunienne fut la première à mettre quatre titres d'un album aux quatre premières places du classement Billboard Hot 100 ? Les titres de l'album She's so unusual sont Girls Just Want to Have Fun, Time After Time, She Bop, et All Through the Night.",
    answer: 'Cyndi Lauper',
    options: ['Cyndi Lauper', 'Madonna', 'Pat Benatar', 'Blondie'],
    theme: 'Musique',
  },
  {
    question:
      "Appelé spermaceti chez les cachalots, quel nom de fruit porte l'organe ovale de tissu gras occupant la majeure partie de la tête des dauphins ?",
    answer: 'Melon',
    options: ['Melon', 'Pêche', 'Citron', 'Poire'],
    theme: 'Animaux',
  },
  {
    question:
      "Dans la version française du Monopoly, quel boulevard est le moins cher du jeu ? Il forme une paire de terrains avec la Rue Lecourbe et est situé, dans la vraie vie, entre les 11e et 20e arrondissements de Paris.",
    answer: 'Boulevard de Belleville',
    options: ['Boulevard de Belleville', 'Rue Lecourbe', 'Rue de Vaugirard', 'Avenue de Breteuil'],
    theme: 'Culture Générale',
  },
  {
    question:
      "Quel conte philosophique publié par Voltaire en 1759 est sous-titré \"L'Optimisme\" ? Il met en scène le voyage initiatique du héros accompagné de Pangloss, son maître à penser.",
    answer: 'Candide',
    options: ['Candide', 'Zadig', 'Micromégas', "L'Ingénu"],
    theme: 'Littérature',
  },
  {
    question:
      "Avec quel objet se pratique le sport appelé ultimate ? Ce sport est caractérisé par un auto-arbitrage de la part des joueurs.",
    answer: 'Frisbee',
    options: ['Frisbee', 'Balle', 'Raquette', 'Disque'],
    theme: 'Sport',
  },
  {
    question:
      "Fondée par Jimmy Wales et Larry Sanger, quelle encyclopédie libre, en ligne, collaborative et multilingue fut mise en ligne en janvier 2001 ?",
    answer: 'Wikipédia',
    options: ['Wikipédia', 'Encarta', 'Larousse en ligne', 'Encyclopædia Britannica'],
    theme: 'Culture Générale',
  },
  {
    question:
      "Dans quel film avec Jean Reno peut-on entendre la réplique \"Merci, la gueuse ! Tu es un laideron mais tu es bien bonne\" prononcée par Jacquouille la Fripouille ?",
    answer: 'Les Visiteurs',
    options: ['Les Visiteurs', 'La Chèvre', 'Le Dîner de Cons', 'Les Bronzés'],
    theme: 'Cinéma',
  },
  {
    question:
      "Que signifie la lettre A dans l'acronyme CECA désignant une communauté économique européenne sur des matières premières notamment voulue par Robert Schumann à la fin de la Seconde Guerre mondiale ?",
    answer: 'Acier',
    options: ['Acier', 'Agriculture', 'Armement', 'Alimentation'],
    theme: 'Histoire',
  },
  {
    question:
      "Quel est le terme générique pour désigner les maux de tête ? Le terme est issu du grec signifiant \"tête\".",
    answer: 'Céphalées',
    options: ['Céphalées', 'Migraines', 'Névralgies', 'Algies'],
    theme: 'Sciences',
  },
  {
    question:
      "Quel fleuve italien de 652 kilomètres de long est le plus long du pays ?",
    answer: 'Pô',
    options: ['Pô', 'Tibre', 'Arno', 'Adige'],
    theme: 'Géographie',
  },
  {
    question:
      "Quel festival a lieu annuellement sur le territoire de la commune finistérienne de Carhaix-Plouguer ? Ce festival musical fut créé en 1992.",
    answer: 'Vieilles Charrues',
    options: ['Vieilles Charrues', 'Hellfest', 'Rock en Seine', 'Francofolies'],
    theme: 'Musique',
  },
  {
    question:
      "Quel mot de 4 lettres désigne l'aiguillon d'attaque ou défense des insectes ?",
    answer: 'Dard',
    options: ['Dard', 'Crochet', 'Dent', 'Pique'],
    theme: 'Animaux',
  },
  {
    question:
      "Quelle confiserie en forme de tétraèdre, produit à Carpentras, est confectionné à partir de sirop de fruits confits ? Elle est homophone d'un modèle de voiture de la marque Citroën.",
    answer: 'Berlingot',
    options: ['Berlingot', 'Calisson', 'Nougat', 'Dragée'],
    theme: 'Cuisine',
  },
  {
    question:
      "Quel peintre est l'auteur du tableau \"Portrait d'Elisabeth Lederer\" entre 1914 et 1916, représentant la fille d'August Lederer, le principal mécène de l'artiste ? Vendu pour 236,4 millions de dollars en 2025, il est devenu le deuxième tableau le plus cher vendu aux enchères de l'Histoire de l'art.",
    answer: 'Gustav Klimt',
    options: ['Gustav Klimt', 'Egon Schiele', 'Oskar Kokoschka', 'Franz von Stuck'],
    theme: 'Art',
  },
  {
    question:
      "De quoi le snurfer, invention créée par l'étasunien Sherman Poppen est-il l'ancêtre direct ? Le nom de \"snurfer\" provient de la contraction de deux mots.",
    answer: 'Snowboard',
    options: ['Snowboard', 'Ski', 'Surf', 'Luge'],
    theme: 'Sport',
  },
  {
    question:
      "Quelle streameuse française, la première à atteindre un million de followers sur la plateforme, participe cette saison à Danse avec les Stars avec le danseur Adrien Caby ?",
    answer: 'Maghla',
    options: ['Maghla', 'Lena Situations', 'Squeezie', 'Pidi'],
    theme: 'Culture Générale',
  },
  {
    question:
      "Dans le film « Titanic » de James Cameron, quel nom porte le diamant bleu présent à bord du paquebot ?",
    answer: 'Le coeur de l\'océan',
    options: ["Le coeur de l'océan", 'Le diamant rose', "L'étoile de la mer", 'La larme de Neptune'],
    theme: 'Cinéma',
  },
  {
    question:
      "Quel homme politique né à Brilon en 1955 est l'actuel chancelier allemand ? Il a succédé à Olaf Scholz à ce poste en mai 2025 et mène la coalition CDU/CSU.",
    answer: 'Friedrich Merz',
    options: ['Friedrich Merz', 'Armin Laschet', 'Annalena Baerbock', 'Robert Habeck'],
    theme: 'Politique',
  },
  {
    question:
      "Également appelée rétinol, quelle vitamine est considérée comme étant très bonne pour la vue ?",
    answer: 'Vitamine A',
    options: ['Vitamine A', 'Vitamine C', 'Vitamine D', 'Vitamine E'],
    theme: 'Sciences',
  },
  {
    question:
      "Quelle île a pour unique aéroport celui de Sir Seewosagur Ramgoolam, dans la localité de Plaine Magnien ? Le nom de l'aéroport vient de celui du premier président du pays et indépendantiste.",
    answer: 'Maurice',
    options: ['Maurice', 'La Réunion', 'Seychelles', 'Maldives'],
    theme: 'Géographie',
  },
  {
    question:
      "Quel compositeur italien connu pour sa collaboration avec Donna Summer sur les titres disco I Feel Love et Love to Love You Baby a également composé les bandes originales de Scarface, American Gigolo et Midnight Express ?",
    answer: 'Giorgio Moroder',
    options: ['Giorgio Moroder', 'Ennio Morricone', 'Nino Rota', 'Hans Zimmer'],
    theme: 'Musique',
  },
  {
    question:
      "Chez quel grand poisson d'eau douce de la famille des ésocidés, possédant de nombreuses dents pointues trouve-t-on des espèces dites \"Maskinongé\", \"grand\" et \"de l'Amour\".",
    answer: 'Brochet',
    options: ['Brochet', 'Sandre', 'Silure', 'Perche'],
    theme: 'Animaux',
  },
  {
    question:
      "Quel mot de 11 lettres issu du grec ancien signifiant \"gratté de nouveau\" désigne un parchemin dont on a effacé la première écriture pour pouvoir y écrire un nouveau texte ?",
    answer: 'Palimpseste',
    options: ['Palimpseste', 'Parchemin', 'Codex', 'Incunable'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel ancien médecin militaire est l'assistant et meilleur ami de Sherlock Holmes ? Il est également le narrateur de la majorité des aventures.",
    answer: 'Watson',
    options: ['Watson', 'Moriarty', 'Lestrade', 'Mycroft'],
    theme: 'Littérature',
  },
  {
    question: "Quel journal fondé par Jacques Goddet en 1946 est le principal quotidien sportif français, fêtant ses 80 ans cette année ?",
    answer: "L'Équipe",
    options: ["L'Équipe", 'France Football', 'Le Parisien', 'Miroir des Sports'],
    theme: 'Sport',
  },
  {
    question: "Quel sport est pratiqué dans la série de jeux vidéo nommée NBA 2K ?",
    answer: 'Basket-ball',
    options: ['Basket-ball', 'Football américain', 'Baseball', 'Hockey sur glace'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Dans quelle série télévisée, le héros Michael Scofield se fait-il enfermer dans le même pénitencier que son frère afin de le faire évader ?",
    answer: 'Prison Break',
    options: ['Prison Break', 'Oz', 'Orange Is the New Black', 'Alcatraz'],
    theme: 'Séries TV',
  },
  {
    question: "Quel pays était dirigé jusqu'au 28 février 2026 par l'ayatollah Khamenei, arrivé au pouvoir après Khomeini en 1989 ?",
    answer: 'Iran',
    options: ['Iran', 'Irak', 'Afghanistan', 'Pakistan'],
    theme: 'Politique',
  },
  {
    question: "Quelle demi-droite coupe en deux angles égaux un angle du triangle ?",
    answer: 'Bissectrice',
    options: ['Bissectrice', 'Médiatrice', 'Hauteur', 'Médiane'],
    theme: 'Sciences',
  },
  {
    question: "Quelle ville aux confins du désert malien, longtemps inaccessible aux européens, est surnommée \"la ville aux 333 saints\" et \"la perle du désert\" ?",
    answer: 'Tombouctou',
    options: ['Tombouctou', 'Dakar', 'Niamey', 'Djenné'],
    theme: 'Géographie',
  },
  {
    question: "Quel était le nom du groupe, auteur de Smells Like Teen Spirit, sur l'album Nevermind, qui était mené par le chanteur Kurt Cobain ?",
    answer: 'Nirvana',
    options: ['Nirvana', 'Pearl Jam', 'Soundgarden', 'Alice in Chains'],
    theme: 'Musique',
  },
  {
    question: "Quelle race de chien, descendant du barbet, était parfaitement adaptée à la chasse au canard dans l'eau, pouvant expliquer le toilettage dit \"en lion\" qui était courant à la Belle Epoque ? Le nom du chien vient justement du fait qu'il était adapté à la chasse au canard.",
    answer: 'Caniche',
    options: ['Caniche', 'Labrador', 'Cocker', 'Épagneul'],
    theme: 'Animaux',
  },
  {
    question: "Que signifie la lettre M dans le sigle PMU désignant un établissement de paris français ? Les lettres P et U signifient respectivement \"Pari\" et \"Urbain\".",
    answer: 'Mutuel',
    options: ['Mutuel', 'Municipal', 'Mondial', 'Multiple'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel peintre néerlandais, figure de l'art abstrait, a peint dans les années 1920 des compositions constituées de rectangles multicolores ayant inspiré une robe à Yves Saint-Laurent ?",
    answer: 'Piet Mondrian',
    options: ['Piet Mondrian', 'Wassily Kandinsky', 'Kazimir Malevitch', 'Paul Klee'],
    theme: 'Art',
  },
  {
    question: "Quel est le nom du footballeur anglais à l'origine d'un triplé en finale de la coupe du monde 1966 ? Il est l'auteur de deux buts pendant les prolongations qui ont opposé l'Angleterre à l'Allemagne de l'Ouest et permet à son pays de remporter son unique coupe du monde.",
    answer: 'Geoffrey Hurst',
    options: ['Geoffrey Hurst', 'Bobby Charlton', 'Bobby Moore', 'Roger Hunt'],
    theme: 'Sport',
  },
  {
    question: "Quelle matière enseigne Yvan Monka ? Il est agrégé dans cette matière et vulgarisateur sur YouTube, permettant à nombre d'élèves de mieux comprendre cette matière.",
    answer: 'Mathématiques',
    options: ['Mathématiques', 'Physique', 'Informatique', 'Philosophie'],
    theme: 'Sciences',
  },
  {
    question: "Créé par le scénariste David Michelinie et les dessinateurs John Byrne et Bob Layton, quel super-héros de Marvel ayant pour véritable identité James \"Jim\" Rhodes apparaît pour la première fois dans le numéro 118 du comic Iron Man en 1979 ?",
    answer: 'War Machine',
    options: ['War Machine', 'Iron Patriot', 'Rescue', 'Iron Fist'],
    theme: 'Culture Générale',
  },
  {
    question: "De quel pays, indépendant depuis 1990, Sam Nujoma est-il considéré comme le père de l'indépendance ? Il fut également le premier président de son pays.",
    answer: 'Namibie',
    options: ['Namibie', 'Zimbabwe', 'Angola', 'Botswana'],
    theme: 'Histoire',
  },
  {
    question: "Quel nom issu du grec désigne le fœtus issu d'une grossesse extra-utérine, non arrivé à terme, non expulsé et calcifié qui peut être toléré par l'organisme ?",
    answer: 'Lithopédion',
    options: ['Lithopédion', 'Fœtus papyraceus', 'Môle hydatiforme', 'Kyste dermoïde'],
    theme: 'Sciences',
  },
  {
    question: "Quel pays est appelé Bharat par ses habitants ? Le nom colonial est évité et la volonté que le nom de Bharat soit employé à l'international est de plus en plus exprimée.",
    answer: 'Inde',
    options: ['Inde', 'Pakistan', 'Bangladesh', 'Népal'],
    theme: 'Géographie',
  },
  {
    question: "Né en 1966 avec la création du groupe Cream, quel terme désigne un groupe (de rock à l'origine) formé de musiciens ayant déjà acquis une notoriété au sein d'autres groupes ?",
    answer: 'Supergroupe',
    options: ['Supergroupe', 'Collectif musical', 'All-stars band', 'Superbande'],
    theme: 'Musique',
  },
  {
    question: "Avec l'ornithorynque, quel est l'unique mammifère qui pond des œufs ? Il appartient à l'ordre des monotrèmes et porte un nom issu du grec signifiant vipère.",
    answer: 'Échidné',
    options: ['Échidné', 'Koala', 'Wombat', 'Kangourou'],
    theme: 'Animaux',
  },
  {
    question: "Quelle activité consiste à rechercher, repérer, explorer, étudier, cartographier ou visiter les cavités souterraines ?",
    answer: 'Spéléologie',
    options: ['Spéléologie', 'Géologie', 'Archéologie', 'Karstologie'],
    theme: 'Sport',
  },
  {
    question: "Quel héros de bande dessinée est proche du squelette nommé Néness, qu'il considère comme son frère de coin ?",
    answer: "L'élève Ducobu",
    options: ["L'élève Ducobu", 'Gaston Lagaffe', 'Le Petit Spirou', 'Cédric'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle était la nationalité d'Ivan Lendl en compétition, avant qu'il ne prenne la nationalité américaine en 1992 ? Ivan Lendl est un des grands collectionneurs privés des oeuvres d'Alfons Mucha dans le monde.",
    answer: 'Tchécoslovaque',
    options: ['Tchécoslovaque', 'Soviétique', 'Polonaise', 'Hongroise'],
    theme: 'Sport',
  },
  {
    question: "Avec près de 12 millions d'abonnés, quelle femme est la youtubeuse la plus suivie de France ? Elle fait du cosplay et a des vidéos très regardées à l'international.",
    answer: 'Mayamystic',
    options: ['Mayamystic', 'Lena Situations', 'EnjoyPhoenix', 'Natoo'],
    theme: 'Culture Générale',
  },
  {
    question: "Dans quelle nation se déroule la série des Hunger Games ? Créée par Suzanne Collins, cette nation est née des cendres de l'Amérique du Nord.",
    answer: 'Panem',
    options: ['Panem', 'Capitol', 'Gilead', 'Oceania'],
    theme: 'Cinéma',
  },
  {
    question: "Sur quel chef-d'oeuvre de l'art moghol plus de 20 000 ouvriers ont-ils travaillé à partir de 1631 ? Ce bâtiment est considéré comme étant l'oeuvre de l'architecte Ustad Ahmad Lahauri.",
    answer: 'Taj Mahal',
    options: ['Taj Mahal', 'Qutb Minar', 'Fort Rouge', 'Humayun'],
    theme: 'Histoire',
  },
  {
    question: "Tenant son nom d'un mathématicien canadien prénommé John Charles, quel nom porte la médaille décernée tous les quatre ans à des mathématiciens de moins de 40 ans depuis 1936 ?",
    answer: 'Fields',
    options: ['Fields', 'Abel', 'Turing', 'Fermat'],
    theme: 'Sciences',
  },
  {
    question: "Quelle ville française est située en face de la ville allemande de Kehl, de l'autre côté du Rhin ?",
    answer: 'Strasbourg',
    options: ['Strasbourg', 'Colmar', 'Mulhouse', 'Fribourg'],
    theme: 'Géographie',
  },
  {
    question: "Quel nom est commun à un chanteur perpignais auteur d'Elle m'a dit et C'est quand le bonheur et à la troisième ville la plus peuplée de Colombie après Bogota et Medellin ?",
    answer: 'Cali',
    options: ['Cali', 'Santiago', 'Marcos', 'Léon'],
    theme: 'Musique',
  },
  {
    question: "Quel oiseau ayant été utilisé pour produire les sons de Flipper le dauphin est un des symboles des aborigènes d'Australie ?",
    answer: 'Kookaburra',
    options: ['Kookaburra', 'Cacatoès', 'Casoar', 'Émeu'],
    theme: 'Animaux',
  },
  {
    question: "Quelle invention due à Louis Réard en 1946 doit son nom à un atoll des îles Marshall ? Cette invention fut portée par Micheline Bernardini pour la première lors de sa présentation à la piscine Molitor.",
    answer: 'Bikini',
    options: ['Bikini', 'Monokini', 'Tankini', 'Maillot une-pièce'],
    theme: 'Histoire',
  },
  {
    question: "Etant le seul mois dont le nom figure dans le Coran, quel nom porte le neuvième mois du calendrier hégirien ?",
    answer: 'Ramadan',
    options: ['Ramadan', 'Chaabane', 'Rajab', 'Mouharram'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle est la couleur de la ceinture qui précède directement la ceinture noire au judo ?",
    answer: 'Marron',
    options: ['Marron', 'Violet', 'Bleu foncé', 'Rouge'],
    theme: 'Sport',
  },
  {
    question: "Quel nom, acronyme de Completely Automated Public Turing test to tell Computers and Humans Apart, désigne un programme de test permettant de distinguer un humain d'un robot ?",
    answer: 'Captcha',
    options: ['Captcha', 'Recaptcha', 'Gatcha', 'Turnstile'],
    theme: 'Sciences',
  },
  {
    question: "Dans quelle série télévisée, Sarah Jessica Parker campe-t-elle le rôle de la journaliste Carrie Bradshaw ? Cette série est adaptée de l'oeuvre littéraire de Candace Bushnell.",
    answer: 'Sex and the City',
    options: ['Sex and the City', 'Desperate Housewives', 'Gossip Girl', 'Girls'],
    theme: 'Séries TV',
  },
  {
    question: "Quel préfet de la Seine de 1853 à 1869 a dirigé les travaux de refonte de Paris sous le Second Empire ?",
    answer: 'Georges-Eugène Haussmann',
    options: ['Georges-Eugène Haussmann', 'Adolphe Thiers', 'Eugène Belgrand', 'Napoléon III'],
    theme: 'Histoire',
  },
  {
    question: "Quel médecin antique, né sur l'île de Kos, a laissé son nom au serment que doivent désormais prêter les médecins avant d'exercer ?",
    answer: 'Hippocrate',
    options: ['Hippocrate', 'Galien', 'Avicenne', 'Asclépios'],
    theme: 'Histoire',
  },
  {
    question: "Quel lac navigable, le plus haut du monde, est situé à la frontière entre le Pérou et la Bolivie, à plus de 3800 mètres de haut dans la cordillère des Andes ?",
    answer: 'Titicaca',
    options: ['Titicaca', 'Maracaibo', 'Poopó', 'Junín'],
    theme: 'Géographie',
  },
  {
    question: "Quel prénom est partagé par différents chanteurs français nommés Berliner, Palaprat, Blanc et Lenorman notamment ?",
    answer: 'Gérard',
    options: ['Gérard', 'Michel', 'Patrick', 'Philippe'],
    theme: 'Musique',
  },
  {
    question: "Dans l'autre nom de l'ibéris, quel métal est associé à la corbeille, ainsi qu'à une place sur le podium dans une compétition ?",
    answer: 'Argent',
    options: ['Argent', 'Or', 'Bronze', 'Platine'],
    theme: 'Culture Générale',
  },
  {
    question: "Selon une expression, jusqu'à quelle ville, capitale d'un pays, tous les chemins mènent-ils ?",
    answer: 'Rome',
    options: ['Rome', 'Paris', 'Athènes', 'Constantinople'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel nom porte la mère de couleur noire et portant une couronne de fleurs dans la série des Barbapapa ?",
    answer: 'Barbamama',
    options: ['Barbamama', 'Barbabella', 'Barbazoo', 'Barbalib'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel cycliste français a remporté le Tour d'Espagne en 1964 bien qu'il fut surnommé \"L'éternel second\" ?",
    answer: 'Poulidor',
    options: ['Poulidor', 'Anquetil', 'Thévenet', 'Hinault'],
    theme: 'Sport',
  },
  {
    question: "Quel nom swahili signifiant \"long voyage\" est porté par un navigateur web développé par Apple ?",
    answer: 'Safari',
    options: ['Safari', 'Chrome', 'Firefox', 'Opéra'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle actrice française présente dans la saga Les Tuche et Les Profs a été nommé pour le césar du meilleur espoir féminin pour son rôle dans Tatie Danielle ?",
    answer: 'Isabelle Nanty',
    options: ['Isabelle Nanty', 'Valérie Bonneton', 'Chantal Ladesou', 'Arielle Dombasle'],
    theme: 'Cinéma',
  },
  {
    question: "Quel nom de six lettres désigne un membre, souvent tatoué, de la mafia japonaise ? Le nom vient des chiffres japonais 8, 9 et 3, désignant la plus mauvaise main dans un jeu de cartes.",
    answer: 'Yakuza',
    options: ['Yakuza', 'Triades', 'Camorra', 'Tongs'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel élément chimique était autrefois désigné sous le nom de nitrogène, d'où son symbole chimique étant resté un N ?",
    answer: 'Azote',
    options: ['Azote', 'Oxygène', 'Hydrogène', 'Carbone'],
    theme: 'Sciences',
  },
  {
    question: "Sur quelle grande place pékinoise des manifestations eurent lieu en 1989 avec notamment l'image d'un étudiant faisant arrêter une colonne de chars restée célèbre ?",
    answer: "Place Tian'anmen",
    options: ["Place Tian'anmen", 'Place Rouge', 'Place de la Bastille', "Place de la République"],
    theme: 'Histoire',
  },
  {
    question: "Quel groupe dont le nom fait référence à Greenwich Village, quartier de New-York connu pour sa communauté gay, est connu pour les titres Macho Man et \"Y.M.C.A.\" ?",
    answer: 'Village People',
    options: ['Village People', 'Earth Wind & Fire', 'Bee Gees', 'Gloria Gaynor'],
    theme: 'Musique',
  },
  {
    question: "Quel petit oiseau, associé à la théorie darwinienne et pouvant être dit des Galapagos, est associé à la gaieté dans une expression ?",
    answer: 'Pinson',
    options: ['Pinson', 'Moineau', 'Grive', 'Verdier'],
    theme: 'Animaux',
  },
  {
    question: "Sur un livret d'épargne, quel nom masculin désigne la somme versée par la banque en contrepartie de votre dépôt ? C'est aussi le nom du revenu dû par l'emprunteur au prêteur en cas de prêt. (Question en partenariat avec la Caisse d'épargne)",
    answer: 'Intérêts',
    options: ['Intérêts', 'Dividendes', 'Agios', 'Bénéfices'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel philosophe d'origine juive marrane portugaise est un néerlandais du XVIIe siècle à l'origine de l'écriture de son ouvrage majeur \"L'Ethique\" ? Il récuse à l'intérieur la notion de libre-arbitre par une application importante du déterminisme.",
    answer: 'Baruch Spinoza',
    options: ['Baruch Spinoza', 'René Descartes', 'Gottfried Leibniz', 'John Locke'],
    theme: 'Culture Générale',
  },
  {
    question: "Dans quel sport la Solheim Cup dont l'équipe la plus titrée sont les USA est-elle l'équivalent féminin d'une grande compétition masculine ?",
    answer: 'Golf',
    options: ['Golf', 'Tennis', 'Baseball', 'Cricket'],
    theme: 'Sport',
  },
  {
    question: "Quel pays a pour extension internet les lettres \".za\" ? Les lettres \".zm\" sont utilisées pour la Zambie et \".zw\" pour le Zimbabwé.",
    answer: 'Afrique du Sud',
    options: ['Afrique du Sud', 'Zambie', 'Zimbabwe', 'Zanzibar'],
    theme: 'Géographie',
  },
  {
    question: "Sous quel surnom est connu Bruno Muschio, réalisateur et scénariste avec qui Kyan Khojandi a notamment a co-créé la sérié Bref ? Ils coaniment ensemble le podcast \"Un bon moment\".",
    answer: 'Navo',
    options: ['Navo', 'Manu', 'Seb', 'Juju'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel roi de l'Empire néo-babylonien entre 605 et 562 av. J.-C. a laissé son nom à une bouteille d'une contenance de 15 litres ? Il a régné sur le plus vaste empire qu'ait dirigé Babylone.",
    answer: 'Nabuchodonosor',
    options: ['Nabuchodonosor', 'Jéroboam', 'Salmanazar', 'Balthazar'],
    theme: 'Histoire',
  },
  {
    question: "Quel mathématicien associé à un hôtel a laissé une liste de 23 problèmes censés guider la recherche mathématique du XXe siècle ?",
    answer: 'David Hilbert',
    options: ['David Hilbert', 'Henri Poincaré', 'Georg Cantor', 'Gottlob Frege'],
    theme: 'Sciences',
  },
  {
    question: "Quelle ville française possédant une partie du parc amazonien de Guyane sur son territoire est la plus grande de France en superficie avec 18 360 km² ? Sa superficie est grande comme trois départements français moyens et sa taille est comparable à celle de la Slovénie.",
    answer: 'Maripasoula',
    options: ['Maripasoula', 'Kourou', 'Cayenne', 'Saint-Laurent-du-Maroni'],
    theme: 'Géographie',
  },
  {
    question: "A quel compositeur doit-on l'oeuvre Finlandia, mettant en avant son pays de naissance, et considérée comme l'hymne officieux de la Finlande ?",
    answer: 'Jean Sibelius',
    options: ['Jean Sibelius', 'Edvard Grieg', 'Carl Nielsen', 'Arvo Pärt'],
    theme: 'Musique',
  },
  {
    question: "Quel oiseau de la famille des columbidés, parfois nommé \"pigeon asiatique\" possède un nom faisant référence à un archipel indien ? Il peut être dit \"à camail\".",
    answer: 'Nicobar',
    options: ['Nicobar', 'Goura', 'Luzon', 'Palawan'],
    theme: 'Animaux',
  },
  {
    question: "Quel est le nom complet du revêtement de sol couramment appelé \"lino\" ? Il est composé de toile de jute recouverte d'huile de lin, d'où son nom.",
    answer: 'Linoléum',
    options: ['Linoléum', 'Vinyle', 'Parquet', 'Moquette'],
    theme: 'Culture Générale',
  },
  {
    question: "Principalement connu pour ses portraits de vedettes du cinéma en noir et blanc, quel studio de photographie a été fondé en 1934 à Paris par une femme prénommée Cosette ?",
    answer: 'Studio Harcourt',
    options: ['Studio Harcourt', 'Studio Doisneau', 'Studio Cartier-Bresson', 'Studio Lartigue'],
    theme: 'Art',
  },
  {
    question: "Dans quelle station de sports d'hiver du Tyrol autrichien se déroule tous les ans des épreuves de la coupe du monde de ski alpin ? Un tournoi de tennis ATP 250 est également organisé en juin annuellement.",
    answer: 'Kitzbühel',
    options: ['Kitzbühel', 'Innsbruck', 'Sankt Anton', 'Zell am See'],
    theme: 'Sport',
  },
  {
    question: "Sur quel site internet de reviews et critiques cinématographiques l'émission \"Faux raccord\", créée par Yoann Sardet et Vincent Garnier est-elle emblématique ?",
    answer: 'Allociné',
    options: ['Allociné', 'Rotten Tomatoes', 'IMDb', 'SensCritique'],
    theme: 'Cinéma',
  },
  {
    question: "Quel prénom est partagé par l'interprète de \"J'ai faim de toi\" en 1988 et par l'écureuil dans l'univers de Bob l'éponge ?",
    answer: 'Sandy',
    options: ['Sandy', 'Julie', 'Nathalie', 'Caroline'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel ancien évêque d'Autun proposa la nationalisation des biens du clergé pendant la Révolution française, avant de devenir ministre des relations extérieures sous l'Empire et la Restauration ?",
    answer: 'Talleyrand',
    options: ['Talleyrand', 'Fouché', 'Mirabeau', 'Sieyès'],
    theme: 'Histoire',
  },
  {
    question: "Quel fil utilisé dans les sutures tire son nom du fait qu'il était originellement fabriqué en boyau de chat ?",
    answer: 'Catgut',
    options: ['Catgut', 'Vicryl', 'Nylon', 'Soie'],
    theme: 'Sciences',
  },
  {
    question: "Quel pays possède la ville de Denpasar ? Cette ville est la capitale de l'île la plus touristique du pays, connue à l'international",
    answer: 'Indonésie',
    options: ['Indonésie', 'Thaïlande', 'Malaisie', 'Philippines'],
    theme: 'Géographie',
  },
  {
    question: "De quel pays est originaire le chanteur Tarkan, né en 1972 et s'étant principalement fait connaître avec son titre Şımarık paru en 1997 ?",
    answer: 'Turquie',
    options: ['Turquie', 'Grèce', 'Azerbaïdjan', 'Bulgarie'],
    theme: 'Musique',
  },
  {
    question: "Quel nom dérivé du nom latin de l'animal désigne un éleveur d'écrevisses ?",
    answer: 'Astaciculteur',
    options: ['Astaciculteur', 'Pisciculteur', 'Ostréiculteur', 'Mytiliculteur'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle spécialité à base de riz comprenant également viande, fruits de mer et épices, est typique de la cuisine cajun et est originaire de la Nouvelle-Orléans ?",
    answer: 'Jambalaya',
    options: ['Jambalaya', 'Paella', 'Gumbo', 'Étouffée'],
    theme: 'Cuisine',
  },
  {
    question: "Comment appelle-t-on les panneaux constitués de morceaux de verre, généralement colorés, assemblés et sertis pour former une décoration, que l'on trouve généralement dans les églises ?",
    answer: 'Vitrail',
    options: ['Vitrail', 'Mosaïque', 'Fresque', 'Enluminure'],
    theme: 'Art',
  },
  {
    question: "Outre le blanc, quelle est l'autre couleur utilisée en compétition pour les balles au tennis de table ?",
    answer: 'Orange',
    options: ['Orange', 'Jaune', 'Vert', 'Rouge'],
    theme: 'Sport',
  },
  {
    question: "Dans le sigle FAI, désignant des fournisseurs d'accès, que signifie la lettre I (i) ?",
    answer: 'Internet',
    options: ['Internet', 'Informatique', 'Industriel', 'Interactif'],
    theme: 'Sciences',
  },
  {
    question: "Dans quel film le personnage de Tyler Durden dit-il que la troisième règle est que si quelqu'un crie stop, quelqu'un s'écroule ou n'en peut plus, le combat est terminé ?",
    answer: 'Fight Club',
    options: ['Fight Club', 'Snatch', 'American History X', 'Memento'],
    theme: 'Cinéma',
  },
  {
    question: "Quel roi de France a, par l'édit de Fontainebleau en 1685, révoqué l'édit de Nantes qui avait été promulgué en 1598 par Henri IV, son grand-père ?",
    answer: 'Louis XIV',
    options: ['Louis XIV', 'Louis XIII', 'Louis XV', 'Philippe II'],
    theme: 'Histoire',
  },
  {
    question: "Quel nom masculin donne-t-on aux deux moments de l'année où les nuits sont exactement aussi longues que les jours ? Le nom est tiré du latin signifiant \"égal\" et \"nuit\"",
    answer: 'Équinoxe',
    options: ['Équinoxe', 'Solstice', 'Zénith', 'Périgée'],
    theme: 'Sciences',
  },
  {
    question: "Sur quelle île se trouve l'Ecosse, le Pays de Galles et l'Angleterre ?",
    answer: 'La Grande-Bretagne',
    options: ['La Grande-Bretagne', 'Les Îles Britanniques', "L'Irlande", "L'Angleterre"],
    theme: 'Géographie',
  },
  {
    question: "Par opposition à l'harmonie qui consiste en l'accord de plusieurs sons exécutés simultanément, quel nom issu du grec signifiant \"chant\" et \"arrangement musical\" désigne la succession de sons ordonnés selon des rapports de rythme et de modulation ? Il s'agit d'un nom commun de sept lettres.",
    answer: 'Mélodie',
    options: ['Mélodie', 'Harmonie', 'Rythme', 'Tonalité'],
    theme: 'Musique',
  },
  {
    question: "Quel arbre de la famille des Fabacées aux fleurs jaunes et odorantes donne son nom à une préparation d'œuf dur à la mayonnaise ?",
    answer: 'Mimosa',
    options: ['Mimosa', 'Acacia', 'Genêt', 'Capucine'],
    theme: 'Cuisine',
  },
  {
    question: "Dans le taoïsme, quel élément représenté par un fond blanc est opposé au yin ?",
    answer: 'Yang',
    options: ['Yang', 'Zen', 'Tao', 'Qi'],
    theme: 'Culture Générale',
  },
  {
    question: "De quelle nationalité est le sculpteur et peintre Alberto Giacometti, il était né à Borgonovo en 1901 et est mort en 1966 ?",
    answer: 'Suisse',
    options: ['Suisse', 'Italienne', 'Autrichienne', 'Allemande'],
    theme: 'Art',
  },
  {
    question: "De quel pays est originaire l'art martial appelé taekwondo ? Son nom signifiant \"La voie des pieds et des poings\" fut proposé par Choi Hong-hi.",
    answer: 'Corée du Sud',
    options: ['Corée du Sud', 'Japon', 'Chine', 'Thaïlande'],
    theme: 'Sport',
  },
  {
    question: "Avec le blanc, quelle couleur est majoritairement présente sur le logo de YouTube ?",
    answer: 'Rouge',
    options: ['Rouge', 'Bleu', 'Noir', 'Jaune'],
    theme: 'Culture Générale',
  },
  {
    question: "Créé par Go Nagai, quel nom porte le robot piloté par Actarus ? C'est également le nom d'une série d'animation diffusée en France à partir de 1977.",
    answer: 'Goldorak',
    options: ['Goldorak', 'Albator', 'Candy', 'Nicky Larson'],
    theme: 'Séries TV',
  },
  {
    question: "Quel conflit armé a débuté par la journée de la Toussaint Rouge, le 1er novembre 1954 et s'est achevé par les Accords d'Evian ?",
    answer: "La guerre d'Algérie",
    options: ["La guerre d'Algérie", "La guerre d'Indochine", 'La guerre du Vietnam', 'La guerre du Maroc'],
    theme: 'Histoire',
  },
  {
    question: "Quelle partie du corps peut être qualifiée dit romain, égyptien, grec ou bot ?",
    answer: 'Pied',
    options: ['Pied', 'Nez', 'Oreille', 'Main'],
    theme: 'Sciences',
  },
  {
    question: "Sur quel fleuve africain sont situées les chutes Victoria ? Elles sont connues localement sous le nom de Mosi-Oa-Tunya qui signifie \"le tonnerre de fumée\".",
    answer: 'Zambèze',
    options: ['Zambèze', 'Nil', 'Congo', 'Limpopo'],
    theme: 'Géographie',
  },
  {
    question: "Quel jeu nécessite de s'asseoir sur un siège dès que la musique s'arrête ? Ce jeu exploite le principe des tiroirs en mathématiques.",
    answer: 'Chaises musicales',
    options: ['Chaises musicales', 'Jacques a dit', 'La main froide', '1, 2, 3 soleil'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle plante de la famille des fabacées est l'emblème de l'Irlande ?",
    answer: 'Trèfle',
    options: ['Trèfle', 'Rose', 'Chardon', 'Lys'],
    theme: 'Culture Générale',
  },
  {
    question: "Cette question vous est proposée par la Caisse d'Epargne Quand il désigne un produit d'épargne, quel mot est symbolisé par la lettre L dans le sigle PEL ? Les lettres P et E signifient respectivement \"plan\" et \"épargne\".",
    answer: 'Logement',
    options: ['Logement', 'Long terme', 'Liquidité', 'Loisirs'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel compositeur français est l'auteur du solo pour violoncelle \"Le Cygne\" issu de son Carnaval des Animaux ?",
    answer: 'Camille Saint-Saëns',
    options: ['Camille Saint-Saëns', 'Gabriel Fauré', 'César Franck', 'Jules Massenet'],
    theme: 'Musique',
  },
  {
    question: "Dans quel pays se trouve le stade de rugby appelé Eden Park ? Ce stade, le plus grand du pays, n'a pas vu une seule défaite de l'équipe nationale depuis 1994.",
    answer: 'Nouvelle-Zélande',
    options: ['Nouvelle-Zélande', 'Australie', 'Afrique du Sud', 'Angleterre'],
    theme: 'Sport',
  },
  {
    question: "Quel réseau social mêlant également un partage de photographies permet d'épingler ses centres d'intérêt, d'où son nom ?",
    answer: 'Pinterest',
    options: ['Pinterest', 'Instagram', 'Tumblr', 'Flickr'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel nom, porté par le pélican dans Le Monde de Nemo est celui d'une distinction ou grade de la marine nationale ?",
    answer: "L'Amiral",
    options: ["L'Amiral", 'Le Colonel', 'Le Capitaine', 'Le Commandant'],
    theme: 'Cinéma',
  },
  {
    question: "Dans quel camp de concentration proche de la ville de Celle, en Basse-Saxe, Anne Frank est-elle décédée tout comme sa soeur Margot et 70 000 autres personnes, principalement juifs, soviétiques et tsiganes ?",
    answer: 'Bergen-Belsen',
    options: ['Bergen-Belsen', 'Dachau', 'Buchenwald', 'Ravensbrück'],
    theme: 'Histoire',
  },
  {
    question: "Quel adjectif qualifie la chirurgie parfois dite métabolique ou de l'obésité consistant à modifier la façon dont les aliments sont absorbés par le système digestif ? Le nom vient du grec signifiant \"médecine du poids\"",
    answer: 'Bariatrique',
    options: ['Bariatrique', 'Métabolique', 'Digestive', 'Endocrinologique'],
    theme: 'Sciences',
  },
  {
    question: "Dans quelle capitale se situe le Menara Warisan Merdeka, dit aussi Merdeka 118, qui avec 678 mètres de haut est devenu le deuxième bâtiment le plus haut du monde après la Burj Khalifa ?",
    answer: 'Kuala Lumpur',
    options: ['Kuala Lumpur', 'Dubaï', 'Doha', 'Singapour'],
    theme: 'Géographie',
  },
  {
    question: "Quel mot anglais de 3 lettres sert de nom au groupe mené par le chanteur Jon Anderson, auteur de \"Owner of a lonely heart\" en 1983 ?",
    answer: 'Yes',
    options: ['Yes', 'ELO', 'XTC', 'R.E.M.'],
    theme: 'Musique',
  },
  {
    question: "Tenant son nom d'une ville tarnaise, quelle race ovine est utilisée pour réaliser le fromage de Roquefort ?",
    answer: 'Lacaune',
    options: ['Lacaune', 'Mérinos', 'Manech', 'Basco-béarnaise'],
    theme: 'Cuisine',
  },
  {
    question: "En gastronomie, quelle préparation est faite de feuilles de pâte à crêpe très croustillantes, superposées et rassemblées en forme de bourse ?",
    answer: 'Aumônière',
    options: ['Aumônière', 'Crêpe suzette', 'Millefeuille', 'Feuilleté'],
    theme: 'Cuisine',
  },
  {
    question: "Quel écrivain français, auteur de La Dame aux Camélias, est le fils d'un célèbre écrivain avec qui il partage d'ailleurs les mêmes prénoms et noms ?",
    answer: 'Alexandre Dumas fils',
    options: ['Alexandre Dumas fils', 'Émile Zola', 'Guy de Maupassant', 'Gustave Flaubert'],
    theme: 'Littérature',
  },
  {
    question: "Par quelle épreuve débute un décathlon ? Le décathlon termine par le 1500 mètres.",
    answer: '100 mètres',
    options: ['100 mètres', '800 mètres', 'Saut en longueur', 'Lancer du poids'],
    theme: 'Sport',
  },
  {
    question: "Par opposition à un réseau internet, quel terme désigne un réseau informatique interne à une entreprise ou à une organisation ?",
    answer: 'Intranet',
    options: ['Intranet', 'Extranet', 'VPN', 'Infranet'],
    theme: 'Sciences',
  },
  {
    question: "Quel est le prénom de la fille, considérée comme la plus belle de l'école, dont est amoureux Titeuf dans la bande dessinée de Zep ?",
    answer: 'Nadia',
    options: ['Nadia', 'Mégane', 'Lucie', 'Jennifer'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle duchesse d'Aquitaine fut d'abord l'épouse de Louis VII avant d'épouser le roi d'Angleterre Henri II Plantagenêt ?",
    answer: "Aliénor d'Aquitaine",
    options: ["Aliénor d'Aquitaine", 'Catherine de Médicis', "Isabeau de Bavière", "Marguerite d'Anjou"],
    theme: 'Histoire',
  },
  {
    question: "Quel acte physiologique, qualifié d'eutocique lorsqu'il se déroule de façon normale, nécessite parfois une épisiotomie ou une péridurale ?",
    answer: 'Accouchement',
    options: ['Accouchement', 'Allaitement', 'Fécondation', 'Amniocentèse'],
    theme: 'Sciences',
  },
  {
    question: "Quelle capitale africaine s'est appelée Léopoldville de 1881 à 1966, avant de retrouver un nom d'origine lingala signifiant \"marché au sel\" ?",
    answer: 'Kinshasa',
    options: ['Kinshasa', 'Dakar', 'Brazzaville', 'Luanda'],
    theme: 'Géographie',
  },
  {
    question: "Quel collectif de rap a sorti les albums \"L'École des points vitaux\" et \"L'Apogée\" en 2010 et 2012 ? Ces albums contiennent les titres Wati House, Désolé et Avant qu'elle parte.",
    answer: "Sexion d'Assaut",
    options: ["Sexion d'Assaut", "Saïan Supa Crew", "Mafia K'1 Fry", 'La Fouine'],
    theme: 'Musique',
  },
  {
    question: "Quel animal constitue exclusivement l'ordre des lépidoptères ? On cherche un terme générique désignant la forme adulte de cet animal.",
    answer: 'Papillon',
    options: ['Papillon', 'Libellule', 'Phalène', 'Sphinx'],
    theme: 'Animaux',
  },
  {
    question: "Quel mot arabe utilisé pour signifier « bien fait » est homophone d'un mot désignant le local où se déroule la vinification ?",
    answer: 'Chai',
    options: ['Chai', 'Cave', 'Cuvier', 'Cellier'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel est le nom du marteau magique de Thor dans la mythologie scandinave ?",
    answer: 'Mjöllnir',
    options: ['Mjöllnir', 'Gungnir', 'Gram', 'Tyrfing'],
    theme: 'Culture Générale',
  },
  {
    question: "Par opposition au face, quel terme désigne dans le catch le \"méchant\" ou l'antagoniste des storylines et rivalités entre catcheurs ?",
    answer: 'Heel',
    options: ['Heel', 'Rudo', 'Villain', 'Jobber'],
    theme: 'Sport',
  },
  {
    question: "Quel site web français fondé en 2006, directement dérivé du site suédois \"Blocket.se\", a pour principal actionnaire la société norvégienne Adevinta et pour société exploitante LBC France ?",
    answer: 'Leboncoin',
    options: ['Leboncoin', 'Vinted', 'Cdiscount', 'Fnac'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel héros de comics est au centre de la trilogie The Dark Knight réalisée par Christopher Nolan ?",
    answer: 'Batman',
    options: ['Batman', 'Superman', 'Iron Man', 'Spider-Man'],
    theme: 'Cinéma',
  },
  {
    question: "Quelle année fut marquée, le 9 novembre, par la chute du mur de Berlin ? Celui-ci avait été érigé en 1961.",
    answer: '1989',
    options: ['1989', '1991', '1987', '1985'],
    theme: 'Histoire',
  },
  {
    question: "Quel nom porte la réaction chimique correspondant à une réaction d'oxydation d'un métal en présence d'un oxydant, comme le dioxygène et d'eau, lorsque le fer rouille, par exemple ?",
    answer: 'Corrosion',
    options: ['Corrosion', 'Oxydation', 'Réduction', 'Électrolyse'],
    theme: 'Sciences',
  },
  {
    question: "Quelle capitale européenne est baignée par la Mer de Paille, qui constitue en fait l'estuaire d'un fleuve ?",
    answer: 'Lisbonne',
    options: ['Lisbonne', 'Copenhague', 'Rotterdam', 'Stockholm'],
    theme: 'Géographie',
  },
  {
    question: "Quelle tante d'un très célèbre acteur étasunien se fait connaître en 1951 en interprétant le titre \"Come on-a My House\" en 1951, la faisant devenir une figure majeure du jazz vocal de son époque et lui permettant d'enregistrer un disque en 1956 avec Duke Ellington ?",
    answer: 'Rosemary Clooney',
    options: ['Rosemary Clooney', 'Doris Day', 'Peggy Lee', 'Dinah Shore'],
    theme: 'Musique',
  },
  {
    question: "Avec un poids pouvant atteindre 150 kg, quel est l'oiseau le plus lourd du monde ?",
    answer: 'Autruche',
    options: ['Autruche', 'Émeu', 'Nandou', 'Kiwi'],
    theme: 'Animaux',
  },
  {
    question: "Signifiant littéralement colline de levage, quel anglicisme désigne la pente ascendante au début d'une montagne russe ?",
    answer: 'Lift hill',
    options: ['Lift hill', 'Drop hill', 'Launch hill', 'Chain hill'],
    theme: 'Culture Générale',
  },
  {
    question: "De quelle pièce de théâtre créée en 1879 et dont le titre original est \"Et Dukkehjem\", Nora Helmer est-elle l'héroïne ? Elle se rend compte de la condition des femmes au XIXe siècle.",
    answer: 'Une maison de poupée',
    options: ['Une maison de poupée', 'Hedda Gabler', 'La Dame de la mer', 'Peer Gynt'],
    theme: 'Littérature',
  },
  {
    question: "Quel stade a pour nom officiel Estadio Jornalista Mario Filho, en l'honneur d'un journaliste né à Recife ?",
    answer: 'Maracanã',
    options: ['Maracanã', 'Camp Nou', 'Azteca', 'San Siro'],
    theme: 'Sport',
  },
  {
    question: "Quelle société de services web, étant à l'origine un simple annuaire web, tient son nom du mot désignant les humains dans Les Voyages de Gulliver de Jonathan Swift ?",
    answer: 'Yahoo!',
    options: ['Yahoo!', 'Google', 'Ask', 'AltaVista'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel réalisateur a créé avec Mark Frost la série Twin Peaks ? Il avait également reçu une Palme d'Or pour Sailor et Lula.",
    answer: 'David Lynch',
    options: ['David Lynch', 'David Fincher', 'Joel Coen', 'Tim Burton'],
    theme: 'Cinéma',
  },
  {
    question: "Quel principal ministre d'Henri IV est resté associé à la formule \"Labourage et pâturage sont les deux mamelles de la France\" ?",
    answer: 'Sully',
    options: ['Sully', 'Richelieu', 'Colbert', 'Mazarin'],
    theme: 'Histoire',
  },
  {
    question: "Portant le même nom que la première symphonie de Gustav Mahler, quel nom porte le plus gros satellite de la planète Saturne ?",
    answer: 'Titan',
    options: ['Titan', 'Encelade', 'Rhéa', 'Japet'],
    theme: 'Sciences',
  },
  {
    question: "Sur quelle île japonaise est située la ville de Nagasaki ? Son nom japonais signifie \"neuf provinces\".",
    answer: 'Kyūshū',
    options: ['Kyūshū', 'Honshū', 'Hokkaido', 'Shikoku'],
    theme: 'Géographie',
  },
  {
    question: "Quel artiste étasunien a imaginé le concept de la pochette de l'album Sticky Fingers des Rolling Stones ? Elle dispose d'une fermeture éclair pour révéler un homme en sous-vêtement et fut conçue par le photographe Billy Name.",
    answer: 'Andy Warhol',
    options: ['Andy Warhol', 'Roy Lichtenstein', 'Jasper Johns', 'Robert Rauschenberg'],
    theme: 'Art',
  },
  {
    question: "Quel nom issu du latin signifiant \"bouc des rochers\" désigne la femelle du bouquetin ?",
    answer: 'Étagne',
    options: ['Étagne', 'Laie', 'Biche', 'Daine'],
    theme: 'Animaux',
  },
  {
    question: "Quel aliment est travaillé en cuisine lors du conchage ? Il s'agit d'un procédé d'affinage par brassage permettant d'homogénéiser le produit et d'y incorporer ce qui le transformera.",
    answer: 'Chocolat',
    options: ['Chocolat', 'Caramel', 'Bonbon', 'Praliné'],
    theme: 'Cuisine',
  },
  {
    question: "Dans la mythologie grecque, de quel pelage merveilleux d'un bélier ailé doivent s'emparer, en Colchide, le héros Jason aidé de ses Argonautes ?",
    answer: "La Toison d'or",
    options: ["La Toison d'or", "La Pomme d'or", "L'Épée sacrée", 'Le Trident de Poséidon'],
    theme: 'Culture Générale',
  },
  {
    question: "Lors de quelle année la France a-t-elle atteint pour la première fois la finale de la Coupe du Monde de football masculine ?",
    answer: '1998',
    options: ['1998', '1986', '2006', '2018'],
    theme: 'Sport',
  },
  {
    question: "Quelle société fondée par Eric Yuan en 2011 fournissant un service de conférence à distance qui combine la vidéoconférence, les réunions en ligne et le chat a connu une augmentation de son trafic en 2020 lors des confinements ?",
    answer: 'Zoom',
    options: ['Zoom', 'Teams', 'Skype', 'Webex'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelles sont les six premières lettres présentes sur un clavier standard en langue anglaise ? En français, il s'agit du modèle AZERTY par comparaison.",
    answer: 'QWERTY',
    options: ['QWERTY', 'QWERTZ', 'AZERTY', 'DVORAK'],
    theme: 'Sciences',
  },
  {
    question: "Ayant laissé son nom au point culminant du Venezuela, pays dont il était originaire, quel militaire sud-américain fut surnommé El Libertador pour sa participation aux indépendances des pays sud-américains au début du XIXe siècle ?",
    answer: 'Simón Bolívar',
    options: ['Simón Bolívar', 'José de San Martín', "Bernardo O'Higgins", 'Antonio José de Sucre'],
    theme: 'Histoire',
  },
  {
    question: "En mathématiques, quel adjectif qualifie un nombre entier dont le chiffre des unités est 0, 2, 4, 6 ou 8 ?",
    answer: 'Pair',
    options: ['Pair', 'Impair', 'Premier', 'Composé'],
    theme: 'Sciences',
  },
  {
    question: "Quel pays a abandonné le nom de Perse en 1934 pour adopter son nom actuel ?",
    answer: 'Iran',
    options: ['Iran', 'Turquie', 'Irak', 'Afghanistan'],
    theme: 'Histoire',
  },
  {
    question: "Quelle chanteuse, née sous le nom de Monique Serf, ayant interprété Dis, quand reviendras-tu et L'Aigle Noir notamment a vu son histoire d'agression par son père révélée dans ses mémoires inachevés ? Elle est désignée par un simple prénom.",
    answer: 'Barbara',
    options: ['Barbara', 'Juliette Gréco', 'Anne Sylvestre', 'Françoise Hardy'],
    theme: 'Musique',
  },
  {
    question: "Quel gallinacé mâle porte une livrée bleutée a reflets métalliques ainsi qu'une longue traine de plumes qu'il déploie lorsqu'il fait la roue ?",
    answer: 'Paon',
    options: ['Paon', 'Faisan', 'Dindon', 'Coq de bruyère'],
    theme: 'Animaux',
  },
  {
    question: "Quel potage à la betterave est typique des cuisines d'Europe de l'est ? Il est typique des cuisines slaves et la plus ancienne mention connue de ce plat est ukrainienne.",
    answer: 'Bortsch',
    options: ['Bortsch', 'Gazpacho', 'Goulache', 'Vichyssoise'],
    theme: 'Cuisine',
  },
  {
    question: "Quel est le prénom du père du roi Arthur dans la légende arthurienne ?",
    answer: 'Uther',
    options: ['Uther', 'Merlin', 'Lancelot', 'Perceval'],
    theme: 'Culture Générale',
  },
  {
    question: "Constitué d'une tête et d'un empennage, quel nom porte le projectile utilisé au badminton ?",
    answer: 'Volant',
    options: ['Volant', 'Balle', 'Bouchon', 'Plume'],
    theme: 'Sport',
  },
  {
    question: "Ne possédant pourtant que 53,2% de sa population connectée à internet, quel pays possède le plus d'utilisateurs internet dans le monde ?",
    answer: 'Chine',
    options: ['Chine', 'Inde', 'États-Unis', 'Indonésie'],
    theme: 'Géographie',
  },
  {
    question: "Quel est le nom, constitué d'une syllabe redoublée, du canari appartenant à Mémé poursuivi inlassablement par le chat nommé Sylvestre ?",
    answer: 'Titi',
    options: ['Titi', 'Tweety', 'Canari', 'Piti'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel commissaire général des fortifications sous Louis XIV est à l'origine de la création de la \"Ceinture de fer\" de la France ?",
    answer: 'Vauban',
    options: ['Vauban', 'Colbert', 'Louvois', 'Turenne'],
    theme: 'Histoire',
  },
  {
    question: "Quel animal était Félicette, premier félin envoyé dans l'espace en 1963 ?",
    answer: 'Chat',
    options: ['Chat', 'Chien', 'Singe', 'Lapin'],
    theme: 'Animaux',
  },
  {
    question: "Dans quel pays se situe le glacier du Rhône, constituant la source du fleuve ?",
    answer: 'Suisse',
    options: ['Suisse', 'France', 'Italie', 'Autriche'],
    theme: 'Géographie',
  },
  {
    question: "Quel jour de la semaine, cité deux fois en anglais dans le titre d'une chanson de The Mamas and The Papas est passé \"au soleil\" dans le titre d'une chanson de Claude François ?",
    answer: 'Lundi',
    options: ['Lundi', 'Dimanche', 'Vendredi', 'Samedi'],
    theme: 'Musique',
  },
  {
    question: "De quelle île australienne le thylacine, un mammifère carnivore relativement proche du loup, était-il endémique ? Il était probablement présent en Australie continentale avant l'arrivée des Européens au XVIIe siècle.",
    answer: 'Tasmanie',
    options: ['Tasmanie', 'Nouvelle-Zélande', 'Kangaroo Island', 'Fraser Island'],
    theme: 'Animaux',
  },
  {
    question: "Quel est le prénom du second enfant d'Harry et Meghan, sœur d'Archie ? Son prénom vient d'un surnom donné à son arrière-grand-mère.",
    answer: 'Lilibet',
    options: ['Lilibet', 'Elisabeth', 'Charlotte', 'Diana'],
    theme: 'Culture Générale',
  },
  {
    question: "Dans quelle ville, capitale de la Haute-Franconie, se déroule un festival fêtant ses 150 ans cette année et consacré à l'oeuvre du compositeur Richard Wagner ?",
    answer: 'Bayreuth',
    options: ['Bayreuth', 'Salzbourg', 'Lucerne', 'Vienne'],
    theme: 'Musique',
  },
  {
    question: "Quel genre de plantes d'intérieur appartenant à la famille des moracées peut être dit lyrata, benjamina ou elastica ?",
    answer: 'Ficus',
    options: ['Ficus', 'Lierre', 'Philodendron', 'Pothos'],
    theme: 'Culture Générale',
  },
  {
    question: "Dans le sigle URL, désignant une adresse web qui fournit un emplacement unique et spécifique pour une ressource particulière sur internet, quel mot anglais est symbolisé par la lettre L ?",
    answer: 'Locator',
    options: ['Locator', 'Link', 'Location', 'Local'],
    theme: 'Sciences',
  },
  {
    question: "Quel personnage fut incarné par Andy Serkis dans les adaptations par Peter Jackson du Seigneur des Anneaux ?",
    answer: 'Gollum',
    options: ['Gollum', 'Aragorn', 'Legolas', 'Gimli'],
    theme: 'Cinéma',
  },
  {
    question: "Ayant eu lieu le 1er septembre 1870, lors de quelle bataille l'empereur Napoléon III fut-il fait prisonnier lors de la guerre franco-allemande ? Cette capture l'obligea à abdiquer, voyant la proclamation de la IIIe République le 4 septembre.",
    answer: 'Bataille de Sedan',
    options: ['Bataille de Sedan', 'Bataille de Waterloo', 'Bataille de Gravelotte', 'Bataille de Metz'],
    theme: 'Histoire',
  },
  {
    question: "Quel allotrope naturel du carbone cristallisé est utilisé pour la confection la plupart des mines de crayon ?",
    answer: 'Graphite',
    options: ['Graphite', 'Diamant', 'Charbon', 'Carbone amorphe'],
    theme: 'Sciences',
  },
  {
    question: "Quel pays possède 3% de son territoire sur le continent européen ? Cette région s'appelle la Thrace orientale.",
    answer: 'Turquie',
    options: ['Turquie', 'Russie', 'Kazakhstan', 'Azerbaïdjan'],
    theme: 'Géographie',
  },
  {
    question: "Quel groupe de rap étasunien des années 1990 auquel appartenait notamment Method Man, a sorti le titre C.R.E.A.M, acronyme de \"Cash Rules Everything Around Me\"",
    answer: 'Wu-Tang Clan',
    options: ['Wu-Tang Clan', 'N.W.A', 'Public Enemy', 'A Tribe Called Quest'],
    theme: 'Musique',
  },
  {
    question: "Quel nom désignant également l'azalée est issu du grec signifiant arbres à roses ?",
    answer: 'Rhododendron',
    options: ['Rhododendron', 'Azalée', 'Hortensia', 'Camélia'],
    theme: 'Sciences',
  },
  {
    question: "Étant le parfait homophone d'une préfecture française dans son nom, quel journaliste suisse est le créateur du concours de l'Eurovision ?",
    answer: 'Marcel Bezençon',
    options: ['Marcel Bezençon', 'Pierre Sabbat', 'Claude Leblanc', 'Jean Dréville'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel est le nom de famille de Roméo dans la pièce de théâtre de William Shakespeare \"Roméo et Juliette\" ?",
    answer: 'Montaigu',
    options: ['Montaigu', 'Capulet', 'Bénvolio', 'Mercutio'],
    theme: 'Littérature',
  },
  {
    question: "Quel skieur français, champion olympique sur l'épreuve des bosses à Albertville en 1992 est nommé en 2025 président du COJOP, le Comité d'organisation des Jeux olympiques d'hiver 2030 ?",
    answer: 'Edgar Grospiron',
    options: ['Edgar Grospiron', 'Jean-Claude Killy', 'Lasse Kjus', 'Jonny Moseley'],
    theme: 'Sport',
  },
  {
    question: "Dans quelle CAPITALE européenne fut fondée la société Vinted en 2008 par Milda Mitkute et Justas Janauskas ? La société y possède toujours son siège social.",
    answer: 'Vilnius',
    options: ['Vilnius', 'Riga', 'Tallinn', 'Helsinki'],
    theme: 'Géographie',
  },
  {
    question: "Avec quel acteur, ayant pour véritable nom Carlo Pedersoli, Terence Hill formait-il un célèbre duo dans les westerns spaghettis des années 1960 ?",
    answer: 'Bud Spencer',
    options: ['Bud Spencer', 'Clint Eastwood', 'Lee Van Cleef', 'Franco Nero'],
    theme: 'Cinéma',
  },
  {
    question: "Sur quelle île, la plus grande située entre la Corse et l'Italie, Napoléon Bonaparte fut-il en exil entre avril 1814 et février 1815 ? Elle acquiert le titre de principauté pendant cette période, devant la propriété personnelle de l'ex-empereur.",
    answer: "L'île d'Elbe",
    options: ["L'île d'Elbe", 'Sainte-Hélène', 'Corse', 'Sardaigne'],
    theme: 'Histoire',
  },
  {
    question: "Quelle antiparticule de charge électrique positive, parfois appelée antiélectron, fut la première antiparticule découverte ? Elle possède la même masse et le même spin que l'électron.",
    answer: 'Positron',
    options: ['Positron', 'Antineutron', 'Antiproton', 'Neutrino'],
    theme: 'Sciences',
  },
  {
    question: "Quel pays possède des frontières communes uniquement avec le Mexique et le Guatemala ?",
    answer: 'Bélize',
    options: ['Bélize', 'Guatemala', 'Honduras', 'Nicaragua'],
    theme: 'Géographie',
  },
  {
    question: "Auteur de Ramaya et Hafanana dans les années 1970, quel musicien né à Maputo est considéré comme le chantre de la musique mozambicaine ? Son prénom est le nom de son continent et son nom de famille est un prénom.",
    answer: 'Afric Simone',
    options: ['Afric Simone', 'Miriam Makeba', 'Hugh Masekela', 'Manu Dibango'],
    theme: 'Musique',
  },
  {
    question: "Quel est le seul ordre de mammifères à posséder la capacité de voler ?",
    answer: 'Chauve-souris',
    options: ['Chauve-souris', 'Écureuil volant', 'Colugo', 'Pétaure'],
    theme: 'Animaux',
  },
  {
    question: "Citez l'un des deux seuls mots de la langue française où la lettre \"u\" qui suit le \"q\" est prononcé comme un \"u\" et n'est pas muette ?",
    answer: 'Piqûre',
    options: ['Piqûre', 'Quand', 'Queue', 'Quarante'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel célèbre roman paru en 1942 commence par les mots : \"Aujourd'hui, maman est morte. Ou peut-être hier, je ne sais pas.\" ?",
    answer: "L'Étranger",
    options: ["L'Étranger", 'La Peste', 'Le Mythe de Sisyphe', "L'Homme révolté"],
    theme: 'Littérature',
  },
  {
    question: "Quel nom, souvent remplacé par le terme de \"rikishi\" au Japon, désigne généralement en France un lutteur de sumo ?",
    answer: 'Sumotori',
    options: ['Sumotori', 'Rikishi', 'Yokozuna', 'Makuuchi'],
    theme: 'Sport',
  },
  {
    question: "Quel nom générique désigne un logiciel capable de détecter les logiciels malveillants en informatique et de les éliminer ?",
    answer: 'Antivirus',
    options: ['Antivirus', 'Pare-feu', 'Antispyware', 'VPN'],
    theme: 'Sciences',
  },
  {
    question: "Quel héritier du groupe W en bande dessinée, fils de Nerio, fut créé par Jean Van Hamme avant d'être interprété par les acteurs Paolo Seganti et Tomer Sisley ?",
    answer: 'Largo Winch',
    options: ['Largo Winch', 'XIII', 'Thorgal', 'Corto Maltese'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel est le nom de la famille royale ayant commencé à régner en 1744 en Arabie Saoudite ?",
    answer: 'Al Saoud',
    options: ['Al Saoud', 'Al Maktoum', 'Al Nahyan', 'Al Thani'],
    theme: 'Politique',
  },
  {
    question: "Quel appareil permet de mesurer la vitesse ou la pression du vent ? Le nom de cet appareil est tiré des mots grecs signifiant \"vent\" et \"mesure\".",
    answer: 'Anémomètre',
    options: ['Anémomètre', 'Baromètre', 'Hygromètre', 'Girouette'],
    theme: 'Sciences',
  },
  {
    question: "Quelle ville européenne est desservie par l'aéroport Marco Polo, du nom du célèbre explorateur étant né dans cette ville en 1254 ?",
    answer: 'Venise',
    options: ['Venise', 'Lisbonne', 'Florence', 'Gênes'],
    theme: 'Géographie',
  },
  {
    question: "Quel mot désigne à la fois le meuble présentant une palette de parfums et un instrument de musique très souvent trouvé au sein des églises ?",
    answer: 'Orgue',
    options: ['Orgue', 'Piano', 'Harmonium', 'Accordéon'],
    theme: 'Musique',
  },
  {
    question: "Quel adjectif évoquant sa forme caractéristique qualifie l'anis dans l'autre nom de la badiane ?",
    answer: 'Étoilé',
    options: ['Étoilé', 'Rond', 'Fleuri', 'Tacheté'],
    theme: 'Cuisine',
  },
  {
    question: "Quel est la forme à l'infinitif du verbe employé dans les épitaphes avec la locution \"ci-gît\" ?",
    answer: 'Gésir',
    options: ['Gésir', 'Girer', 'Gémir', 'Gêner'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel écrivain est l'auteur de l'heptalogie \"A la recherche du temps perdu\", écrite de 1906 à 1922, année de la mort de l'écrivain ?",
    answer: 'Marcel Proust',
    options: ['Marcel Proust', 'Gustave Flaubert', 'Émile Zola', 'André Gide'],
    theme: 'Littérature',
  },
  {
    question: "Quel ustensile ménager est associé au terme de voiture dans la locution désignant le dernier véhicule de la caravane accompagnant une course cycliste ?",
    answer: 'Balai',
    options: ['Balai', 'Escorte', 'Ambulance', 'Suiveur'],
    theme: 'Sport',
  },
  {
    question: "Quel jeu vidéo sur Atari 2600, paru en 1982, adapté d'un film de science-fiction de Steven Spielberg avec Henry Thomas et Drew Barrymore est connu pour être l'un des plus grands échecs commerciaux du jeu vidéo ? Des cartouches ont été enfouies par Atari dans le Nouveau-Mexique.",
    answer: 'E.T. the Extra-Terrestrial',
    options: ['E.T. the Extra-Terrestrial', 'Jurassic Park', 'Pac-Man', 'Pong'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Qui est le créateur de la série télévisée des Simpson, de Futurama et de Désenchantée ? Il a laissé ses initiales \"MG\" sur les rares cheveux d'Homer Simpson.",
    answer: 'Matt Groening',
    options: ['Matt Groening', 'Seth MacFarlane', 'Mike Judge', 'Aaron McGruder'],
    theme: 'Séries TV',
  },
  {
    question: "Quel type de bâtiment naval reste associé à des noms comme Bellamya, Torrey Canyon, Exxon Valdez, Erika et Amoco Cadiz ?",
    answer: 'Pétrolier',
    options: ['Pétrolier', 'Cargo', 'Méthanier', 'Vraquier'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel mot est représenté par le P dans le sigle pH en sciences, dans le nom d'une mesure pouvant être acide ou basique ?",
    answer: 'Potentiel',
    options: ['Potentiel', 'Pourcentage', 'Poids', 'Puissance'],
    theme: 'Sciences',
  },
  {
    question: "Ne portant pourtant pas le nom de lac, quel est de facto, le plus grand lac du monde en superficie ? Avec une superficie de 371 000 km2, ce lac est plus grand que l'Allemagne.",
    answer: 'Mer Caspienne',
    options: ['Mer Caspienne', 'Lac Supérieur', 'Lac Victoria', 'Mer Morte'],
    theme: 'Géographie',
  },
  {
    question: "Quelle artiste ayant remporté quatre victoires de la musique en 2026 a sorti les titres Kongolese sous BBL, Fashion Designa et Zou Bisou notamment ?",
    answer: 'Theodora',
    options: ['Theodora', 'Aya Nakamura', 'Pomme', 'Zaho de Sagazan'],
    theme: 'Musique',
  },
  {
    question: "Quelle chanteuse interprète de Ceux qui rêvent et de Je sais pas danser, porte le nom d'un fruit d'un arbre du genre malus et appartenant à la famille des rosacées ?",
    answer: 'Pomme',
    options: ['Pomme', 'Cerise', 'Prune', 'Pêche'],
    theme: 'Musique',
  },
  {
    question: "Quelle créature légendaire est présente sur le logo de la marque de café Starbucks ? Elle est inspirée d'une gravure scandinave du XVe siècle.",
    answer: 'Sirène',
    options: ['Sirène', 'Gorgone', 'Harpie', 'Naïade'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel architecte est décédé en 1926 après avoir été percuté par un tramway dans la ville de Barcelone ?",
    answer: 'Gaudí',
    options: ['Gaudí', 'Mies van der Rohe', 'Le Corbusier', 'Domènech i Montaner'],
    theme: 'Art',
  },
  {
    question: "Quel célèbre boxeur, décédé lors d'un accident d'avion en 1949 fut également l'amant de la chanteuse Edith Piaf ?",
    answer: 'Marcel Cerdan',
    options: ['Marcel Cerdan', 'Marcel Thil', 'Georges Carpentier', 'Sugar Ray Robinson'],
    theme: 'Sport',
  },
  {
    question: "Quelle licence de jeux vidéo développée par Square Enix, ayant vu un premier opus en 1987 et comptant près de 200 millions d'unités vendues possède 16 opus principaux ? La série est considérée comme majeure depuis l'opus VII sorti en 1997.",
    answer: 'Final Fantasy',
    options: ['Final Fantasy', 'Dragon Quest', 'Pokémon', 'Fire Emblem'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Qui est associé au Gendarme, dans le titre du tout dernier film tourné par Louis de Funès ?",
    answer: 'Les Gendarmettes',
    options: ['Les Gendarmettes', 'Les Extra-terrestres', 'Le Gendarme à New York', 'La Crémière'],
    theme: 'Cinéma',
  },
  {
    question: "Quel leader indépendantiste kanak, assassiné en 1989, avait signé les accords de Matignon avec Jacques Lafleur l'année précédente, sous l'égide du Premier ministre Michel Rocard ?",
    answer: 'Jean-Marie Tjibaou',
    options: ['Jean-Marie Tjibaou', 'Jacques Lafleur', 'Michel Rocard', 'Rock Wamytan'],
    theme: 'Histoire',
  },
  {
    question: "En mathématiques, quelle est la fonction trigonométrique réciproque du sinus ?",
    answer: 'Arcsinus',
    options: ['Arcsinus', 'Arccosinus', 'Arctangente', 'Cosécante'],
    theme: 'Sciences',
  },
  {
    question: "Dans quel pays les présidents habitent-ils la Casa Rosada ? Ce bâtiment a notamment eu pour architecte Francesco Tamburini.",
    answer: 'Argentine',
    options: ['Argentine', 'Italie', 'Brésil', 'Colombie'],
    theme: 'Géographie',
  },
  {
    question: "Quel compositeur baroque né à Nuremberg est l'auteur d'un célèbre Canon en ré, dont le titre original est Canon per tre Violini e Basso ? Il fut composé vers 1680.",
    answer: 'Johann Pachelbel',
    options: ['Johann Pachelbel', 'Johann Sebastian Bach', 'Georg Friedrich Haendel', 'Georg Philipp Telemann'],
    theme: 'Musique',
  },
  {
    question: "Quelle plante pouvant être dite ladinifère, porte-laudanum ou cotonneux est typique du pourtour méditerranéen et tire son nom du grec signifiant boîte ?",
    answer: 'Ciste',
    options: ['Ciste', 'Lavande', 'Thym', 'Romarin'],
    theme: 'Sciences',
  },
  {
    question: "Quel mot fut créé en 1875 par Clément Ader à partir du latin signifiant oiseau ? Ce nom fut par la suite utilisé pour désigner l'invention de cet homme.",
    answer: 'Avion',
    options: ['Avion', 'Aéroplane', 'Dirigeable', 'Planeur'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel célèbre roman russe a pour première phrase : \"Toutes les familles heureuses se ressemblent, mais chaque famille malheureuse l'est à sa façon.\" ?",
    answer: 'Anna Karénine',
    options: ['Anna Karénine', 'Guerre et Paix', 'Crime et Châtiment', 'Les Frères Karamazov'],
    theme: 'Littérature',
  },
  {
    question: "Quel nom homonyme d'un tissu est donné au matériau synthétique utilisé principalement sur les pistes d'athlétisme ?",
    answer: 'Tartan',
    options: ['Tartan', 'Vinyle', 'Bitume', 'Macadam'],
    theme: 'Sport',
  },
  {
    question: "Dans quelle ville, la plus peuplée d'un état des USA, se déroule le jeu sous-titré \"Become Human\" ? Le jeu évoque la frontière entre androïdes et humanité.",
    answer: 'Detroit',
    options: ['Detroit', 'Washington', 'Los Angeles', 'Chicago'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Quelle célèbre actrice joue le rôle de Kay Weston dans le western \"Rivière sans retour\" en 1954 ? Il s'agit de l'unique western réalisé par Otto Preminger et le principal rôle masculin est tenu par Robert Mitchum.",
    answer: 'Marilyn Monroe',
    options: ['Marilyn Monroe', 'Grace Kelly', 'Audrey Hepburn', 'Ava Gardner'],
    theme: 'Cinéma',
  },
  {
    question: "Quel explorateur de l'Afrique, violentant et exploitant les populations locales, est notamment resté célèbre pour avoir retrouvé David Livingstone sur les bords du Lac Tanganyika ?",
    answer: 'Henry Morton Stanley',
    options: ['Henry Morton Stanley', 'David Livingstone', 'Richard Burton', 'John Hanning Speke'],
    theme: 'Histoire',
  },
  {
    question: "Quel mathématicien américain considéré comme le père de la théorie de l'information a laissé son nom au nombre 10^120, estimant le nombre de parties possibles aux échecs ?",
    answer: 'Claude Shannon',
    options: ['Claude Shannon', 'Alan Turing', 'John von Neumann', 'Norbert Wiener'],
    theme: 'Sciences',
  },
  {
    question: "Quel massif montagneux situé dans le sud de l'Algérie, traversé par le tropique du Cancer, culmine à 2918 mètres de haut au Mont Tahat, point culminant du pays ?",
    answer: 'Hoggar',
    options: ['Hoggar', 'Tassili', 'Atlas', 'Aïr'],
    theme: 'Géographie',
  },
  {
    question: "Comment appelle-t-on les deux ouvertures en forme de f situées sur la caisse de résonnance des violons, violoncelles ou contrebasses ?",
    answer: 'Ouïes',
    options: ['Ouïes', 'Éclisses', 'Résonateurs', 'Trous harmoniques'],
    theme: 'Musique',
  },
  {
    question: "En botanique, quel nom porte la pièce florale constituant le troisième pétale médian de la fleur de certaines plantes telles que les orchidées ?",
    answer: 'Labelle',
    options: ['Labelle', 'Sépale', 'Pistil', 'Étamine'],
    theme: 'Sciences',
  },
  {
    question: "Comment désigne-t-on le jeu de mots qui consiste à inverser des lettres ou des syllabes d'une phrase pour lui donner un autre sens comique ?",
    answer: 'Contrepèterie',
    options: ['Contrepèterie', 'Anagramme', 'Calembour', 'Palindrome'],
    theme: 'Culture Générale',
  },
  {
    question: "Dans sa tragédie \"Le Cid\", quel écrivain est l'auteur de la célèbre phrase \"Nous partîmes cinq cents ; mais par un prompt renfort. Nous nous vîmes trois mille en arrivant au port\" ?",
    answer: 'Corneille',
    options: ['Corneille', 'Racine', 'Molière', 'Victor Hugo'],
    theme: 'Littérature',
  },
  {
    question: "Pouvant être un driver ou un putter par exemple, quel nom générique désigne l'accessoire avec lequel un golfeur frappe la balle ?",
    answer: 'Club',
    options: ['Club', 'Canne', 'Bâton', 'Fer'],
    theme: 'Sport',
  },
  {
    question: "En informatique, quel nom est donné à un multiplet de 8 bits codant une information ?",
    answer: 'Octet',
    options: ['Octet', 'Bit', 'Nibble', 'Mot'],
    theme: 'Sciences',
  },
  {
    question: "Dans quelle ville Sonny Crockett et Ricardo Tubbs incarnés par Don Johnson et Philip Michael Thomas sont-ils deux flics dans le titre d'une série télévisée diffusée entre 1984 et 1989 ?",
    answer: 'Miami',
    options: ['Miami', 'Beverly Hills', 'Los Angeles', 'New York'],
    theme: 'Séries TV',
  },
  {
    question: "Quelle ville située sur le Vistre, préfecture d'un département d'Occitanie, était appelée « Augusta Nemausus » à l'époque romaine ?",
    answer: 'Nîmes',
    options: ['Nîmes', 'Toulouse', 'Montpellier', 'Arles'],
    theme: 'Géographie',
  },
  {
    question: "De quoi a peur une personne atteinte d'hématophobie ?",
    answer: 'Sang',
    options: ['Sang', 'Araignées', 'Hauteur', 'Eau'],
    theme: 'Sciences',
  },
  {
    question: "De quel sultanat situé sur l'île de Bornéo la ville de Bandar Seri Begawan est-elle la capitale ?",
    answer: 'Brunei',
    options: ['Brunei', 'Sri Lanka', 'Malaisie', 'Indonésie'],
    theme: 'Géographie',
  },
  {
    question: "Combien étaient les frères Jackson dans le nom du groupe ayant révélé notamment le jeune Michael ?",
    answer: '5',
    options: ['5', '6', '4', '7'],
    theme: 'Musique',
  },
  {
    question: "Quel fruit a pour variétés la mara des bois et la garriguette et, lorsque l'on croise ces variétés, la mariguette ?",
    answer: 'Fraise',
    options: ['Fraise', 'Framboise', 'Mûre', 'Myrtille'],
    theme: 'Cuisine',
  },
  {
    question: "Quel concours français d'inventions fut créé en 1901 par un préfet de police de la Seine prénommé Louis ?",
    answer: 'Concours Lépine',
    options: ['Concours Lépine', 'Prix Pasteur', 'Prix de la Montagne', 'Concours Renaudot'],
    theme: 'Culture Générale',
  },
  {
    question: "Selon la Bible, lors de la construction de quelle tour Dieu introduisit-il les différentes langues ? Les humains ayant eu pour volonté d'atteindre Dieu via cette tour, il a complexifié la tâche, les empêchant de se comprendre.",
    answer: 'Tour de Babel',
    options: ['Tour de Babel', 'Tour de Jéricho', 'Temple de Salomon', "Arche de Noé"],
    theme: 'Culture Générale',
  },
  {
    question: "Quel footballeur né à Marseille fut le premier français à marquer un but en finale de coupe du monde, le 12 juillet 1998 ?",
    answer: 'Zinédine Zidane',
    options: ['Zinédine Zidane', 'Thierry Henry', 'Emmanuel Petit', 'David Trezeguet'],
    theme: 'Sport',
  },
  {
    question: "Quel nombre est associé à une console de salon de cinquième génération sortie par Nintendo en 1996 ? Un opus d'un jeu Mario contient également dans son nom le même nombre.",
    answer: '64',
    options: ['64', '32', '128', '2'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Dans quel pays sont décernés les Veaux d'or, récompenses cinématographiques appelées Gouden Kalf en langue locale et remises annuellement à Utrecht ?",
    answer: 'Pays-Bas',
    options: ['Pays-Bas', 'Belgique', 'Danemark', 'Suède'],
    theme: 'Cinéma',
  },
  {
    question: "Quelle était la profession de Gandhi avant d'être politicien ? Il s'est formé au Royaume-Uni avant d'exercer sa profession en Afrique du Sud.",
    answer: 'Avocat',
    options: ['Avocat', 'Médecin', 'Ingénieur', 'Moine'],
    theme: 'Histoire',
  },
  {
    question: "Comment s'appelait la première brebis à être clonée en 1997 ? Son nom vient d'une chanteuse de country étasunienne réputée pour la générosité de sa poitrine, car le clonage a été réalisé à partir de cellules de glande mammaire.",
    answer: 'Dolly',
    options: ['Dolly', 'Daisy', 'Rosie', 'Molly'],
    theme: 'Sciences',
  },
  {
    question: "Sur quel continent se trouve le pays appelé Sierra Leone ? Ayant pris son indépendance du Royaume-Uni en 1961, le pays a pour capitale la ville de Freetown.",
    answer: 'Afrique',
    options: ['Afrique', 'Amérique du Sud', 'Asie', 'Océanie'],
    theme: 'Géographie',
  },
  {
    question: "Quelle chanson de France Gall débutant par les paroles « Si on t'organise une vie bien dirigée » a donné son nom à une comédie musicale reprenant des chansons de Michel Berger ?",
    answer: 'Résiste',
    options: ['Résiste', 'Babacar', 'Il jouait du piano debout', 'Débranche'],
    theme: 'Musique',
  },
  {
    question: "Quelle est la couleur de la peau des ours polaires ?",
    answer: 'Noire',
    options: ['Noire', 'Blanche', 'Rose', 'Grise'],
    theme: 'Animaux',
  },
  {
    question: "Quelle est la spécialité gastronomique de la ville morbihannaise de Guémené-sur-Scorff ? Une variante est également présente dans la ville normande de Vire.",
    answer: 'Andouille',
    options: ['Andouille', 'Boudin noir', 'Merguez', 'Rillettes'],
    theme: 'Cuisine',
  },
  {
    question: "Connu sous le surnom de Cyber-Apôtre, quel adolescent italien mort en 2006 d'une leucémie fut canonisé en septembre 2025 par le pape Léon XIV, devenant ainsi le premier millenial à devenir saint ?",
    answer: 'Carlo Acutis',
    options: ['Carlo Acutis', 'Pier Giorgio Frassati', 'Dominic Savio', 'José Sánchez del Río'],
    theme: 'Culture Générale',
  },
  {
    question: "De quelle nationalité est le footballeur Hristo Stoitchkov, le seul de son pays jusqu'alors à avoir reçu un ballon d'or, ce en 1994 ?",
    answer: 'Bulgare',
    options: ['Bulgare', 'Roumaine', 'Serbe', 'Tchèque'],
    theme: 'Sport',
  },
  {
    question: "Quelle plateforme de jeux vidéo en ligne et de système de création de jeux vidéo fut créée par Erik Cassel et David Baszucki en 2004 ? De type sandbox, l'objectif est de construire un jeu pour qu'il soit visité par les autres joueurs.",
    answer: 'Roblox',
    options: ['Roblox', 'Minecraft', 'Fortnite', "Garry's Mod"],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Quel acteur ayant interprété Brett Sinclair dans la série Amicalement Vôtre a également joué le rôle de James Bond ?",
    answer: 'Roger Moore',
    options: ['Roger Moore', 'Sean Connery', 'Timothy Dalton', 'George Lazenby'],
    theme: 'Cinéma',
  },
  {
    question: "Quel dirigeant vietnamien dont le nom choisi signifie \"puits de lumière\" était né sous le nom de Nguyễn Sinh Cung ? Son nom fut donné à la ville la plus peuplée de son pays après sa mort.",
    answer: 'Hồ Chí Minh',
    options: ['Hồ Chí Minh', 'Pol Pot', 'Nguyễn Văn Thiệu', 'Võ Nguyên Giáp'],
    theme: 'Histoire',
  },
  {
    question: "Quel est le trouble neurologique rare qui se caractérise par l'incapacité à reconnaître les visages humains ? Le nom vient des mots grecs signifiant \"visage\" \"sans\" et \"reconnaissance\".",
    answer: 'Prosopagnosie',
    options: ['Prosopagnosie', 'Alexithymie', 'Agnosie', 'Aphasie'],
    theme: 'Sciences',
  },
  {
    question: "Sous quel nom le Pakistan oriental est-il devenu indépendant en 1971 ? Ce pays est devenu indépendant suite à la troisième guerre indo-pakistanaise.",
    answer: 'Bangladesh',
    options: ['Bangladesh', 'Pakistan', 'Myanmar', 'Inde'],
    theme: 'Géographie',
  },
  {
    question: "De quelle chanson extrêmement populaire et adaptée dans de nombreux langages la mélodie \"Good morning to All\" fut-elle composée par les soeurs Mildred et Patty Hill en 1893 ?",
    answer: 'Joyeux anniversaire',
    options: ['Joyeux anniversaire', 'Frère Jacques', "Nous n'irons plus au bois", 'Au clair de la lune'],
    theme: 'Musique',
  },
  {
    question: "Quel genre de plantes de la famille des hydrangéacées est cultivé pour ses fleurs en grosses boules ?",
    answer: 'Hortensia',
    options: ['Hortensia', 'Dahlia', 'Pivoine', 'Rhododendron'],
    theme: 'Sciences',
  },
  {
    question: "Quelle ville asiatique est associée au classement académique des universités mondiales, dans lequel l'université de Paris-Saclay est la mieux classée en France ?",
    answer: 'Shanghai',
    options: ['Shanghai', 'Pékin', 'Tokyo', 'Singapour'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle célèbre série littéraire parue à partir de 1997 fut traduite en français par Jean-François Ménard ? Les livres originaux furent édités par Bloomsbury Publishing, basée à Londres.",
    answer: 'Harry Potter',
    options: ['Harry Potter', 'Percy Jackson', 'Les Chroniques de Narnia', 'Le Seigneur des Anneaux'],
    theme: 'Littérature',
  },
  {
    question: "Lors de la création du sport à l'origine, combien de points valait un essai ?",
    answer: 'Zéro',
    options: ['Zéro', '1', '3', '7'],
    theme: 'Sport',
  },
  {
    question: "Quel pays dirigé par Isaias Afwerki depuis son indépendance possède, avec 1,18% d'utilisateurs internet, le plus faible taux d'utilisateurs dans le monde ? (aucune donnée pour la Corée du Nord)",
    answer: 'Érythrée',
    options: ['Érythrée', 'Libéria', 'Somalie', 'Tchad'],
    theme: 'Géographie',
  },
  {
    question: "Interprétée par Lisa Edelstein, quel nom porte le personnage étant la directrice de l'hôpital de Princeton-Plainsboro dans la série télévisée Dr. House ?",
    answer: 'Lisa Cuddy',
    options: ['Lisa Cuddy', 'Allison Cameron', 'Eric Foreman', 'Lawrence Kutner'],
    theme: 'Séries TV',
  },
  {
    question: "Quel empereur inca fut capturé en 1532 par Francisco Pizarro et ses troupes lors de la bataille de Cajamarca ? Il fut forcé à l'abdication, devenant de ce fait le dernier empereur inca indépendant.",
    answer: 'Atahualpa',
    options: ['Atahualpa', 'Huáscar', 'Manco Inca', 'Tupac Amaru'],
    theme: 'Histoire',
  },
  {
    question: "Par opposition à générique, quel terme issu du latin désigne les médicaments dans leur première forme ?",
    answer: 'Princeps',
    options: ['Princeps', 'Générique', 'Biosimilaire', 'Homéopathique'],
    theme: 'Sciences',
  },
  {
    question: "Sur quelle île, la deuxième plus vaste de l'archipel japonais, se situe la ville de Sapporo, dont elle est la capitale ?",
    answer: 'Hokkaidō',
    options: ['Hokkaidō', 'Honshū', 'Shikoku', 'Okinawa'],
    theme: 'Géographie',
  },
  {
    question: "Sous quel nom, homonyme d'un pays, était plus connu Clément Di Fiore, rappeur français né en 1990 et décédé en 2019 ? Sa mort est restée discrète, comme il l'a toujours été, ce rappeur membre du duo 2Fingz avec Doums dissimulait la plupart du temps son visage.",
    answer: 'Népal',
    options: ['Népal', 'Luv Resval', 'Doums', 'Laylow'],
    theme: 'Musique',
  },
  {
    question: "Tirée de la cochenille, quel pigment d'un rouge profond pouvant également être appelé cochineal ? Le nom désignant ce mot est, à l'origine, tiré de l'arabe signifiant cramoisi.",
    answer: 'Carmin',
    options: ['Carmin', 'Vermillon', 'Écarlate', 'Pourpre'],
    theme: 'Art',
  },
  {
    question: "Quel est le nom de naissance de la photographe née à Munich en 1912 et morte le même jour que son époux, le 30 avril 1945 ?",
    answer: 'Eva Braun',
    options: ['Eva Braun', 'Leni Riefenstahl', 'Geli Raubal', 'Magda Goebbels'],
    theme: 'Histoire',
  },
  {
    question: "Quelle est la couleur de la bicyclette qui sert à Léa à franchir la ligne de démarcation dans un célèbre roman de Régine Deforges ?",
    answer: 'Bleue',
    options: ['Bleue', 'Jaune', 'Rouge', 'Verte'],
    theme: 'Littérature',
  },
  {
    question: "Quelle gymnaste roumaine fut la première à obtenir la note de 10 aux Jeux Olympiques, ce lors de l'édition de Montréal en 1976 ?",
    answer: 'Nadia Comaneci',
    options: ['Nadia Comaneci', 'Olga Korbut', 'Larissa Latynina', 'Vera Čáslavská'],
    theme: 'Sport',
  },
  {
    question: "Quel prénom est associé à la phrase \"Mais t'es pas net ?\" dans une vidéo internet où un jeune homme allumait un feu dans sa chambre ?",
    answer: 'Baptiste',
    options: ['Baptiste', 'Théo', 'Maxime', 'Lucas'],
    theme: 'Culture Générale',
  },
  {
    question: "Dans un film d'animation de Michel Ocelot sorti en 2006, quel enfant dont le nom signifie « marron » est le meilleur ami d'Azur ?",
    answer: 'Asmar',
    options: ['Asmar', 'Azur', 'Dilnoza', 'Chamsous'],
    theme: 'Cinéma',
  },
  {
    question: "Sous quel nom est plus connu Lev Davidovitch Bronstein, soviétique ayant été assassiné pendant son exil à Mexico en 1940 ?",
    answer: 'Léon Trotski',
    options: ['Léon Trotski', 'Lénine', 'Staline', 'Karl Marx'],
    theme: 'Histoire',
  },
  {
    question: "Traditionnellement, combien considère-t-on qu'il y a de couleurs dans un arc-en-ciel ?",
    answer: '7',
    options: ['7', '6', '8', '5'],
    theme: 'Sciences',
  },
  {
    question: "Quelle ville française est dominée par la basilique Notre-Dame de la Garde, souvent appelée La Bonne Mère ?",
    answer: 'Marseille',
    options: ['Marseille', 'Lyon', 'Bordeaux', 'Nice'],
    theme: 'Géographie',
  },
  {
    question: "A quel groupe, dont le nom rappelle un lieu d'Amérique du Nord et composé de Daniel Chenevez et Muriel Moreno doit-on les titres \"J'ai vu\" et \"L'Amour à la plage\" dans les années 1980 ?",
    answer: 'Niagara',
    options: ['Niagara', 'Téléphone', 'Indochine', 'Taxi Girl'],
    theme: 'Musique',
  },
  {
    question: "Quel poisson de la famille des serranidés est surnommé Jojo dans le film Le Monde du Silence ? Ce film documentaire réalisé en 1956 par Jacques-Yves Cousteau et Louis Malle mettait en avant la vie sous-marine.",
    answer: 'Mérou',
    options: ['Mérou', 'Thon', 'Bar', 'Dorade'],
    theme: 'Animaux',
  },
  {
    question: "Sachant qu'il y a six cartes par famille, combien y a-t-il de cartes au total dans un jeu de 7 familles ?",
    answer: '42',
    options: ['42', '49', '35', '56'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel ouvrage collectif écrit de 1751 à 1772 fut dirigé par Denis Diderot et Jean le Rond d'Alembert ?",
    answer: "L'Encyclopédie",
    options: ["L'Encyclopédie", "Le Dictionnaire de l'Académie", 'Le Grand Robert', 'La Bibliothèque universelle'],
    theme: 'Histoire',
  },
  {
    question: "En minutes, quelle est la durée d'un match de handball sans prolongations ?",
    answer: '60',
    options: ['60', '80', '90', '70'],
    theme: 'Sport',
  },
  {
    question: "Représentant Josh DeSeno, quelle emote Twitch utilisée pour marquer l'ironie porte le nom d'un diablotin d'eau dans la mythologie japonaise ou d'une lettre de l'alphabet grec ?",
    answer: 'Kappa',
    options: ['Kappa', 'Kreygasm', 'PogChamp', 'Pepega'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel présentateur, auteur de \"Je m'appelais Franck\" a présenté le Juste Prix et le Bigdil ?",
    answer: "Vincent Lagaf'",
    options: ["Vincent Lagaf'", 'Christophe Dechavanne', 'Jean-Pierre Foucault', 'Patrick Sébastien'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel était le nom du premier président des Etats-Unis d'Amérique, ayant laissé son nom à la fois à un état et à la capitale du pays ?",
    answer: 'George Washington',
    options: ['George Washington', 'Abraham Lincoln', 'Thomas Jefferson', 'John Adams'],
    theme: 'Histoire',
  },
  {
    question: "Quel physicien apatride de 1896 à 1901, fut successivement allemand, suisse et américain mais était suisse quand il reçut le prix Nobel en 1921 ?",
    answer: 'Albert Einstein',
    options: ['Albert Einstein', 'Max Planck', 'Niels Bohr', 'Werner Heisenberg'],
    theme: 'Sciences',
  },
  {
    question: "Dans quelle ville se trouve la fontaine de Trevi ? L'image avec Anita Ekberg se baignant dedans dans le film La Dolce Vita est restée célèbre.",
    answer: 'Rome',
    options: ['Rome', 'Florence', 'Venise', 'Naples'],
    theme: 'Géographie',
  },
  {
    question: "Par quelle lettre est désignée la note de musique \"Do\" dans la notation anglo-saxonne ?",
    answer: 'C',
    options: ['C', 'A', 'D', 'G'],
    theme: 'Musique',
  },
  {
    question: "Quel animal est parfois appelé encornet lorsqu'il est pêché et cuisiné ? Ce même animal est souvent appelé chipiron dans la cuisine du Pays Basque.",
    answer: 'Calamar',
    options: ['Calamar', 'Pieuvre', 'Seiche', 'Sole'],
    theme: 'Cuisine',
  },
  {
    question: "Quel vent sec très chaud portant un nom issu de l'italien, venant du Sahara, souffle sur l'Afrique du Nord et la Méditerranée ?",
    answer: 'Sirocco',
    options: ['Sirocco', 'Mistral', 'Tramontane', 'Harmattan'],
    theme: 'Géographie',
  },
  {
    question: "Quel compositeur a eu une fille avec Marie d'Agoult, Cosima, femme ayant épousé plus tard le compositeur allemand Richard Wagner ?",
    answer: 'Franz Liszt',
    options: ['Franz Liszt', 'Frédéric Chopin', 'Johannes Brahms', 'Robert Schumann'],
    theme: 'Musique',
  },
  {
    question: "Quelle forme de soule à crosse, d'origine irlandaise, assez proche du football gaélique, possède une version féminine appelée le camogie ? Son nom irlandais est le iománaíocht.",
    answer: 'Hurling',
    options: ['Hurling', 'Shinty', 'Bandy', 'Lacrosse'],
    theme: 'Sport',
  },
  {
    question: "Quel jeu mobile développé par le vietnamien Nguyễn Hà Đông, fut sorti en 2013 et retiré par son créateur en février 2014 ?",
    answer: 'Flappy Bird',
    options: ['Flappy Bird', 'Angry Birds', 'Temple Run', 'Candy Crush'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Dans le film d'Henri Verneuil de 1959, comment s'appelle la vache qui accompagne Fernandel ?",
    answer: 'Marguerite',
    options: ['Marguerite', 'Rosette', 'Blanchette', 'Fleur'],
    theme: 'Cinéma',
  },
  {
    question: "Quelle française fut d'abord l'épouse de l'écrivain Paul Scarron avant d'épouser en secret le roi Louis XIV en 1683 ?",
    answer: 'Madame de Maintenon',
    options: ['Madame de Maintenon', 'Madame de Pompadour', 'Madame de Montespan', "Anne d'Autriche"],
    theme: 'Histoire',
  },
  {
    question: "Quel mot désigne le point de l'orbite d'un objet céleste le plus éloigné de la Terre ?",
    answer: 'Apogée',
    options: ['Apogée', 'Périgée', 'Zénith', 'Périhélie'],
    theme: 'Sciences',
  },
  {
    question: "Quel pays a pour devise en latin \"Unus pro omnibus, omnes pro uno\" signifiant \"Un pour tous, tous pour un\" et étant donc une déformation apocryphe de la citation des Trois Mousquetaires d'Alexandre Dumas ?",
    answer: 'Suisse',
    options: ['Suisse', 'Vatican', 'Monaco', 'Belgique'],
    theme: 'Culture Générale',
  },
  {
    question: "Avec quel chanteur déjà installé Anderson Paak forme-t-il le superduo ayant sorti les singles \"Leave the Door Open\", \"Skate\" et \"Smokin out the Window\" sur l'album \"An Evening with Silk Sonic\" ?",
    answer: 'Bruno Mars',
    options: ['Bruno Mars', 'The Weeknd', 'Pharrell Williams', 'John Legend'],
    theme: 'Musique',
  },
  {
    question: "Parfois surnommé serpent de verre, quel lézard apode est dit commun ou fragile ? Ce lézard appartient à la famille des anguidés.",
    answer: 'Orvet',
    options: ['Orvet', 'Lézard des murailles', 'Couleuvre', 'Seps'],
    theme: 'Animaux',
  },
  {
    question: "Combien de lettres sont présentes dans l'alphabet grec ?",
    answer: '24',
    options: ['24', '20', '26', '22'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel prénom porte le plus grand des frères Dalton créés par Morris ? Il est le plus benêt et est toujours affamé.",
    answer: 'Averell',
    options: ['Averell', 'Joe', 'William', 'Jack'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel terme de 6 lettres, emprunté à l'anglais et souvent adjoint du terme « stand-up » désigne un sport pratiqué à l'aide d'une pagaie ?",
    answer: 'Paddle',
    options: ['Paddle', 'Kayak', 'Canoë', 'Surf'],
    theme: 'Sport',
  },
  {
    question: "Quel jeu vidéo édité par Psyonix et Epic Games consiste à faire un football avec des voitures ? Le but est de marquer des buts en poussant un ballon dans des buts.",
    answer: 'Rocket League',
    options: ['Rocket League', 'FIFA', 'Forza Motorsport', 'Need for Speed'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Ayant gagné contre la suisse Léa, quel est le prénom de la jeune fille de 18 ans ayant remporté la Star Academy en 2026 ?",
    answer: 'Ambre',
    options: ['Ambre', 'Léa', 'Emma', 'Chloé'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle arme portative médiévale utilisait des projectiles appelé carreaux ? Elle est constituée d'un arc monté sur un fût.",
    answer: 'Arbalète',
    options: ['Arbalète', 'Arc', 'Fronde', 'Balliste'],
    theme: 'Histoire',
  },
  {
    question: "En statistique, comment appelle-t-on la valeur qui sépare une plage de donnée en 2 groupes égaux ?",
    answer: 'Médiane',
    options: ['Médiane', 'Moyenne', 'Mode', 'Quartile'],
    theme: 'Sciences',
  },
  {
    question: "Quel est le nom du département français le plus septentrional ?",
    answer: 'Nord',
    options: ['Nord', 'Pas-de-Calais', 'Ardennes', 'Manche'],
    theme: 'Géographie',
  },
  {
    question: "Quel chanteur, le plus titré avec M aux Victoires de la Musique, a connu le succès avec Gaby oh Gaby, Vertige de l'amour, Osez Joséphine et Résidents de la République ?",
    answer: 'Alain Bashung',
    options: ['Alain Bashung', 'M', 'Francis Cabrel', 'Jean-Jacques Goldman'],
    theme: 'Musique',
  },
  {
    question: "De quel équidé dit-on qu'il brait lorsqu'il pousse son cri ?",
    answer: 'Âne',
    options: ['Âne', 'Cheval', 'Mulet', 'Zèbre'],
    theme: 'Animaux',
  },
  {
    question: "Quelle sorte de papier, connue pour ses capacités de résistance, tire son nom d'un mot allemand signifiant \"force\" ?",
    answer: 'Kraft',
    options: ['Kraft', 'Vergé', 'Bristol', 'Calque'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle montagne située près d'Aix-en-Provence est le sujet de près de 80 tableaux réalisés par Paul Cézanne ?",
    answer: 'Montagne Sainte-Victoire',
    options: ['Montagne Sainte-Victoire', 'Mont Ventoux', 'Montagne Sainte-Baume', 'Alpilles'],
    theme: 'Art',
  },
  {
    question: "Quel patineur de vitesse étasunien a gagné 5 médailles aux Jeux de Lake Placid en 1980 ? Il a remporté l'intégralité des épreuves au programme des Jeux Olympiques en patinage de vitesse cette année-là.",
    answer: 'Eric Heiden',
    options: ['Eric Heiden', 'Dan Jansen', 'Bonnie Blair', 'Ard Schenk'],
    theme: 'Sport',
  },
  {
    question: "Quel youtubeur français, de son vrai nom Miguel Mattioli, a également sorti la chanson \"Dans le club\" en 2020 ?",
    answer: 'Michou',
    options: ['Michou', 'Squeezie', 'Néo', 'Lufy'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle actrice s'est fait connaître en jouant dans Taxi Driver en 1976 avant de recevoir l'Oscar de la meilleure actrice à deux reprises, pour Les Accusés en 1988 et pour Le Silence des Agneaux, trois ans plus tard ?",
    answer: 'Jodie Foster',
    options: ['Jodie Foster', 'Meryl Streep', 'Susan Sarandon', 'Sigourney Weaver'],
    theme: 'Cinéma',
  },
  {
    question: "Quel empereur byzantin entre 960 et 1025 est dit \"Le Bulgaroctone\" surnom d'origine grecque signifiant \"le tueur de bulgares\" du fait de l'expansion du territoire sous son règne dans les Balkans ? Il a le règne le plus long de toute l'histoire byzantine.",
    answer: 'Basile II',
    options: ['Basile II', 'Justinien Ier', 'Constantin XI', 'Jean II Comnène'],
    theme: 'Histoire',
  },
  {
    question: "Né à Faenza, en Emilie-Romagne, quel savant italien est considéré comme l'inventeur du baromètre en 1643 ?",
    answer: 'Evangelista Torricelli',
    options: ['Evangelista Torricelli', 'Blaise Pascal', 'Galileo Galilei', 'Robert Boyle'],
    theme: 'Sciences',
  },
  {
    question: "Quelle capitale a été aménagée conformément aux plans de l'architecte français Pierre Charles L'Enfant ?",
    answer: 'Washington D.C.',
    options: ['Washington D.C.', 'New York', 'Philadelphia', 'Boston'],
    theme: 'Géographie',
  },
  {
    question: "Fondé par le groupe Ninety One en 2015, de quel pays est originaire le style musical appelé Q-Pop ? Il se pose comme un pendant national de la K-Pop coréenne ou de la J-Pop japonaise.",
    answer: 'Kazakhstan',
    options: ['Kazakhstan', 'Ouzbékistan', 'Azerbaïdjan', 'Mongolie'],
    theme: 'Musique',
  },
  {
    question: "Quelle région située à l'ouest d'une ligne Tchorokhi-Oronte est présente aux côtés du mot berger dans l'autre nom du chien appelé kangal ? Cette région est celle d'origine de ce berger.",
    answer: "Berger d'Anatolie",
    options: ["Berger d'Anatolie", 'Berger de Turquie', "Berger d'Orient", 'Berger caucasien'],
    theme: 'Animaux',
  },
  {
    question: "Quelle forme précise de tachygraphie, dont le nom est issu du grec signifiant \"resserré\" consiste en une écriture abrégée, formée de signes propres, qui permet de noter la parole à la vitesse de prononciation normale ?",
    answer: 'Sténographie',
    options: ['Sténographie', 'Calligraphie', 'Cryptographie', 'Typographie'],
    theme: 'Culture Générale',
  },
  {
    question: "Dans la mythologie grecque, quel type de divinité avait un corps d'homme et des cornes et pieds de boucs et constituait le cortège de Dionysos ?",
    answer: 'Satyre',
    options: ['Satyre', 'Faune', 'Centaure', 'Silène'],
    theme: 'Culture Générale',
  },
  {
    question: "En 2019, quel pays était représenté par la gagnante du tournoi de Wimbledon, un an après sa victoire à Roland-Garros, Simona Halep ?",
    answer: 'Roumanie',
    options: ['Roumanie', 'Tchéquie', 'Biélorussie', 'Russie'],
    theme: 'Sport',
  },
  {
    question: "Quel nom d'un film fictif et inexistant de Martin Scorsese, au centre d'un meme internet dans lequel des utilisateurs de Tumblr ont imaginé l'ensemble du film, est également le nom de famille d'un écrivain russe du XIXe siècle, célèbre pour son roman \"Oblomov\" ?",
    answer: 'Goncharov',
    options: ['Goncharov', 'Oblomov', 'Dostoïevski', 'Tourgueniev'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel humoriste et célèbre \"sniper\" associé aux émissions de Thierry Ardisson est également le réalisateur d'un unique long-métrage, \"Les clés de bagnole\" ?",
    answer: 'Laurent Baffie',
    options: ['Laurent Baffie', 'Stéphane Guillon', 'Nicolas Canteloup', 'Éric Naulleau'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel roi, époux de la reine-infirmière, ayant régné de 1909 à 1934 en Belgique, est mort d'un accident d'escalade ? (Prénom + Numéro)",
    answer: 'Albert Ier',
    options: ['Albert Ier', 'Léopold II', 'Baudouin Ier', 'Albert II'],
    theme: 'Histoire',
  },
  {
    question: "Par opposition à pergélisol, quel nom désigne la partie d'un cryosol qui gèle en hiver et dégèle en été ?",
    answer: 'Mollisol',
    options: ['Mollisol', 'Pergélisol', 'Palsa', 'Thermokarst'],
    theme: 'Sciences',
  },
  {
    question: "Quelle ville néerlandaise détient le principal port européen en terme de quantité de marchandises y transitant ?",
    answer: 'Rotterdam',
    options: ['Rotterdam', 'La Hague', 'Anvers', 'Hambourg'],
    theme: 'Géographie',
  },
  {
    question: "Formé par Max et Igor Cavalera en 1984, de quel pays est originaire le groupe de thrash metal appelé Sepultura ? Le groupe réalise actuellement sa tournée d'adieu.",
    answer: 'Brésil',
    options: ['Brésil', 'Chili', 'Argentine', 'Mexique'],
    theme: 'Musique',
  },
  {
    question: "Quel nom emprunté au guarani désigne le fruit de la grenadille ou le fruit de la passion ?",
    answer: 'Maracudja',
    options: ['Maracudja', 'Guarana', 'Açaï', 'Papaye'],
    theme: 'Cuisine',
  },
  {
    question: "Quel peintre italien né en 1465 porte le même nom qu'un plat fait de très fines tranches de bœuf cru et assaisonné ?",
    answer: 'Carpaccio',
    options: ['Carpaccio', 'Bellini', 'Giorgione', 'Tintoret'],
    theme: 'Art',
  },
  {
    question: "Quel est le nom de deux familles des deux soeurs tenniswomen prénommées Serena et Venus ?",
    answer: 'Williams',
    options: ['Williams', 'Graf', 'Navratilova', 'Seles'],
    theme: 'Sport',
  },
  {
    question: "Quel est le nom actuel du site sur lequel le premier message posté fut \"just setting up my twittr\" le 21 mars 2006 ?",
    answer: 'X',
    options: ['X', 'Instagram', 'Facebook', 'TikTok'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel acteur a incarné Johnny Cash dans le biopic \"Walk the line\" avant d'incarner le Joker au cinéma dans des films de 2019 et 2024 ?",
    answer: 'Joaquin Phoenix',
    options: ['Joaquin Phoenix', 'Brad Pitt', 'Christian Bale', 'Heath Ledger'],
    theme: 'Cinéma',
  },
  {
    question: "Ayant grandement inspiré le film Monsieur Verdoux de Charlie Chaplin, quel criminel français est surnommé le Barbe-Bleue de Gambais ?",
    answer: 'Henri-Désiré Landru',
    options: ['Henri-Désiré Landru', 'Marcel Petiot', 'Michel Fourniret', 'Guy Georges'],
    theme: 'Histoire',
  },
  {
    question: "Pouvant être partielle ou totale, quel nom désigne la disparition momentanée d'un astre due à l'interposition d'un autre corps céleste ?",
    answer: 'Éclipse',
    options: ['Éclipse', 'Occultation', 'Transit', 'Conjonction'],
    theme: 'Sciences',
  },
  {
    question: "Quel lac situé en Sibérie russe est le plus profond de la planète avec 1642 mètres de profondeur ?",
    answer: 'Lac Baïkal',
    options: ['Lac Baïkal', 'Lac Supérieur', 'Lac Tanganyika', 'Mer Caspienne'],
    theme: 'Géographie',
  },
  {
    question: "Quel ancien membre des Beatles a fait partie du groupe \"Wings\", ayant notamment interprété la bande originale du James Bond \"Vivre et laisser mourir\" : \"Live and let die\"",
    answer: 'Paul McCartney',
    options: ['Paul McCartney', 'John Lennon', 'George Harrison', 'Ringo Starr'],
    theme: 'Musique',
  },
  {
    question: "Quelle fleur est traditionnellement offerte le premier mai, lors de la fête du travail, en France ?",
    answer: 'Muguet',
    options: ['Muguet', 'Tulipe', 'Jasmin', 'Lilas'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel nom désignant originellement un noble espagnol est aussi le patronyme d'un entraîneur de football prénommé Michel et de la maire de Paris, prénommée Anne ?",
    answer: 'Hidalgo',
    options: ['Hidalgo', 'Morales', 'Caballero', 'Guerrero'],
    theme: 'Culture Générale',
  },
  {
    question: "Dans le sigle RATP, quel nom féminin est désigné par la lettre R ? Les lettres A, T et P signifient \"autonome des transports parisiens\".",
    answer: 'Régie',
    options: ['Régie', 'Rail', 'Réseau', 'Route'],
    theme: 'Culture Générale',
  },
  {
    question: "Quels fruits sont dits \"d'or\" dans le jardin des Hespérides ? Le vol de ces fruits par Héraklès constitue l'un de ses douze travaux.",
    answer: 'Pomme',
    options: ['Pomme', 'Orange', 'Coing', 'Citron'],
    theme: 'Culture Générale',
  },
  {
    question: "Combien y'a-t-il de joueurs sur le terrain en même temps au maximum dans une équipe professionnelle de handball ?",
    answer: '7',
    options: ['7', '6', '11', '12'],
    theme: 'Sport',
  },
  {
    question: "Désormais propriété du groupe Meta, comment s'appelle l'application de messagerie instantanée créée en 2009 et symbolisé par un logo de couleur verte ? Son nom est tiré d'une formule anglaise demandant à son interlocuteur ce qu'il y a de neuf.",
    answer: 'WhatsApp',
    options: ['WhatsApp', 'Telegram', 'Signal', 'Messenger'],
    theme: 'Culture Générale',
  },
  {
    question: "Ayant été interprété par Mehdi El Glaoui dans la série télévisée des années 1960, quel prénom porte le jeune garçon associé au chien de montagne des Pyrénées appelé Belle dans une série créée par Cécile Aubry ?",
    answer: 'Sébastien',
    options: ['Sébastien', 'Baptiste', 'Nicolas', 'Pierre'],
    theme: 'Séries TV',
  },
  {
    question: "Quelle bataille, ayant eu lieu en 1066 au sud de l'Angleterre, fut le théâtre de la victoire de Guillaume le Conquérant sur le dernier roi saxon ?",
    answer: "Bataille d'Hastings",
    options: ["Bataille d'Hastings", "Bataille d'Azincourt", 'Bataille de Crécy', 'Bataille de Poitiers'],
    theme: 'Histoire',
  },
  {
    question: "Quelle est la valeur en degrés de deux angles dits supplémentaires ?",
    answer: '180',
    options: ['180', '90', '360', '270'],
    theme: 'Sciences',
  },
  {
    question: "Quelle île fut appelée par le nom d'origine portugaise Formose à partir du XVIe siècle ?",
    answer: 'Taïwan',
    options: ['Taïwan', 'Sri Lanka', 'Philippines', 'Japon'],
    theme: 'Géographie',
  },
  {
    question: "Quelle chanteuse a sorti l'album The Life of a Showgirl en 2025, un an après The Tortured Poets Department et onze ans après 1989 ?",
    answer: 'Taylor Swift',
    options: ['Taylor Swift', 'Billie Eilish', 'Dua Lipa', 'Olivia Rodrigo'],
    theme: 'Musique',
  },
  {
    question: "Dans quel océan se trouve la mer des Sargasses ? Cette mer, la seule à ne posséder aucune côte terrestre, est célèbre pour être le lieu de reproduction des anguilles.",
    answer: 'Océan Atlantique',
    options: ['Océan Atlantique', 'Océan Pacifique', 'Océan Indien', 'Mer des Caraïbes'],
    theme: 'Géographie',
  },
  {
    question: "Quel sigle de quatre lettres désigne la société nationale des chemins de fer belges ?",
    answer: 'SNCB',
    options: ['SNCB', 'SNCF', 'NS', 'DB'],
    theme: 'Culture Générale',
  },
  {
    question: "Dans quelle ville, deuxième ville sainte de l'islam, est mort Muhammad, selon la tradition islamique ?",
    answer: 'Médine',
    options: ['Médine', 'Riyad', 'Jérusalem', 'Bagdad'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle anagramme du mot polarité (POLARITE) désigne un joueur de pelote basque ?",
    answer: 'Pelotari',
    options: ['Pelotari', 'Pelotair', 'Frontoni', 'Chistera'],
    theme: 'Sport',
  },
  {
    question: "Créé en 1986, quel héros de jeux vidéo de SEGA était, avant Sonic, la mascotte de la marque ? Son premier jeu se passe \"in Miracle World\".",
    answer: 'Alex Kidd',
    options: ['Alex Kidd', 'Sonic', 'Altered Beast', 'Golden Axe'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Quel mélodrame indien de 2002, produit et réalisé par Sanjay Leela Bhansali avec Sharukh Khan et Aishwarya Rai est considéré comme l'un des films les plus rentables des années 2000 ?",
    answer: 'Devdas',
    options: ['Devdas', 'Slumdog Millionaire', 'Dilwale Dulhania Le Jayenge', 'Kabhi Khushi Kabhie Gham'],
    theme: 'Cinéma',
  },
  {
    question: "Quel était le nom de l'avant dernier secrétaire général du PCUS, qui dirigea le pays de 1984 à 1985 ?",
    answer: 'Konstantin Tchernenko',
    options: ['Konstantin Tchernenko', 'Youri Andropov', 'Léonid Brejnev', 'Mikhail Gorbatchev'],
    theme: 'Histoire',
  },
  {
    question: "Parfois appelé \"hydrogène 2\", quel nom porte l'isotope de l'hydrogène dont le nombre de masses est égal à 2 ? Le nom est issu du grec signifiant deux.",
    answer: 'Deutérium',
    options: ['Deutérium', 'Dihydrogène', 'Tritium', 'Protium'],
    theme: 'Sciences',
  },
  {
    question: "A quel pays appartient le Mont Blanc, haut de 3617 mètres ?",
    answer: "Aucun, il est sur la Lune",
    options: ["Aucun, il est sur la Lune", 'France', 'Italie', 'France et Italie'],
    theme: 'Culture Générale',
  },
  {
    question: "De quel événement sportif ayant lieu tous les quatre ans le compositeur Spýros Samáras a-t-il composé l'hymne ? Le poète Kostís Palamás a écrit les paroles de ce même hymne.",
    answer: 'Jeux Olympiques',
    options: ['Jeux Olympiques', 'Jeux Panaméricains', 'Jeux du Commonwealth', 'Universiade'],
    theme: 'Sport',
  },
  {
    question: "Quelle plante à fleurs jaune vif, de la famille des Hypericacées, possède des feuilles dont le parenchyme est criblé de petits trous, d'où son surnom d'herbe aux mille trous ?",
    answer: 'Millepertuis',
    options: ['Millepertuis', 'Tournesol', 'Genêt', 'Potentille'],
    theme: 'Sciences',
  },
  {
    question: "Quel plat fromager d'origine franc-comtoise est obtenue à partir de metton, de lait écrémé caillé peut se déguster à la cuillère du fait de sa texture ?",
    answer: 'Cancoillotte',
    options: ['Cancoillotte', 'Raclette', 'Fondue', "Mont d'Or"],
    theme: 'Cuisine',
  },
  {
    question: "Quel est le nom du chien tricéphale, gardien des Enfers, dans la mythologie grecque ?",
    answer: 'Cerbère',
    options: ['Cerbère', 'Orthros', 'Scylla', 'Ladon'],
    theme: 'Culture Générale',
  },
  {
    question: "Dans quel sport l'étasunien Tony Hawk est-il le premier à avoir réussi un 900 documenté, en 1999 ?",
    answer: 'Skateboard',
    options: ['Skateboard', 'BMX', 'Snowboard', 'Roller'],
    theme: 'Sport',
  },
  {
    question: "Correspondant à 2^11, quel nombre est le nom d'un jeu vidéo consistant à déplacer des tuiles ayant pour valeurs originales 2 ou 4 et les faire s'additionner jusqu'à atteindre le nombre souhaité ?",
    answer: '2048',
    options: ['2048', '1024', '4096', '512'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Sur quelle planète Superman est-il né ? Cette planète porte le même nom qu'un élément chimique.",
    answer: 'Krypton',
    options: ['Krypton', 'Kryptonite', 'Xénon', 'Radon'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel peuple amérindien, dont le dernier chef Moctezuma fut défait par Cortès, avait pour capitale Mexico-Tenochtitlan ?",
    answer: 'Aztèques',
    options: ['Aztèques', 'Incas', 'Mayas', 'Toltèques'],
    theme: 'Histoire',
  },
  {
    question: "Combien un cube possède-t-il de faces ?",
    answer: '6',
    options: ['6', '8', '4', '12'],
    theme: 'Sciences',
  },
  {
    question: "Quelle ville constitue l'unique commune et donc la capitale de la principauté de Monaco ?",
    answer: 'Monaco',
    options: ['Monaco', 'Vatican', 'Liechtenstein', 'Saint-Marin'],
    theme: 'Géographie',
  },
  {
    question: "Quel nom de continent en anglais est celui du groupe ayant interprété le titre \"A Horse with no name\" en 1971 mais également celui d'un titre du groupe Razorlight en 2006 ?",
    answer: 'America',
    options: ['America', 'Europe', 'Asia', 'Africa'],
    theme: 'Musique',
  },
  {
    question: "Quel rapace pouvant être dit royal et ayant pour nom scientifique \"Milvus milvus\" porte le même nom en français qu'une ville italienne ?",
    answer: 'Milan',
    options: ['Milan', 'Aigle', 'Faucon', 'Buse'],
    theme: 'Animaux',
  },
  {
    question: "A quoi se rapporte l'adjectif onirique ? Les Oneiroi étaient, dans la mythologie grecque, les divinités personnifiant ce que l'on cherche.",
    answer: 'Rêve',
    options: ['Rêve', 'Nuit', 'Eau', 'Ombre'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle poétesse grecque de l'Antiquité a laissé son nom à un synonyme de lesbien ? Le nom de lesbianisme vient d'ailleurs de l'île sur laquelle cette poétesse vivait, Lesbos.",
    answer: 'Sappho',
    options: ['Sappho', 'Électre', 'Antigone', 'Alceste'],
    theme: 'Littérature',
  },
  {
    question: "Quel lanceur de disque lituanien détient depuis avril 2024 le record du monde de sa discipline avec un jet à 75,56 mètres battant ainsi son propre record et effaçant donc la marque de Jürgen Schult ? Son père prénommé Virgilijus avait été champion olympique de la discipline en 2000 et 2004.",
    answer: 'Mykolas Alekna',
    options: ['Mykolas Alekna', 'Jürgen Schult', 'Robert Harting', 'Christoph Harting'],
    theme: 'Sport',
  },
  {
    question: "Quel pays a pour extension de domaine les lettres \".kh\" venant du mot khmer ?",
    answer: 'Cambodge',
    options: ['Cambodge', 'Kazakhstan', 'Kenya', 'Corée'],
    theme: 'Géographie',
  },
  {
    question: "Quelle série d'HBO narrant les histoires de la famille Roy, avec notamment Jeremy Strong et Sarah Snook est la série ayant reçu le plus de récompenses aux Golden Globes 2024 ?",
    answer: 'Succession',
    options: ['Succession', 'The Crown', 'Billions', 'Yellowstone'],
    theme: 'Séries TV',
  },
  {
    question: "Quel volcan martiniquais est rentré en éruption en 1902, faisant plus de 30 000 victimes dans la ville de Saint-Pierre ?",
    answer: 'La Montagne Pelée',
    options: ['La Montagne Pelée', 'Piton de la Fournaise', 'Soufrière de Guadeloupe', 'Vésuve'],
    theme: 'Géographie',
  },
  {
    question: "Quel os, nommé talus dans la nomenclature actuelle, est cité par l'écrivaine Albertine Sarrazin dans le titre d'un livre ?",
    answer: 'Astragale',
    options: ['Astragale', 'Calcanéum', 'Métatarse', 'Fibula'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel état étasunien a pour capitale la ville de Tallahassee ? Il ne s'agit ni de la ville la plus peuplée de l'état, ni de la plus célèbre.",
    answer: 'Floride',
    options: ['Floride', 'Ontario', 'Géorgie', 'Texas'],
    theme: 'Géographie',
  },
  {
    question: "Quel ballet dont la première représentation eut lieu en 1928 doit sa chorégraphie à Bronislava Nijinska ? Cette femme est la soeur du célèbre chorégraphe et danseur Vaslav Nijinski.",
    answer: 'Boléro de Maurice Ravel',
    options: ['Boléro de Maurice Ravel', 'Lac des cygnes', 'Le Sacre du Printemps', 'La Sylphide'],
    theme: 'Musique',
  },
  {
    question: "Quelle race de chat, reconnaissable à sa quasi-absence de fourrure, porte le même nom qu'une créature de la mythologie greco-égyptienne ?",
    answer: 'Sphinx',
    options: ['Sphinx', 'Manx', 'Rex cornish', 'Devon Rex'],
    theme: 'Animaux',
  },
  {
    question: "Quel nom porté par la sauce composée d'une béarnaise à laquelle on ajoute de la tomate est aussi le nom du pseudonyme utilisé par Georges Bernier ?",
    answer: 'Choron',
    options: ['Choron', 'Maltaise', 'Paloise', 'Foyot'],
    theme: 'Cuisine',
  },
  {
    question: "Quel est le nom de la forêt dans laquelle opère Robin des Bois selon la légende ? Cette forêt abrite le Major Oak, un chêne pédonculé millénaire qui aurait servi d'abri à Robin et ses \"Merry Men\".",
    answer: 'Forêt de Sherwood',
    options: ['Forêt de Sherwood', 'Forêt de Brocéliande', "Forêt d'Arden", 'New Forest'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle mer l'étasunienne Gertrude Ederle traversa-t-elle à la nage le 6 août 1926, en l'espace de 14 h 31 min ? Elle fut la première femme à réaliser cette traversée.",
    answer: 'Manche',
    options: ['Manche', 'Méditerranée', 'Mer du Nord', 'Mer Baltique'],
    theme: 'Sport',
  },
  {
    question: "Quel nom est à la fois celui d'une console sortie par Sega en 1994 et une planète du système solaire ?",
    answer: 'Saturne',
    options: ['Saturne', 'Jupiter', 'Mars', 'Mercure'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Quelle série avec Gillian Anderson dans le rôle de Dana Scully et David Duchovny dans le rôle de Fox Mulder était sous-titrée \"Aux frontières du réel\" ?",
    answer: 'X-Files',
    options: ['X-Files', 'Fringe', 'Twin Peaks', 'Lost'],
    theme: 'Séries TV',
  },
  {
    question: "Autour d'un château fort, quel fossé rempli d'eau servait généralement à la défense ?",
    answer: 'Douve',
    options: ['Douve', 'Enceinte', 'Mâchicoulis', 'Barbacane'],
    theme: 'Culture Générale',
  },
  {
    question: "Au total, combien d'astronautes ont marché sur la Lune, le premier en 1969 et le dernier en 1972 ?",
    answer: '12',
    options: ['12', '3', '6', '24'],
    theme: 'Sciences',
  },
  {
    question: "Dans quel pays se trouve le township de Soweto, célèbre notamment pour ses émeutes de 1976 ? Il est situé dans la province du Gauteng.",
    answer: 'Afrique du Sud',
    options: ['Afrique du Sud', 'Allemagne', 'Zimbabwe', 'Mozambique'],
    theme: 'Géographie',
  },
  {
    question: "Dans le cinquième couplet des paroles de quel chant est cité le marquis de Bouillé ? Les paroles sont \"Mais ces complices de Bouillé, Tous ces tigres qui, sans pitié, Déchirent le sein de leur mère !\"",
    answer: 'La Marseillaise',
    options: ['La Marseillaise', "L'Internationale", 'La Carmagnole', 'Chant du Départ'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel fruit de mer, élevé par un mytiliculteur, peut être « de bouchot » ?",
    answer: 'Moule',
    options: ['Moule', 'Huître', 'Palourde', 'Coque'],
    theme: 'Cuisine',
  },
  {
    question: "Quel nom désigne à la fois l'ultime combat entre le bien et le mal selon la Bible, un film de 1998, et une partie d'échecs utilisée comme système final de départage ?",
    answer: 'Armageddon',
    options: ['Armageddon', 'Apocalypse', 'Ragnarök', 'Apocalypto'],
    theme: 'Culture Générale',
  },
  {
    question: "Apparu pour la première fois dans la nouvelle \"Le Dernier Problème\", quel professeur surnommé \"Le Napoléon du Crime\" est considéré comme un des pires ennemis de Sherlock Holmes ?",
    answer: 'Moriarty',
    options: ['Moriarty', 'Irene Adler', 'Colonel Moran', 'Charles Milverton'],
    theme: 'Littérature',
  },
  {
    question: "Ayant fait l'objet de trois épreuves olympiques lors des Jeux olympiques de Paris 1900, quel sport consiste à faire passer des boules sous des arceaux à l'aide d'un maillet ?",
    answer: 'Croquet',
    options: ['Croquet', 'Polo', 'Hockey', 'Pétanque'],
    theme: 'Sport',
  },
  {
    question: "Quelle série de jeux vidéo dont le protagoniste est Gordon Freeman et développé par Valve possède pour logo un lambda, la lettre grecque, en minuscule ?",
    answer: 'Half-Life',
    options: ['Half-Life', 'Life', 'Portal', 'Left 4 Dead'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Quelle célèbre actrice française a publié en 1985, l'année de sa mort, son unique roman, Adieu Volodia ?",
    answer: 'Simone Signoret',
    options: ['Simone Signoret', 'Jeanne Moreau', 'Romy Schneider', 'Delphine Seyrig'],
    theme: 'Cinéma',
  },
  {
    question: "Quel pays, dans lequel il n'a pourtant jamais mis les pieds, est appelé Cipango, dans Le Livre des Merveilles de Marco Polo ?",
    answer: 'Japon',
    options: ['Japon', 'Chine', 'Indes', 'États-Unis'],
    theme: 'Géographie',
  },
  {
    question: "Quel nom porte la couche la plus basse de l'atmosphère terrestre ? Située sous la stratosphère, il s'agit de la couche de l'atmosphère dans laquelle nous évoluons.",
    answer: 'Troposphère',
    options: ['Troposphère', 'Lithosphère', 'Stratosphère', 'Mésosphère'],
    theme: 'Sciences',
  },
  {
    question: "De quel pays est originaire un véhicule immatriculé \"FL\" ?",
    answer: 'Liechtenstein',
    options: ['Liechtenstein', 'Finlande', 'Luxembourg', 'Lettonie'],
    theme: 'Géographie',
  },
  {
    question: "Quelle chanteuse a remporté la première saison de l'émission American Idol aux Etats-Unis ? Son titre \"My Life Would Suck Without You\" en 2009 établit le record du plus grand bond vers la première place du Billboard Hot 100.",
    answer: 'Kelly Clarkson',
    options: ['Kelly Clarkson', 'Carrie Underwood', 'Jennifer Hudson', 'Pink'],
    theme: 'Musique',
  },
  {
    question: "Quel nom désigne à la fois la substance colorée extraite de la seiche, et les tirages photographiques du début du XXe siècle, reconnaissables à leur teinte de brun ?",
    answer: 'Sépia',
    options: ['Sépia', 'Bistre', 'Brun Van Dyck', 'Ocre'],
    theme: 'Art',
  },
  {
    question: "Quel terme étudié par quelqu'un pratiquant la vexillologie, est également le symbole d'une pendule d'échecs qui indique que le temps est dépassé ?",
    answer: 'Drapeau',
    options: ['Drapeau', 'Blason', 'Emblème', 'Pavillon'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle écrivaine et philosophe française est l'auteure de l'essai \"Le Deuxième Sexe\" paru en 1949 ?",
    answer: 'Simone de Beauvoir',
    options: ['Simone de Beauvoir', 'Simone Veil', 'Marguerite Yourcenar', 'Colette'],
    theme: 'Littérature',
  },
  {
    question: "Combien de kilomètres complets sont courus lors d'une épreuve de marathon ?",
    answer: '42',
    options: ['42', '40', '45', '50'],
    theme: 'Sport',
  },
  {
    question: "Quel mot anglais, signifiant \"insecte\", désigne un problème informatique ?",
    answer: 'Bug',
    options: ['Bug', 'Virus', 'Glitch', 'Error'],
    theme: 'Sciences',
  },
  {
    question: "Quelle actrice et réalisatrice est à l'origine de \"Je vous trouve très beau\" en 2005, qui rencontra un franc succès ? Décédée en 2026, elle était connue pour son cheveu sur la langue.",
    answer: 'Isabelle Mergault',
    options: ['Isabelle Mergault', 'Michèle Laroque', 'Valérie Lemercier', 'Josiane Balasko'],
    theme: 'Cinéma',
  },
  {
    question: "Quel roi de France a eu le règne le plus long de l'Histoire du pays avec 72 ans ?",
    answer: 'Louis XIV',
    options: ['Louis XIV', 'Charles X', 'Louis XV', 'Louis XVI'],
    theme: 'Histoire',
  },
  {
    question: "Dans l'appareil digestif, quel tube transporte les aliments solides vers l'estomac ?",
    answer: 'Œsophage',
    options: ['Œsophage', 'Trachée', 'Duodénum', 'Pylore'],
    theme: 'Sciences',
  },
  {
    question: "Avec 0,44 km², quel est l'Etat indépendant ayant la plus petite superficie du monde ?",
    answer: 'Vatican',
    options: ['Vatican', 'Andorre', 'Monaco', 'Saint-Marin'],
    theme: 'Géographie',
  },
  {
    question: "Quel nom français partagent un opéra de Giacomo Puccini mettant en scène la couturière Mimi et une célèbre chanson de Charles Aznavour ?",
    answer: 'La Bohème',
    options: ['La Bohème', 'Emmenez-moi', 'La Traviata', 'Tosca'],
    theme: 'Musique',
  },
  {
    question: "Quel terme désigne communément les espèces animales du genre \"Apis\" ?",
    answer: 'Abeille',
    options: ['Abeille', 'Guêpe', 'Frelon', 'Singe'],
    theme: 'Animaux',
  },
  {
    question: "Quelle préparation pâtissière, réalisée notamment avec des blancs d'œufs et du sucre, accompagne traditionnellement la tarte au citron ?",
    answer: 'Meringue',
    options: ['Meringue', 'Chantilly', 'Crème pâtissière', 'Ganache'],
    theme: 'Cuisine',
  },
  {
    question: "Quel ouvrage de Balzac dont le héros est Lucien de Rubempré a été adapté au cinéma par Xavier Giannoli en 2021 ?",
    answer: 'Illusions Perdues',
    options: ['Illusions Perdues', 'Le Père Goriot', 'Eugénie Grandet', 'En attendant Godot'],
    theme: 'Littérature',
  },
  {
    question: "Quel pilote de Formule 1, courant pour Mercedes est devenu, en 2026, le deuxième plus jeune pilote de l'histoire à remporter un Grand Prix ? Il a gagné lors du Grand Prix de Chine.",
    answer: 'Kimi Antonelli',
    options: ['Kimi Antonelli', 'Max Verstappen', 'Charles Leclerc', 'Oscar Piastri'],
    theme: 'Sport',
  },
  {
    question: "Quel jeu vidéo mettait en scène les personnages de Blinky, Pinky, Inky et Clyde ?",
    answer: 'Pac-Man',
    options: ['Pac-Man', 'Splatoon', 'Donkey Kong', 'Galaga'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Dans quelle préfecture française du sud de la France sont basés les studios cinématographiques de la Victorine ?",
    answer: 'Nice',
    options: ['Nice', 'Montpellier', 'Marseille', 'Toulouse'],
    theme: 'Géographie',
  },
  {
    question: "Prénommé Gabriel, quel représentant d'une célèbre famille de bourreaux mourut en 1792 des suites d'une chute de l'échafaud, voulant présenter à la foule une tête coupée ?",
    answer: 'Gabriel Sanson',
    options: ['Gabriel Sanson', 'Charles-Henri Sanson', 'Nicolas-Charles Sanson', 'Louis Sanson'],
    theme: 'Histoire',
  },
  {
    question: "Quel écuyer né à Lyon en 1712 a laissé son nom au serment réalisé par les vétérinaires ?",
    answer: 'Claude Bourgelat',
    options: ['Claude Bourgelat', 'Louis Pasteur', 'Noël Vallois', 'Antoine Furetière'],
    theme: 'Sciences',
  },
  {
    question: "Quel pays a pour endonyme le nom de Magyarország ? Ce nom signifiant \"terre des Magyars\" du nom du peuple finno-ougrien s'étant installé dans la région à la fin du premier millénaire.",
    answer: 'Hongrie',
    options: ['Hongrie', 'Bulgarie', 'Pologne', 'Roumanie'],
    theme: 'Géographie',
  },
  {
    question: "De quel pays était originaire la cantatrice Nellie Melba, pour qui Auguste Escoffier a créé le dessert glacé du même nom ? Celle-ci avait des problèmes de voix et ce dessert fut créé pour l'apaiser.",
    answer: 'Australie',
    options: ['Australie', 'Espagne', 'Nouvelle-Zélande', 'Afrique du Sud'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel ordre de poissons sarcoptérygiens dits poissons fossiles vivent dans le sud-ouest de l'Océan Indien ? Ils ont peu évolué morphologiquement depuis 350 millions d'années.",
    answer: 'Cœlacanthes',
    options: ['Cœlacanthes', 'Raies', 'Requins', 'Dipneustes'],
    theme: 'Animaux',
  },
  {
    question: "Quel ragoût de viande blanche ou de poisson aux légumes originaire de Belgique porte un nom flamand signifiant eau qui bout ?",
    answer: 'Waterzooi',
    options: ['Waterzooi', 'Carbonade flamande', 'Stoemp', 'Chicon au gratin'],
    theme: 'Cuisine',
  },
  {
    question: "Quel animal fantastique voit son nom évoqué dans une série de tapisseries exposées au musée de Cluny ? Les cinq premières représentent les cinq sens et la sixième représente une femme avec l'animal, le sens restant mystérieux.",
    answer: 'Licorne',
    options: ['Licorne', 'Dragon', 'Pégase', 'Griffon'],
    theme: 'Art',
  },
  {
    question: "Quel sportif étasunien est l'initiateur de la technique moderne du rouleau dorsal dans la discipline du saut en hauteur, avec laquelle il a gagné la médaille d'or à Mexico en 1968 ? Il a laissé son nom à cette technique.",
    answer: 'Fosbury',
    options: ['Fosbury', 'Daley', 'Beamon', 'Saneyev'],
    theme: 'Sport',
  },
  {
    question: "Quel logiciel de manipulation d'images matricielles est livré avec toutes les versions de Windows depuis 1985 ?",
    answer: 'Paint',
    options: ['Paint', 'Photoshop', 'GIMP', 'Illustrator'],
    theme: 'Sciences',
  },
  {
    question: "Quel groupe de musique est au centre du film Mamma Mia, les chansons sont utilisées tout au cours du film ?",
    answer: 'ABBA',
    options: ['ABBA', 'Bee Gees', 'Queen', 'The Beatles'],
    theme: 'Musique',
  },
  {
    question: "En 1720, dans quelle ville le Grand Saint Antoine a-t-il apporté la peste, causant la mort d'environ environ un quart de la Provence ?",
    answer: 'Marseille',
    options: ['Marseille', 'Bordeaux', 'Toulon', 'Aix-en-Provence'],
    theme: 'Histoire',
  },
  {
    question: "Quelle type de boisson l'oenologie étudie-t-elle ?",
    answer: 'Vin',
    options: ['Vin', 'Bière', 'Champagne', 'Cidre'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel territoire du Canada a pour devise \"Je me souviens\" signifiant l'attachement du peuple à son histoire ?",
    answer: 'Québec',
    options: ['Québec', 'Manitoba', 'Ontario', 'Nouvelle-Écosse'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel groupe toulousain formé notamment par les frères Mouss et Hakim et le parolier Magyd Cherfi a connu le succès avec l'album \"Essence ordinaire\" comprenant notamment le titre \"Tomber la chemise\" ?",
    answer: 'Zebda',
    options: ['Zebda', 'IAM', 'Massilia Sound System', 'La Cafetera Roja'],
    theme: 'Musique',
  },
  {
    question: "Quel légume est, lorsqu'il est dit \"verte\" une spécialité de la ville du Puy-en-Velay ?",
    answer: 'Lentille',
    options: ['Lentille', 'Tomate', 'Haricot', 'Pois'],
    theme: 'Cuisine',
  },
  {
    question: "Quel type de sandwich grillé dans une presse spéciale est homonyme à une marque italienne d'images autocollantes à collectionner ?",
    answer: 'Panini',
    options: ['Panini', 'Croque-monsieur', 'Focaccia', 'Ciabatta'],
    theme: 'Cuisine',
  },
  {
    question: "Dans un poème latin attribué à Longus, quel prénom est associé à Chloé ? Ce poème fut adapté en symphonie chorégraphique par Maurice Ravel en 1912.",
    answer: 'Daphnis',
    options: ['Daphnis', 'Gervais', 'Philémon', 'Lycidas'],
    theme: 'Musique',
  },
  {
    question: "Quel adjectif qualifie les Jeux Olympiques d'Athènes de 1906 organisés pour célébrer les 10 ans de la rénovation des Jeux antiques ? Ayant eu lieu en Grèce, ces Jeux ont été considérés comme officiels jusqu'en 1949.",
    answer: 'Intercalaires',
    options: ['Intercalaires', 'Modernes', 'Annexes', 'Supplémentaires'],
    theme: 'Sport',
  },
  {
    question: "Quel jeu vidéo possédant deux opus a pour personnages principaux John Marston dans le premier, sorti en 2010 et Arthur Morgan dans le deuxième, sorti en 2019 ?",
    answer: 'Red Dead Redemption',
    options: ['Red Dead Redemption', 'Grand Theft Auto', 'Far Cry', "L.A. Noire"],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Quel cinéaste, de son vrai nom Achod Malakian, est le réalisateur de Mayrig, d'I comme Icare et d'Un Singe en Hiver ?",
    answer: 'Henri Verneuil',
    options: ['Henri Verneuil', 'Claude Sautet', 'Georges Lautner', 'Jean-Pierre Melville'],
    theme: 'Cinéma',
  },
  {
    question: "Qui a été président de la fédération de Russie de 2008 à 2012, succédant et précédant ainsi Vladimir Poutine à ce même poste ?",
    answer: 'Medvedev',
    options: ['Medvedev', 'Lavrov', 'Mischoustine', 'Sobianine'],
    theme: 'Politique',
  },
  {
    question: "Quel terme, toujours au pluriel, désigne les pertes vaginales secrétées après l'accouchement et qui contiennent du sang, du mucus et du tissu utérin ?",
    answer: 'Lochies',
    options: ['Lochies', 'Fuites urinaires', 'Lochorrhée', 'Pertes blanches'],
    theme: 'Sciences',
  },
  {
    question: "Quelle ville de la Somme possédant le nombre astronomique de 87 habitants possède le nom le plus court de France, en une seule lettre ?",
    answer: 'Y',
    options: ['Y', 'Os', 'Eu', 'Ay'],
    theme: 'Géographie',
  },
  {
    question: "De son vrai nom Yoann Lemoine, quel auteur-compositeur-interprète français a connu le succès en 2013 grâce à l'album \"The Golden Age\" comprenant notamment les titres \"Iron\" et \"Run Boy Run\" ?",
    answer: 'Woodkid',
    options: ['Woodkid', 'Breakbot', 'Yelle', 'Rone'],
    theme: 'Musique',
  },
  {
    question: "Quel musacée, est un bananier des Philippines, également appelé chanvre de Manille, et un des premiers noms communs du dictionnaire ?",
    answer: 'Abaca',
    options: ['Abaca', 'Abaccus', 'Sisal', 'Jute'],
    theme: 'Sciences',
  },
  {
    question: "Devant son utilisation en cuisine au Français Joël Roessel, comment est également appelé le jus ou l'eau de légumineuses ?",
    answer: 'Aquafaba',
    options: ['Aquafaba', 'Soupe', 'Consommé', 'Bouillon'],
    theme: 'Cuisine',
  },
  {
    question: "Quel héros de bande dessinée, paresseux et maladroit, créé par André Franquin en 1957, est employé de bureau au journal Spirou ? Il est reconnaissable à son col roulé vert.",
    answer: 'Gaston Lagaffe',
    options: ['Gaston Lagaffe', 'Spirou', 'Fantasio', 'Lucky Luke'],
    theme: 'Culture Générale',
  },
  {
    question: "En 2017, quel joueur de football ayant grandi à Bondy a été transféré de l'AS Monaco vers le PSG pour 145 Millions d'Euros ?",
    answer: 'Mbappé',
    options: ['Mbappé', 'Neymar', 'Cavani', 'Dembélé'],
    theme: 'Sport',
  },
  {
    question: "De son vrai nom Kamel Kebir, quel streamer est le fondateur de l'équipe e-sport Karmine Corp ?",
    answer: 'Kameto',
    options: ['Kameto', 'Squeezie', 'ZeratoR', 'Ponce'],
    theme: 'Culture Générale',
  },
  {
    question: "Dans quelle série de films le personnage de Pete Mitchell est-il interprété par Tom Cruise qui est un jeune prodige du pilotage d'avions ?",
    answer: 'Top Gun',
    options: ['Top Gun', 'Mission Impossible', 'Iron Eagle', 'Behind Enemy Lines'],
    theme: 'Cinéma',
  },
  {
    question: "Lors de l'opération Trident de Neptune menée les 1er et 2 mai 2011, quel terroriste et djihadiste est éliminé par forces spéciales étasuniennes ?",
    answer: 'Ben Laden',
    options: ['Ben Laden', 'Al-Zawahiri', 'Abou Bakr al-Baghdadi', 'Abou Moussab al-Zarqaoui'],
    theme: 'Histoire',
  },
  {
    question: "Quel adjectif qualifie un nombre ne possédant que deux diviseurs : lui-même et 1 ?",
    answer: 'Premier',
    options: ['Premier', 'Pair', 'Impair', 'Composé'],
    theme: 'Sciences',
  },
  {
    question: "Sur quel continent se trouve la Terre-Adélie, territoire découvert par Jules Dumont d'Urville et demandé depuis par la France, bien qu'elle n'y ait pas de droits ?",
    answer: 'Antarctique',
    options: ['Antarctique', 'Asie', 'Arctique', 'Amérique du Sud'],
    theme: 'Géographie',
  },
  {
    question: "Paronyme d'un acteur décédé en 2014, quel chanteur britannique, interprète des titres \"Angels\" et \"Feel\" était également le leader du groupe Take That ?",
    answer: 'Robbie Williams',
    options: ['Robbie Williams', 'Gary Barlow', 'Howard Donald', 'Jason Orange'],
    theme: 'Musique',
  },
  {
    question: "Quelle plante du genre Artemisia, portant un nom issu du grec signifiant «sans plaisir» en raison de son goût amer, a été utilisée pour préparer la boisson surnommée Fée Verte ?",
    answer: 'Absinthe',
    options: ['Absinthe', 'Ortie', 'Armoise', 'Genièvre'],
    theme: 'Cuisine',
  },
  {
    question: "Quel nom désignant le repas du mineur est également un petit appareil servant à faire du feu et couramment utilisé par les fumeurs ?",
    answer: 'Briquet',
    options: ['Briquet', 'Allumette', 'Lampion', 'Flambeau'],
    theme: 'Culture Générale',
  },
  {
    question: "À quel compositeur, cousin germain de la femme de Mozart doit-on, Euryanthe et Der Freischütz ou Le franc-tireur au début du XIXe siècle ?",
    answer: 'Carl Maria von Weber',
    options: ['Carl Maria von Weber', 'Franz Schubert', 'Ludwig van Beethoven', 'Gaetano Donizetti'],
    theme: 'Musique',
  },
  {
    question: "Quel athlète sud-africain, médaillé d'or aux JO de Rio en 2016, est l'actuel détenteur du record du monde du 400m ?",
    answer: 'Wayde Van Niekerk',
    options: ['Wayde Van Niekerk', 'Oscar Pistorius', 'Usain Bolt', 'Kirani James'],
    theme: 'Sport',
  },
  {
    question: "Quel insecte est l'emblème de l'équipe e-sport française Vitality ?",
    answer: 'Abeille',
    options: ['Abeille', 'Guêpe', 'Tigre', 'Lion'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel insecte de la famille des culicidés constitue le surnom d'Arthur dans le Disney \"Merlin l'enchanteur\" ?",
    answer: 'Moustique',
    options: ['Moustique', 'Coccinelle', 'Mouche', 'Pou'],
    theme: 'Animaux',
  },
  {
    question: "Quel homophone désigne à un L près, un officier médiéval préposé à la transmission de messages ou un département français ?",
    answer: 'Héraut',
    options: ['Héraut', 'Allier', 'Harrault', 'Herold'],
    theme: 'Culture Générale',
  },
  {
    question: "De quel pays était originaire l'astronaute Dirk Frimout ? Il fut le premier de son pays à aller dans l'espace et fut suivi par son compatriote Frank De Winne.",
    answer: 'Belgique',
    options: ['Belgique', 'Pays-Bas', 'Luxembourg', 'Suisse'],
    theme: 'Sciences',
  },
  {
    question: "Quel pays est constitué en partie du plateau du Deccan ? Ce plateau constituant la partie centrale et méridionale du pays est limité à l'ouest et à l'est par les chaînes montagneuses des Ghâts occidentaux et orientaux.",
    answer: 'Inde',
    options: ['Inde', 'Iran', 'Pakistan', 'Myanmar'],
    theme: 'Géographie',
  },
  {
    question: "Quel nom du premier album de Nirvana a inspiré Tite Kubo pour nommer un manga faisant partie du Big Three du Weekly Shonen Jump?",
    answer: 'Bleach',
    options: ['Bleach', 'Shonen', 'Naruto', 'One Piece'],
    theme: 'Culture Générale',
  },
  {
    question: "Dans les étables, comment appelle-t-on une jeune vache n'ayant pas encore vêlé ? C'est également en cet animal que fut métamorphosée Io dans la mythologie grecque.",
    answer: 'Génisse',
    options: ['Génisse', 'Vacherin', 'Taure', 'Broutarde'],
    theme: 'Animaux',
  },
  {
    question: "Quel verbe désignait autrefois l'action d'armer quelqu'un chevalier, souvent après une veillée d'armes, et le fait, aux échecs de remettre en place une pièce déplacée par accident ?",
    answer: 'Adouber',
    options: ['Adouber', 'Armer', 'Sacrer', 'Introniser'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel peintre surréaliste belge est l'auteur du tableau \"La Trahison des Images\" sur lequel est écrit la célèbre phrase \"Ceci n'est pas une pipe\" ?",
    answer: 'Magritte',
    options: ['Magritte', 'Dalí', 'Ernst', 'De Chirico'],
    theme: 'Art',
  },
  {
    question: "Quel pays a été, avec 44 médailles, soit 20 de plus que les USA, le plus titré des jeux paralympiques d'hiver de Milano-Cortina 2026 ?",
    answer: 'Chine',
    options: ['Chine', 'France', 'Ukraine', 'États-Unis'],
    theme: 'Sport',
  },
  {
    question: "Quelle série de jeux vidéo de tir à la première personne a des opus appelés Black Ops ou Modern Warfare ?",
    answer: 'Call of Duty',
    options: ['Call of Duty', 'Battlefield', 'Halo', 'Counter-Strike'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Quel héros de Disney accompagné du singe cleptomane Abu, est l'ennemi de Jafar et vole sur un tapis avec Jasmine ?",
    answer: 'Aladdin',
    options: ['Aladdin', 'Sinbad', 'Ali Baba', 'Scheherazade'],
    theme: 'Cinéma',
  },
  {
    question: "Quelle lettre de l'alphabet a laissé son nom au modèle produit par la marque Ford à partir de 1908 et étant la première automobile construite en série ?",
    answer: 'T',
    options: ['T', 'X', 'A', 'V'],
    theme: 'Histoire',
  },
  {
    question: "Quel segment orienté en mathématiques est symbolisé par trois caractéristiques : sa direction, son sens et sa norme ?",
    answer: 'Vecteur',
    options: ['Vecteur', 'Scalaire', 'Tenseur', 'Quaternion'],
    theme: 'Sciences',
  },
  {
    question: "Sur quelle île qui constitue également une région italienne se trouve le plus haut volcan d'Europe, l'Etna ?",
    answer: 'Sicile',
    options: ['Sicile', 'Sardaigne', 'Crète', 'Malte'],
    theme: 'Géographie',
  },
  {
    question: "Quel groupe musical est composé de quatre membres, prénommés Agnetha, Benny, Björn et Anni-Frid ?",
    answer: 'ABBA',
    options: ['ABBA', 'Bee Gees', 'ACE OF BASE', 'Roxette'],
    theme: 'Musique',
  },
  {
    question: "Quel nom désignant le petit du cheval est également le nom d'une marque commercialisant du chocolat ?",
    answer: 'Poulain',
    options: ['Poulain', 'Milka', 'Nesquik', 'Toblerone'],
    theme: 'Culture Générale',
  },
  {
    question: "Pouvant être stilettos lorsqu'ils sont hauts, quel nom désignant une chaussure est issu de l'italien qui signifie petite chaussure, scarpino ?",
    answer: 'Escarpin',
    options: ['Escarpin', 'Stiletto', 'Derby', 'Mule'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel prénom désignant également une chaussure avec une bride en T est celui de la fille d'Hérodiade voulant la tête de Saint Jean le Baptiste selon la Bible ?",
    answer: 'Salomé',
    options: ['Salomé', 'Marie', 'Hérodiade', 'Myriam'],
    theme: 'Culture Générale',
  },
  {
    question: "Depuis 2013, pour quel pays court l'athlète d'origine éthiopienne Sifan Hassan, championne olympique du marathon à Paris 2024 ?",
    answer: 'Pays-Bas',
    options: ['Pays-Bas', 'Éthiopie', 'Kenya', 'Bahreïn'],
    theme: 'Sport',
  },
  {
    question: "Quel personnage de jeu vidéo a été créé par Yuji Naka, considéré comme son principal fondateur ? Naoto Ōshima, et Hirokazu Yasuhara ont également participé à la création du personnage et de sa franchise.",
    answer: 'Sonic',
    options: ['Sonic', 'Yakuza', 'Altered Beast', 'Alex Kidd'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Quel nom désigne aussi bien Ben Grimm dans les 4 fantastiques que la main mouvante dans La Famille Addams ?",
    answer: 'La Chose',
    options: ['La Chose', 'La Main', 'Ben Grimm', 'Thing'],
    theme: 'Culture Générale',
  },
  {
    question: "Dans quelle ville, actuelle préfecture française, fut signée en 1420 un traité, souvent qualifié de honteux, qui prévoyait que la couronne de France passerait au roi d'Angleterre Henri V après la mort de Charles VI de France ?",
    answer: 'Troyes',
    options: ['Troyes', 'Bordeaux', 'Reims', 'Bourges'],
    theme: 'Histoire',
  },
  {
    question: "Par quelle locution imagée est désignée la particularité physique avec laquelle est né l'acteur Stacy Keach et également appelée fente labio-palatine ?",
    answer: 'Bec de lièvre',
    options: ['Bec de lièvre', 'Dent de lapin', 'Bouche de loup', 'Lèvre fendue'],
    theme: 'Culture Générale',
  },
  {
    question: "Combien d'avenues différentes partent de la place Charles de Gaulle à Paris, ancienne place de l'Etoile et qui contient en son centre l'Arc de Triomphe ?",
    answer: '12',
    options: ['12', '5', '8', '15'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel groupe québécois, fondé par Jean-François Pauzé notamment, auteur des titres \"L'Amérique pleure\", \"Les étoiles filantes\", ou \"Toune d'automne\" notamment, a perdu son chanteur principal, Karl Tremblay, d'un cancer, en 2023 ?",
    answer: 'Les Cowboys Fringants',
    options: ['Les Cowboys Fringants', 'Simple Plan', 'Malajube', 'Karkwa'],
    theme: 'Musique',
  },
  {
    question: "Quelle race de chevaux de parades, originaire de Slovénie, compose exclusivement l'Ecole espagnole de Vienne ? Cette race a la particularité de naître noir et devenir d'un gris très pâle au cours de sa vie.",
    answer: 'Lipizzan',
    options: ['Lipizzan', 'Lusitanien', 'Andalou', 'Selle français'],
    theme: 'Animaux',
  },
  {
    question: "Quelle variante de la paella sans riz, typique du Levant espagnol, est homonyme d'un type de drame lyrique espagnol né au XVIIe siècle ?",
    answer: 'Zarzuela',
    options: ['Zarzuela', 'Fideuà', 'Paella', 'Caldereta'],
    theme: 'Cuisine',
  },
  {
    question: "Quels équidés sont dits \"de Marly\" dans le nom de deux célèbres groupes sculptés par Guillaume Coustou en marbre et commandés à l'origine pour orner l'entrée du parc du château de Marly ?",
    answer: 'Cheval',
    options: ['Cheval', 'Lion', 'Taureau', 'Aigle'],
    theme: 'Art',
  },
  {
    question: "Dans quelle épreuve de lancer le tchèque Jan Železný détient-il le record du monde depuis 1996 avec un jet à 98,48 mètres ?",
    answer: 'Javelot',
    options: ['Javelot', 'Disque', 'Marteau', 'Poids'],
    theme: 'Sport',
  },
  {
    question: "Étant l'équivalent d'un CTRL+R, sur quelle touche unique du clavier doit-on appuyer pour rafraîchir une page internet ?",
    answer: 'F5',
    options: ['F5', 'F4', 'F6', 'F11'],
    theme: 'Sciences',
  },
  {
    question: "Selon le titre d'une émission présentée par Olivier Barrot entre 1991 et 2020, à quoi était associé \"Un livre\" ?",
    answer: 'Un jour',
    options: ['Un jour', 'Une histoire', 'Un auteur', 'Un roman'],
    theme: 'Culture Générale',
  },
  {
    question: "Frère de Rémus, quel homme, fils de Rhéa Silvia, est considéré comme le fondateur mythique de la ville de Rome ?",
    answer: 'Romulus',
    options: ['Romulus', 'Rémus', 'Énée', 'Numa Pompilius'],
    theme: 'Histoire',
  },
  {
    question: "Quel nom de quatre lettres porte l'orifice terminal de l'appareil digestif",
    answer: 'Anus',
    options: ['Anus', 'Rectum', 'Colon', 'Iléum'],
    theme: 'Sciences',
  },
  {
    question: "Quel pays, ayant adopté l'euro en 2026, est entré avec la Roumanie dans l'Union européenne en 2007 ?",
    answer: 'Bulgarie',
    options: ['Bulgarie', 'Roumanie', 'Croatie', 'Hongrie'],
    theme: 'Géographie',
  },
  {
    question: "Quelle chanteuse ayant rencontré son mari Grégoire Lyonnet sur le plateau de Danse avec les Stars est l'interprète de \"Moi… Lolita\" ?",
    answer: 'Alizée',
    options: ['Alizée', 'Lorie', 'Priscilla', 'Hélène'],
    theme: 'Musique',
  },
  {
    question: "Quel oiseau ratite, proche de l'autruche mais vivant en Australie, est le deuxième plus grand oiseau du monde ?",
    answer: 'Émeu',
    options: ['Émeu', 'Autruche', 'Casoar', 'Nandou'],
    theme: 'Animaux',
  },
  {
    question: "Quelle poudre fine de thé vert moulu, broyé entre deux meules en pierre, est utilisée pour la cérémonie du thé japonaise ?",
    answer: 'Matcha',
    options: ['Matcha', 'Sencha', 'Gyokuro', 'Hojicha'],
    theme: 'Cuisine',
  },
  {
    question: "Représenté par Aquilon dans la mythologie romaine, qui est le Dieu du vent du Nord dans la mythologie grecque ?",
    answer: 'Borée',
    options: ['Borée', 'Éole', 'Zéphyr', 'Notus'],
    theme: 'Culture Générale',
  },
  {
    question: "De quelle ville est originaire \"L'Aigle\", dans le surnom du coureur cycliste Federico Bahamontes ? Ce grand grimpeur espagnol est le vainqueur du Tour de France en 1959.",
    answer: 'Tolède',
    options: ['Tolède', 'Cordoue', 'Séville', 'Madrid'],
    theme: 'Sport',
  },
  {
    question: "Quel nombre à 4 chiffres est le nom d'une console de jeux vidéo domestique développée par Atari, lancée en 1977 ? Vendue à 30 millions d'exemplaires, son jeu le plus vendu est Pac-man.",
    answer: '2600',
    options: ['2600', '2000', '5200', '7800'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Quelle actrice est au centre du roman de Joyce Carol Oates intitulé Blonde ? Ce best-seller fut adapté au cinéma en 2022 avec Ana de Armas dans le rôle principal.",
    answer: 'Marilyn Monroe',
    options: ['Marilyn Monroe', 'Audrey Hepburn', 'Grace Kelly', 'Ava Gardner'],
    theme: 'Cinéma',
  },
  {
    question: "Quel grand roi antique a eu pour première épouse Roxane, nom provenant du vieux perse signifiant \"la lumineuse\" ? Capturée lors d'une conquête, elle épousa le roi au printemps de 327 av. J.-C., avant de mourir assassinée en 310.",
    answer: 'Alexandre le Grand',
    options: ['Alexandre le Grand', 'Guillaume le Conquérant', 'Jules César', 'Darius III'],
    theme: 'Histoire',
  },
  {
    question: "Quel nom désignant une contraction brève et brusque d'un muscle ou d'un groupe musculaire peut être phrénoglottique pour désigner le hoquet ?",
    answer: 'Myoclonie',
    options: ['Myoclonie', 'Crampe', 'Tétanie', 'Fasciculation'],
    theme: 'Sciences',
  },
  {
    question: "Ayant été statufiée par Jeanne Rynhart, dans quelle ville Molly Malone est-elle un emblème ? Une chanson à son nom, également nommée \"Cockles and Mussels\" constitue l'hymne officieux de la ville.",
    answer: 'Dublin',
    options: ['Dublin', 'Bruxelles', 'Édimbourg', 'Belfast'],
    theme: 'Géographie',
  },
  {
    question: "Selon le titre de sa chanson, dans quelle ville Murray Head passe-t-il \"One Night\" ? Cette ville asiatique est la capitale de son pays.",
    answer: 'Bangkok',
    options: ['Bangkok', 'Pékin', 'Singapour', 'Hanoi'],
    theme: 'Musique',
  },
  {
    question: "Sur une grappe de raisins, quel nom porte le support pédonculaire et ligneux sur lequel sont accrochés les raisins ?",
    answer: 'Rafle',
    options: ['Rafle', 'Pédicelle', 'Pampre', 'Grappe'],
    theme: 'Cuisine',
  },
  {
    question: "À quel membre de la famille l'adjectif avunculaire se rapporte-t-il ?",
    answer: 'Oncle',
    options: ['Oncle', 'Grand-père', 'Cousin', 'Beau-père'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle couleur est dite \"shocking\" dans le nom de la nuance de couleur créée par la créatrice de mode Elsa Schiaparelli ?",
    answer: 'Rose',
    options: ['Rose', 'Rouge', 'Orange', 'Fuchsia'],
    theme: 'Art',
  },
  {
    question: "Quel tennisman français a remporté le tournoi de Roland Garros en 1983, avant de devenir chanteur ?",
    answer: 'Noah',
    options: ['Noah', 'Leconte', 'Forget', 'Pioline'],
    theme: 'Sport',
  },
  {
    question: "De quel club de football français, René Malleville, célèbre pour son « c'est honteux » était-il un fervent supporter notamment sur le site internet Le Phocéen ?",
    answer: 'OM',
    options: ['OM', 'PSG', 'Lyon', 'Bordeaux'],
    theme: 'Sport',
  },
  {
    question: "Quel film réalisé par Cooper et Shoedsack en 1933 est le premier à mettre en scène un singe géant ?",
    answer: 'King Kong',
    options: ['King Kong', 'Gorille au fusil', 'Mighty Joe Young', 'Gigantis'],
    theme: 'Cinéma',
  },
  {
    question: "Quelle ville dont la fondation légendaire remonterait à l'an 421 a été dirigée par des doges jusqu'en 1797 ? 120 doges se sont succédés, dont Ludovico Manin qui était le dernier.",
    answer: 'Venise',
    options: ['Venise', 'Rome', 'Gênes', 'Florence'],
    theme: 'Géographie',
  },
  {
    question: "Quel sigle de 3 lettres désigne le système de train rapide mis en place en France à partir de 1981 ?",
    answer: 'TGV',
    options: ['TGV', 'TER', 'RER', 'ICE'],
    theme: 'Culture Générale',
  },
  {
    question: "Dans quelle capitale européenne se situe le Pont Charles ? Ce pont, symbole de la ville, tire son nom de l'empereur du Saint-Empire Romain Germanique entre 1355 et 1378, Charles IV.",
    answer: 'Prague',
    options: ['Prague', 'Vienne', 'Budapest', 'Varsovie'],
    theme: 'Géographie',
  },
  {
    question: "Quel rappeur canadien, de son vrai nom Aubrey Graham, a connu des succès notamment les titres \"God's plan\" ou \"Hotline Bling\" ?",
    answer: 'Drake',
    options: ['Drake', 'The Weeknd', 'Justin Bieber', 'Nav'],
    theme: 'Musique',
  },
  {
    question: "Quel rapace, étant également l'emblème de l'Equateur, peut être dit de Californie ou des Andes ?",
    answer: 'Condor',
    options: ['Condor', 'Aigle', 'Vautour', 'Gypaète'],
    theme: 'Animaux',
  },
  {
    question: "Quelle couleur affiche un feu tricolore lorsque nous sommes autorisés à circuler, sans avoir à ralentir ou s'arrêter ?",
    answer: 'Vert',
    options: ['Vert', 'Orange', 'Rouge', 'Blanc'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel mouvement interconfessionnel de dialogue et de rapprochement entre les diverses Eglises chrétiennes tend à promouvoir des actions communes entre les divers courants du christianisme ? Le nom est dérivé du grec désignant l'ensemble de la terre habitée.",
    answer: 'Œcuménisme',
    options: ['Œcuménisme', 'Syncrétisme', 'Prosélytisme', 'Concordat'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel tennisman constituait le dernier membre du Big Four avec Rafael Nadal, Roger Federer et Novak Djokovic ?",
    answer: 'Andy Murray',
    options: ['Andy Murray', 'Stan Wawrinka', 'Marin Čilić', 'Juan Martin del Potro'],
    theme: 'Sport',
  },
  {
    question: "Quel nom de famille porté le graphiste autrichien prénommé Robert à qui l'on doit la création des billets en euros, est aussi le prénom de la streameuse Kaatsup ?",
    answer: 'Kalina',
    options: ['Kalina', 'Koenig', 'Schöpf', 'Winter'],
    theme: 'Culture Générale',
  },
  {
    question: "Dans le célèbre péplum réalisé par William Wyler en 1959, quel acteur incarne le rôle de Judah Ben-Hur ?",
    answer: 'Charlton Heston',
    options: ['Charlton Heston', 'Monroe', 'Kirk Douglas', 'Stephen Boyd'],
    theme: 'Cinéma',
  },
  {
    question: "Dans quelle ville la mafia appelée Camorra fut-elle créée ? Elle est également appelée Bella Società Riformata, Società dell'Umirtà, Onorata Società ou O Sistema et fut créée au XIXe siècle.",
    answer: 'Naples',
    options: ['Naples', 'Bogota', 'Palerme', 'Rome'],
    theme: 'Histoire',
  },
  {
    question: "De quelle maladie, découverte dans un comté californien, le docteur Edward Francis a-t-il découvert le bacille ? Cette maladie touche principalement les lièvres et les rongeurs et peut être transmise aux humains.",
    answer: 'Tularémie',
    options: ['Tularémie', 'Brucellose', 'Leptospirose', 'Yersiniose'],
    theme: 'Sciences',
  },
  {
    question: "Dans quel pays a lieu le festival d'Oruro, dans la province de Cercado, constituant le plus grand événement culturel du pays et étant un grand carnaval ?",
    answer: 'Bolivie',
    options: ['Bolivie', 'Pérou', 'Brésil', 'Équateur'],
    theme: 'Géographie',
  },
  {
    question: "Quel guitariste et chanteur britannique, membre de Cream et des Yardbirds, a connu des succès avec les titres \"Layla\", \"Tears in Heaven\" et \"Wonderful Tonight\" notamment ?",
    answer: 'Éric Clapton',
    options: ['Éric Clapton', 'Jimmy Page', 'Jeff Beck', 'Pete Townshend'],
    theme: 'Musique',
  },
  {
    question: "Quel adjectif qualifie un animal ne possédant pas d'ailes ?",
    answer: 'Aptère',
    options: ['Aptère', 'Terrestre', 'Arboricole', 'Fouisseur'],
    theme: 'Animaux',
  },
  {
    question: "Pouvant être fuissé ou fumé, quel vin blanc originaire de la Nièvre est élaboré à partir de cépage sauvignon ?",
    answer: 'Pouilly',
    options: ['Pouilly', 'Sancerre', 'Menetou-Salon', 'Quincy'],
    theme: 'Cuisine',
  },
  {
    question: "Sous quel nom s'est fait connaître l'architecte, urbaniste et théoricien suisse naturalisé français en 1930, Charles-Edouard Jeanneret-Gris ?",
    answer: 'Le Corbusier',
    options: ['Le Corbusier', 'Auguste Perret', 'Jean Nouvel', 'Henri Sauvage'],
    theme: 'Art',
  },
  {
    question: "Au bowling, comment appelle-t-on le fait de faire tomber les dix quilles lors de son premier lancer ?",
    answer: 'Strike',
    options: ['Strike', 'Spare', 'Turkey', 'Gutter'],
    theme: 'Sport',
  },
  {
    question: "Parfois nommé \"sprint vidéo\", quelle pratique vidéoludique consiste à terminer un jeu vidéo le plus rapidement possible ?",
    answer: 'Speedrun',
    options: ['Speedrun', 'Playthrough', 'Any%', 'Noclip'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Quel personnage incarné au cinéma par Ralph Fiennes, principal antagoniste d'une série littéraire et cinématographique, a pour véritable nom Tom Elvis Jedusor ?",
    answer: 'Voldemort',
    options: ['Voldemort', 'Sauron', 'Thanos', 'Palpatine'],
    theme: 'Cinéma',
  },
  {
    question: "Née sous le nom de Madeleine Cinquin à Bruxelles, quelle religieuse fut surnommée la petite sœur des chiffonniers ?",
    answer: 'Sœur Emmanuelle',
    options: ['Sœur Emmanuelle', 'Mère Teresa', 'Sœur Marie', 'Sœur Sourire'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel chiffre représente un pH neutre, comme le possède l'eau ?",
    answer: '7',
    options: ['7', '0', '14', '5'],
    theme: 'Sciences',
  },
  {
    question: "Quelle ville, dans laquelle un restaurant McDonald's fut démonté en 1999 est une sous-préfecture de l'Aveyron célèbre pour son viaduc ?",
    answer: 'Millau',
    options: ['Millau', 'Rodez', 'Figeac', 'Aurillac'],
    theme: 'Géographie',
  },
  {
    question: "Quel chanteur français, élu à de multiples reprises personnalité préférée des français, a notamment écrit l'album \"D'eux\" pour Céline Dion ?",
    answer: 'Jean-Jacques Goldman',
    options: ['Jean-Jacques Goldman', 'Francis Cabrel', 'Alain Souchon', 'Michel Jonasz'],
    theme: 'Musique',
  },
  {
    question: "Quelle céréale, ayant pour nom scientifique \"hordeum vulgare\" est notamment utilisée dans la fabrication de la bière ?",
    answer: 'Orge',
    options: ['Orge', 'Houblon', 'Malt', 'Froment'],
    theme: 'Cuisine',
  },
  {
    question: "En plus du français, en quelle langue sont dispensés les enseignements des écoles diwan ? Elles font partie d'un réseau associatif fondé en 1977.",
    answer: 'Breton',
    options: ['Breton', 'Alsacien', 'Basque', 'Hindi'],
    theme: 'Culture Générale',
  },
  {
    question: "Chez Disney, quel nom porte le canard, savant farfelu d'origine autrichienne qui possède des diplômes de physique nucléaire et de séduction apparu pour la première fois en 1961 ?",
    answer: 'Ludwig von Drake',
    options: ['Ludwig von Drake', 'Donald Duck', 'Picsou', 'Fantomiald'],
    theme: 'Culture Générale',
  },
  {
    question: "En athlétisme, comment nomme-t-on généralement l'obstacle d'eau que les coureurs du 3000m steeple doivent franchir à sept reprises ?",
    answer: 'Rivière',
    options: ['Rivière', 'Haie', 'Barrière', 'Fosse'],
    theme: 'Sport',
  },
  {
    question: "Étant le deuxième jeu le plus vendu sur NES, quel jeu datant de 1984 est un jeu vidéo de tir au pistolet constitué d'une chasse au canard virtuelle ?",
    answer: 'Duck Hunt',
    options: ['Duck Hunt', 'Super Mario Bros', 'Tetris', "Mike Tyson's Punch-Out!!"],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Quelle émission télévisée diffusée pour la première fois en 1976 fut présentée par Jean-Pierre Hutin avec Mabrouk comme mascotte ?",
    answer: '30 millions d\'amis',
    options: ["30 millions d'amis", "30 millions de chats", 'Animaux en péril', 'Des animaux et des hommes'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel nom porté par le premier roi éthiopien, fils de la reine de Saba et Salomon est aussi celui du chanteur de \"Bye Bye\" en 1997 ?",
    answer: 'Ménélik',
    options: ['Ménélik', 'Salomé', 'Sheba', 'Makeda'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel élément chimique de numéro atomique 46 était associé au mot \"Bus\" dans le nom d'une ancienne discothèque parisienne ?",
    answer: 'Palladium',
    options: ['Palladium', 'Magnésium', 'Platine', 'Rhodium'],
    theme: 'Sciences',
  },
  {
    question: "Sur quelle île située dans la baie de Dakar, les esclaves transitaient-ils en quittant l'Afrique vers l'Amérique ? Cette île contient un centre de souvenir pour l'esclavage.",
    answer: 'Gorée',
    options: ['Gorée', 'Cap Vert', 'Sao Tomé', 'Zanzibar'],
    theme: 'Histoire',
  },
  {
    question: "Quel rappeur d'origine camerounaise à qui l'on doit Le Temps en 2020 sur l'album Fleur Froide a pour nom un acronyme anglais signifiant \"Prends tout ce que tu peux\" ? Il a également sorti l'album \"Héritage\" avec Dadju.",
    answer: 'Tayc',
    options: ['Tayc', 'Dadju', 'Maes', 'Naza'],
    theme: 'Musique',
  },
  {
    question: "Quel animal est le seul vivant appartenant à l'ordre des proboscidiens ?",
    answer: 'Éléphant',
    options: ['Éléphant', 'Jaguar', 'Rhinocéros', 'Tapir'],
    theme: 'Animaux',
  },
  {
    question: "Dans quelle ville l'agence de presse Reuters est-elle basée ? Elle fait partie des plus grandes agences de presse du monde et fut fondée en 1851.",
    answer: 'Londres',
    options: ['Londres', 'Berne', 'New York', 'Paris'],
    theme: 'Géographie',
  },
  {
    question: "A quel peintre impressionniste limougeaud de naissance doit-on les tableaux impressionnistes \"Le déjeuner des canotiers\" et \"Le bal du moulin de la Galette\" ?",
    answer: 'Pierre-Auguste Renoir',
    options: ['Pierre-Auguste Renoir', 'Manet', 'Monet', 'Degas'],
    theme: 'Art',
  },
  {
    question: "Au volley-ball, à quel poste évolue le joueur portant un maillot différent de ses partenaires ? Il se distingue également par le fait qu'il n'a pas le droit d'attaquer le ballon.",
    answer: 'Libéro',
    options: ['Libéro', 'Passeur', 'Attaquant', 'Central'],
    theme: 'Sport',
  },
  {
    question: "Quel nom porte la capsule permettant de capturer et de contenir les Pokémon ?",
    answer: 'Pokéball',
    options: ['Pokéball', 'Master Ball', 'Capsule', 'Poké-sphère'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Nommée Organa, quel prénom porte la fille d'Anakin et Padmé Amidala, soeur jumelle de Luke Skywalker et princesse de Star Wars ? Elle a notamment été interprétée au cinéma par Carrie Fisher.",
    answer: 'Leia',
    options: ['Leia', 'Padmé', 'Rey', 'Ahsoka'],
    theme: 'Cinéma',
  },
  {
    question: "Dans quelle capitale fut construit en 1863 le tout premier métro du monde ? Le métro parisien, en comparaison, date de 1900.",
    answer: 'Londres',
    options: ['Londres', 'Paris', 'New York', 'Berlin'],
    theme: 'Histoire',
  },
  {
    question: "Quel organe du corps humain est étudié dans le cadre de l'hépatologie ?",
    answer: 'Foie',
    options: ['Foie', 'Rein', 'Cœur', 'Poumon'],
    theme: 'Sciences',
  },
  {
    question: "Quelle capitale européenne est entourée, dans sa région, par les communes de Molenbeek, Schaerbeek et Saint-Gilles notamment ?",
    answer: 'Bruxelles',
    options: ['Bruxelles', 'Amsterdam', 'La Haye', 'Liège'],
    theme: 'Géographie',
  },
  {
    question: "Quel groupe musical était composé de George Harrison, Paul McCartney, John Lennon et Ringo Starr ?",
    answer: 'The Beatles',
    options: ['The Beatles', 'The Rolling Stones', 'The Who', 'Led Zeppelin'],
    theme: 'Musique',
  },
  {
    question: "Quel camélidé domestique des Andes, cousin du lama, possédant trois fois la lettre \"A\" dans son nom, est élevé pour sa toison ?",
    answer: 'Alpaga',
    options: ['Alpaga', 'Lama', 'Vigogne', 'Guanaco'],
    theme: 'Animaux',
  },
  {
    question: "Quelle confiserie à base de miel, de sucre, de blanc d'oeuf et d'amandes est une variante espagnole du nougat ?",
    answer: 'Touron',
    options: ['Touron', 'Nougat', 'Massepain', 'Halva'],
    theme: 'Cuisine',
  },
  {
    question: "Quel héros grec est le meilleur ami de Patrocle au cours de la guerre de Troie, qui meurt sous la main d'Hector ?",
    answer: 'Achille',
    options: ['Achille', 'Ulysse', 'Ajax', 'Diomède'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel nom de trois lettres désigne la ceinture du kimono ?",
    answer: 'Obi',
    options: ['Obi', 'Dan', 'Kyu', 'Hakama'],
    theme: 'Culture Générale',
  },
  {
    question: "Dans le sigle GPT, présent le nom de l'agent conversationnel ChatGPT, quel mot anglais est désigné par la lettre G ?",
    answer: 'Generative',
    options: ['Generative', 'Generator', 'General', 'Genuine'],
    theme: 'Sciences',
  },
  {
    question: "Quel acteur et humoriste britannique, principalement connu pour avoir tenu le rôle principal d'une série comique entre 1990 et 1995 tient le rôle principal dans le film \"Johnny English\" en 2003 ?",
    answer: 'Rowan Atkinson',
    options: ['Rowan Atkinson', 'Hugh Laurie', 'Stephen Fry', 'John Cleese'],
    theme: 'Cinéma',
  },
  {
    question: "Quel nom signifiant \"patrie commune\" en celtique est l'un des des noms latinisés du Pays de Galles dans l'antiquité ? Le nom de la première période géologique de l'ère Paléozoïque est tiré de cette région.",
    answer: 'Cambrie',
    options: ['Cambrie', 'Galles', 'Albion', 'Calédonie'],
    theme: 'Sciences',
  },
  {
    question: "Quelles artères situées dans le thorax et le cou vascularisent la plus grande partie de la tête et une partie du cou ? Le nom est dérivé du grec signifiant \"soporifique\" car ces artères étaient censées causer l'évanouissement.",
    answer: 'Carotides',
    options: ['Carotides', 'Jugulaires', 'Fémorales', 'Coronaires'],
    theme: 'Sciences',
  },
  {
    question: "Quelle ville, abandonnée au profit de Brades fut complètement rasée par des éruptions volcaniques dans les années 90 sur l'île de Montserrat ? Elle porte le même nom qu'une ville portuaire britannique.",
    answer: 'Plymouth',
    options: ['Plymouth', 'Brades', 'Cork', 'Portsmouth'],
    theme: 'Géographie',
  },
  {
    question: "Quel chanteur québécois, né en 1914, pionnier de la chanson poétique locale, est l'auteur de \"Le P'tit Bonheur\" notamment, en plus d'avoir laissé son prénom à l'équivalent québécois des victoires de la musique ?",
    answer: 'Félix Leclerc',
    options: ['Félix Leclerc', 'Gilles Vigneault', 'Raymond Lévesque', 'Claude Léveillée'],
    theme: 'Musique',
  },
  {
    question: "Sous quel nom commercial connaît-on mieux la baie du lyciet commun ? Ce fruit est produit principalement dans la région autonome du Ningxia, en Chine.",
    answer: 'Goji',
    options: ['Goji', 'Açaï', 'Baie de Schisandra', 'Mûre'],
    theme: 'Culture Générale',
  },
  {
    question: "Par opposition au kakémono, plus haut que large, quelle peinture sur soie ou sur papier japonaise est plus large que haute ?",
    answer: 'Makémono',
    options: ['Makémono', 'Kakémono', 'Nishiki-e', 'Emaki'],
    theme: 'Art',
  },
  {
    question: "Quel auteur érotique de langue allemande, notamment de \"La Vénus à la fourrure\" a laissé son nom au masochisme ? Par antonomase, cet écrivain possédant un nom composé né en 1836 a laissé son nom à cette pratique.",
    answer: 'Leopold von Sacher-Masoch',
    options: ['Leopold von Sacher-Masoch', 'Marquis de Sade', 'Georges Bataille', 'Pauline Réage'],
    theme: 'Littérature',
  },
  {
    question: "Quel mustélidé constituait le surnom du coureur cycliste Bernard Hinault ? Il expliquait son surnom de cette manière \"Quand on m'emmerde, je rentre dans mon trou ; mais quand je sors, je mords.\"",
    answer: 'Blaireau',
    options: ['Blaireau', 'Taupe', 'Belette', 'Fouine'],
    theme: 'Sport',
  },
  {
    question: "Quel sous-titre est accolé au jeu vidéo \"Black Myth\", jeu de type action-RPG créé par un studio chinois sorti en août 2024 ? Ce jeu s'inscrit dans l'univers du roman chinois classique \"La Pérégrination vers l'Ouest\".",
    answer: 'Wukong',
    options: ['Wukong', 'Monkey King', 'Dragon Ball', 'Journey to the West'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Quel acteur britannico-nigérian incarne le père du héros dans \"Le Garçon qui dompta le vent\" dont il est le réalisateur, et Solomon Northup dans \"Twelve Years a Slave\" ?",
    answer: 'Chiwetel Ejiofor',
    options: ['Chiwetel Ejiofor', 'Idris Elba', 'John Boyega', 'Nonso Anozie'],
    theme: 'Cinéma',
  },
  {
    question: "Quel général et homme politique romain du Ier siècle avant notre ère s'est successivement rapproché d'Octave-Auguste puis de Marc-Antoine, avec qui il formait le second triumvirat ?",
    answer: 'Lépide',
    options: ['Lépide', 'Tibère', 'Brutus', 'Crassus'],
    theme: 'Histoire',
  },
  {
    question: "Du grec signifiant trouver, quel nom désigne l'art de l'invention ? C'est aussi la partie de la science qui a pour objet les procédures de recherche et de découverte ?",
    answer: 'Heuristique',
    options: ['Heuristique', 'Herméneutique', 'Dialectique', 'Maïeutique'],
    theme: 'Sciences',
  },
  {
    question: "Quel pays a donné son nom au canal séparant le continent africain de l'île de Madagascar ?",
    answer: 'Mozambique',
    options: ['Mozambique', 'Panama', 'Madagascar', 'Tanzanie'],
    theme: 'Géographie',
  },
  {
    question: "Quel portoricain ayant pour véritable nom Juan Carlos Rosado s'est fait connaître avec les albums ou singles de reggaeton appelés Diles et Odisea en 2016 et 2017 ?",
    answer: 'Ozuna',
    options: ['Ozuna', 'Daddy Yankee', 'Bad Bunny', 'J Balvin'],
    theme: 'Musique',
  },
  {
    question: "Quelle céréale, à partir de laquelle on fabrique la crêpe appelée injera ou la bière appelée tella, est un aliment de base en Éthiopie ?",
    answer: 'Teff',
    options: ['Teff', 'Sarrasin', 'Millet', 'Sorgho'],
    theme: 'Cuisine',
  },
  {
    question: "Quel gentilé d'une île de la Sonde est l'autre nom de l'argot appelé langue de feu ? Cet argot apparu au XIXe siècle était caractérisé par l'insertion d'une syllabe supplémentaire entre voyelles et consonnes, dans le but de rendre un énoncé moins compréhensible aux non initiés.",
    answer: 'Javanais',
    options: ['Javanais', 'Verlan', 'Louchébem', 'Esperanto'],
    theme: 'Culture Générale',
  },
  {
    question: "Dans quel pays actuel se situe la cathédrale Saint-Jacques de Šibenik, construite par l'architecte Georges le Dalmate au XVe siècle ?",
    answer: 'Croatie',
    options: ['Croatie', 'Slovénie', 'Bosnie-Herzégovine', 'Monténégro'],
    theme: 'Géographie',
  },
  {
    question: "Quel pilote de Formule 1 français devait son surnom de Professeur à son approche intellectuelle de son sport et de ses courses ?",
    answer: 'Prost',
    options: ['Prost', 'Lauda', 'Senna', 'Hill'],
    theme: 'Sport',
  },
  {
    question: "Quel nombre est associé à l'expédition, dans le nom du sous-titre du jeu vidéo Clair Obscur, récipiendaire du GOTY en 2025 ?",
    answer: '33',
    options: ['33', '22', '44', '55'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Quel compositeur français est au centre du biopic réalisé \"Boléro\" réalisé par Anne Fontaine ? Le compositeur est incarné par Raphaël Personnaz.",
    answer: 'Ravel',
    options: ['Ravel', 'Debussy', 'Saint-Saëns', 'Fauré'],
    theme: 'Musique',
  },
  {
    question: "En 509 avant notre ère, quelle dame romaine est violée par Sextus Tarquin selon Tite-Live, dans un épisode mettant fin à la royauté des Tarquins et marquant le début de la République romaine ?",
    answer: 'Lucrèce',
    options: ['Lucrèce', 'Livie', 'Cléopâtre', 'Cornélie'],
    theme: 'Histoire',
  },
  {
    question: "Quel élément chimique, de numéro atomique 34, porte un nom d'origine grecque faisant référence à la Lune, notamment à la déesse de la Lune dans la mythologie grecque ?",
    answer: 'Sélénium',
    options: ['Sélénium', 'Gallium', 'Tellure', 'Polonium'],
    theme: 'Sciences',
  },
  {
    question: "Quel fleuve né à 170 kilomètres de l'océan Pacifique se jette dans l'océan Atlantique après un parcours de 6300 kilomètres ?",
    answer: 'Amazone',
    options: ['Amazone', 'Danube', 'Mississippi', 'Congo'],
    theme: 'Géographie',
  },
  {
    question: "Quelle figure de style est employée dans le titre d'une chanson et du neuvième album de Barbara \"Le Soleil Noir\" ? Son titre est inspiré par le poème El Desdichado de Gérard de Nerval.",
    answer: 'Oxymore',
    options: ['Oxymore', 'Antithèse', 'Métaphore', 'Chiasme'],
    theme: 'Littérature',
  },
  {
    question: "Combien de pattes possèdent tous les insectes ?",
    answer: '6',
    options: ['6', '8', '4', '10'],
    theme: 'Sciences',
  },
  {
    question: "Dans le sigle SARL désignant un type d'entreprise, quel nom est désigné par la lettre R ?",
    answer: 'Responsabilité',
    options: ['Responsabilité', 'Règlementée', 'Restreinte', 'Réduite'],
    theme: 'Culture Générale',
  },
  {
    question: "Dans le titre d'un célèbre roman d'Alexandre Dumas père, combien y a-t-il de mousquetaires ?",
    answer: '3',
    options: ['3', '4', '5', '7'],
    theme: 'Littérature',
  },
  {
    question: "Quel footballeur français fut surnommé The King lorsqu'il jouait à Manchester United ?",
    answer: 'Cantona',
    options: ['Cantona', 'Zidane', 'Platini', 'Papin'],
    theme: 'Sport',
  },
  {
    question: "Sous quel nom est plus connu Xavier Dang, propriétaire de la chaîne Twitch sur laquelle est diffusé SpeeDons, le marathon de speedrun caritatif, levant des fonds pour une association ?",
    answer: 'Mister MV',
    options: ['Mister MV', 'Pokimane', 'ZeratoR', 'Squeezie'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel animal est au centre du film \"La Marche de l'Empereur\" réalisé par Luc Jacquet en 2005 ?",
    answer: 'Manchot',
    options: ['Manchot', 'Pingouin', 'Albatros', 'Macareux'],
    theme: 'Animaux',
  },
  {
    question: "Dans quel pays actuel est situé le Camp de concentration de Natzweiler-Struthof ? Il a vu passer environ 50 000 personnes dont entre 17 000 et 22 000 y sont mortes. Il s'agit du seul camp de concentration nazi sur le territoire de ce pays au cours de la Seconde Guerre mondiale.",
    answer: 'France',
    options: ['France', 'Allemagne', 'Pologne', 'Autriche'],
    theme: 'Histoire',
  },
  {
    question: "Que signifie la lettre \"D\" dans l'acronyme COVID, sachant que les quatre premières lettres sont la contraction de coronavirus ? Il s'agit d'un mot anglais.",
    answer: 'Disease',
    options: ['Disease', 'Disorder', 'Déficit', 'Danger'],
    theme: 'Sciences',
  },
  {
    question: "Dans quelle ville fut organisée l'exposition universelle de 1958 ? C'est pour cette occasion que fut construit l'Atomium, devenu l'un des symboles de la ville.",
    answer: 'Bruxelles',
    options: ['Bruxelles', 'Suisse', 'Paris', 'Genève'],
    theme: 'Histoire',
  },
  {
    question: "Quel rappeur caennais a sorti l'album La Fuite en Avant en 2025, comprenant notamment les titres \"Plus rien\", \"Yoroï\" et \"Les Monstres\" ?",
    answer: 'Orelsan',
    options: ['Orelsan', 'Nekfeu', 'Vald', 'SCH'],
    theme: 'Musique',
  },
  {
    question: "Quel insecte volant appartient, tout comme la demoiselle, à l'ordre des odonates ?",
    answer: 'Libellule',
    options: ['Libellule', 'Moustique', 'Phrygane', 'Éphémère'],
    theme: 'Animaux',
  },
  {
    question: "Au scrabble, combien de points valent les lettres Q et J ?",
    answer: '8',
    options: ['8', '5', '10', '6'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel artiste, créateur du logo Renault, est né en 1906 en Hongrie et est l'un des initiateurs de l'op art ?",
    answer: 'Victor Vasarely',
    options: ['Victor Vasarely', 'Bridget Riley', 'Yakov Agam', 'Jean-Pierre Yvaral'],
    theme: 'Art',
  },
  {
    question: "Quelle équipe de football a soulevé le plus de fois, depuis 1956, la coupe aux grandes oreilles, c'est-à-dire le trophée de la Ligue des champions de l'UEFA ?",
    answer: 'Real Madrid',
    options: ['Real Madrid', 'Milan AC', 'Bayern Munich', 'Liverpool'],
    theme: 'Sport',
  },
  {
    question: "En informatique, quel type d'outil permet substituer à un élément de matériel informatique, tel un terminal informatique, un ordinateur, une console de jeux, ou un logiciel ? Le nom provient du latin signifiant \"rivaliser\".",
    answer: 'Émulateur',
    options: ['Émulateur', 'Simulateur', 'Décompilateur', 'Interpréteur'],
    theme: 'Sciences',
  },
  {
    question: "Quel réalisateur français s'illustrant dans le cinéma d'animation est principalement connu pour sa trilogie mettant en scène le personnage de Kirikou ?",
    answer: 'Michel Ocelot',
    options: ['Michel Ocelot', 'Sylvain Chomet', 'Jacques-Rémy Girerd', 'René Laloux'],
    theme: 'Cinéma',
  },
  {
    question: "Comment nommait-on, dans la Rome antique, les protecteurs des magistrats à imperium, qui possédait notamment des faisceaux ?",
    answer: 'Licteurs',
    options: ['Licteurs', 'Prétoriens', 'Édiles', 'Tribuns'],
    theme: 'Histoire',
  },
  {
    question: "Quel nom désigne une infection parasitaire du cuir chevelu causée par le pou de la tête ?",
    answer: 'Pédiculose',
    options: ['Pédiculose', 'Psoriasis', 'Teigne', 'Folliculite'],
    theme: 'Sciences',
  },
  {
    question: "Quel pays a pour plus grande île celle de Sakhaline, située à l'est du pays et faisant plus de 77 000 kilomètres carrés, soit la taille de la République Tchèque ?",
    answer: 'Russie',
    options: ['Russie', 'Grèce', 'Japon', 'Norvège'],
    theme: 'Géographie',
  },
  {
    question: "Quel est le nom de famille partagé par les membres du groupe 3T ? Les 3 fils d'un prénommé Tito ont pour prénoms Taj, Taryll et TJ et ont connu le succès en 1995.",
    answer: 'Jackson',
    options: ['Jackson', 'Mahal', 'Johnson', 'Wilson'],
    theme: 'Musique',
  },
  {
    question: "Quel mammifère est dit étrusque lorsqu'il désigne le plus petit mammifère d'Europe ? Il ne pèse que 1,8 gramme en moyenne pour une taille comprise entre 5,4 et 8,4 centimètres de long, queue comprise.",
    answer: 'Musaraigne étrusque',
    options: ['Musaraigne étrusque', 'Mulot', 'Campagnol', 'Pipistrelle'],
    theme: 'Animaux',
  },
  {
    question: "Quel type de vêtement japonais sont les tabi, qui peuvent être mis dans des geta ?",
    answer: 'Chaussettes',
    options: ['Chaussettes', 'Chaussures', 'Sandales', 'Jambières'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel célèbre compositeur est \"assassiné\" dans le titre d'un livre de Gilbert Cesbron ? \"C'est _______ qu'on assassine\". Cette expression tirée de la sociologie désigne une personne qui n'a pas eu la chance d'atteindre son plein potentiel.",
    answer: 'Mozart',
    options: ['Mozart', 'Beethoven', 'Bach', 'Schubert'],
    theme: 'Culture Générale',
  },
  {
    question: "De combien d'épreuves se compose la discipline de l'athlétisme dont Jackie Joyner-Kersee est la recordwoman actuelle ?",
    answer: '7',
    options: ['7', '10', '5', '8'],
    theme: 'Sport',
  },
  {
    question: "Quelle entreprise étasunienne, basée dans la Silicon Valley, a été fondée par Larry Page et Sergeï Brin en 1998",
    answer: 'Google',
    options: ['Google', 'Microsoft', 'Yahoo!', 'Apple'],
    theme: 'Sciences',
  },
  {
    question: "Quelle capitale européenne est associée à un grand hôtel dans le nom d'un film réalisé par Wes Anderson en 2014 ? Le film met en scène M. Gustave, incarné par Ralph Fiennes.",
    answer: 'Budapest',
    options: ['Budapest', 'Madrid', 'Vienne', 'Prague'],
    theme: 'Cinéma',
  },
  {
    question: "Quel dirigeant sud-africain a été enfermé pendant 27 ans avant de devenir président de son pays ?",
    answer: 'Mandela',
    options: ['Mandela', 'De Klerk', 'Tutu', 'Biko'],
    theme: 'Histoire',
  },
  {
    question: "De quelle couleur devient la peau d'une personne atteinte d'ictère ? Cette couleur est due à l'accumulation de bilirubine.",
    answer: 'Jaune',
    options: ['Jaune', 'Blanche', 'Verte', 'Bleue'],
    theme: 'Sciences',
  },
  {
    question: "Quelle île australienne ayant pour capitale Hobart est également l'un des états du pays et possède une flore et une faune en partie endémiques ?",
    answer: 'Tasmanie',
    options: ['Tasmanie', 'Tonga', 'Nouvelle-Guinée', 'Nouvelle-Calédonie'],
    theme: 'Géographie',
  },
  {
    question: "Dans quel style musical, lié à leur pays d'origine, s'illustrent les groupes Seventeen, Blackpink et BTS ?",
    answer: 'K-Pop',
    options: ['K-Pop', 'J-Pop', 'C-Pop', 'Mandopop'],
    theme: 'Musique',
  },
  {
    question: "Quel félin est considéré comme étant l'animal le plus rapide sur Terre ? Il peut atteindre une vitesse de 110 km/h.",
    answer: 'Guépard',
    options: ['Guépard', 'Léopard', 'Lion', 'Tigre'],
    theme: 'Animaux',
  },
  {
    question: "Quel nom désigne en cuisine, à la fois les morceaux de viande et le pic sur lequel ils sont enfilés ?",
    answer: 'Brochette',
    options: ['Brochette', 'Fondue', 'Raclette', 'Wok'],
    theme: 'Cuisine',
  },
  {
    question: "Quelle aphérèse d'un mot italien signifiant rondo désigne le format de peinture circulaire ?",
    answer: 'Tondo',
    options: ['Tondo', 'Rondisme', 'Ovale', 'Mandorle'],
    theme: 'Art',
  },
  {
    question: "Dans quel sport est remis chaque année, ce depuis 1967, le trophée du Commissaire ?",
    answer: 'Baseball',
    options: ['Baseball', 'Billard', 'Hockey sur glace', 'Football américain'],
    theme: 'Sport',
  },
  {
    question: "Sous quel nom la série de fantasy du polonais Andrzej Sapkowski intitulée Le Sorceleur a-t-elle été adaptée en jeu vidéo puis en série avec Henry Cavill ?",
    answer: 'The Witcher',
    options: ['The Witcher', 'Game of Thrones', 'The Wheel of Time', 'Shadow and Bone'],
    theme: 'Séries TV',
  },
  {
    question: "Quelle série diffusée entre 2013 et 2022 a pour générique le titre de Nick Cave and the Bad Seeds intitulé \"Red Right Hand\" ?",
    answer: 'Peaky Blinders',
    options: ['Peaky Blinders', 'Boardwalk Empire', 'Mindhunter', 'Narcos'],
    theme: 'Séries TV',
  },
  {
    question: "Quel prénom porte la riveteuse, icône de la culture populaire américaine apparue sur l'affiche We Can Do It ?",
    answer: 'Rosie',
    options: ['Rosie', 'Musclette', 'Betty', 'Joanie'],
    theme: 'Histoire',
  },
  {
    question: "Quel dieu de la terreur dans la mythologie grecque a laissé son nom à un des deux satellites de Mars, le plus petit et le plus éloigné de la planète ?",
    answer: 'Deimos',
    options: ['Deimos', 'Phobos', 'Titan', 'Io'],
    theme: 'Sciences',
  },
  {
    question: "Quelle capitale africaine portait autrefois le nom de Lourenço Marques, du nom d'un explorateur, a été rebaptisée sous son nom actuel en 1976 ?",
    answer: 'Maputo',
    options: ['Maputo', 'Koweït', 'Luanda', 'Beira'],
    theme: 'Géographie',
  },
  {
    question: "Quelle locution issue de l'italien désigne la chanteuse principale d'un opéra ? Elle est par la suite devenue un synonyme de diva.",
    answer: 'Prima donna',
    options: ['Prima donna', 'Castafio', 'Soprano', 'Diva'],
    theme: 'Musique',
  },
  {
    question: "Quel nom de trois lettres, dont une doublée, désigne également le poisson appelé Saint-Pierre ?",
    answer: 'Zée',
    options: ['Zée', 'Nen', 'Bar', 'Lieu'],
    theme: 'Animaux',
  },
  {
    question: "Comment se prénomme la styliste, fille d'un des membres des Beatles et d'une photographe étasunienne, Paul McCartney et Linda Eastman ? Née en 1971, elle prône une mode plus responsable.",
    answer: 'Stella',
    options: ['Stella', 'Linda', 'Mary', 'Heather'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel est le prénom de la femme du chef du village, Abraracourcix, dans la bande dessinée Astérix ?",
    answer: 'Bonemine',
    options: ['Bonemine', 'Falbala', 'Simprix', 'Vérolix'],
    theme: 'Culture Générale',
  },
  {
    question: "En quelle année auront lieu les prochains Jeux olympiques d'hiver ?",
    answer: '2030',
    options: ['2030', '2026', '2034', '2028'],
    theme: 'Sport',
  },
  {
    question: "Quelle application de messagerie la plus utilisée dans le monde a été rachetée par Facebook en 2014 ?",
    answer: 'WhatsApp',
    options: ['WhatsApp', 'Messenger', 'Telegram', 'WeChat'],
    theme: 'Culture Générale',
  },
  {
    question: "Comment se prénommait la guerrière dans le titre d'une série avec Lucy Lawless ? Cette série, spin-off de la série Hercules, fut diffusée entre 1995 et 2001.",
    answer: 'Xena',
    options: ['Xena', 'Buffy', 'Amazonia', 'Diana'],
    theme: 'Séries TV',
  },
  {
    question: "Quel pape, ayant été archévêque de Cracovie, avait pour nom de naissance Karol Józef Wojtyła ?",
    answer: 'Jean-Paul II',
    options: ['Jean-Paul II', 'Jean-Paul I', 'Benoît XVI', 'François'],
    theme: 'Histoire',
  },
  {
    question: "Quel médicament est l'anagramme exacte du mot \"parisien\" ?",
    answer: 'Aspirine',
    options: ['Aspirine', 'Résine', 'Ibuprofène', 'Morphine'],
    theme: 'Sciences',
  },
  {
    question: "Quelle capitale européenne voit son centre historique ceinturé par un boulevard appelée Ring construit sur le tracé de l'ancienne enceinte de la ville ?",
    answer: 'Vienne',
    options: ['Vienne', 'Rome', 'Bruxelles', 'Budapest'],
    theme: 'Géographie',
  },
  {
    question: "Quel DJ français a connu le succès en 2008 en featuring avec le chanteur Eric Carter avec le titre No Stress ? Son pseudonyme est celui d'un canidé en anglais.",
    answer: 'Laurent Wolf',
    options: ['Laurent Wolf', 'Bob Sinclar', 'David Guetta', 'Martin Solveig'],
    theme: 'Musique',
  },
  {
    question: "Quelle partie du corps d'un animal, notamment d'un chat par exemple, est appelée \"vibrisses\" ?",
    answer: 'Moustaches',
    options: ['Moustaches', 'Pattes', 'Poils', 'Griffes'],
    theme: 'Animaux',
  },
  {
    question: "Quel type de taillage en bâtonnets des légumes fait référence par son nom à un prénom féminin ?",
    answer: 'Julienne',
    options: ['Julienne', 'Brunoise', 'Chiffonnade', 'Paysanne'],
    theme: 'Cuisine',
  },
  {
    question: "Lequel des quatre évangélistes est représenté par un taureau ailé ? Les autres sont représentés par un homme ailé, un lion et un aigle.",
    answer: 'Luc',
    options: ['Luc', 'Marc', 'Matthieu', 'Jean'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel boxeur mexicain aux 63 victoires pour 68 combats fait partie des sportifs les mieux payés au monde depuis plusieurs années ? Il fut champion du monde dans quatre catégories de poids différentes et élu meilleur boxeur de l'année en 2019 et en 2021.",
    answer: 'Canelo Álvarez',
    options: ['Canelo Álvarez', 'Oscar De La Hoya', 'Julio César Chávez', 'Juan Manuel Márquez'],
    theme: 'Sport',
  },
  {
    question: "Quel homme, cofondateur de l'entreprise en 2015, est le PDG de l'entreprise OpenAI depuis 2023 ? Cette entreprise est notamment à l'origine de ChatGPT.",
    answer: 'Sam Altman',
    options: ['Sam Altman', 'Elon Musk', 'Greg Brockman', 'Ilya Sutskever'],
    theme: 'Sciences',
  },
  {
    question: "Quel film de 1988 fut inspiré par la vie de Kim Peek ?",
    answer: 'Rain Man',
    options: ['Rain Man', 'Forrest Gump', 'My Left Foot', 'A Beautiful Mind'],
    theme: 'Cinéma',
  },
  {
    question: "Quel musée municipal, situé dans le troisième arrondissement de la capitale, est consacré à l'Histoire de Paris, de ses origines à aujourd'hui ?",
    answer: 'Musée Carnavalet',
    options: ['Musée Carnavalet', "Musée d'Orsay", 'Musée Grévin', 'Musée de la Vie romantique'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel scientifique a reçu le prix Nobel de physique en 1921 pour ses travaux sur l'effet photoélectrique ?",
    answer: 'Albert Einstein',
    options: ['Albert Einstein', 'Max Planck', 'Niels Bohr', 'Robert Millikan'],
    theme: 'Sciences',
  },
  {
    question: "Quel écrivain russe, né à Nijni-Novgorod, ville qui a d'ailleurs pris son nom sous l'époque soviétique, est l'auteur de \"La Mère\" notamment et a laissé son nom à un grand parc moscovite ?",
    answer: 'Maxime Gorki',
    options: ['Maxime Gorki', 'Léon Tolstoï', 'Ivan Tourgueniev', 'Mikhail Boulgakov'],
    theme: 'Littérature',
  },
  {
    question: "Quel groupe de rock ayant perdu son chanteur Chester Bennington en 2017 a ressorti un album avec une nouvelle chanteuse, Emily Armstrong, en 2024 ?",
    answer: 'Linkin Park',
    options: ['Linkin Park', 'Nickelback', 'Evanescence', 'Papa Roach'],
    theme: 'Musique',
  },
  {
    question: "Quelle variété de sapin est phonétiquement proche du prénom du peintre américain nommé Rockwell ?",
    answer: 'Sapin Nordmann',
    options: ['Sapin Nordmann', 'Sapin de Noël', 'Pin sylvestre', 'Épicéa'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle variante de la sauce verte est un condiment sud-américain à base de piment originaire d'Uruguay et d'Argentine ? Le nom viendrait du basque signifiant \"mélange désorganisé de plusieurs ingrédients\".",
    answer: 'Chimichurri',
    options: ['Chimichurri', 'Wasabi', 'Guacamole', 'Salsa verde'],
    theme: 'Cuisine',
  },
  {
    question: "Quel philosophe français du XVIIIe siècle a utilisé une anagramme de sa véritable identité, François-Marie Arouet Le Jeune, pour trouver son pseudonyme ?",
    answer: 'Voltaire',
    options: ['Voltaire', 'Rousseau', 'Diderot', 'Montesquieu'],
    theme: 'Littérature',
  },
  {
    question: "Depuis 2005, comment s'appelle la première division du championnat de rugby en France ?",
    answer: 'Top 14',
    options: ['Top 14', 'Pro 16', 'Top 12', 'Division 1'],
    theme: 'Sport',
  },
  {
    question: "Quelle mannequin est l'influenceuse française la plus suivie dans le monde avec 10,4 millions d'abonnés sur Instagram ? Elle a participé au GP Explorer en 2025.",
    answer: 'Léa Elui',
    options: ['Léa Elui', 'Lena Situations', 'Pidi', 'Natoo'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle série américaine dont le nom en VO est \"Baywatch\" est célèbre pour ses maillots de bain rouges ?",
    answer: 'Alerte à Malibu',
    options: ['Alerte à Malibu', 'Hawaii Five-0', 'Baywatch Hawaii', 'Sunset Beach'],
    theme: 'Séries TV',
  },
  {
    question: "Né en 1901 et décédé en 1989, sous quel nom est connu Shōwa Tennō, l'empereur de l'ère Shōwa au Japon ? Son règne a commencé en 1926, il a donc vécu la Seconde Guerre mondiale à la tête de son pays et son fils Akihito lui a succédé.",
    answer: 'Hirohito',
    options: ['Hirohito', 'Akihito', 'Naruhito', 'Yoshihito'],
    theme: 'Histoire',
  },
  {
    question: "Quel est le nom scientifique du saignement de nez ? Le nom dérive du grec signifiant \"au-dessus\" et \"couler goutte à goutte\".",
    answer: 'Épistaxis',
    options: ['Épistaxis', 'Hémoptysie', 'Hématurie', 'Écchymose'],
    theme: 'Sciences',
  },
  {
    question: "Quel navigateur italien a laissé son nom au continent américain ? Prénommé Amerigo, il semble être l'un des premiers à avoir compris que les découvertes de Christophe Colomb étaient de nouvelles terres et non le continent asiatique.",
    answer: 'Vespucci',
    options: ['Vespucci', 'Colomb', 'Magellan', 'Cabot'],
    theme: 'Histoire',
  },
  {
    question: "De quelle région française l'hymne \"Bro gozh ma zadoù\" signifiant littéralement \"Vieux pays de mes pères\" a-t-il été adopté officiellement en 2021 ?",
    answer: 'Bretagne',
    options: ['Bretagne', 'Normandie', 'Alsace', 'Occitanie'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel animal était appelé autrefois goupil ? Le nom sous lequel est désormais connu cet animal est tiré d'une célèbre oeuvre littéraire médiévale.",
    answer: 'Renard',
    options: ['Renard', 'Loup', 'Blaireau', 'Belette'],
    theme: 'Animaux',
  },
  {
    question: "Quel taillage des légumes en dés porte le même nom qu'une ancienne république yougoslave ?",
    answer: 'Macédoine',
    options: ['Macédoine', 'Brunoise', 'Jardinière', 'Matignon'],
    theme: 'Cuisine',
  },
  {
    question: "Quel philosophe anglais du XVIIe siècle est l'exact homonyme d'un peintre irlandais du XXe siècle ? L'un est célèbre pour son \"Novum organum\" et l'autre pour ses tableaux représentant la violence, la cruauté et la tragédie.",
    answer: 'Francis Bacon',
    options: ['Francis Bacon', 'David Hume', 'John Locke', 'Lucian Freud'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel actuel détenteur du record du monde du marathon est décédé dans un accident de voiture début 2024 ? Il détient le record du monde du marathon en 2 heures et 35 secondes, établi à Chicago.",
    answer: 'Kelvin Kiptum',
    options: ['Kelvin Kiptum', 'Eliud Kipchoge', 'Kenenisa Bekele', 'Mo Farah'],
    theme: 'Sport',
  },
  {
    question: "Quel nom porte le réseau social dont le propriétaire est Donald Trump ? Il a lancé ce réseau peu après l'assaut du Capitole en 2021, moment où il a été banni de Facebook et Twitter.",
    answer: 'Truth Social',
    options: ['Truth Social', 'Parler', 'Gab', 'Gettr'],
    theme: 'Politique',
  },
  {
    question: "Quel nom d'échassier est associé au \"Garçon\" dans le titre du film de Hayao Miyazaki sorti en 2023 ?",
    answer: 'Héron',
    options: ['Héron', 'Aigle', 'Cigogne', 'Grue'],
    theme: 'Cinéma',
  },
  {
    question: "Quel anglicisme désigne la procédure de destitution du président des USA, qui peut être lancée ? Dans toute l'histoire du pays, seules quatre tentatives de destitutions ont été lancées, contre Andrew Johnson, Bill Clinton et deux fois contre Donald Trump.",
    answer: 'Impeachment',
    options: ['Impeachment', 'Recall', 'Veto', 'Filibuster'],
    theme: 'Politique',
  },
  {
    question: "Quel nom masculin désigne l'hypertrophie soit l'augmentation anormale du volume de la glande thyroïde ?",
    answer: 'Goître',
    options: ['Goître', 'Ganglion', 'Adénome', 'Nodule'],
    theme: 'Sciences',
  },
  {
    question: "Quel train reliant Calais à Vintimille a laissé son nom à un restaurant de la Gare de Lyon ? Inauguré en 1901, l'architecture du restaurant est due à Marius Toudoire.",
    answer: 'Train Bleu',
    options: ['Train Bleu', 'Orient Express', 'Mistral', "Côte d'Azur Express"],
    theme: 'Culture Générale',
  },
  {
    question: "Quel chanteur britannique né le 25 mars 1947 est connu pour sa collaboration artistique avec Bernie Taupin, auteur de la plupart de ses chansons ?",
    answer: 'Elton John',
    options: ['Elton John', 'Sting', 'Rod Stewart', 'David Bowie'],
    theme: 'Musique',
  },
  {
    question: "Quelle espèce de mammifère marin, parfois surnommées \"baleines tueuses\" ou \"killer whales\" en anglais, est également appelée \"épaulard\" ?",
    answer: 'Orque',
    options: ['Orque', 'Narvale', 'Béluga', 'Marsouin'],
    theme: 'Animaux',
  },
  {
    question: "Par opposition à l'anaphore, quel terme désigne le fait de reprendre un même mot ou un même groupe de mots en fin de plusieurs phrases ?",
    answer: 'Épiphore',
    options: ['Épiphore', 'Paraphrase', 'Anaphore', 'Épanalepse'],
    theme: 'Littérature',
  },
  {
    question: "Quel animal est dit \"au poing\" dans le nom d'un roman d'Hervé Bazin narrant la relation de Brasse-Bouillon avec sa mère, surnommée Folcoche ?",
    answer: 'Vipère',
    options: ['Vipère', 'Couleuvre', 'Aspic', 'Cobra'],
    theme: 'Littérature',
  },
  {
    question: "Dans quel sport les français Julia Simon, Emilien Jacquelin, Eric Perrot, Justine Braisaz-Bouchet et Quentin Fillon-Maillet s'illustrent-ils ?",
    answer: 'Biathlon',
    options: ['Biathlon', 'Ski de fond', 'Ski alpin', 'Triathlon'],
    theme: 'Sport',
  },
  {
    question: "Quel chiffre est associé au dernier opus du jeu vidéo Grand Theft Auto, sorti le 17 septembre 2013 sur consoles ?",
    answer: '5',
    options: ['5', '4', '6', 'V'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Quel héros fut interprété, dans des films et à des époques différentes, par Russell Crowe, Kevin Costner et Errol Flynn ?",
    answer: 'Robin des Bois',
    options: ['Robin des Bois', 'Zorro', 'Alexandre le Grand', 'Ivanhoe'],
    theme: 'Cinéma',
  },
  {
    question: "Quelle prison fut \"prise\" le 14 juillet 1789, marquant l'un des épisodes symbolisant les débuts de la Révolution française ?",
    answer: 'Bastille',
    options: ['Bastille', 'Louvre', 'Versailles', 'Palais-Royal'],
    theme: 'Histoire',
  },
  {
    question: "Quel os du corps humain, de la partie supérieure du thorax antérieur, tire son nom du latin signifiant petite clé ?",
    answer: 'Clavicule',
    options: ['Clavicule', 'Scapula', 'Sternum', 'Omoplate'],
    theme: 'Sciences',
  },
  {
    question: "Quel est le PAYS dont la capitale naquit de la fusion des trois villes d'Óbuda, Pest et Buda en 1873 ?",
    answer: 'Hongrie',
    options: ['Hongrie', 'Autriche', 'Tchéquie', 'Slovaquie'],
    theme: 'Géographie',
  },
  {
    question: "Quel nom de six lettres désigne une variété ou cultivar de la vigne ?",
    answer: 'Cépage',
    options: ['Cépage', 'Raisin', 'Vigne', 'Cru'],
    theme: 'Cuisine',
  },
  {
    question: "Quel nom, homophone de celui d'un animal, est celui du trou dans lequel on passe le fil d'une aiguille ?",
    answer: 'Chas',
    options: ['Chas', 'Chat', 'Trou', 'Œillet'],
    theme: 'Culture Générale',
  },
  {
    question: "Apparu pour la première fois dans La Ballade de la mer salée, quel héros de bande dessinée fut créé en 1967 par Hugo Pratt ?",
    answer: 'Corto Maltese',
    options: ['Corto Maltese', 'XIII', 'Thorgal', 'Largo Winch'],
    theme: 'Culture Générale',
  },
  {
    question: "Dans quel sport Yoo Nam-kyu, Jan-Ove Waldner et Ryu Seung-Min sont-ils les seuls non chinois ayant décroché des médailles d'or olympiques ?",
    answer: 'Tennis de table',
    options: ['Tennis de table', 'Badminton', 'Volleyball', 'Judo'],
    theme: 'Sport',
  },
  {
    question: "Dans le nom d'un meme internet venant à l'origine de Call of Duty : Advanced Warfare, sur quelle touche doit-on appuyer \"to pay respects\" ?",
    answer: 'F',
    options: ['F', 'X', 'E', 'R'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Quelle série dans laquelle Isabelle Nanty incarne une avocate porte un nom de cinq lettres, homonyme d'un peintre né en 1863 à Ådalsbruk ?",
    answer: 'Munch',
    options: ['Munch', 'Tuche', 'Monk', 'Lupin'],
    theme: 'Séries TV',
  },
  {
    question: "Quel vainqueur de la bataille de Hattin en 1187 est également le premier sultan de la dynastie des ayyoubides ? Il est le fils de Najm ad-Din Ayyub.",
    answer: 'Saladin',
    options: ['Saladin', 'Mehmet II', 'Soliman le Magnifique', 'Baïbars'],
    theme: 'Histoire',
  },
  {
    question: "Quelle partie du corps, dont l'adjectif lui étant relatif est génien, est en avant chez une personne prognathe ?",
    answer: 'Menton',
    options: ['Menton', 'Genou', 'Front', 'Maxillaire'],
    theme: 'Sciences',
  },
  {
    question: "Quel région de 58km², considérée comme étant le seul désert français se situe en Corse ?",
    answer: 'Désert des Agriates',
    options: ['Désert des Agriates', 'Haute-Corse', 'Camargue', 'Landes'],
    theme: 'Géographie',
  },
  {
    question: "Quel rappeur français, au pseudonyme en trois lettres, est l'interprète des titres \"Bolide allemand\", \"Cartier Santos\" ou \"Dolce Camara\" notamment ?",
    answer: 'SDM',
    options: ['SDM', 'PLK', 'SCH', 'Niro'],
    theme: 'Musique',
  },
  {
    question: "Quel chien, l'un des très rares n'aboyant pas mais dont le cri ressemble à un gloussement est parfois appelé terrier du Congo ? Il peut tirer l'une de ses appellations du lingala signifiant \"Chien des sauvages\" et son autre nom est constitué d'une syllabe redoublée.",
    answer: 'Basenji',
    options: ['Basenji', 'Coco', 'Bongo', 'Shiba'],
    theme: 'Animaux',
  },
  {
    question: "Quel jeu dont Nigel Richards est un néo-zélandais champion à l'international, fut créé par Alfred Mosher Butts en 1948 ?",
    answer: 'Scrabble',
    options: ['Scrabble', 'Tetris', 'Boggle', 'Mots croisés'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle pièce de Molière, inspirée par \"La Marmite\" de Plaute, met en scène le personnage d'Harpagon, caractérisé par son attachement aux richesses ?",
    answer: "L'Avare",
    options: ["L'Avare", 'Le Misanthrope', 'Les Fourberies de Scapin', 'Tartuffe'],
    theme: 'Littérature',
  },
  {
    question: "Quelle légende du football brésilien a pour véritable nom Edson Arantes do Nascimento ?",
    answer: 'Pelé',
    options: ['Pelé', 'Ronaldinho', 'Ronaldo', 'Zidane'],
    theme: 'Sport',
  },
  {
    question: "Quelle lettre est présente après le mot Wii, dans le nom d'une console de salon commercialisée par Nintendo en 2012 et 2017 ?",
    answer: 'U',
    options: ['U', 'S', 'X', 'HD'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Quel télé-crochet a été gagné sur ses dernières saisons par Amber Jadah, Marine, Pierre Garnier et Anisha Jo ?",
    answer: 'Star Academy',
    options: ['Star Academy', 'The Voice', 'Pop Idol', 'X Factor'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel pays africain, portant aujourd'hui un nom signifiant \"Pays des hommes intègres\" était anciennement dénommé Haute-Volta ?",
    answer: 'Burkina Faso',
    options: ['Burkina Faso', 'Cameroun', 'Mali', 'Niger'],
    theme: 'Géographie',
  },
  {
    question: "Quel préfixe multiplie une unité par un milliard ?",
    answer: 'Giga',
    options: ['Giga', 'Méga', 'Téra', 'Peta'],
    theme: 'Sciences',
  },
  {
    question: "Après la Russie, quel pays est le deuxième plus vaste du monde ? Avec près de 10 millions de kilomètres carrés, sa superficie est de plus de 7 millions de kilomètres carrés inférieure à celle de la Russie.",
    answer: 'Canada',
    options: ['Canada', 'États-Unis', 'Chine', 'Brésil'],
    theme: 'Géographie',
  },
  {
    question: "De quel pays est originaire le groupe de musique industrielle appelé \"Les Tambours du Bronx\" ? Formé en 1987, le nom n'a rien à voir avec le quartier new-yorkais.",
    answer: 'France',
    options: ['France', 'Canada', 'Belgique', 'Suisse'],
    theme: 'Musique',
  },
  {
    question: "Quel animal hybride, mâle, stérile, est issu de l'accouplement de l'âne et de la jument ?",
    answer: 'Mulet',
    options: ['Mulet', 'Bardot', 'Hybride', 'Bourricot'],
    theme: 'Animaux',
  },
  {
    question: "Selon une expression, quel fruit coupe-t-on en deux pour effectuer un partage équitable ?",
    answer: 'Poire',
    options: ['Poire', 'Pomme', 'Orange', 'Melon'],
    theme: 'Culture Générale',
  },
  {
    question: "À quel écrivain doit-on la création du terme de Merdre qui correspond à un mois du calendrier pataphysique ?",
    answer: 'Alfred Jarry',
    options: ['Alfred Jarry', 'Eugène Ionesco', 'Samuel Beckett', 'Antonin Artaud'],
    theme: 'Littérature',
  },
  {
    question: "En combien de fléchettes, au minimum, peut-on réaliser une manche parfaite de 501 aux fléchettes ?",
    answer: '9',
    options: ['9', '7', '11', '12'],
    theme: 'Sport',
  },
  {
    question: "Quel langage de programmation fait référence par son nom au prénom de la fille de Lord Byron, scientifique considérée comme l'une des premières informaticiennes ?",
    answer: 'Ada',
    options: ['Ada', 'Java', 'Python', 'Cobol'],
    theme: 'Sciences',
  },
  {
    question: "De quelle planète, au nom de trois lettres sous forme de palindrome, l'extraterrestre interprété par Jacques Villeret provient-il dans la Soupe aux Choux ?",
    answer: 'Oxo',
    options: ['Oxo', 'Prp', 'Ava', 'Pop'],
    theme: 'Cinéma',
  },
  {
    question: "Rebelle contre le règne des Habsbourg au temps de la révolution de 1848, quel premier Ministre-président du royaume de Hongrie a donné son nom à l'avenue du VIème arrondissement de Budapest sur laquelle se trouvent l'Opéra national hongrois ainsi que le musée Franz Liszt?",
    answer: 'Gyula Andrássy',
    options: ['Gyula Andrássy', 'Lajos Kossuth', 'Ferenc Deák', 'István Széchenyi'],
    theme: 'Histoire',
  },
  {
    question: "Quel nom masculin désigne le produit ajouté à un autre pour renforcer ou compléter son action, notamment en parlant de médicaments ?",
    answer: 'Adjuvant',
    options: ['Adjuvant', 'Anabolisant', 'Excipient', 'Catalyseur'],
    theme: 'Sciences',
  },
  {
    question: "Quel mot masculin désigne une habitation traditionnelle de Tahiti ou plus généralement de Polynésie ?",
    answer: 'Faré',
    options: ['Faré', 'Tipi', 'Paillote', 'Bungalow'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle partie du corps est dite \"In the sky\" dans le titre du plus grand succès du groupe \"The Alan Parsons Project\" ?",
    answer: 'Eye',
    options: ['Eye', 'Tête', 'Hand', 'Mind'],
    theme: 'Musique',
  },
  {
    question: "Quel nom issu du latin signifiant changer désigne l'écorce intérieure de l'arbre également désignée sous le terme de seconde écorce ?",
    answer: 'Cambium',
    options: ['Cambium', 'Phloème', 'Xylème', 'Liber'],
    theme: 'Sciences',
  },
  {
    question: "Aux côtés d'Henri Gault, quel journaliste et critique gastronomique a donné son nom à une guide gastronomique en 1972 ?",
    answer: 'Christian Millau',
    options: ['Christian Millau', 'Michelin', 'François Simon', 'Jean-Claude Ribaut'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel écrivain français, notamment inquiété au sortir de la Seconde Guerre mondiale pour sa complaisance avec l'ennemi, a créé le personnage de Ferdinand Bardamu, héros du \"Voyage au bout de la nuit\" ?",
    answer: 'Louis-Ferdinand Céline',
    options: ['Louis-Ferdinand Céline', 'Montaigne', 'André Malraux', 'Jean-Paul Sartre'],
    theme: 'Littérature',
  },
  {
    question: "Combien de joueurs y a-t-il dans chaque équipe sur le terrain lors d'un match de handball ?",
    answer: '7',
    options: ['7', '6', '8', '9'],
    theme: 'Sport',
  },
  {
    question: "Quel vidéaste suédois, de son vrai nom Felix Arvid Ulf Kjellberg, a été premier en nombre d'abonnés sur YouTube avant d'être dépassé par la chaîne T-Series ?",
    answer: 'PewDiePie',
    options: ['PewDiePie', 'MrBeast', 'T-Series', 'Markiplier'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle impératrice fut interprétée quatre fois au cinéma par Romy Schneider ? Les trois premiers films ont été réalisés par Ernst Marischka.",
    answer: 'Sissi',
    options: ['Sissi', 'Victoria', 'Marie-Antoinette', 'Élisabeth Ière'],
    theme: 'Cinéma',
  },
  {
    question: "Le 6 août 1945, sur quelle ville japonaise fut lancée la première bombe atomique par les USA ? Les deux bombes ont causé la mort d'entre 103 000 et 220 000 personnes.",
    answer: 'Hiroshima',
    options: ['Hiroshima', 'Nagasaki', 'Tokyo', 'Osaka'],
    theme: 'Histoire',
  },
  {
    question: "Quel facteur constant, exprimé par un nombre ou symbole le représentant, peut être dit de marée pour qualifier l'amplitude de celle-ci ?",
    answer: 'Coefficient',
    options: ['Coefficient', 'Indice', 'Facteur', 'Variable'],
    theme: 'Sciences',
  },
  {
    question: "Quel pays a pour principal indice boursier l'IBEX 35, qui était étalonné jusqu'en 2002 sur la valeur de la peseta ?",
    answer: 'Espagne',
    options: ['Espagne', 'Brésil', 'Portugal', 'Italie'],
    theme: 'Géographie',
  },
  {
    question: "Quelle chanson festive, donnant souvent l'occasion d'une danse, populaire dans les mariages ou les fêtes de famille, a interprété par La Bande à Basile en 1977 ? La danse et la chanson partagent le même nom.",
    answer: 'La Chenille',
    options: ['La Chenille', 'La Lambada', 'Le Macarena', 'Le Twist'],
    theme: 'Musique',
  },
  {
    question: "Quel animal de la famille des procyonidés tire son nom de son habitude qu'il a de plonger ses aliments dans l'eau avant de les manger ?",
    answer: 'Raton laveur',
    options: ['Raton laveur', 'Trempeur', 'Panda roux', 'Coati'],
    theme: 'Animaux',
  },
  {
    question: "Quel numéro à 3 chiffres est le numéro d'appel d'urgence valide dans l'intégralité de l'Union européenne ?",
    answer: '112',
    options: ['112', '911', '999', '115'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel célèbre écrivain ayant laissé son nom à un groupe mené par Frank Darcel est décédé à l'asile de Charenton en 1814 ?",
    answer: 'Marquis de Sade',
    options: ['Marquis de Sade', 'Montaigne', 'Casanova', 'Laclos'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel pongiste français, trois fois champion de France en simple en 2005, 2010 et 2011, est l'oncle des frères Alexis et Félix Lebrun ?",
    answer: 'Christophe Legoût',
    options: ['Christophe Legoût', 'Jean-Philippe Gatien', 'Adrien Mattenet', 'Emmanuel Lebesson'],
    theme: 'Sport',
  },
  {
    question: "Dans quel jeu vidéo sorti en 2018 le joueur doit-il gravir une montagne en incarnant le personnage de Madeline ? Il s'agit d'un jeu de plateforme en 2 dimensions.",
    answer: 'Celeste',
    options: ['Celeste', 'Hollow Knight', 'Ori and the Blind Forest', 'Shovel Knight'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Dans quel pays se déroule l'action du film \"District 9\" réalisé par Neill Blomkamp ? Ce film impliquant des extraterrestres met en perspective les questions d'humanité, de xénophobie et de ségrégation.",
    answer: 'Afrique du Sud',
    options: ['Afrique du Sud', 'États-Unis', 'Australie', 'Brésil'],
    theme: 'Cinéma',
  },
  {
    question: "Sous quel nom de dirigeant est plus connu le souverain né sous le nom de Temüjin Borjigin ? Il a pris ce nom lors d'un qurultay.",
    answer: 'Gengis Khan',
    options: ['Gengis Khan', 'Attila', 'Tamerlan', 'Kubilai Khan'],
    theme: 'Histoire',
  },
  {
    question: "Due à la présence d'un caillot de sang dans un vaisseau, quel mot féminin est synonyme de thrombose veineuse ?",
    answer: 'Phlébite',
    options: ['Phlébite', 'Escarre', 'Embolie', 'Thrombophlébite'],
    theme: 'Sciences',
  },
  {
    question: "Reconstruite par l'architecte Christopher Wren après le grand incendie de Londres en 1666, quel nom porte la plus grande cathédrale de Londres ?",
    answer: 'Cathédrale Saint-Paul',
    options: ['Cathédrale Saint-Paul', 'Big Ben', 'Westminster Abbey', 'Tour de Londres'],
    theme: 'Histoire',
  },
  {
    question: "Surnommée Ginger Spice, quelle ancienne membre des Spice Girls a, au cours de sa carrière solo lancée en 1999, rencontré le succès grâce à l'album \"Schizophonic\" puis à sa reprise de \"It's raining men\" ?",
    answer: 'Geri Halliwell',
    options: ['Geri Halliwell', 'Victoria Beckham', 'Mel B', 'Emma Bunton'],
    theme: 'Musique',
  },
  {
    question: "Sous quel nom commun sont désignés les arachnides du genre latrodectus, dont certaines espèces sont célèbres pour leur cannibalisme sexuel ?",
    answer: 'Veuve noire',
    options: ['Veuve noire', 'Tarentule', 'Mygale', 'Araignée rouge'],
    theme: 'Animaux',
  },
  {
    question: "Quel type de manteau ample sans manche, porté notamment par Arsène Lupin et Sherlock Holmes fut inventé par un écossais qui lui laissa son nom ?",
    answer: 'Macfarlane',
    options: ['Macfarlane', 'Inverness', 'Ulster', 'Burnous'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle héroïne de bande dessinée, créée par Emile-Joseph-Porphyre Pinchon en 1905, est une bretonne ayant pour véritable nom Annaïck Labornez ?",
    answer: 'Bécassine',
    options: ['Bécassine', 'Bibi Fricotin', 'Tintin', 'Sylvain et Sylvette'],
    theme: 'Culture Générale',
  },
  {
    question: "En combien de périodes se déroule un match de hockey sur glace, sans prolongation ?",
    answer: '3',
    options: ['3', '2', '4', '5'],
    theme: 'Sport',
  },
  {
    question: "Quel marathon caritatif réunissant plusieurs streamers, créé à l'initiative de ZeratoR, fêtera ses 10 ans en 2026 ?",
    answer: 'ZEvent',
    options: ['ZEvent', 'Speedons', 'Gamers Assembly', 'DreamHack'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel type de véhicule automobile est conduit par Robert de Niro dans le titre d'un film de Martin Scorsese sorti en 1976 ?",
    answer: 'Taxi',
    options: ['Taxi', 'Bus', 'Kmaro', 'Voiture de sport'],
    theme: 'Cinéma',
  },
  {
    question: "Quel pays africain s'est appelé Haute Volta jusqu'en 1983 ? Il a pris un nom signifiant \"pays des hommes intègres\" sous l'influence de Thomas Sankara.",
    answer: 'Burkina Faso',
    options: ['Burkina Faso', 'Cameroun', 'Mali', 'Sénégal'],
    theme: 'Géographie',
  },
  {
    question: "Quelle planète du système solaire est la plus proche du Soleil ? Il s'agit de la seule, avec Vénus, à ne pas avoir de satellite naturel.",
    answer: 'Mercure',
    options: ['Mercure', 'Vénus', 'Mars', 'Jupiter'],
    theme: 'Sciences',
  },
  {
    question: "Quelle ville du sud-est de la France, surnommée « La Cité des Papes », accueille tous les ans un festival de théâtre ?",
    answer: 'Avignon',
    options: ['Avignon', 'Carcassonne', 'Nîmes', 'Arles'],
    theme: 'Géographie',
  },
  {
    question: "Quel concept de l'histoire de l'aviation, dépassé au dessus de la vitesse de 340 m/s ou 1224 km/h, a laissé son nom à une chanson interprétée par Willy Denzey en 2003 ?",
    answer: 'Le Mur du Son',
    options: ['Le Mur du Son', 'La Vitesse du son', 'Mach 1', 'Le Mur du vent'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle fleur, également confiserie, est une des spécialités et l'un des symboles de la ville de Toulouse ?",
    answer: 'Violette',
    options: ['Violette', 'Rose', 'Lavande', 'Jasmin'],
    theme: 'Cuisine',
  },
  {
    question: "Quel entremets glacé sans cuisson porte un nom synonyme de \"sans défaut\", et également un prénom fêté aujourd'hui 18 avril ?",
    answer: 'Parfait',
    options: ['Parfait', 'Sorbet', 'Mousse', 'Semifreddo'],
    theme: 'Cuisine',
  },
  {
    question: "Quel représentant des assurances Mondass est, dans la BD Tintin, l'archétype du casse-pied ?",
    answer: 'Séraphin Lampion',
    options: ['Séraphin Lampion', 'Dupont et Dupond', 'Rastapopolous', 'Tournesol'],
    theme: 'Culture Générale',
  },
  {
    question: "Quelle est la couleur du bonnet du gardien au water-polo ? L'équipe évoluant à domicile possède un bonnet blanc et les visiteurs un bonnet bleu.",
    answer: 'Rouge',
    options: ['Rouge', 'Noir', 'Vert', 'Jaune'],
    theme: 'Sport',
  },
  {
    question: "Quel groupe français de commerce en ligne fut fondé, comme son nom l'indique, par Laurent de la Clergerie ?",
    answer: 'LDLC',
    options: ['LDLC', 'Shopify', 'Fnac', 'Cdiscount'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel réalisateur né en Tchécoslovaquie en 1932, possédant également la nationalité américaine, est à l'origine des films Man on the moon, Vol au-dessus d'un nid de coucou, et Amadeus ?",
    answer: 'Miloš Forman',
    options: ['Miloš Forman', 'Roman Polanski', 'Jan Švankmajer', 'Jiří Menzel'],
    theme: 'Cinéma',
  },
  {
    question: "Quel général étasunien de la Seconde Guerre mondiale, ayant participé au débarquement de Normandie, avait, en 1912, participé aux Jeux olympiques en faisant partie de l'équipe de pentathlon moderne ?",
    answer: 'George Patton',
    options: ['George Patton', 'Dwight Eisenhower', 'Omar Bradley', 'Douglas MacArthur'],
    theme: 'Histoire',
  },
  {
    question: "Quel nom porte la science du mouvement des projectiles ?",
    answer: 'Balistique',
    options: ['Balistique', 'Dynamique', 'Mécanique des fluides', 'Cinématique'],
    theme: 'Sciences',
  },
  {
    question: "Quel est le nom de la monnaie en Colombie-Britannique ? Réponse précise exigée",
    answer: 'Dollar canadien',
    options: ['Dollar canadien', 'Peso britannique', 'Dollar américain', 'Livre sterling'],
    theme: 'Géographie',
  },
  {
    question: "De quel groupe de rock originaire de Londres, formé en 1964, la série Les Experts utilise-t-elle des chansons pour ses différents génériques ? La version Miami utilise \"Won't get fooled again\" et Manhattan utilise \"Baba O'Riley\".",
    answer: 'The Who',
    options: ['The Who', 'Led Zeppelin', 'The Rolling Stones', 'The Kinks'],
    theme: 'Musique',
  },
  {
    question: "Transmettant la maladie du sommeil, quel genre de mouche est également appelé mouche tsé-tsé ? Ces mouches hématophages africaines sont à l'origine de la transmission de différentes trypanosomiases.",
    answer: 'Glossine',
    options: ['Glossine', 'Mouche des fruits', 'Mouche à viande', 'Gadfly'],
    theme: 'Animaux',
  },
  {
    question: "Quelle personnalité britannique du XIXe siècle subit de la part de fermiers un blocus en 1879 ? Son patronyme est devenu depuis lors un nom commun.",
    answer: 'Charles Cunningham Boycott',
    options: ['Charles Cunningham Boycott', 'Charles Parnell', 'Oliver Cromwell', 'Robert Peel'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel écrivain antique grec a largement inspiré Jean de la Fontaine pour ses différentes fables ? C'est à lui que l'on attribue généralement la paternité du genre de la fable.",
    answer: 'Ésope',
    options: ['Ésope', 'Phèdre', 'Aristophane', 'Théocrite'],
    theme: 'Littérature',
  },
  {
    question: "Par quelle capitale passe la classique cycliste commençant et terminant dans la ville de Kuurne ? La course est appelée \"Kuurne-___________-Kuurne\".",
    answer: 'Bruxelles',
    options: ['Bruxelles', 'Amsterdam', 'Gand', 'Liège'],
    theme: 'Sport',
  },
  {
    question: "Quelle multinationale dirigée par Mark Zuckerberg était anciennement connue sous le nom de Facebook Inc. avant de changer de nom en 2021 ?",
    answer: 'Meta',
    options: ['Meta', 'Alphabet', 'Twitter/X', 'ByteDance'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel acteur français a incarné Astérix dans le film \"Astérix et Obélix : Mission Cléopâtre\" ?",
    answer: 'Christian Clavier',
    options: ['Christian Clavier', 'Gérard Depardieu', 'Clovis Cornillac', 'Edouard Baer'],
    theme: 'Cinéma',
  },
  {
    question: "Quel est le numéro de la République française ayant duré, à ce jour, le plus longtemps ?",
    answer: 'Troisième',
    options: ['Troisième', 'Cinquième', 'Quatrième', 'Deuxième'],
    theme: 'Histoire',
  },
  {
    question: "Combien y a-t-il de protons dans un atome d'hydrogène ?",
    answer: '1',
    options: ['1', '0', '2', '8'],
    theme: 'Sciences',
  },
  {
    question: "Quel pays a pour pays frontaliers à la fois le Brésil et l'Allemagne ?",
    answer: 'France',
    options: ['France', 'Portugal', 'Pays-Bas', 'Belgique'],
    theme: 'Géographie',
  },
  {
    question: "Quel mois de l'année est associé au nom de \"Zéro\" dans le nom du personnage interprété par Claude Dubois dans l'opéra-rock Starmania ? Ce personnage est l'interprète de la chanson \"Le blues du businessman\".",
    answer: 'Janvier',
    options: ['Janvier', 'Février', 'Décembre', 'Octobre'],
    theme: 'Musique',
  },
  {
    question: "Quels animaux sont élevés dans le cadre de l'héliciculture ?",
    answer: 'Escargots',
    options: ['Escargots', 'Libellules', 'Grenouilles', 'Limaces'],
    theme: 'Culture Générale',
  },
  {
    question: "En argot, qu'est-ce qui peut être désigné par les termes cibiche ou clope ?",
    answer: 'Cigarette',
    options: ['Cigarette', 'Cigare', 'Pipe', 'Narguilé'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel nom est partagé par un hippogriffe dans la saga Harry Potter et une écrivaine étasunienne, auteure de \"Vent d'Est, Vent d'Ouest\" ou \"La Terre chinoise\" et récipiendaire du Prix Nobel de Littérature en 1938 ?",
    answer: 'Buck',
    options: ['Buck', 'Malafit', 'Norbert', 'Fawkes'],
    theme: 'Littérature',
  },
  {
    question: "Quel athlète norvégien est devenu le premier homme de l'histoire sous la barre des 46 secondes lors de la finale du 400m haies des Jeux Olympiques de Tokyo 2021 ? Avec 45s94, il est l'actuel recordman de sa discipline.",
    answer: 'Karsten Warholm',
    options: ['Karsten Warholm', 'Rai Benjamin', 'Alison dos Santos', 'Kevin Young'],
    theme: 'Sport',
  },
  {
    question: "A quel studio de développement de jeux vidéo fondé en 2010 doit-on notamment les jeux Clash of Clans, Clash Royale et Brawl Stars ? Le studio est basé à Helsinki, en Finlande.",
    answer: 'Supercell',
    options: ['Supercell', 'Rovio', 'King', 'Miniclip'],
    theme: 'Jeux Vidéo',
  },
  {
    question: "Quelle série met en scène les personnages de Ted Mosby et Barney Stinson, respectivement incarnés par Josh Radnor et Neil Patrick Harris ? Cette série a été diffusée originellement entre 2005 et 2014.",
    answer: 'How I Met Your Mother',
    options: ['How I Met Your Mother', 'Friends', 'Big Bang Theory', 'Scrubs'],
    theme: 'Séries TV',
  },
  {
    question: "Quel américain incarné par Sean Penn dans un film de 2008 fut assassiné en 1978 pour ses positions sur les droits des homosexuels ? Il fut tué aux côtés du maire de San Francisco George Moscone.",
    answer: 'Harvey Milk',
    options: ['Harvey Milk', 'George Moscone', 'Tom Robinson', 'Gil Scott-Heron'],
    theme: 'Histoire',
  },
  {
    question: "Aux travaux de quel scientifique, qui est également devenu son époux, la physicienne Mileva Marić a-t-elle probablement participé ? La communauté met en avant ses travaux et sa participation, qui ont été en bonne partie éclipsés par son époux.",
    answer: 'Albert Einstein',
    options: ['Albert Einstein', 'Max Planck', 'Niels Bohr', 'Werner Heisenberg'],
    theme: 'Sciences',
  },
  {
    question: "Quelle ville indienne abritant le Palais des Vents est surnommée \"La ville rose\", du fait de la couleur dominante des bâtiments dans la vieille ville ?",
    answer: 'Jaipur',
    options: ['Jaipur', 'Mumbai', 'Delhi', 'Agra'],
    theme: 'Géographie',
  },
  {
    question: "Quel groupe britannique mené par Alex Turner a sorti, sur l'album \"AM\" en 2013, les titres \"Do I wanna know\" et \"I wanna be yours\" ?",
    answer: 'Arctic Monkeys',
    options: ['Arctic Monkeys', 'The Strokes', 'Interpol', 'The Libertines'],
    theme: 'Musique',
  },
  {
    question: "Quel cépage est utilisé dans les appellations dites Beaumes de Venise, Frontignan et Rivesaltes ?",
    answer: 'Muscat',
    options: ['Muscat', 'Grenache', 'Viognier', 'Syrah'],
    theme: 'Cuisine',
  },
  {
    question: "Quel fromage ayant connu un pic de vente en 2008 est fabriqué dans la région de la Thiérache ?",
    answer: 'Maroilles',
    options: ['Maroilles', 'Comté', 'Langres', 'Époisses'],
    theme: 'Cuisine',
  },
  {
    question: "Quel manga créé par Eiichirō Oda met en scène les aventures du pirate Monkey D. Luffy et de son équipage dans leur quête de trouver un trésor ultime ?",
    answer: 'One Piece',
    options: ['One Piece', 'Naruto', 'Dragon Ball', 'Bleach'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel boxeur étasunien est notamment célèbre pour avoir arraché un bout d'oreille à Holyfield lors d'un combat en 1997 ?",
    answer: 'Mike Tyson',
    options: ['Mike Tyson', 'Floyd Mayweather', 'George Foreman', 'Muhammad Ali'],
    theme: 'Sport',
  },
  {
    question: "Quel mot anglais est désigné par la lettre K dans le sigle AFK, employé lorsque l'on est inactif dans un jeu vidéo ?",
    answer: 'Keyboard',
    options: ['Keyboard', 'Keypad', 'Knob', 'Keys'],
    theme: 'Sciences',
  },
  {
    question: "Créé par Leiji Matsumoto, quel héros de manga est surnommé le corsaire de l'espace ?",
    answer: 'Albator',
    options: ['Albator', 'Goldorak', 'Capitaine Flam', 'Cobra'],
    theme: 'Séries TV',
  },
  {
    question: "Quel nouveau nom, celui d'un pays actuel, a pris le royaume de Siam en 1939 ?",
    answer: 'Thaïlande',
    options: ['Thaïlande', 'Myanmar', 'Cambodge', 'Laos'],
    theme: 'Géographie',
  },
  {
    question: "Professeur à Uppsala au XVIIIe siècle, de QUEL PAYS était originaire Anders Celsius, ayant laissé son nom à une échelle de température ?",
    answer: 'Suède',
    options: ['Suède', 'Danemark', 'Finlande', 'Norvège'],
    theme: 'Sciences',
  },
  {
    question: "Quel pays possède l'état du Yucatán, homonyme de la péninsule où elle se situe et qui comprend également les états de Quintana Roo et de Campeche ?",
    answer: 'Mexique',
    options: ['Mexique', 'Pérou', 'Guatemala', 'Honduras'],
    theme: 'Géographie',
  },
  {
    question: "Quelle chanteuse, ayant pour nom de famille Van Laeken a sorti les albums \"Brol\" et \"Nonante-Cinq\" ?",
    answer: 'Angèle',
    options: ['Angèle', 'Clara Luciani', 'Yseult', 'Camélia Jordana'],
    theme: 'Musique',
  },
  {
    question: "Quel nom pouvant également désigner un fromage est employé pour parler des excréments des équidés ?",
    answer: 'Crottin',
    options: ['Crottin', 'Fumier', 'Bouse', 'Cantal'],
    theme: 'Culture Générale',
  },
  {
    question: "Quel fromage franc-comtois est reconnaissable à la couche de cendre qui le traverse ?",
    answer: 'Morbier',
    options: ['Morbier', 'Comté', 'Beaufort', 'Abondance'],
    theme: 'Cuisine',
  },
  {
    question: "Quel écrivain, journaliste et homme politique socialiste français est l'époux de Laura Marx, la fille du célèbre philosophe ? Il est surtout connu pour son essai \"Le Droit à la paresse\" traitant de la valeur travail et de l'idée que les humains s'en font.",
    answer: 'Paul Lafargue',
    options: ['Paul Lafargue', 'Jean Jaurès', 'Jules Guesde', 'Charles Longuet'],
    theme: 'Histoire',
  },
  {
    question: "Surnommé \"Le Goéland\", quel britannique, le premier à dépasser les 18 mètres détient toujours, ce depuis 1995, le record du monde du triple saut, avec une marque à 18,29 mètres ?",
    answer: 'Jonathan Edwards',
    options: ['Jonathan Edwards', 'Carl Lewis', 'Willie Banks', 'Christian Taylor'],
    theme: 'Sport',
  },
  {
    question: "Dans quel pays est basé l'entreprise russe, possédant un moteur de recherche \"Yandex\", l'un des sites les plus consultés au monde ?",
    answer: 'Russie',
    options: ['Russie', 'Ukraine', 'Kazakhstan', 'Biélorussie'],
    theme: 'Géographie',
  },
  {
    question: "Quel actuel président de Marvel Studios, producteur de cinéma étasunien né en 1973, est à l'origine de la création du MCU, le Marvel Cinematographic Universe ?",
    answer: 'Kevin Feige',
    options: ['Kevin Feige', 'Stan Lee', 'Joe Russo', "Louis D'Esposito"],
    theme: 'Cinéma',
  },
  {
    question: "Que désigne la lettre A de l'acronyme PAC désignant la politique signée en 1962 par des pays européens ?",
    answer: 'Agricole',
    options: ['Agricole', 'Accord', 'Alimentaire', 'Autarcique'],
    theme: 'Culture Générale',
  },
  {
    question: "Par opposition à un angle dit \"saillant\", quel adjectif qualifie, en mathématiques, un angle dont la mesure est comprise entre 180 et 360 degrés ?",
    answer: 'Rentrant',
    options: ['Rentrant', 'Ouvert', 'Concave', 'Obtus'],
    theme: 'Sciences',
  },
  {
    question: "En combien de cantons est divisée la Suisse ? Ils vont alphabétiquement d'Appenzell Rhodes-Extérieures jusqu'à Zürich.",
    answer: '26',
    options: ['26', '22', '20', '23'],
    theme: 'Géographie',
  },
  {
    question: "Sortie en single le 5 octobre 1962 avec \"P.S. I Love You\" en face B, quelle est la première chanson publiée par les Beatles ?",
    answer: 'Love Me Do',
    options: ['Love Me Do', 'Yellow Submarine', 'Please Please Me', 'From Me to You'],
    theme: 'Musique',
  },
  {
    question: "Quel mot de six lettres, valant beaucoup de points au scrabble, désigne également le melon à cornes ?",
    answer: 'Kiwano',
    options: ['Kiwano', 'Papaye', 'Carambole', 'Pitahaya'],
    theme: 'Cuisine',
  },
  {
    question: "Quelle boisson légèrement gazeuse originaire du Caucase est issue de la fermentation de lait ou de jus de fruits ?",
    answer: 'Kéfir',
    options: ['Kéfir', 'Kombucha', 'Yakult', 'Lassi'],
    theme: 'Cuisine',
  },
];
