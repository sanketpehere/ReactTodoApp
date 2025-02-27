import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // load the prev tasks from localstorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // save the new tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  // Toggle Task Completion
  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete Task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">React To-Do List</h2>
      <TodoInput addTask={addTask}></TodoInput>
      <TodoList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      ></TodoList>
    </div>
  );
}

export default App;
