
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
window.addEventListener('DOMContentLoaded', loadTasks);
function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(taskText => {
        createTaskElement(taskText);
    });
}
function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    removeBtn.onclick = function () {
        li.remove();
        saveTasks(); 
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        createTaskElement(taskText);
        saveTasks(); 
        taskInput.value = '';
    }
}
function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(li => {
        const text = li.firstChild.textContent;
        tasks.push(text);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});