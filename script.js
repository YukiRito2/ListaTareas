const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', deleteTask);

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.classList.add('edit-button');
        editButton.addEventListener('click', editTask);

        li.appendChild(deleteButton);
        li.appendChild(editButton);

        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function deleteTask(event) {
    if (event.target.classList.contains('delete-button')) {
        const li = event.target.parentNode;
        taskList.removeChild(li);
    }
}

function editTask(event) {
    const li = event.target.parentNode;
    const taskText = li.firstChild;

    const taskInput = document.createElement('input');
    taskInput.value = taskText.textContent.trim();
    taskInput.classList.add('task-input');

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Guardar';
    saveButton.classList.add('save-button');
    saveButton.addEventListener('click', saveTask);

    li.textContent = '';
    li.appendChild(taskInput);
    li.appendChild(saveButton);

    taskInput.focus();
}

function saveTask(event) {
    const li = event.target.parentNode;
    const taskInput = li.querySelector('.task-input');
    const newText = taskInput.value.trim();

    if (newText !== '') {
        const taskText = document.createElement('span');
        taskText.textContent = newText;

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.classList.add('edit-button');
        editButton.addEventListener('click', editTask);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', deleteTask);

        li.textContent = '';
        li.appendChild(taskText);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
    }
}

