import { useState } from "react"

export default function Team() {

      const [player, setPlayer] = useState(11);

      return (
            <div style={{ border: '2px solid violet', margin: '10px', paddingBottom: '10px' }}>
                  <h3>Total Player: {player}</h3>

                  {/* Function into button onClick */}
                  <button style={{ border: '2px solid gray'}} onClick={() => {
                        const newPlayer = player + 1;
                        setPlayer(newPlayer)
                  }}>Select</button>

                  <button style={{ border: '2px solid gray', marginLeft: '2px' }} onClick={() => {
                        const newPlayer = player - 1;
                        setPlayer(newPlayer)
                  }}>Out</button>
            </div>
      )
}