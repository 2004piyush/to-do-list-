document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Add a new task to the list
    window.addTask = function () {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button onclick="removeTask(this)">Remove</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    };

    // Remove a task from the list
    window.removeTask = function (button) {
        const listItem = button.parentNode;
        taskList.removeChild(listItem);
    };
});
