function Turnss({activee ,player1,player2}) {
  return (
    <div className="bg-violet-900 shadow-lg shadow-indigo-500 border-2
     rounded-2xl border-teal-400 mb-5 mt-[-2%] 
     2xl:w-[15%] xl:w-[20%] 2xl:ml-[47%] lg:w-[25%] lg:ml-[37%] md:w-[30%] md:ml-[35%] sm:w-[35%] sm:ml-[30%] 2sm:w-[40%] 2sm:ml-[30%] xl:ml-[40%] py-2  ">
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