/* eslint-disable react/prop-types */
import "./App.css";
const InputArea = ({ onTextChange }) => {
  const handleChange = (e) => {
    const text = e.target.value;
    onTextChange(text);
  };

  return (
    <textarea
      className="input"
      onChange={handleChange}
      placeholder="Type or paste text here..."
    />
  );
};

export default InputArea;
