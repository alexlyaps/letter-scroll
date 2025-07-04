import { useEffect, useState } from "react";
import { letters } from "../data/letters";

type LetterProps = {
  onChange: (letter: string) => void;
};

function Letter({ onChange }: LetterProps) {
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      setLetterIndex((prev) => {
        const next =
          (prev + (event.deltaY < 1 ? 1 : -1) + letters.length) %
          letters.length;
        return next;
      });
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    onChange(letters[letterIndex]);
  }, [letterIndex, onChange]);

  return <span>{letters[letterIndex].toLowerCase()}</span>;
}

export default Letter;
