import { useState, useEffect} from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from  './services/notes' 


const baseUrl = 'http://localhost:3001/api/notes/'

const App = () => {
  
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)
  
  useEffect(() => {
    console.log('effect')
    axios.get(baseUrl).then((response) => {
      setNotes(response.data)
    })
  }, [])

  const toggleImportanceOf = (id) => {
    
    console.log(`importance of ${id} needs to be toggled.`)
    const url = `${baseUrl}${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}
  
    noteService.update(id,changedNote).then(returnedNote => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })
    .catch(error => {
      alert(`the note "${note.content}" was already deleted form server.`)
      //call back
      setNotes(notes.filter(n => n.id !== id))
    })


  }
  
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }
  
    axios
    .post(baseUrl,noteObject)
    .then(response => {
      setNotes(notes.concat(noteObject))
      setNewNote('')
    })
   
    
  }
  
  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }
  
  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>      
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} 
                note={note}
                toggleImportance={()=> toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form> 
    </div>
  )
}

export default App