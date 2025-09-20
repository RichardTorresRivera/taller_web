import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../services/api";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      alert("Error cargando tareas");
    }
  }

  async function handleCreate(task) {
    await createTask(task);
    loadTasks();
  }

  async function handleToggle(id) {
    await updateTask(id, { is_completed: true });
    loadTasks();
  }

  async function handleDelete(id) {
    await deleteTask(id);
    loadTasks();
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="container">
      <h1>CRUD de Tareas</h1>
      <TaskForm onSubmit={handleCreate} />
      <TaskList tasks={tasks} onDone={handleToggle} onDelete={handleDelete} />
    </div>
  );
}

export default Tasks;
