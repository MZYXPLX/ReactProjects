import React, { useState } from "react";
import "./App.css";
import Question from "./components/Question";
import AnswerOption from "./components/AnswerOption";
import ResultScreen from "./components/ResultScreen";

export default function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "A) New York", isCorrect: false },
        { answerText: "B) London", isCorrect: false },
        { answerText: "C) Paris", isCorrect: true },
        { answerText: "D) Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is the CEO of Tesla?",
      answerOptions: [
        { answerText: "A) Jeff Bezos", isCorrect: false },
        { answerText: "B) Elon Musk", isCorrect: true },
        { answerText: "C) Bill Gates", isCorrect: false },
        { answerText: "D) Renatim from EP", isCorrect: false },
      ],
    },
    {
      questionText: "Which company created the iPhone?",
      answerOptions: [
        { answerText: "A) Apple", isCorrect: true },
        { answerText: "B) Intel", isCorrect: false },
        { answerText: "C) Amazon", isCorrect: false },
        { answerText: "D) Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "A) 1", isCorrect: false },
        { answerText: "B) 4", isCorrect: false },
        { answerText: "C) 6", isCorrect: false },
        { answerText: "D) 7", isCorrect: true },
      ],
    },
    {
      questionText: "Who won the second world war?",
      answerOptions: [
        { answerText: "A) Axis", isCorrect: false },
        { answerText: "B) Brazil", isCorrect: false },
        { answerText: "C) Allies", isCorrect: true },
        { answerText: "D) Ceará", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <ResultScreen score={score} totalQuestions={questions.length} />
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <Question questionText={questions[currentQuestion].questionText} />
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <AnswerOption
                  key={index}
                  answerText={answerOption.answerText}
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect)
                  }
                />
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}
