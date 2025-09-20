const BASE_URL = "http://localhost:3000/tasks";

export async function getTasks() {
  try {
    const response = await fetch(BASE_URL);
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function createTask(task) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function updateTask(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ is_completed: true }),
    });
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function deleteTask(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar tarea");
    return true;
  } catch (error) {
    console.error("Error:", error);
  }
}
