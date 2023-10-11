const Task = (props) => {
  return (
    <li>
      <h2>{props.taskName}</h2>
      {props.isCompleted ? (
        <button onClick={() => props.completedTask(props.id)}>completed</button>
      ) : (
        <button onClick={() => props.completedTask(props.id)}>
          uncompleted
        </button>
      )}
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </li>
  );
};
export default Task;
