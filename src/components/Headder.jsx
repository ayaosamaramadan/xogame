import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { ImSun } from "react-icons/im";
function Headder({handledarkmode ,darkMode}) {
  return (
  <>
  <header className=" bg-opacity-20 2xl:m-10 2xl:p-1 mt-5 xl:m-10 xl:p-1
   lg:m-5 lg:p-5 md:m-5 sm:m-[16px] s2m:m-[0px]  ">
        <span className="text-blue-500 2xl:ml-10 xl:ml-10 lg:ml-10 md:ml-[0%] 2sm:ml-[0%] font-extrabold text-[30px] text-shadow-cyan-200 text-shadow ">X</span>
        <span className="text-red-500 font-extrabold text-[30px] text-shadow-red-200 text-shadow ">O</span>
        <button className=' 2xl:ml-[88%] xl:ml-[88%] lg:ml-[88%]
         md:ml-[88%] sm:ml-[70%] 2sm:ml-[70%]' onClick={handledarkmode}>
          <li>{darkMode ? <ImSun /> : <MdOutlineDarkMode />}</li>
        </button>
      </header>
  
  </>
  )
}

export default Headder