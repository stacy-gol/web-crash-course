const Total = (props) => {
    let totalExercises = props.parts.reduce((sum, item) => sum + item.exercises, 0);
    return (
      <div>
      <b>total of {totalExercises} exercises</b>
      </div>
    );
  };

const Course = (props) => {

    return (
        <div>
            <h1>Half Stack application development</h1>
                {props.course.parts.map(part =>
                    <p key={part.id}>
                        {part.name} {part.exercises}
                    </p>
                )}
            <Total parts={props.course.parts} />
        </div>
    )
}

export default Course