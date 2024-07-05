import './App.css'
import { useState } from 'react'



// const Button = ({onClick, text}) => (
//   <button onClick={onClick}>
//     {text}
    
//   </button>


// )


// const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const History = (props) => {
  
  if (props.allClicks.length == 0) {
    return (
      <div>
        the app is used by pressing the button
      </div>
    )
  } 

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )

}



const App = () => {
  //Now we have just one sigle piece of state and the event handlers have to take care 
  //of changing the entire application state.
  
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState([])

  //We can improva this as follow
  // const handleClickLeft = () => {
  //   const newClicks = {
  //     left: clicks.left + 1,
  //     right: clicks.right
  //   }

  //   setClicks(newClicks)
  // }

  
    // const handleClickRight = () => {
    //   const newClicks = {
    //     left: clicks.left,
    //     right: clicks.right + 1
    //   }
  
    //   setClicks(newClicks)
    // }
  const handleClickLeft = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = clicks.left + 1
    setClicks({...clicks, left: updatedLeft})
    setTotal(updatedLeft + clicks.right)
  }
  const handleClickRight = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = clicks.right + 1
    setClicks({...clicks, right:updatedRight})
    setTotal(clicks.left + updatedRight)
  }

  //https://stackoverflow.com/questions/37755997/why-cant-i-directly-modify-a-components-state-really/40309023#40309023


  return (

    <div>
      {clicks.left}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>right</button>
      {clicks.right}
      {/* <p>AllCount: {allClicks.join(' ')}</p> */}
      <p>Total Clicks: {total}</p>
      <History allClicks={allClicks}></History>
    </div>



  )


  //Here we define two states, each of one for each button.
  
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)

  // return (
  //   <div>
  //     {left}
  //     <button onClick={() => setLeft(left + 1)}>left</button>
  //     <button onClick={() => setRight(right + 1)}>right</button>
  //     {right}
  //   </div>
  // )

}

export default App
