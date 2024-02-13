import { useState } from "react";
import { initialLetters as letters } from "./dataLetter.js";
import Letter from "./Letter.jsx";
import "./App.css";
// Cada vez que se hace clic en el botón, el estado de la entrada desaparece. Esto se debe a que se crea una función diferente de MyTextField para cada renderizado de MyComponent. Estás renderizando un componente diferente en la misma posición, por lo que React reinicia todo el estado que esté anidado por debajo. Esto conlleva a errores y problemas de rendimiento. Para evitar este problema, declara siempre las funciones del componente en el nivel superior, y no anides sus definiciones.
export default function App() {
  const [counter, setCounter] = useState(0);

  function MyTextField() {
    const [text, setText] = useState("");

    return <input value={text} onChange={(e) => setText(e.target.value)} />;
  }

  return (
    <>
      <MyTextField />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Hiciste clic {counter} veces
      </button>
    </>
  );
}
