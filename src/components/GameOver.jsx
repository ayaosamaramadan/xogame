import React from "react";

function GameOver({ winner, handlereset, player1, player2 }) {
  return (
    <div
      className="dark:bg-indigo-950 bg-emerald-600 animate-[opa_1s] relative border-gray-50 border-l-2 border-b-2 shadow-pink-500 shadow-lg rounded-3xl mt-[-500px] 
      2sm:ml-[10%]  2sm:w-[80%] 2sm:h-[46vh] 
      sm:ml-[10%]  sm:w-[80%] sm:h-[46vh]
      2xl:ml-[30%] 2xl:w-[40%] 2xl:h-[48vh]
      xl:ml-[30%]  xl:w-[40%] xl:h-[48vh]
      lg:ml-[25%] lg:w-[50%] lg:h-[48vh]
      md:ml-[17%]  md:w-[65%] md:h-[50vh]
      "
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
        className="goo dark:hover:bg-secondary hover:bg-amber-500 border-2 m-5 p-5 px-10 rounded-full "
      >
        REMATCH
      </button>
    </div>
  );
}

export default GameOver;
