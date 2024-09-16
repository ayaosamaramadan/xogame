import React from "react";

function GameOver({ winner }) {
  return (
    <div className="game-over">
      <h2>Game Over</h2>

    {winner&&<h3>{winner} wins</h3>}
    {!winner&&<h3>Its a draw</h3>}
      <button>Rematch</button>
    </div>
  );
}

export default GameOver;
