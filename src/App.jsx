
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'

function App() {
  // Normal Function
  function handleClick() {
    alert('Hello Beautiful People!!')
  }

  // Arrow Function
  const handleClick2 = () => {
    alert('Hello Wonderful People!!')
  }

  return (
    <>
      <h2>Core Concepts of React part2</h2>

      {/* User.jsx */}
      <Users></Users>

      {/* Counter.jsx */}
      <Counter></Counter>

      {/* Team.jsx */}
      <Team></Team>

      <div style={{border: '2px solid red'}}>
        <button style={{border: '2px solid green'}} onClick={handleClick}>Click One</button>

        <button onClick={handleClick2}>Click Two</button>

        <button style={{border: '2px solid green'}} onClick={() => { alert('Hello Loving People!!') }}>Click Three</button>

        <button  onClick={function () { alert('Hello Happy People!!') }}>Click Three</button>
      </div>
    </>
  )
}

export default App
