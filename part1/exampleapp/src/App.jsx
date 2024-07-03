import './App.css'





const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} year old</p>
    </div>
  )
}



function App() {

  const name = 'Peter'
  const age = 10

  //any event element need result event object
  //

  // const addNote = (event) => {
    event.preventDefault();

  // }


  return (
    <div>
      <h1>Greetins</h1>
      <Hello name='George'/>
      <Hello name={name} age={age}/>

    </div>
  )
}

export default App
