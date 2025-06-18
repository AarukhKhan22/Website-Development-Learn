// This function adds a new task to the list
function addTask() {
  // Get input value
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  // If input is empty, do nothing
  if (taskText === "") return;

  // Create a new list item (li)
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "delete-btn";

  // When delete button is clicked, remove the task
  deleteBtn.onclick = function () {
    li.remove();
  };

  // Append delete button to task
  li.appendChild(deleteBtn);

  // Add task to the task list (ul)
  document.getElementById("taskList").appendChild(li);

  // Clear the input box
  taskInput.value = "";
}
