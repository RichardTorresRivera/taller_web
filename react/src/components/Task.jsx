function Task({ task, onDone, onDelete }) {
  return (
    <li className={`todo ${task.is_completed ? "completed" : ""}`}>
      <p className="todo-title">{task.title}</p>
      <p className="todo-description">{task.description}</p>
      <div className="todo-actions" style={{ marginTop: "0.5rem" }}>
        <button
          className="btn btn-blue"
          onClick={() => onDone(task.id)}
          disabled={task.is_completed}
          style={{ marginRight: "0.5rem" }}
        >
          Hecho
        </button>
        <button className="btn btn-red" onClick={() => onDelete(task.id)}>
          Eliminar
        </button>
      </div>
    </li>
  );
}

export default Task;
