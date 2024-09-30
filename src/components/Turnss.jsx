function Turnss({activee ,player1,player2}) {
  return (
    <div className="bg-violet-900 shadow-lg shadow-indigo-500 border-2 rounded-2xl border-teal-400 mb-5 mt-[-2%] w-[30%] ml-[35%] py-2 ">
  {(activee==="X" && player1)?
    <li>{player1}'s turn</li>
  :(activee==="O" && player2)?
    <li>{player2}'s turn</li>
  :(activee==="X")?
    <li>Player 1's turn</li>
  :(activee==="O")?
    <li>Player 2's turn</li>
  :null
  

  }
    </div>
  )
}

export default Turnss