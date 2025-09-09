// Modèle de question pour le quiz médical
export type MedicalQuizQuestion = {
  id: number;
  question: string;
  choices: string[];
  answer: number; // index du choix correct
};

// Questions de base (direction normale)
export const baseQuestions: MedicalQuizQuestion[] = [
  {
    id: 1,
    question: "Quel est le terme médical pour une inflammation du foie ?",
    choices: ["Hépatite", "Néphrite", "Gastrite", "Dermatite"],
    answer: 0,
  },
  {
    id: 2,
    question: "Quel est le terme médical pour une inflammation du rein ?",
    choices: ["Néphrite", "Hépatite", "Gastrite", "Arthrite"],
    answer: 0,
  },
  {
    id: 3,
    question: "Quel est le terme médical pour une inflammation de l’estomac ?",
    choices: ["Gastrite", "Hépatite", "Néphrite", "Dermatite"],
    answer: 0,
  },
  {
    id: 4,
    question: "Quel est le terme médical pour une inflammation de la peau ?",
    choices: ["Dermatite", "Gastrite", "Hépatite", "Néphrite"],
    answer: 0,
  },
  {
    id: 5,
    question:
      "Quel est le terme médical pour une inflammation des articulations ?",
    choices: ["Arthrite", "Néphrite", "Gastrite", "Dermatite"],
    answer: 0,
  },
  {
    id: 6,
    question: "Quel est le terme médical pour une inflammation des bronches ?",
    choices: ["Bronchite", "Hépatite", "Dermatite", "Arthrite"],
    answer: 0,
  },
  {
    id: 7,
    question: "Quel est le terme médical pour une inflammation du côlon ?",
    choices: ["Colite", "Gastrite", "Néphrite", "Dermatite"],
    answer: 0,
  },
  {
    id: 8,
    question: "Quel est le terme médical pour une inflammation du pancréas ?",
    choices: ["Pancréatite", "Hépatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 9,
    question: "Quel est le terme médical pour une inflammation de la vessie ?",
    choices: ["Cystite", "Néphrite", "Hépatite", "Dermatite"],
    answer: 0,
  },
  {
    id: 10,
    question: "Quel est le terme médical pour une inflammation du cœur ?",
    choices: ["Cardite", "Hépatite", "Néphrite", "Gastrite"],
    answer: 0,
  },
  {
    id: 11,
    question: "Quel est le terme médical pour une inflammation de la plèvre ?",
    choices: ["Pleurite", "Bronchite", "Dermatite", "Colite"],
    answer: 0,
  },
  {
    id: 12,
    question:
      "Quel est le terme médical pour une inflammation de la muqueuse buccale ?",
    choices: ["Stomatite", "Gastrite", "Dermatite", "Néphrite"],
    answer: 0,
  },
  {
    id: 13,
    question: "Quel est le terme médical pour une inflammation de la langue ?",
    choices: ["Glossite", "Stomatite", "Dermatite", "Colite"],
    answer: 0,
  },
  {
    id: 14,
    question: "Quel est le terme médical pour une inflammation de la cornée ?",
    choices: ["Kératite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 15,
    question: "Quel est le terme médical pour une inflammation de l’iris ?",
    choices: ["Iridite", "Kératite", "Dermatite", "Colite"],
    answer: 0,
  },
  {
    id: 16,
    question:
      "Quel est le terme médical pour une inflammation de la conjonctive ?",
    choices: ["Conjonctivite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 17,
    question: "Quel est le terme médical pour une inflammation de l’utérus ?",
    choices: ["Endométrite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 18,
    question: "Quel est le terme médical pour une inflammation de l’oreille ?",
    choices: ["Otite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 19,
    question: "Quel est le terme médical pour une inflammation du rectum ?",
    choices: ["Rectite", "Colite", "Dermatite", "Néphrite"],
    answer: 0,
  },
  {
    id: 20,
    question: "Quel est le terme médical pour une inflammation du cerveau ?",
    choices: ["Encéphalite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 21,
    question:
      "Quel est le terme médical pour une inflammation de la moelle épinière ?",
    choices: ["Myélite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 22,
    question: "Quel est le terme médical pour une inflammation du péricarde ?",
    choices: ["Péricardite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 23,
    question: "Quel est le terme médical pour une inflammation du larynx ?",
    choices: ["Laryngite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 24,
    question: "Quel est le terme médical pour une inflammation du pharynx ?",
    choices: ["Pharyngite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 25,
    question: "Quel est le terme médical pour une inflammation du tendon ?",
    choices: ["Tendinite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 26,
    question: "Quel est le terme médical pour une inflammation du muscle ?",
    choices: ["Myosite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 27,
    question: "Quel est le terme médical pour une inflammation de la rate ?",
    choices: ["Splénite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 28,
    question:
      "Quel est le terme médical pour une inflammation de la prostate ?",
    choices: ["Prostatite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 29,
    question:
      "Quel est le terme médical pour une inflammation de la glande thyroïde ?",
    choices: ["Thyroïdite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 30,
    question: "Quel est le terme médical pour une inflammation de la gorge ?",
    choices: ["Pharyngite", "Laryngite", "Dermatite", "Néphrite"],
    answer: 0,
  },
  {
    id: 31,
    question: "Quel est le terme médical pour une inflammation du poumon ?",
    choices: ["Pneumonie", "Bronchite", "Dermatite", "Néphrite"],
    answer: 0,
  },
  {
    id: 32,
    question: "Quel est le terme médical pour une inflammation du duodénum ?",
    choices: ["Duodénite", "Gastrite", "Colite", "Néphrite"],
    answer: 0,
  },
  {
    id: 33,
    question:
      "Quel est le terme médical pour une inflammation de l’oesophage ?",
    choices: ["Oesophagite", "Gastrite", "Colite", "Néphrite"],
    answer: 0,
  },
  {
    id: 34,
    question:
      "Quel est le terme médical pour une inflammation de la trompe utérine ?",
    choices: ["Salpingite", "Endométrite", "Dermatite", "Néphrite"],
    answer: 0,
  },
  {
    id: 35,
    question: "Quel est le terme médical pour une inflammation du périnée ?",
    choices: ["Périnéite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 36,
    question: "Quel est le terme médical pour une inflammation du ligament ?",
    choices: ["Ligamentite", "Tendinite", "Dermatite", "Néphrite"],
    answer: 0,
  },
  {
    id: 37,
    question: "Quel est le terme médical pour une inflammation du cartilage ?",
    choices: ["Chondrite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 38,
    question: "Quel est le terme médical pour une inflammation du péritoine ?",
    choices: ["Péritonite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 39,
    question:
      "Quel est le terme médical pour une inflammation du tissu adipeux ?",
    choices: ["Panniculite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 40,
    question: "Quel est le terme médical pour une inflammation du vagin ?",
    choices: ["Vaginite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 41,
    question: "Quel est le terme médical pour une inflammation du scrotum ?",
    choices: ["Scrotite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 42,
    question:
      "Quel est le terme médical pour une inflammation du canal auditif ?",
    choices: ["Otite externe", "Otite moyenne", "Dermatite", "Néphrite"],
    answer: 0,
  },
  {
    id: 43,
    question: "Quel est le terme médical pour une inflammation du sinus ?",
    choices: ["Sinusite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 44,
    question:
      "Quel est le terme médical pour une inflammation du follicule pileux ?",
    choices: ["Folliculite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 45,
    question:
      "Quel est le terme médical pour une inflammation du tissu conjonctif ?",
    choices: ["Connectivite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 46,
    question:
      "Quel est le terme médical pour une inflammation du tissu lymphoïde ?",
    choices: ["Lymphadénite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 47,
    question:
      "Quel est le terme médical pour une inflammation du tissu osseux ?",
    choices: ["Ostéite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 48,
    question:
      "Quel est le terme médical pour une inflammation du tissu nerveux ?",
    choices: ["Névrite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 49,
    question:
      "Quel est le terme médical pour une inflammation du tissu pulmonaire ?",
    choices: ["Pneumonite", "Bronchite", "Dermatite", "Néphrite"],
    answer: 0,
  },
  {
    id: 50,
    question:
      "Quel est le terme médical pour une inflammation du tissu mammaire ?",
    choices: ["Mastite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 51,
    question:
      "Quel est le terme médical pour une inflammation du tissu synovial ?",
    choices: ["Synovite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 52,
    question:
      "Quel est le terme médical pour une inflammation du tissu veineux ?",
    choices: ["Phlébite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 53,
    question:
      "Quel est le terme médical pour une inflammation du tissu artériel ?",
    choices: ["Artérite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 54,
    question:
      "Quel est le terme médical pour une inflammation du tissu capillaire ?",
    choices: ["Capillarite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 55,
    question:
      "Quel est le terme médical pour une inflammation du tissu ganglionnaire ?",
    choices: ["Ganglionite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 56,
    question:
      "Quel est le terme médical pour une inflammation du tissu rénal ?",
    choices: ["Néphrite", "Dermatite", "Gastrite", "Hépatite"],
    answer: 0,
  },
  {
    id: 57,
    question:
      "Quel est le terme médical pour une inflammation du tissu hépatique ?",
    choices: ["Hépatite", "Dermatite", "Gastrite", "Néphrite"],
    answer: 0,
  },
  {
    id: 58,
    question:
      "Quel est le terme médical pour une inflammation du tissu gastrique ?",
    choices: ["Gastrite", "Dermatite", "Hépatite", "Néphrite"],
    answer: 0,
  },
  {
    id: 59,
    question:
      "Quel est le terme médical pour une inflammation du tissu cutané ?",
    choices: ["Dermatite", "Gastrite", "Hépatite", "Néphrite"],
    answer: 0,
  },
  {
    id: 60,
    question:
      "Quel est le terme médical pour une inflammation du tissu intestinal ?",
    choices: ["Entérite", "Colite", "Gastrite", "Néphrite"],
    answer: 0,
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
function buildReversedQuestions(src: MedicalQuizQuestion[]): MedicalQuizQuestion[] {
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
