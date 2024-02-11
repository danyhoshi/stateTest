import { useState } from "react";
import { initialLetters as letters } from "./dataLetter.js";
import Letter from "./Letter.jsx";
import "./App.css";

export default function MailClient() {
  const [selectedId, setSelectedId] = useState(new Set());

  function handleToggle(toggledId) {
    // TODO: permitir selección múltiple
    const newSelected = new Set(selectedId);
    if (!selectedId.has(toggledId)) {
      newSelected.add(toggledId);
    } else {
      newSelected.delete(toggledId);
    }
    setSelectedId(newSelected);
  }

  return (
    <>
      <h2>Buzón de entrada</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={selectedId}
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>Has seleccionado {selectedId.size} cartas</b>
        </p>
      </ul>
    </>
  );
}
