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

  // const user = {
  //   name: 'Hedy Lamarr',
  //   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  //   imageSize: 90,
  // };


  return (
    <>

         {/* <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      /> */}
      <div className="card">
        <p> React Page {dateN.toString()}</p> 
        <button onClick={() => alert("Damjan is gay")}> Clicke me</button>
      </div>       

      <Hello name="test">

      </Hello>
    
    
    </>
  )
  
   
  
  // return (
  //   <>
    
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>

  //     <h1>Vite + React</h1>

  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
