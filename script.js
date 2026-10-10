const textBox = document.getElementById("text");
const addBtn = document.getElementById("addBtn");
const output = document.getElementById("output");
const completed = document.getElementById("completed");

let taskCount = 0;

addBtn.addEventListener("click", function () {
    const taskText = textBox.value.trim();
    if (taskText === "") return;

    taskCount++;
    const taskId = "task-" + taskCount;

    const taskDiv = document.createElement("div");
    taskDiv.className = "check";
    taskDiv.id = "row-" + taskCount;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = taskId;

    const label = document.createElement("label");
    label.htmlFor = taskId;
    label.textContent = taskText;

    // Move the task when checked or unchecked
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            taskDiv.remove();
        } else {
            output.appendChild(taskDiv);
            label.style.textDecoration = "none";
        }
    });

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    output.appendChild(taskDiv);

    textBox.value = "";
});