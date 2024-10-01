import { useEffect, useState } from "react";
import "./App.css";

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
      <Headder handledarkmode={handledarkmode} darkMode={darkMode} />
      <main>
        <div className="m-10 ">
          <div className="2xl:ml-[-150px] xl:ml-[0px] lg:ml-[0px] md:ml-[0px] sm:ml-[40px] 2sm:ml-[0px]">
            <Playerboard
              activee={activee}
              setplayer1={setplayer1}
              setplayer2={setplayer2}
            />
            <Turnss activee={activee} player1={player1} player2={player2} />
            <div
              className="
            2xl:ml-[42%] 2xl:max-w-[25%]
            xl:ml-[34%] xl:max-w-[33%]
            lg:ml-[29%] lg:max-w-[42%] 
            md:ml-[5%] md:max-w-[60%] 
             sm:ml-[-8%] sm:max-w-[73%]
             2sm:ml-[-6%] 2sm:max-w-[79.5%] 
             border-fuchsia-400
             bg-violet-400 shadow-pink-500 shadow-lg rounded-3xl 
             border-8"
            >
              <Xoboard handleactive={handleactive} initGamee={initGamee} />
            </div>
          </div>
        </div>
        {winner || hasDraw ? (
          <GameOver winner={winner} handlereset={handlereset} />
        ) : (
          gameterns.length !== 0 && <Log turns={gameterns} />
        )}
      </main>
    </>
  );
}

export default App;
