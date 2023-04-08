const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part="Fundamentals of React" exercises={10}/>
      <Part part="Using props to pass data" exercises={7}/>
      <Part part="State of a component" exercises={14}/>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises}</p>
    </div>
  );
};



const App = () => {
  const course = 'Half Stack application development'
  

  return (
    <div>
      <Header course={course} />
      <Content/>
      <Total exercises={10 + 7 + 14} />
    </div>
  )
}



export default App