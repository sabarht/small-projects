import { useState } from "react";
import "./App.css";
import Task from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState(" ");
  const [isCompleted, setIsCompleted] = useState(false);
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      isCompleted,
    };
    setTodoList([...todoList, task]);
  };
  // filtered down to just the elements from the given array that pass the test implemented by the provided function.
  const deleteTask = (id) => {
    const result = todoList.filter((task) => task.id !== id);
    setTodoList(result);
  };
  const completedTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: true };
        } else {
          return task;
        }
      })
    );
  };
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {todoList.map((task) => (
          <Task
            taskName={task.taskName}
            id={task.id}
            isCompleted={task.isCompleted}
            deleteTask={deleteTask}
            completedTask={completedTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
