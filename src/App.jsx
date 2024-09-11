import { useEffect, useState } from "react";
import "./App.css";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import Player from "./components/Player";
import Xoboard from "./components/Xoboard";
import Log from "./components/Log";

function App() {

  const [activee,isactive]=useState("X");

  function handleactive() {
    isactive((activee)=>activee==="X"?"O":"X");
  
  }

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
              <Player name="Player 1" sym="X" activee={activee==="X"}/>
              <Player name="Player 2" sym="O" activee={activee ==='O'}/>
            </ul>
            <div className="">
              <Xoboard handleactive={handleactive} activee={activee}/>
            </div>
          </div>
        </div>
        <Log/>
      </main>
    </>
  );
}

export default App;
