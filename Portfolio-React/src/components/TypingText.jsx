/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import "../assets/CSS/components.css";

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
      <span className={`typing-text ${props.className}`}>{currentText}</span>
  );
}

export default TypingText;
