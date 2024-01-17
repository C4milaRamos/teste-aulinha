import React, { useState } from "react";
import imagemGato from "../src/assets/gatodebotas.jpg";

function App() {
  const [buttonPosition, setButtonPosition] = useState({
    x: window.innerWidth / 2 - 50,
    y: window.innerHeight / 2 - 189,
  });

  const handleButtonClick = () => {
    const newX = Math.random() * (window.innerWidth - 30);
    const newY = Math.random() * (window.innerHeight - 40);
    setButtonPosition({ x: newX, y: newY });
  };

  const clickButton = () => {
    onclick = alert("Ótima escolha! Hoje tem redondo");
  };

  return (
    <div className="App">
      <h1>Amoi chega com a aulinha, pui favoi??</h1>
      <button
        className="aaa"
        onMouseOver={handleButtonClick}
        style={{
          position: "absolute",
          left: buttonPosition.x,
          top: buttonPosition.y,
        }}
      >
        Não
      </button>
      <button
        onClick={clickButton}
        style={{
          marginRight: 150,
        }}
      >
        Sim
      </button>

      <div>
        <img src={imagemGato} alt="imagemGato" className="imagemGato" />
      </div>
    </div>
  );
}

export default App;
