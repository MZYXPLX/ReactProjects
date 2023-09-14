import { useState } from "react";
import InputArea from "./InputArea";
import ResultDisplay from "./ResultDisplay";
import "./App.css";

const App = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (text) => {
    setInputText(text);
  };

  return (
    <div className="App">
      <h1>Word Counter</h1>
      <InputArea onTextChange={handleChange} />
      <ResultDisplay text={inputText} />
    </div>
  );
};

export default App;
