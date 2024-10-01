import React from "react";

function GameOver({ winner, handlereset, player1, player2 }) {
  return (
    <div
      className="bg-indigo-950 h-[50vh] w-[40%] animate-[opa_1s]
     ml-[29%] relative mt-[-35%] border-gray-50 border-l-2 border-b-2 shadow-pink-500 shadow-lg rounded-3xl"
    >
      <br />
      <p className="text-[40px] text-shadow-sm font-bold text-shadow-red-950">Game Over</p>
      <div className="go">
        {winner === "X" && player1 ? (
          <li>{player1} is the winner</li>
        ) : winner === "O" && player2 ? (
          <li>{player2} is the winner</li>
        ) : winner === "X" ? (
          <li>Player 1 is the winner</li>
        ) : winner === "O" ? (
          <li>Player 2 is the winner</li>
        ) : null}

        {!winner && <li>Its a draw</li>}
      </div>
      <button
        onClick={handlereset}
        className="goo hover:bg-secondary border-2 m-5 p-5 px-10 rounded-full "
      >
        REMATCH
      </button>
    </div>
  );
}

export default GameOver;
