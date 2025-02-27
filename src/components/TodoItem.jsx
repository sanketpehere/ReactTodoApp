const TodoItem = ({ task, index, toggleComplete, deleteTask }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() => toggleComplete(index)}
      >
        {task.text}
      </span>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => deleteTask(index)}
      >
        Delete
      </button>
    </li>
  );
};
export default TodoItem;
