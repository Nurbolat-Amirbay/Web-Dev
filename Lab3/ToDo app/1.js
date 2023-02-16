const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskList = document.querySelector('#taskList');

addTaskBtn.addEventListener('click', function() {
  const task = taskInput.value;
  if (!task) return;

  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <input type="checkbox">
    <span>${task}</span>
    <button type="button">Delete</button>
  `;

  const checkbox = taskItem.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', function() {
    taskItem.querySelector('span').style.textDecoration =
      checkbox.checked ? 'line-through' : 'none';
  });

  const deleteBtn = taskItem.querySelector('button');
  deleteBtn.addEventListener('click', function() {
    taskList.removeChild(taskItem);
  });

  taskList.appendChild(taskItem);
  taskInput.value = '';
});
