import React from "react";

function ResultScreen({ totalQuestions, score }) {
  const correctAnswers = score;
  const incorrectAnswers = totalQuestions - score;

  return (
    <div className="score-section">
      <h2>Results</h2>
      <h3>Total questions: {totalQuestions}</h3>
      <div className="rightAnswers">
        <p>
          <img src="/check-icon.svg" alt="correct icon" />
          Correct answers:
        </p>
        <span>{correctAnswers}</span>
      </div>
      <div className="wrongAnswers">
        <p>
          <img src="/x-icon.svg" alt="incorrect icon" />
          Incorrect answers:
        </p>
        <span>{incorrectAnswers}</span>
      </div>
      <div className="messages">
        <h1 className="messageResult">Your score: {score} </h1>
      </div>
    </div>
  );
}

export default ResultScreen;
