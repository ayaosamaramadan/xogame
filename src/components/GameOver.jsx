import React from "react";

function GameOver({ winner ,handlereset ,player1,player2}) {
  return (
    <div className="game-over">
      <h2>Game Over</h2>

  
{(winner==="X" && player1)?
    <li>{player1} is the winner</li>
  :(winner==="O" && player2)?
    <li>{player2} is the winner</li>
  :(winner==="X")?
    <li>Player 1 is the winner</li>
  :(winner==="O")?
    <li>Player 2 is the winner</li>
  :null
  

  }
    
    {!winner&&<h3>Its a draw</h3>}
      <button onClick={handlereset}>Rematch</button>
    </div>
  );
}

export default GameOver;
