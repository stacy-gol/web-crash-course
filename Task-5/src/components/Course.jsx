import Total from './Total';

const Course = (props) => {
  const { courses } = props;
  return (
    <div>
      {courses.map((course) => (
        <>
          <h1 key={course.id}>{course.name}</h1>
          {course?.parts?.map((part) => (
            <p key={part.id}>
              {part.name} {part.exercises}
            </p>
          ))}
          <Total parts={course.parts} />
        </>
      ))}
    </div>
  );
};

export default Course;
