const tasks = [];

const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const taskCompleteSound = document.getElementById('taskCompleteSound'); // Select the audio element

taskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const taskTitle = document.getElementById('task-title').value;
    const taskPriority = document.getElementById('task-priority').value;
    const taskStatus = document.querySelector('input[name="task-status"]:checked').value;

    const newTask = {
        title: taskTitle,
        priority: taskPriority,
        status: taskStatus
    };

    tasks.push(newTask);

    displayTasks();

    taskForm.reset();
});

function displayTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${task.title} (Priority: ${task.priority}, Status: ${task.status})</span>
            <button class="btn btn-danger btn-sm" onclick="removeTask(${index})">Remove</button>
            <button class="btn btn-success btn-sm" onclick="markComplete(${index})">Mark as Complete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

function playTaskCompleteSound() {
    taskCompleteSound.play();
}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
    playTaskCompleteSound(); 
}

function markComplete(index) {
    tasks[index].status = 'completed';
    displayTasks();
    playTaskCompleteSound(); 
}

displayTasks();
