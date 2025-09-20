import { getTasks, createTask, updateTask, deleteTask } from "./api.js";
import { renderTasks, clearForm } from "./ui.js";

async function loadTasks() {
  const tasks = await getTasks();
  renderTasks(tasks, handleDone, handleDelete);
}

async function handleDone(id) {
  await updateTask(id);
  loadTasks();
}

async function handleDelete(id) {
  await deleteTask(id);
  loadTasks();
}

async function handleSubmit(e) {
  e.preventDefault();
  const title = document.getElementById("task-title").value.trim();
  const description = document.getElementById("task-desc").value.trim();

  if (!title || !description) return;

  const task = { title, description, is_completed: false };
  await createTask(task);
  clearForm();
  loadTasks();
}

document.getElementById("task-form").addEventListener("submit", handleSubmit);

loadTasks();
