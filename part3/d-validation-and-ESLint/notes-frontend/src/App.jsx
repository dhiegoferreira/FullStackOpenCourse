import { useState, useEffect } from 'react'
import noteService from './services/notes'
import Note from './components/Note.jsx'
import Notification from './components/Notification.jsx'



const App = () => {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)


  useEffect(() => {
    console.log('effect')
    noteService.getAll().then((response) => {
      setNotes(response)
    })
  }, [])


  const addNote = (event) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    }

    console.log(noteObject)
    noteService.create(noteObject)
      .then(response => setNotes(notes.concat(response)))


    setNewNote('')

  }


  const toggleImportanceOf = (id) => {

    console.log(`importance of ${id} needs to be toggled.`)
    const note = notes.find(note => note.id === id)

    const noteUpdated = {
      id: note.id,
      content: note.content,
      important: !note.important
    }

    noteService.update(id, noteUpdated).then((returnedNote) => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })
      .catch(error => {
        if (error.response.data.name === 'ValidationError') {
          // Handle Mongoose validation errors
          setErrorMessage(error.response.data.message); // o
        } else {

          `Note '${returnedNote.content}' was already removed from server`
        }
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        //call back
        setNotes(notes.filter(n => n.id !== id))
      })

  }


  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        <ul>
          {notesToShow.map(note =>
            <Note
              key={note.id}
              note={note}
              toggleImportance={() => toggleImportanceOf(note.id)}
            />
          )}
        </ul>
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App