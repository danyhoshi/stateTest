import { useState } from "react";
import { initialLetters as letters } from "./dataLetter.js";
import Letter from "./Letter.jsx";
import "./App.css";
// Cada vez que se hace clic en el botón, el estado de la entrada desaparece. Esto se debe a que se crea una función diferente de MyTextField para cada renderizado de MyComponent. Estás renderizando un componente diferente en la misma posición, por lo que React reinicia todo el estado que esté anidado por debajo. Esto conlleva a errores y problemas de rendimiento. Para evitar este problema, declara siempre las funciones del componente en el nivel superior, y no anides sus definiciones.
export default function App() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {isPlayerA ? (
        <Counter key="kgjf" person="Taylor" />
      ) : (
        <Counter key="oyoy" person="Sarah" />
      )}
      <button
        onClick={() => {
          setIsPlayerA(!isPlayerA);
        }}
      >
        ¡Siguiente jugador!
      </button>
    </div>
  );
}

function Counter({ person }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (hover) {
    className += " hover";
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>
        Puntos de {person}: {score}
      </h1>
      <button onClick={() => setScore(score + 1)}>Agregar uno</button>
    </div>
  );
}
