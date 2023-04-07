const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
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



const App = () => {
  const course = 'Half Stack application development'
  const exercises = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part='Fundamentals of React'/>
      <Content part = 'Using props to pass data'/>
      <Content part = 'State of a component'/> 
    </div>
  )
}



export default App