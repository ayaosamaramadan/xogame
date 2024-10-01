function Log({turns}) {
  return (
    <div className="bg-secondary rounded-2xl shadow-lg border-blue-300 border-2 shadow-cyan-500 ml-[65%] mt-[-30%] p-4 w-[20%] h-[50vh] relative opacity-75">
      <ol>
      
      {turns.map((turn, index) => (
        <li key={`${turn.square.row+1} ${turn.square.col+1}`} className="pb-2">
          {turn.player} played at {turn.square.row+1}.{turn.square.col+1}
        </li>
      ))}
    </ol>
    </div>
    
  )
}

export default Log