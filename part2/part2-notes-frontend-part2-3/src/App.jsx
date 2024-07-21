import { useState, useEffect} from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from  './services/notes' 




const App = () => {
  
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)
  
  
  console.log(notes);
  
 
  const toggleImportanceOf = (id) => {
    
    console.log(`importance of ${id} needs to be toggled.`)
    const url = `http://localhost:3003/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}
  
    noteService.update(id,changedNote).then(returnedNote => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })
    .catch(error => {
      alert(`the note ${note.content} was already deleted form server.`)
      //call back
      setNotes(notes.filter(n => n.id !== id))
    })


    // setNotes(notes.filter())
    // axios.put(url, changedNote).then(response => {
    //   setNotes(notes.map(n => n.id !== id ? n : response.data))
    // })
  }

  
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }
  
    axios
    .post('http://localhost:3003/notes',noteObject)
    .then(response => {
      setNotes(notes.concat(noteObject))
      setNewNote('')
    })
    .catch(error => {console.log('erro when execute post method.')})
    
  }
  
   
    useEffect(() => {
      console.log('effect')
      axios.get('http://localhost:3003/notes').then((response) => {
        setNotes(response.data)
      })
    }, [])
  
  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }
  
  console.log(showAll)
  const notesToShow = showAll ? notes : notes.filter(note => note.important)
  console.log(notesToShow)

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