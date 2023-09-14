import React from "react";

function AnswerOption({ answerText, onClick }) {
  return <button onClick={onClick}>{answerText}</button>;
}

export default AnswerOption;
