import { useState, useEffect, useRef } from "react";
import "./App.css";
import Letter from "./components/letter";

function App() {
  const [word, setWord] = useState("");
  const [letter, setLetter] = useState("");
  const letterRef = useRef(letter);

  // Всегда держим ref в курсе
  useEffect(() => {
    letterRef.current = letter.toLowerCase();
  }, [letter]);

  useEffect(() => {
    const confirmLetter = () => {
      setWord((prev) => prev + letterRef.current);
    };

    const clearWord = (e: MouseEvent) => {
      e.preventDefault();
      setWord((prev) => {
        return prev.length > 1 ? prev.slice(0, -1) : "";
      });
    };

    document.addEventListener("click", confirmLetter);
    document.addEventListener("contextmenu", clearWord, { capture: true });

    return () => {
      document.removeEventListener("click", confirmLetter);
      document.removeEventListener("contextmenu", clearWord, { capture: true });
    };
  }, []);

  return (
    <div className="app">
      <div className="letter">
        <Letter onChange={setLetter} />
      </div>
      <div className="word">
        <span>{word}</span>
      </div>
    </div>
  );
}

export default App;
