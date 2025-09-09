'use client';

import React, { useState, useEffect } from "react";
import { sampleQuestions, MedicalQuizQuestion } from "./medical-quiz-data";
import questionsJson from "../data/questions_terminologie_medicale_fr.json";

export default function MedicalQuiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [finished, setFinished] = useState(false);
  const [shuffleKey, setShuffleKey] = useState(0); // pour re-mélanger à la demande


  // Mélange et sélectionne 20 questions à chaque partie
  const [questions, setQuestions] = useState<MedicalQuizQuestion[]>([]);
  const [shuffled, setShuffled] = useState<{ choice: string; idx: number }[]>([]);
  const [correctIndex, setCorrectIndex] = useState<number>(-1);

  useEffect(() => {
    // Combine les deux sources de questions
    const arr: MedicalQuizQuestion[] = [
      ...sampleQuestions,
      ...questionsJson
    ];
    // Mélange toutes les questions et en prend 20
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setQuestions(arr.slice(0, 20));
  }, [shuffleKey]);


  const question = questions[current];

  useEffect(() => {
    if (!question) return;
    // Détecte si la bonne réponse est une phrase (commence par "Inflammation" ou "inflammation")
    const isPhrase = /^inflammation|^Inflammation/.test(question.choices[question.answer]);
    // Récupère toutes les réponses du même format
    const allAnswers = Array.from(new Set(questions.flatMap(q => q.choices)));
    const distractors = allAnswers.filter(ans => {
      if (isPhrase) {
        return ans !== question.choices[question.answer] && (/^inflammation|^Inflammation/.test(ans));
      } else {
        return ans !== question.choices[question.answer] && !/^inflammation|^Inflammation/.test(ans);
      }
    });
    // Mélange les distracteurs
    for (let i = distractors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [distractors[i], distractors[j]] = [distractors[j], distractors[i]];
    }
    // Sélectionne 3 distracteurs différents
    const selectedDistractors = distractors.slice(0, 3);
    // Crée le tableau de choix (bonne réponse + distracteurs)
    const choices = [question.choices[question.answer], ...selectedDistractors];
    // Mélange les choix
    for (let i = choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [choices[i], choices[j]] = [choices[j], choices[i]];
    }
    setShuffled(choices.map((choice, idx) => ({ choice, idx })));
    setCorrectIndex(choices.findIndex(c => c === question.choices[question.answer]));
  }, [current, question, questions]);

  if (!question) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Chargement du quiz...</h2>
      </div>
    );
  }

  function handleChoice(index: number) {
    setSelected(index);
    setShowAnswer(true);
    if (index === correctIndex) {
      setScore((prev) => prev + 1);
    }
  }

  function nextQuestion() {
    if (current + 1 < questions.length) {
      setSelected(null);
      setShowAnswer(false);
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  }

  function restartQuiz() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowAnswer(false);
    setFinished(false);
    setShuffleKey((k) => k + 1);
  }

  if (finished) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Quiz terminé !</h2>
        <p className="text-lg mb-4">Votre score : <span className="font-bold">{score} / {questions.length}</span></p>
        <button
          onClick={restartQuiz}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Recommencer
        </button>
      </div>
    );
  }

  return (
    <div
      className="max-w-md mx-auto p-1 rounded-xl"
      style={{
        background: "linear-gradient(to right, #bfdbfe, #fecaca)",
      }}
      key={shuffleKey}
    >
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl text-gray-800 font-bold mb-2">Question {current + 1} / {questions.length}</h2>
        <p className="mb-6 text-gray-950">{question.question}</p>
        <ul className="list-none p-0 mb-4 text-black">
          {shuffled.map((item, idx) => (
            <li key={idx} className="mb-3">
              <button
                onClick={() => handleChoice(idx)}
                disabled={showAnswer}
                className={`w-full text-left px-4 py-2 rounded border transition
                  ${selected === idx
                    ? idx === correctIndex
                      ? "bg-green-200 border-green-400"
                      : "bg-red-200 border-red-400"
                    : "bg-gray-100 border-gray-300 hover:bg-blue-100"}
                  ${showAnswer ? "cursor-not-allowed" : "cursor-pointer"}
                `}
              >
                {item.choice}
              </button>
            </li>
          ))}
        </ul>
        {showAnswer && (
          <div className="mt-4">
            {selected === correctIndex ? (
              <p className="text-green-700 font-semibold">Bonne réponse !</p>
            ) : (
              <p className="text-red-700 font-semibold">Mauvaise réponse. La bonne réponse était : <span className="font-bold">{shuffled[correctIndex].choice}</span></p>
            )}
            {question.definition && (
              <p className="mt-2 text-gray-700 italic">Définition : {question.definition}</p>
            )}
            <button
              onClick={nextQuestion}
              className="bg-blue-600 text-white px-6 py-2 rounded mt-4 hover:bg-blue-700 transition"
            >
              {current + 1 < questions.length ? "Suivante" : "Voir le score"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
