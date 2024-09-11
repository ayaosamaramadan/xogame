import { useState } from "react";

function Player({ name, sym, activee }) {
  const [isEdit, setisEdit] = useState(false);
  const [newName, setNewName] = useState(name);
  function handleEdit() {
    setisEdit((isEdit) => !isEdit);
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
