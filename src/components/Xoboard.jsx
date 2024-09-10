const initGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
  // ["X", "O", "X"],
  // ["O", "X", "X"],
];
function Xoboard() {
  return (
    <>
      {initGame.map((row, rowIndex) => (
        <div key={rowIndex} className="col-3 w-[50%]">
          {row.map((sym, colIndex) => (
            <>
              <div className="float-right w-[33%]">
                <li key={colIndex} className="">
                  <div className="bg-slate-50 text-black m-5 p-10 "><button >{sym}</button></div>
                  
                </li>
              </div>
            </>
          ))}
        </div>
      ))}
    </>
  );
}

export default Xoboard;
