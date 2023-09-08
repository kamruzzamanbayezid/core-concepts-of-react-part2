
import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Albums from './Albums'

function App() {
  // Normal Function
  // function handleClick() {
  //   alert('Hello Beautiful People!!')
  // }

  // Arrow Function
  // const handleClick2 = () => {
  //   alert('Hello Wonderful People!!')
  // }

  // Recap
  // const handleClick = (num) => {
  //   if (!num) {
  //     alert('Bhai number do pehle');
  //   }
  //   else {
  //     alert(num * 2);
  //   }
  // }

  const [count, setCount] = useState(0);
  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  const handleClick2 = () => {
    const newCount = count - 1;
    if(newCount < 0){
      alert('Negative value doesn"t count');
      return;
    }
    setCount(newCount);
  }


  return (
    <>
      <h2>Core Concepts of React part2</h2>

      <Albums></Albums>

      {/* <h3>Count: {count}</h3>
      <button onClick={handleClick}>Click to add</button>
      <button onClick={handleClick2}>Click to remove</button> */}

      {/* Recap */}
      {/* <button onClick={() => { handleClick('kala') }}>Click it</button> */}

      {/* Main Module concepts */}

      {/* User.jsx */}
      {/* <Users></Users> */}

      {/* Counter.jsx */}
      {/* <Counter></Counter> */}

      {/* Team.jsx */}
      {/* <Team></Team> */}

      {/* <div style={{border: '2px solid red'}}>
        <button style={{border: '2px solid green'}} onClick={handleClick}>Click One</button>

        <button onClick={handleClick2}>Click Two</button>

        <button style={{border: '2px solid green'}} onClick={() => { alert('Hello Loving People!!') }}>Click Three</button>

        <button  onClick={function () { alert('Hello Happy People!!') }}>Click Three</button>
      </div> */}
    </>
  )
}

export default App
