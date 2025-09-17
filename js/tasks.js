// tasks.js → Task creation & rendering
import { getTasks, saveTasks } from "./storage.js";

export function createTask(title, description) {
  const tasks = getTasks();
  const newTask = {
    id: Date.now(),
    title,
    description,
    status: "todo"
  };
  tasks.push(newTask);
  saveTasks(tasks);
  return newTask;
}

export function renderTasks() {
  const tasks = getTasks();

  // Clear columns
  document.querySelectorAll(".task-list").forEach(col => (col.innerHTML = ""));

  // Render each task
  tasks.forEach(task => {
    const card = document.createElement("div");
    card.className = "task";
    card.draggable = true;
    card.dataset.id = task.id;
    card.innerHTML = `<strong>${task.title}</strong><p>${task.description}</p>`;

    document.getElementById(task.status).appendChild(card);
  });
}
