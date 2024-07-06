import { useState } from 'react'


const Person = ({ person }) => {
  return (
    <li>{person.name}</li>
  )
}



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      id: 1
     }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked',event.target)

    const newPerson = {
      name: newName,
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
  }


  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
   
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <Person key={person.id} person={person}></Person>)}
         
      </ul>
    </div>
  )
}

export default App
