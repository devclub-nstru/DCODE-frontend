import { useState, useEffect } from "react";
import "./Typewriter.css";

const useTypewriter = (text, speed = 20) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;

    const typeCharacter = () => {
      if (i < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(i));
        i++;
        setTimeout(typeCharacter, speed);
      }
    };

    setDisplayText("");
    typeCharacter();

    return () => setDisplayText("");
  }, [text, speed]);

  return displayText;
};

export default function TypewriterDemo(props) {
  const text = " "+props.text;
  const typedText = useTypewriter(text, 100);

  return (
    <div className="typewriter-container">
      <span className="typewriter-text">{typedText}</span>
    </div>
  );
}
