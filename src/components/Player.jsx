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
        <span>{playname}</span>
        <span>{sym} </span>
        <button onClick={handleEdit}> {isEdit ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}

export default Player;