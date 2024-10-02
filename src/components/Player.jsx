import { useState } from "react";

function Player({ name, sym, activee ,setplayer2 ,setplayer1}) {
  const [isEdit, setisEdit] = useState(false);
  const [newName, setNewName] = useState(name);
  function handleEdit() {
    setisEdit((isEdit) => !isEdit);
    if (isEdit) {
      if (sym === "X") {
        setplayer1(newName);
      } else {
        setplayer2(newName);
      }}
      
  }

  let playname = <span className="mr-10">{newName}</span>;

  if (isEdit) {
    playname = (
      <input
        type="text"
        required
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        className="text-black"
      />
    );
  }

  return (
    <>
      <li className={`${activee ? "active" : undefined} inline-block 2xl:my-12 2xl:ml-[10%] xl:my-12 xl:ml-[0%] lg:my-10 lg:ml-[0%] md:my-12 md:ml-[0%] sm:my-12 sm:ml-[-10%] 2sm:my-12 2sm:ml-[-4.5%] ${sym== "X"?"lg:mr-[0%] xl:mr-[10%] 2xl:mr-[0%] md:mr-[20px] sm:mr-[60%] 2sm:mr-[4%] rounded-e-full" :"rounded-s-full 2xl:ml-[20%] xl:ml-[10%] lg:ml-[10%] md:ml-[-50%] sm:ml-[-53%] "}`}>
        <div className="inline"><span>{playname}</span>
        <span className={`text-shadow-[3] text-shadow-blur-10 2sm:ml-[-8px] ${sym=="X"?"text-white text-shadow-amber-700 dark:text-shadow-red-500 text-shadow ":"text-shadow-lime-500 dark:text-shadow-blue-500 text-shadow "}`}>{sym} </span></div>
        
        <button onClick={handleEdit} className={`${isEdit?"editbtn" : "savee"}bg-slate-400 rounded-full p-1 pl-5 pr-5`}> {isEdit ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}

export default Player;