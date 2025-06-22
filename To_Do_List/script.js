const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function init() {
  renderTasks();
}

function createTaskElement(taskObj, index) {
  const li = document.createElement('li');
  li.textContent = taskObj.text;

  if (taskObj.done) li.classList.add('done');
  li.addEventListener('click', () => toggleTask(index));

  const delBtn = document.createElement('button');
  delBtn.textContent = '❌';
  delBtn.style.marginLeft = '10px';
  delBtn.addEventListener('click', () => deleteTask(index));

  li.appendChild(delBtn);
  return li;
}

function addTask() {
  const task = taskInput.value.trim();
  if (!task) return;

  tasks.push({ text: task, done: false });
  taskInput.value = '';
  updateApp();
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  updateApp();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  updateApp();
}

function updateApp() {
  saveTasks();
  renderTasks();
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, i) => {
    const taskEl = createTaskElement(task, i);
    taskList.appendChild(taskEl);
  });
}

init();
taskInput.addEventListener('keyup', function (event) {
  if (event.key == 'Enter') {
    addTask();
  }
});
