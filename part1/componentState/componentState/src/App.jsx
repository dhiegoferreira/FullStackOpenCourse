import './App.css'





const Hello = (props) => {
  // console.log(props) 

  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return (
    <div>
      <p>Hello {props.name}, you are {props.age} year old</p>
      <p>So you were problaby born in {bornYear()}</p>
    </div>
  )
}



function App() {

  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetins</h1>
      <Hello name='George'/>
      <Hello name={name} age={age}/>
      
    </div>
  )
}

export default App
