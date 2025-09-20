export function renderTasks(tasks = [], onDone, onDelete) {
  const list = document.getElementById("task-list");
  list.innerHTML = "";

  if (!tasks.length) {
    list.innerHTML = "<span>No tienes tareas pendientes</span>";
    return;
  }
  tasks?.forEach((task) => {
    const div = document.createElement("div");
    div.className = `todo ${task.is_completed ? "completed" : ""}`;
    div.id = task.id;

    const content = document.createElement("div");
    content.className = "todo-content";
    content.innerHTML = `
      <p class="todo-title">${task.title}</p>
      <p class="todo-description">${task.description}</p>
    `;

    const actions = document.createElement("div");
    actions.className = "todo-actions";

    const doneBtn = document.createElement("button");
    doneBtn.className = "btn btn-blue";
    doneBtn.textContent = "Hecho";
    doneBtn.addEventListener("click", () => onDone(task.id));
    if (task.is_completed) {
      doneBtn.disabled = true;
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-red";
    deleteBtn.textContent = "Eliminar";
    deleteBtn.addEventListener("click", () => onDelete(task.id));

    actions.append(doneBtn, deleteBtn);
    div.append(content, actions);
    list.appendChild(div);
  });
}

export function clearForm() {
  document.getElementById("task-form").reset();
}
