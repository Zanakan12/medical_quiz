// Modèle de question pour le quiz médical
export type MedicalQuizQuestion = {
  id: number;
  question: string;
  choices: string[];
  answer: number; // index du choix correct
  definition?: string;
};

// Questions de base (direction normale)
export const baseQuestions: MedicalQuizQuestion[] = [
  {
    id: 1,
    question: "Quel est le terme médical pour une inflammation du foie ?",
    choices: ["Hépatite", "Néphrite", "Gastrite", "Dermatite"],
    answer: 0,
    definition:
      "L'hépatite est une inflammation du foie, souvent causée par une infection virale, des toxines ou des maladies auto-immunes.",
  },
  {
    id: 2,
    question: "Quel est le terme médical pour une inflammation du rein ?",
    choices: ["Néphrite", "Hépatite", "Gastrite", "Arthrite"],
    answer: 0,
    definition:
      "La néphrite est une inflammation du rein, pouvant être d'origine infectieuse ou auto-immune, et affecter la fonction rénale.",
  },
  {
    id: 3,
    question: "Quel est le terme médical pour une inflammation de l’estomac ?",
    choices: ["Gastrite", "Hépatite", "Néphrite", "Dermatite"],
    answer: 0,
    definition:
      "La gastrite est une inflammation de la muqueuse de l'estomac, souvent liée à une infection, à l'alcool ou à certains médicaments.",
  },
  {
    id: 4,
    question: "Quel est le terme médical pour une inflammation de la peau ?",
    choices: ["Dermatite", "Gastrite", "Hépatite", "Néphrite"],
    answer: 0,
    definition:
      "La dermatite est une inflammation de la peau, qui peut être causée par des allergies, des irritants ou des infections.",
  },
  {
    id: 5,
    question:
      "Quel est le terme médical pour une inflammation des articulations ?",
    choices: ["Arthrite", "Néphrite", "Gastrite", "Dermatite"],
    answer: 0,
    definition:
      "L'arthrite est une inflammation des articulations, provoquant douleur, raideur et parfois gonflement, d'origine variée.",
  },
  {
    id: 6,
    question: "Quel est le terme médical pour une inflammation des bronches ?",
    choices: ["Bronchite", "Hépatite", "Dermatite", "Arthrite"],
    answer: 0,
    definition:
      "La bronchite est une inflammation des bronches, généralement causée par une infection virale ou bactérienne, ou par des irritants.",
  },
  {
    id: 7,
    question: "Quel est le terme médical pour une inflammation du côlon ?",
    choices: ["Colite", "Gastrite", "Néphrite", "Dermatite"],
    answer: 0,
    definition:
      "La colite est une inflammation du côlon, qui peut être due à une infection, une maladie inflammatoire ou des réactions auto-immunes.",
  },
  {
    id: 8,
    question: "Quel est le terme médical pour une inflammation du pancréas ?",
    choices: ["Pancréatite", "Hépatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La pancréatite est une inflammation du pancréas, souvent liée à l'alcool, aux calculs biliaires ou à des infections.",
  },
  {
    id: 9,
    question: "Quel est le terme médical pour une inflammation de la vessie ?",
    choices: ["Cystite", "Néphrite", "Hépatite", "Dermatite"],
    answer: 0,
    definition:
      "La cystite est une inflammation de la vessie, généralement causée par une infection bactérienne des voies urinaires.",
  },
  {
    id: 10,
    question: "Quel est le terme médical pour une inflammation du cœur ?",
    choices: ["Cardite", "Hépatite", "Néphrite", "Gastrite"],
    answer: 0,
    definition:
      "La cardite est une inflammation du muscle cardiaque ou de ses enveloppes, pouvant être d'origine infectieuse ou auto-immune.",
  },
  {
    id: 11,
    question: "Quel est le terme médical pour une inflammation de la plèvre ?",
    choices: ["Pleurite", "Bronchite", "Dermatite", "Colite"],
    answer: 0,
    definition:
      "La pleurite est une inflammation de la plèvre, la membrane entourant les poumons, souvent liée à une infection ou à une maladie auto-immune.",
  },
  {
    id: 12,
    question:
      "Quel est le terme médical pour une inflammation de la muqueuse buccale ?",
    choices: ["Stomatite", "Gastrite", "Dermatite", "Néphrite"],
    answer: 0,
    definition:
      "La stomatite est une inflammation de la muqueuse buccale, causée par des infections, des irritants ou des maladies systémiques.",
  },
  {
    id: 13,
    question: "Quel est le terme médical pour une inflammation de la langue ?",
    choices: ["Glossite", "Stomatite", "Dermatite", "Colite"],
    answer: 0,
    definition:
      "La glossite est une inflammation de la langue, qui peut être due à des infections, des carences ou des irritations.",
  },
  {
    id: 14,
    question: "Quel est le terme médical pour une inflammation de la cornée ?",
    choices: ["Kératite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La kératite est une inflammation de la cornée, souvent causée par une infection, un traumatisme ou des lentilles de contact.",
  },
  {
    id: 15,
    question: "Quel est le terme médical pour une inflammation de l’iris ?",
    choices: ["Iridite", "Kératite", "Dermatite", "Colite"],
    answer: 0,
    definition:
      "L'iridite est une inflammation de l'iris, la partie colorée de l'œil, généralement liée à des maladies auto-immunes ou infectieuses.",
  },
  {
    id: 16,
    question:
      "Quel est le terme médical pour une inflammation de la conjonctive ?",
    choices: ["Conjonctivite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La conjonctivite est une inflammation de la conjonctive, la membrane qui recouvre l'œil, souvent causée par des infections ou des allergies.",
  },
  {
    id: 17,
    question: "Quel est le terme médical pour une inflammation de l’utérus ?",
    choices: ["Endométrite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "L'endométrite est une inflammation de la muqueuse de l'utérus, généralement due à une infection bactérienne ou à des complications post-partum.",
  },
  {
    id: 18,
    question: "Quel est le terme médical pour une inflammation de l’oreille ?",
    choices: ["Otite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "L'otite est une inflammation de l'oreille, souvent causée par une infection bactérienne ou virale, pouvant toucher l'oreille externe, moyenne ou interne.",
  },
  {
    id: 19,
    question: "Quel est le terme médical pour une inflammation du rectum ?",
    choices: ["Rectite", "Colite", "Dermatite", "Néphrite"],
    answer: 0,
    definition:
      "La rectite est une inflammation du rectum, pouvant être liée à des infections, des maladies inflammatoires ou des traitements médicaux.",
  },
  {
    id: 20,
    question: "Quel est le terme médical pour une inflammation du cerveau ?",
    choices: ["Encéphalite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "L'encéphalite est une inflammation du cerveau, généralement causée par une infection virale ou bactérienne, parfois grave.",
  },
  {
    id: 21,
    question:
      "Quel est le terme médical pour une inflammation de la moelle épinière ?",
    choices: ["Myélite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La myélite est une inflammation de la moelle épinière, souvent causée par une infection ou une maladie auto-immune, pouvant entraîner des troubles neurologiques.",
  },
  {
    id: 22,
    question: "Quel est le terme médical pour une inflammation du péricarde ?",
    choices: ["Péricardite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La péricardite est une inflammation du péricarde, la membrane entourant le cœur, souvent liée à une infection ou à une maladie auto-immune.",
  },
  {
    id: 23,
    question: "Quel est le terme médical pour une inflammation du larynx ?",
    choices: ["Laryngite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La laryngite est une inflammation du larynx, souvent causée par une infection virale ou une irritation, provoquant une voix rauque ou une perte de voix.",
  },
  {
    id: 24,
    question: "Quel est le terme médical pour une inflammation du pharynx ?",
    choices: ["Pharyngite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La pharyngite est une inflammation du pharynx, généralement causée par une infection virale ou bactérienne, responsable de maux de gorge.",
  },
  {
    id: 25,
    question: "Quel est le terme médical pour une inflammation du tendon ?",
    choices: ["Tendinite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La tendinite est une inflammation d'un tendon, souvent liée à une surutilisation ou à un traumatisme, provoquant douleur et gêne fonctionnelle.",
  },
  {
    id: 26,
    question: "Quel est le terme médical pour une inflammation du muscle ?",
    choices: ["Myosite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La myosite est une inflammation d'un muscle, pouvant être causée par une infection, une maladie auto-immune ou un traumatisme.",
  },
  {
    id: 27,
    question: "Quel est le terme médical pour une inflammation de la rate ?",
    choices: ["Splénite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La splénite est une inflammation de la rate, organe impliqué dans la filtration du sang et la réponse immunitaire, souvent liée à une infection ou une maladie systémique.",
  },
  {
    id: 28,
    question:
      "Quel est le terme médical pour une inflammation de la prostate ?",
    choices: ["Prostatite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La prostatite est une inflammation de la prostate, souvent causée par une infection bactérienne ou des troubles urinaires.",
  },
  {
    id: 29,
    question:
      "Quel est le terme médical pour une inflammation de la glande thyroïde ?",
    choices: ["Thyroïdite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La thyroïdite est une inflammation de la glande thyroïde, pouvant être d'origine auto-immune, infectieuse ou médicamenteuse, et affecter la production d'hormones.",
  },
  {
    id: 30,
    question: "Quel est le terme médical pour une inflammation de la gorge ?",
    choices: ["Pharyngite", "Laryngite", "Dermatite", "Néphrite"],
    answer: 0,
    definition:
      "La pharyngite est une inflammation de la gorge (pharynx), généralement causée par une infection virale ou bactérienne, responsable de maux de gorge.",
  },
  {
    id: 31,
    question: "Quel est le terme médical pour une inflammation de l'utérus ?",
    choices: ["Endométrite", "Salpingite", "Dermatite", "Néphrite"],
    answer: 0,
    definition:
      "L'endométrite est une inflammation de la muqueuse utérine, souvent causée par une infection bactérienne ou des complications post-partum.",
  },
  {
    id: 32,
    question: "Quel est le terme médical pour une inflammation du duodénum ?",
    choices: ["Duodénite", "Gastrite", "Colite", "Néphrite"],
    answer: 0,
    definition:
      "La duodénite est une inflammation du duodénum, la première partie de l'intestin grêle, souvent causée par une infection ou une irritation chronique.",
  },
  {
    id: 33,
    question:
      "Quel est le terme médical pour une inflammation de l’oesophage ?",
    choices: ["Oesophagite", "Gastrite", "Colite", "Néphrite"],
    answer: 0,
    definition:
      "L'oesophagite est une inflammation de l'œsophage, souvent liée au reflux gastro-œsophagien ou à une infection.",
  },
  {
    id: 34,
    question:
      "Quel est le terme médical pour une inflammation de la trompe utérine ?",
    choices: ["Salpingite", "Endométrite", "Dermatite", "Néphrite"],
    answer: 0,
    definition:
      "La salpingite est une inflammation de la trompe utérine, généralement causée par une infection bactérienne, pouvant entraîner des douleurs pelviennes et des troubles de la fertilité.",
  },
  {
    id: 35,
    question: "Quel est le terme médical pour une inflammation du périnée ?",
    choices: ["Périnéite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La périnéite est une inflammation du périnée, zone située entre les organes génitaux et l'anus, souvent liée à une infection ou un traumatisme.",
  },
  {
    id: 36,
    question: "Quel est le terme médical pour une inflammation du ligament ?",
    choices: ["Ligamentite", "Tendinite", "Dermatite", "Néphrite"],
    answer: 0,
    definition:
      "La ligamentite est une inflammation d'un ligament, souvent causée par une blessure ou une surutilisation.",
  },
  {
    id: 37,
    question: "Quel est le terme médical pour une inflammation du cartilage ?",
    choices: ["Chondrite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La chondrite est une inflammation du cartilage, tissu conjonctif présent dans les articulations et d'autres parties du corps.",
  },
  {
    id: 38,
    question: "Quel est le terme médical pour une inflammation du péritoine ?",
    choices: ["Péritonite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La péritonite est une inflammation du péritoine, membrane qui tapisse la cavité abdominale, souvent grave et nécessitant une prise en charge urgente.",
  },
  {
    id: 39,
    question:
      "Quel est le terme médical pour une inflammation du tissu adipeux ?",
    choices: ["Panniculite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La panniculite est une inflammation du tissu adipeux sous-cutané, pouvant provoquer des nodules douloureux sous la peau.",
  },
  {
    id: 40,
    question: "Quel est le terme médical pour une inflammation du vagin ?",
    choices: ["Vaginite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La vaginite est une inflammation du vagin, souvent causée par une infection bactérienne, fongique ou parasitaire.",
  },
  {
    id: 41,
    question: "Quel est le terme médical pour une inflammation du scrotum ?",
    choices: ["Scrotite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La scrotite est une inflammation du scrotum, la poche contenant les testicules, généralement liée à une infection ou un traumatisme.",
  },
  {
    id: 42,
    question:
      "Quel est le terme médical pour une inflammation du canal auditif ?",
    choices: ["Otite externe", "Otite moyenne", "Dermatite", "Néphrite"],
    answer: 0,
    definition:
      "L'otite externe est une inflammation du conduit auditif externe, souvent causée par une infection bactérienne ou fongique.",
  },
  {
    id: 43,
    question: "Quel est le terme médical pour une inflammation du sinus ?",
    choices: ["Sinusite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La sinusite est une inflammation des sinus, cavités situées dans les os du crâne, souvent liée à une infection ou à des allergies.",
  },
  {
    id: 44,
    question:
      "Quel est le terme médical pour une inflammation du follicule pileux ?",
    choices: ["Folliculite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La folliculite est une inflammation du follicule pileux, souvent causée par une infection bactérienne ou fongique.",
  },
  {
    id: 45,
    question:
      "Quel est le terme médical pour une inflammation du tissu conjonctif ?",
    choices: ["Connectivite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La connectivite est une inflammation du tissu conjonctif, souvent associée à des maladies auto-immunes.",
  },
  {
    id: 46,
    question:
      "Quel est le terme médical pour une inflammation du tissu lymphoïde ?",
    choices: ["Lymphadénite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La lymphadénite est une inflammation des ganglions lymphatiques, souvent causée par une infection.",
  },
  {
    id: 47,
    question:
      "Quel est le terme médical pour une inflammation du tissu osseux ?",
    choices: ["Ostéite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "L'ostéite est une inflammation du tissu osseux, souvent causée par une infection ou un traumatisme.",
  },
  {
    id: 48,
    question:
      "Quel est le terme médical pour une inflammation du tissu nerveux ?",
    choices: ["Névrite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La névrite est une inflammation d'un nerf, pouvant entraîner des douleurs, des troubles sensitifs ou moteurs.",
  },
  {
    id: 49,
    question:
      "Quel est le terme médical pour une inflammation du tissu pulmonaire ?",
    choices: ["Pneumonite", "Bronchite", "Dermatite", "Néphrite"],
    answer: 0,
    definition:
      "La pneumonite est une inflammation du tissu pulmonaire, souvent causée par une infection, une allergie ou une exposition à des substances toxiques.",
  },
  {
    id: 50,
    question:
      "Quel est le terme médical pour une inflammation du tissu mammaire ?",
    choices: ["Mastite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La mastite est une inflammation du tissu mammaire, souvent observée chez les femmes allaitantes et généralement causée par une infection bactérienne.",
  },
  {
    id: 51,
    question:
      "Quel est le terme médical pour une inflammation du tissu synovial ?",
    choices: ["Synovite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La synovite est une inflammation de la membrane synoviale, qui tapisse l'intérieur des articulations, souvent associée à des maladies inflammatoires.",
  },
  {
    id: 52,
    question:
      "Quel est le terme médical pour une inflammation du tissu veineux ?",
    choices: ["Phlébite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La phlébite est une inflammation d'une veine, souvent accompagnée de la formation d'un caillot sanguin (thrombose).",
  },
  {
    id: 53,
    question:
      "Quel est le terme médical pour une inflammation du tissu artériel ?",
    choices: ["Artérite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "L'artérite est une inflammation d'une artère, pouvant entraîner des troubles circulatoires et des douleurs.",
  },
  {
    id: 54,
    question:
      "Quel est le terme médical pour une inflammation du tissu capillaire ?",
    choices: ["Capillarite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La capillarite est une inflammation des capillaires, petits vaisseaux sanguins, souvent associée à des éruptions cutanées.",
  },
  {
    id: 55,
    question:
      "Quel est le terme médical pour une inflammation du tissu ganglionnaire ?",
    choices: ["Ganglionite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "La ganglionite est une inflammation d'un ganglion, souvent liée à une infection ou à une maladie auto-immune.",
  },
  {
    id: 56,
    question:
      "Quel est le terme médical pour une inflammation du tissu rénal ?",
    choices: ["Néphrite", "Dermatite", "Gastrite", "Hépatite"],
    answer: 0,
    definition:
      "La néphrite est une inflammation du rein, pouvant être causée par une infection, une maladie auto-immune ou des toxines.",
  },
  {
    id: 57,
    question:
      "Quel est le terme médical pour une inflammation du tissu hépatique ?",
    choices: ["Hépatite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "L'hépatite est une inflammation du foie, souvent causée par des virus, des toxines ou des maladies auto-immunes.",
  },
  {
    id: 58,
    question:
      "Quel est le terme médical pour une inflammation du tissu gastrique ?",
    choices: ["Gastrite", "Dermatite", "Hépatite", "Néphrite"],
    answer: 0,
    definition:
      "La gastrite est une inflammation de la muqueuse de l'estomac, souvent causée par une infection, des médicaments ou l'alcool.",
  },
  {
    id: 59,
    question:
      "Quel est le terme médical pour une inflammation du tissu cutané ?",
    choices: ["Dermatite", "Gastrite", "Hépatite", "Néphrite"],
    answer: 0,
    definition:
      "La dermatite est une inflammation de la peau, pouvant être causée par des allergies, des irritants ou des infections.",
  },
  {
    id: 60,
    question:
      "Quel est le terme médical pour une inflammation du tissu intestinal ?",
    choices: ["Entérite", "Colite", "Gastrite", "Néphrite"],
    answer: 0,
    definition:
      "L'entérite est une inflammation de l'intestin grêle, souvent causée par une infection ou une maladie inflammatoire chronique. La colite concerne le côlon.",
  },
];

// Utilitaire: extrait la partie du corps depuis l'intitulé
function extractBodyPart(question: string): string | null {
  // Cherche le segment après "inflammation" jusqu'au ? final.
  // Exemple: "... inflammation de la peau ?" => "de la peau"
  const m = question.match(/inflammation\s+(.+?)\s*\?/i);
  if (!m) return null;
  const part = m[1]
    .replace(/\u00A0/g, " ") // espaces insécables éventuels
    .trim();
  return part || null;
}

// Construit des questions inversées: à partir du terme -> trouver la partie
function buildReversedQuestions(
  src: MedicalQuizQuestion[]
): MedicalQuizQuestion[] {
  const bodyPartsPool = src
    .map((q) => extractBodyPart(q.question))
    .filter((p): p is string => Boolean(p));

  const startId = (src.reduce((max, q) => Math.max(max, q.id), 0) || 0) + 1;

  const reversed: MedicalQuizQuestion[] = [];

  src.forEach((q, i) => {
    const term = q.choices[q.answer];
    const body = extractBodyPart(q.question);
    if (!term || !body) return; // sécurité

    // Choix: bonne réponse + 3 distracteurs déterministes
    const distractors: string[] = [];
    for (const candidate of bodyPartsPool) {
      if (candidate !== body && !distractors.includes(candidate)) {
        distractors.push(candidate);
      }
      if (distractors.length >= 3) break;
    }
    const choices = [body, ...distractors];

    reversed.push({
      id: startId + i,
      question: `« ${term} » correspond à l’inflammation de quoi ?`,
      choices,
      answer: 0, // on met la bonne réponse en premier pour rester cohérent
    });
  });

  return reversed;
}

// Export combiné: questions normales + inversées
export const sampleQuestions: MedicalQuizQuestion[] = [
  ...baseQuestions,
  ...buildReversedQuestions(baseQuestions),
];
