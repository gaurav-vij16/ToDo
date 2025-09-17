import { createTask, renderTasks } from "./tasks.js";
import { enableDragAndDrop } from "./dragdrop.js";

document.addEventListener("DOMContentLoaded", () => {
  // Render existing tasks
  renderTasks();
  enableDragAndDrop();

  // Form submit
  const form = document.getElementById("taskForm");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const title = document.getElementById("taskTitle").value;
    const desc = document.getElementById("taskDescription").value;

    createTask(title, desc);
    renderTasks();
    form.reset();
  });
});
