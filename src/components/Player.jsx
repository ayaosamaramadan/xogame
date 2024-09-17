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
      <li className={`${activee ? "active" : undefined} inline-block m-10`}>
        <div className="inline"><span>{playname}</span>
        <span>{sym} </span></div>
        
        <button onClick={handleEdit} className={`${isEdit?"editbtn" : "savee"}bg-slate-400 rounded-full p-1 pl-5 pr-5`}> {isEdit ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}

export default Player;