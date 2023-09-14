/* eslint-disable react/prop-types */

const ResultDisplay = ({ text }) => {
  const wordCount = text.split(/\s+/).filter(Boolean).length;

  return <div className="result">Word Count: {wordCount}</div>;
};

export default ResultDisplay;
