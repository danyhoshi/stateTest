import { useState } from "react";
import "./App.css";
export default function Picture() {
  const [classBack, setClassBack] = useState(true);

  const pic = !classBack && "picture--active";
  const back = classBack && "background--active";

  function handleClickImg(e) {
    e.stopPropagation();
    console.log("Click img");
    setClassBack(false);
  }
  function handleClickDiv() {
    console.log("Click div");
    setClassBack(true);
  }
  return (
    <div className={`background ${back}`} onClick={handleClickDiv}>
      <img
        className={`picture ${pic}`}
        alt="Casas de arcoiris en Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={(e) => handleClickImg(e)}
      />
    </div>
  );
}
