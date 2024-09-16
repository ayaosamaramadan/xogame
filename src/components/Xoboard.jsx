function Xoboard({ handleactive, initGamee }) {

  return (
    <>
      {initGamee.map((row, rowinx) => (
        <div key={rowinx} className="col-3 w-[50%]">
          {row.map((sym, colinx) => (
            <>
              <div className="float-right w-[33%]">
                <li key={colinx}>
                  <div
                    className={`bg-slate-50 text-black m-5 p-10 text-center ${
                      sym !== null ? "disabled" : ""
                    }`}
                    onClick={() => sym === null && handleactive(rowinx, colinx)}
                  >
                    <button disabled={sym !== null}>{sym}</button>
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
