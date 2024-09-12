import { useEffect, useState } from "react";
import "./App.css";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import Player from "./components/Player";
import Xoboard from "./components/Xoboard";
import Turnss from "./components/Turnss";

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

  return (
    <>
      <header>
        <span className="text-blue-500 ">X</span>
        <span className="text-red-500 ">O</span>
        <button onClick={handledarkmode}>
          <li>{darkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}</li>
        </button>
      </header>
      <main className="">
        <div className="m-10 w-[80%] ">
          <div className="m-[5%] bg-gray-900 ">
            <ul className="players">
              <Player
                name="Player 1"
                sym="X"
                activee={activee === "X"}
                setplayer1={setplayer1}
              />
              <Player
                name="Player 2"
                sym="O"
                activee={activee === "O"}
                setplayer2={setplayer2}
              />
            </ul>
            <div className="">
              <Xoboard handleactive={handleactive} turns={gameterns}  />
            </div>
          </div>
        </div>
        <Turnss activee={activee} player1={player1} player2={player2} />
      </main>
    </>
  );
}

export default App;
