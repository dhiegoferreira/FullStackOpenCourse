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
        <li>{person.name} - {person.number}</li>
      </div>
    
  )
}


export default Person