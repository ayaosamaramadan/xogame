function Xoboard({ handleactive, initGamee }) {

  return (
    <>
      {initGamee.map((row, rowinx) => (
        <div key={rowinx} className="col-3 inline-block ">
          {row.map((sym, colinx) => (
            
              <div key={colinx}>
                <li >
                  <div
                    className={`rounded-2xl dark:bg-black bg-slate-300 bg-opacity-30 text-black m-1 p-10 text-center ${sym !== null ? "p-[39px] w-[117px] disabled" : "p-[51px] pt-[47px] w-[117px] h-[120px]"}`}
                    onClick={() => sym === null && handleactive(rowinx, colinx)}
                  >
                    <button disabled={sym !== null} 
                    className= {`text-white text-[50px] text-shadow-[3] text-shadow-blur-10 border-s-fuchsia-950 ${sym==="X"?"dark:text-shadow-red-500 text-shadow-amber-500":"dark:text-shadow-blue-500 text-shadow-emerald-600"}`}>{sym}</button>
                  </div>
                </li>
              </div>
            
          ))}
        </div>
      ))}
    </>
  );
}

export default Xoboard;
