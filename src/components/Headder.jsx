import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

function Headder({handledarkmode ,darkMode}) {
  return (
  <>
  <header className="bg-slate-600 m-10 mt-5 p-3 rounded-full">
        <span className="text-blue-500 ml-10 font-extrabold text-[30px]">X</span>
        <span className="text-red-500 font-extrabold text-[30px]">O</span>
        <button className=' ml-[88%]' onClick={handledarkmode}>
          <li>{darkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}</li>
        </button>
      </header>
  
  </>
  )
}

export default Headder