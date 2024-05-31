import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Game from './Game.jsx'

const Hello = (name) => {
  return <p> {name.name}</p>
}


function App() {
  const [count, setCount] = useState(0)

  const dateN = new Date()

  return (
    <>

    
      <div className="card">
        <p> React Page {dateN.toString()}</p> 
        <button onClick={() => alert("404 not found")}> Clicke me</button>
      </div>       

      <Hello name="test">

      </Hello>
    
    
    </>
  )
  
  
}

export default App
