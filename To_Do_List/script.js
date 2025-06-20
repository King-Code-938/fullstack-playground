const taskInput = document.getElementById('taskInput');

function addTask() {
  const task = taskInput.value.trim();
  const taskList = document.getElementById('taskList');

  if (task.length === 0) return;

  const li = document.createElement('li');
  li.textContent = task;

  const delBtn = document.createElement('button');
  delBtn.textContent = '❌';
  delBtn.style.marginLeft = '10px';
  delBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  li.addEventListener('click', () => {
    li.style.textDecoration = 'line-through solid 2px';
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = ''; // Clear input
}

taskInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
