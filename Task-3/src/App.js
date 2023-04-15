import "./styles.css";

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      {props.name} {props.exercises}
    </div>
  );
};

const Content = (props) => {
  console.log("props", props);
  return (
    <div>
      {props.data.map((onePartData) => {
        return <Part name={onePartData.name} exercises={onePartData.exercises}/>
      })}
    </div>
  );
};

const Total = (props) => {
  let totalExercises = props.data.reduce((sum, item) => sum + item.exercises, 0);
  return (
    <div>
    {totalExercises} 
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  return (
    <div>
      <Header course={course.name} />
      <Content data={course.parts}/>
      <Total data={course.parts}/>
    </div>
  );
};


export default App;