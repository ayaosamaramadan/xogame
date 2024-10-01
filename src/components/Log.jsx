function Log({turns}) {
  return (
    <div className="bg-secondary rounded-2xl shadow-lg  
     border-blue-300 border-2 shadow-cyan-500 opacity-75
      2xl:ml-[66%] 2xl:p-4 2xl:max-w-[15%] 2xl:mt-[-410px]
      xl:ml-[68%] xl:p-4 xl:max-w-[20%] xl:mt-[-410px]
      lg:ml-[77%] lg:p-4 lg:max-w-[20%] lg:mt-[-410px]
      md:ml-[66%] md:p-4 md:max-w-[30%] md:mt-[-410px]
      sm:ml-[67%] sm:p-4 sm:max-w-[31%] sm:mt-[-410px]
      2sm:ml-[72%] 2sm:p-1 2sm:max-w-[26%] 2sm:mt-[-410px] 2sm:max-h-[45vh]
        ">
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