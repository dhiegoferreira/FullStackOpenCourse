const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 'important' : 'make not important'

  return (
    <li>
      {note.content} 
  
      <button onClick={toggleImportance}> {label}</button>
    
    </li>
  )
}

export default Note