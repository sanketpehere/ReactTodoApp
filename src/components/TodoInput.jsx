import { useRef } from "react";

const TodoInput = ({ addTask }) => {
  const taskRef = useRef();

  const handleAdd = () => {
    const task = taskRef.current.value;
    if (task) {
      addTask(task);
      taskRef.current.value = "";
    }
  };
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        ref={taskRef}
        className="form-control"
        placeholder="Enter task..."
      />
      <button className="btn btn-primary" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};
export default TodoInput;
