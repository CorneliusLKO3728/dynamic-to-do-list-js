document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get text and remove extra spaces

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new <li> element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a new "Remove" button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Event listener for removing the task
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        // Append button to the list item, and list item to the task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Add event listener for the Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener for pressing Enter key in input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
