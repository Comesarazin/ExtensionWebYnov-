document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    // Charger des tâches depuis localStorage
    loadTasks();

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = newTaskInput.value.trim();

        if (taskText !== '') {
            const li = document.createElement('li');
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', deleteTask);
            li.textContent = taskText;
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            saveTasks();
            newTaskInput.value = '';
        }
    }

    function deleteTask(e) {
        const item = e.target.parentNode;
        taskList.removeChild(item);
        saveTasks();
    }

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            tasks.push(li.firstChild.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks) {
            tasks.forEach(taskText => {
                const li = document.createElement('li');
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', deleteTask);
                li.textContent = taskText;
                li.appendChild(deleteBtn);
                taskList.appendChild(li);
            });
        }
    }
});
