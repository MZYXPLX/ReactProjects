/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./TypingText.css"; // You'll create this CSS file

function TypingText(props) {
  const text = props.text; // Single line of text
  const [currentText, setCurrentText] = useState("");
  const [typingCompleted, setTypingCompleted] = useState(false);

  useEffect(() => {
    if (!typingCompleted) {
      // Add a delay before starting the typing animation
      const typingDelay = setTimeout(() => {
        let currentTextIndex = -1;
        const typingInterval = setInterval(() => {
          currentTextIndex++;
          setCurrentText((prevText) => prevText + text[currentTextIndex]);

          if (currentTextIndex === text.length - 1) {
            clearInterval(typingInterval);
            setTypingCompleted(true);
          }
        }, 50); // Typing speed: 100ms per character

        return () => {
          clearInterval(typingInterval);
        };
      }, props.delay || 0); // Default delay is 0ms

      return () => {
        clearTimeout(typingDelay);
      };
    }
  }, [typingCompleted, props.delay]);

  return (
    <div className={`typing-container ${props.className}`}>
      <p className="typing-text">{currentText}</p>
    </div>
  );
}

export default TypingText;
