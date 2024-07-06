


// const Header = (props) => {

//   return (
//     <div><h1>{props.header}</h1></div>
//   )
// }




// const Content = ({props}) => {
//   return(
//     <li key={props.part.id} > {props.part.name} : {props.part.exercises} </li> 
//   )
// }


const Parts = ({parts}) => {
  return (
    <ul>
      {parts.map(part => (<li key={part.id}> {part.name} : {part.exercises} </li>))}
    </ul>

  )
}

 const Course = (props) => {

  const { course } = props;

  const totalExercises = course.parts.reduce((acc,part) => acc + part.exercises,0);

  return (
    <div>
      <h1>{course.name}</h1>
      <Parts parts={course.parts} />
       {/* <p>{course.parts.map(part => <li key={part.id} > {part.name} : {part.exercises} </li>)}</p>       */}
      {/* <p>{props.course.parts.map(part => <Content key={part.id} part={part}></Content>)}</p> */}
      <p><b>total of {totalExercises}</b></p>
    </div>
  )



 }



const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redenring a collection, modules',
        exercises: 21,
        id: 4
      },
      {
        name: 'Redenring a collection, modules',
        exercises: 1,
        id: 5
      }
    ]
  }

  return <Course course={course} />
}

export default App
