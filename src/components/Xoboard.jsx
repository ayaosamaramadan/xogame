import { useState } from "react";

const initGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
  // ["X", "O", "X"],
  // ["O", "X", "X"],
];
function Xoboard({ handleactive, activee }) {
  const [gameBoard, setisGameboard] = useState(initGame);

  function handleselected(rowinx, colinx) {
    setisGameboard((pregameBoard) => {
      const updatedBoard = [...pregameBoard.map((inrow) => [...inrow])];
      updatedBoard[rowinx][colinx] = activee;
      return updatedBoard;
    });
    handleactive();
  }

  return (
    <>
      {gameBoard.map((row, rowinx) => (
        <div key={rowinx} className="col-3 w-[50%]">
          {row.map((sym, colinx) => (
            <>
              <div className="float-right w-[33%]">
                <li key={colinx}>
                  <div 
                  
                    className={`bg-slate-50 text-black m-5 p-10 text-center ${sym !== null ? 'disabled' : ''}`}
              
                  onClick={() => sym === null && handleselected(rowinx, colinx)}
             >
                    <button disabled={sym!==null}>{sym}</button>
                  </div>
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
