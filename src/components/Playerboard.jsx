import Player from "./Player"

function Playerboard({ activee, setplayer1, setplayer2 }) {
  return (
  <>
  <ul className="players ">
              <Player
                name="Player 1"
                sym="X"
                activee={activee === "X"}
                setplayer1={setplayer1}
              />
              <Player
                name="Player 2"
                sym="O"
                activee={activee === "O"}
                setplayer2={setplayer2}
              />
            </ul>
  
  
  </>)
}

export default Playerboard