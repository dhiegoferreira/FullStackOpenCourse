
const Header = (props) => {
  return (
    <div>
      <p>Course name: {props.course}</p>
    </div>
  )
}


const Content = (props) => {
  return (
    <div>
      <p>{props.part}</p>
      
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>{props.exercise}</p>
    </div>
  )
}




function App() {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]



  return (
    <>
      <Header course={course} />

      <Content part={part1} />
      <Total exercise={exercises1} />
      
      <Content part={part2} />
      <Total exercise={exercises2} />

      <Content part={part3} />
      <Total exercise={exercises3} />
    </>
  )
}

export default App
