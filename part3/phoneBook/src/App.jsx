import { useState, useEffect } from 'react'
import service from './services/person'

const Person = ({ person }) => {
  


  const deletePerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  
    if (confirm(`Delete ${person.name}?`) == true) {
      service.remove(person.id)
    }
  }


  return (
   
      <div>
        <li>{person.number}</li>
      </div>
    
  )
}


const App = () => {

  
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personFilter, setPersonFilter] = useState('')

  console.log(personFilter)

  const personToFilter = personFilter.length === 0 ? persons : persons.filter(person => person.name.toUpperCase().startsWith(personFilter.toUpperCase()))

  useEffect(() => {
    console.log('effect')
    service.getAll().then(retrurnedPerson => {
      setPersons(retrurnedPerson)
    })
      .catch(error => {
        alert(`the fata wasn´t get.`)
      })
  }, [])


  


  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)


    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    if (persons.find(person => person.number === newNumber)) {
      const obj = persons.find(person => person.number === newNumber);
      if (confirm(`${obj.name} already added in phoneBook, replace the old number with a new one?`) == true) {
        service.create(newPerson).then(retrurnedPerson => {
          setPersons(persons.concat(retrurnedPerson))
          setNewName('')
          setNewNumber('')
        })
      } else {
        service.create(newPerson).then(retrurnedPerson => {
          setPersons(persons.concat(retrurnedPerson))
          setNewName('')
          setNewNumber('')
        })
      }
    }

  }


  const deletePerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  
    if (confirm(`Delete ${person.name}?`) == true) {
      service.remove(person.id)
    }
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
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /> </div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <form>
        <div>
          <ul> 
            {personToFilter.map(person => <Person key={person.id} person={person}><button type="submit">add</button></Person>)}
          </ul>
        </div>
      </form>
    </div>
  )
}

export default App

