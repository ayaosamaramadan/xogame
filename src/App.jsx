import { useEffect, useState } from "react";
import "./App.css";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
function App() {
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
          <li>
            {darkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
          </li>
        </button>
      </header>
      <main className="">
        <div className="m-10 bg-gray-900 w-[50%] ">
          <div className="m-10 ">
          <ul className="">
            <li className="inline-block mr-10 ">
              <span >Israa</span>
              <span> X</span>
            </li>
            <li className="inline-block">
              <span> Aya</span>
              <span>  O</span>
            </li>
          </ul>
          GAME BOARD
        </div></div>
        LOG
      </main>
    </>
  );
}

export default App;
