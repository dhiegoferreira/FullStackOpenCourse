import { useState } from 'react'


const Person = ({ person }) => {
  return (
    <li>{person.name} {person.number}</li>
  )
}



const App = () => {

    const [persons, setPersons] = useState([
      { name: 'Arto Hellas', number: '040-123456', id: 1 },
      { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
      { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
      { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])


  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber ] = useState('')
  const [personFilter, setPersonFilter ] = useState('')

  console.log(personFilter)
  const personToFilter = personFilter.length === 0 ? persons : persons.filter(person => person.name.toUpperCase().startsWith(personFilter.toUpperCase()))
  

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked',event.target)


    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length +1
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setPersonFilter(event.target.value)

  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    
  }


  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
   
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
            <p>Filter shown with <input value={personFilter}
                  onChange={handleFilterChange} 
            /></p>
        </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/> </div>
          
        
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personToFilter.map(person => <Person key={person.id} person={person}></Person>)}
      </ul>
    </div>
  )
}

export default App

