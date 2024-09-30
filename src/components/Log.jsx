function Log({turns,}) {
  return (
    <div className="bg-black ml-[65%] mt-[-30%] w-[20%] h-[100%] relative">
      <ol>
      {turns.map((turn, index) => (
        <li key={`${turn.square.row+1} ${turn.square.col+1}`}>
          {turn.player} played at {turn.square.row+1}.{turn.square.col+1}
        </li>
      ))}
    </ol>
    </div>
    
  )
}

export default Log