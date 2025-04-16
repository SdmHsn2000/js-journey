const input = document.getElementById("taskInput");
const addButton = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");

addButton.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  list.appendChild(li);
  input.value = "";
});
