
const Parts = ({parts}) => {
  return (
    <ul>
      {parts.map(part => (<li key={part.id}> {part.name} : {part.exercises} </li>))}
    </ul>

  )
}


const Content = (props) => {

  const { content } = props
  return (
    <div>
      <h1> {content.name}</h1>
      <Parts key={content.id} parts={content.parts} />
      <p><b>total of {content.parts.reduce((acc,part) => acc + part.exercises,0)}</b></p>
    </div>

  )
}

 const Courses = (props) => {

  const { courses } = props;

  return (
    <div>
      
      {courses.map(course => <Content key={course.id} content={course} ></Content> )}
    </div>
  )
 }



const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Courses courses={courses} />
}

export default App
