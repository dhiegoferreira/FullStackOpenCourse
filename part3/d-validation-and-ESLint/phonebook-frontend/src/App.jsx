import { useState, useEffect } from 'react'
import personService from './services/person'
import Person from './components/Person.jsx'
import Notification from './components/Notification.jsx'



const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personFilter, setPersonFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)


  useEffect(() => {
    console.log('effect')
    personService.getAll().then(retrurnedPerson => {
      setPersons(retrurnedPerson)
    })
      .catch(error => {
        setErrorMessage(`The source data is disabled or was not found.`.error)
      })
  }, [])





  const personToFilter = personFilter.length === 0 ? persons : persons.filter(person => person.name.toUpperCase().startsWith(personFilter.toUpperCase()))



  const addPerson = (event) => {
    event.preventDefault()

    console.log('button clicked', event.target)

    const newPerson = {
      name: newName,
      number: newNumber,
    }
    const personFound = persons.find(person => person.name === newName);
    if (personFound) {
      if (confirm(`${personFound.name} already added in phoneBook, replace the old number with a new one?`) == true) {
        personService.update(personFound.id, newPerson).then(returnedPerson => {
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          
          setErrorMessage(error.response.data.error)
        })

      }
    } else {
      personService.create(newPerson).then(retrurnedPerson => {
        setPersons(persons.concat(retrurnedPerson))
        setNewName('')
        setNewNumber('')
      }).catch(error => {
        console.log(error.name)
        if (error.name === 'ValidationError') {
          // Handle Mongoose validation errors
          setErrorMessage(error.message); // or extract specific error messages
        } else {
          // Handle other types of errors (e.g., network errors)
          console.log(error);
          setErrorMessage('An unexpected error occurred.');
        }
      })

    }


  }


  const deletePerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    if (confirm(`Delete ${person.name}?`) == true) {
      personService.remove(person.id)
    }
  }


  const handleFilterChange = (event) => {
    setPersonFilter(event.target.value)

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)

  }


  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage}/>
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
            {personToFilter.map(person => <Person key={person.id} person={person}></Person>)}
          </ul>
        </div>
      </form>
    </div>
  )
}

export default App

