const Total = (props) => {
  const { parts } = props;
  console.log('parts', parts);
  let totalExercises = parts?.reduce((sum, item) => sum + item.exercises, 0);
  return (
    <div>
      <b>total of {totalExercises} exercises</b>
    </div>
  );
};

export default Total;
