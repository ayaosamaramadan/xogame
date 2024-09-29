import { useEffect, useState } from "react";
import "./App.css";
import Player from "./components/Player";
import Xoboard from "./components/Xoboard";
import Turnss from "./components/Turnss";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import Headder from "./components/Headder";
import Playerboard from "./components/Playerboard";

const initGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
  // ["X", "O", "X"],
  // ["O", "X", "X"],
];

const winningstat = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
];

function App() {
  const [player1, setplayer1] = useState("");
  const [player2, setplayer2] = useState("");

  const [activee, isactive] = useState("X");
  const [gameterns, setisgameterns] = useState([]);

  const [darkMode, setdarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  function handledarkmode() {
    setdarkMode(!darkMode);
  }

function handleactive(rowinx, colinx) {
    isactive((activee) => (activee === "X" ? "O" : "X"));
    setisgameterns((prevTurns) => {
      let currentTurn = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentTurn = "O";
      }

      const updatedTurns = [
        {
          square: {
            row: rowinx,
            col: colinx,
          },
          player: activee,
        },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  let initGamee = [...initGame.map((row) => [...row])];
  for (const turn of gameterns) {
    const { square, player } = turn;
    const { row, col } = square;
    initGamee[row][col] = player;
  }

  let winner;

  for (const win of winningstat) {
    const first = initGamee[win[0][0]][win[0][1]];
    const second = initGamee[win[1][0]][win[1][1]];
    const third = initGamee[win[2][0]][win[2][1]];
    if (first && first === second && first === third) {
      winner = first;
    }
  }
  
  const hasDraw = gameterns.length === 9 && !winner;
  
  function handlereset() {
    setisgameterns([]);
  }

  return (
    <>
      <Headder handledarkmode={handledarkmode} darkMode={darkMode}/>
      <main className="">
        <div className="m-10 w-[80%] ">
          <div className=" ml-[150px] ">
            <Playerboard activee={activee} setplayer1={setplayer1} setplayer2={setplayer2}/>
            <div className="ml-[10px]">
              <Xoboard handleactive={handleactive} initGamee={initGamee} />
            </div>
          </div>
        </div>
        <Turnss activee={activee} player1={player1} player2={player2} />
      </main>

      {(winner || hasDraw) && <GameOver winner={winner} handlereset={handlereset}/>}
      <Log turns={gameterns} />
    </>
  );
}

export default App;
