// dragdrop.js → Drag & Drop functionality
import { getTasks, saveTasks } from "./storage.js";
import { renderTasks } from "./tasks.js";

export function enableDragAndDrop() {
  document.addEventListener("dragstart", e => {
    if (e.target.classList.contains("task")) {
      e.dataTransfer.setData("text/plain", e.target.dataset.id);
    }
  });

  document.querySelectorAll(".column").forEach(column => {
    column.addEventListener("dragover", e => {
      e.preventDefault();
    });

    column.addEventListener("drop", e => {
      e.preventDefault();
      const taskId = e.dataTransfer.getData("text/plain");
      const tasks = getTasks();
      const task = tasks.find(t => t.id == taskId);
      if (task) {
        task.status = column.dataset.status;
        saveTasks(tasks);
        renderTasks();
      }
    });
  });
}
