function Xoboard({ handleactive, initGamee }) {

  return (
    <>
      {initGamee.map((row, rowinx) => (
        <div key={rowinx} className="col-3 inline-block ">
          {row.map((sym, colinx) => (
            <>
              <div >
                <li key={colinx}>
                  <div
                    className={` bg-black text-black m-1 p-10 text-center ${
                      sym !== null ? "disabled" : "p-11 w-[130px]"
                    }`}
                    onClick={() => sym === null && handleactive(rowinx, colinx)}
                  >
                    <button disabled={sym !== null} 
                    className= {`text-white text-[50px] text-shadow-[3] text-shadow-blur-10 border-s-fuchsia-950 ${sym==="X"? " text-shadow-red-500":" text-shadow-blue-500"}`}>{sym}</button>
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
