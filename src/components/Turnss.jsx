function Turnss({activee ,player1,player2}) {
  return (
    <>
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
    </>
  )
}

export default Turnss