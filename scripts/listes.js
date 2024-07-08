document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

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
            newTaskInput.value = '';
        }
    }

    function deleteTask(e) {
        const item = e.target.parentNode;
        taskList.removeChild(item);
    }
});
