
const Header = (props) => {
  return (
    <div>
      <p>Course name: {props.name}</p>
    </div>
  )
}


const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}




function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14



  return (
    <>
      <Header course={course} />
      <Content ... />
      <Total ... />
      <div>
        <h1>{course}</h1>
        <p>
          {part1} {exercises1}
        </p>
        <p>
          {part2} {exercises2}
        </p>
        <p>
          {part3} {exercises3}
        </p>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
        </div>
    </>
  )
}

export default App