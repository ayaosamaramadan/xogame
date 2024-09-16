function Log({turns,}) {
  return (
    
    <ol>
      {turns.map((turn, index) => (
        <li key={`${turn.square.row} ${turn.square.col}`}>
          {turn.player} played at row {turn.square.row}, column {turn.square.col}
        </li>
      ))}
    </ol>
  )
}

export default Log