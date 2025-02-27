import TodoItem from "./TodoItem";

const TodoList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};
export default TodoList;
