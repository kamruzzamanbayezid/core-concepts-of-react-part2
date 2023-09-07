import { useState } from "react"

export default function () {
      const [count, setCount] = useState(0);

      function plusCount() {
            const newCount = count + 1;
            setCount(newCount)
      }

      const minusCount = () => {
            const newCount = count - 1;
            setCount(newCount);
      }

      return (
            <div style={{ border: '2px solid yellow', margin: '10px', paddingBottom: '10px' }}>
                  <h3>Counter: {count}</h3>
                  <button style={{border: '2px solid green'}} onClick={plusCount}>Add</button>
                  <button style={{border: '2px solid red',marginLeft: '2px'}} onClick={minusCount}>Reduce</button>
            </div>
      )
}