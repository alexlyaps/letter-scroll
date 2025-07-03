import { useState } from "react";

function Word() {
  const [word, setWord] = useState("");

  return <span>{word}</span>;
}

export default Word;
