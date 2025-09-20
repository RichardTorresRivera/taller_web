import Task from "./Task";

function TaskList({ tasks, onDone, onDelete }) {
  if (tasks.length === 0) {
    return <p>No tienes tareas pendientes</p>;
  }

  return (
    <ul id="task-list" style={{ listStyle: "none", padding: 0, width: 300 }}>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDone={onDone} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TaskList;
