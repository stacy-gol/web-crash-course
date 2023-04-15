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
    <div className="part">
      <p>
        {props.part} {props.exercises} <span className="mark">{props.mark}</span>
      </p>
    </div>
  );
};

const Content = (props) => {
  console.log("props", props);
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
      Here is render from partData prop
      {props.partsData.map((onePartData) => {
        return <Part part={onePartData.part} exercises={onePartData.exercises} mark={onePartData.mark}/>
      })}
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const mark1 = "A+";
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const mark2 = "B+";
  const part3 = "State of a component";
  const exercises3 = 14;
  const mark3 = "A";

  const partsData = [
    { part: part1, exercises: exercises1, mark: mark1},
    { part: part2, exercises: exercises2, mark: mark2},
    { part: part3, exercises: exercises3, mark: mark3},
  ];
  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
        partsData={partsData}
      />
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises}</p>
    </div>
  );
};

export default App;
