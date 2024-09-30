function Xoboard({ handleactive, initGamee }) {

  return (
    <>
      {initGamee.map((row, rowinx) => (
        <div key={rowinx} className="col-3 inline-block ">
          {row.map((sym, colinx) => (
            <>
              <div>
                <li key={colinx}>
                  <div
                    className={`rounded-2xl bg-black text-black m-1 p-10 text-center ${
                      sym !== null ? "p-[39px] w-[117px] disabled" : "p-[51px] pt-[47px] w-[117px] h-[120px]"
                    }`}
                    onClick={() => sym === null && handleactive(rowinx, colinx)}
                  >
                    <button disabled={sym !== null} 
                    className= {`text-white text-[50px] text-shadow-[3] text-shadow-blur-10 border-s-fuchsia-950 ${sym==="X"? " text-shadow-red-500":"text-shadow-blue-500"}`}>{sym}</button>
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
