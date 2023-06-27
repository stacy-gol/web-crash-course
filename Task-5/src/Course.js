import React from "react";

const Total = (props) => {
  let totalExercises = props.courses?.parts?.reduce(
    (sum, item) => sum + item.exercises,
    0
  );
  return (
    <div>
      <b>total of {totalExercises} exercises</b>
    </div>
  );
};

const Course = (props) => {
  return (
    <div>
      {props.courses.map((course) => (
        <>
          <h1 key={course.id}>{course.name}</h1>
          {course?.parts?.map((part) => (
            <p key={part.id}>
              {part.name} {part.exercises}
            </p>
          ))}
        </>
      ))}

      <Total courses={props.courses.parts} />
    </div>
  );
};

export default Course;