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
      {props.partsData.map((onePartData) => {
        return <Part name={onePartData.name} exercises={onePartData.exercises}/>
      })}
    </div>
  );
};

const Total = (props) => {
  let totalExercises = props.partsData.reduce((sum, item) => sum + item.exercises, 0);
  return (
    <div>
    {totalExercises} 
    </div>
  );
};

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const partsData = [
    {name: part1.name, exercises: part1.exercises},
    {name: part2.name, exercises: part2.exercises},
    {name: part3.name, exercises: part3.exercises},
  ];
  return (
    <div>
      <Header course={course} />
      <Content partsData={partsData}/>
      <Total partsData={partsData}/>
    </div>
  );
};


export default App;