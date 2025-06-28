const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const toggleBtn = document.getElementById('toggle-theme');
const addBtn = taskForm.querySelector('button');

// 🧠 Load tasks
document.addEventListener('DOMContentLoaded', loadTasks);

// 💡 Enable button only when valid
taskInput.addEventListener('input', () => {
  addBtn.disabled = !taskInput.value.trim();
});

// 📌 Add task
taskForm.addEventListener('submit', e => {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (text) {
    addTask(text);
    saveTasks();
    taskInput.value = '';
    addBtn.disabled = true;
  }
});

function addTask(text, completed = false) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span class="${completed ? 'completed' : ''}">${text}</span>
    <button class="delete">❌</button>
  `;
  if (completed) li.classList.add('done');
  taskList.appendChild(li);
}

// ✅ Mark as complete or delete
taskList.addEventListener('click', e => {
  const li = e.target.closest('li');
  if (!li) return;

  if (e.target.classList.contains('delete')) {
    li.remove();
  } else if (e.target.tagName === 'SPAN') {
    e.target.classList.toggle('completed');
  }
  saveTasks();
});

// 💾 Save to localStorage
function saveTasks() {
  const tasks = [];
  taskList.querySelectorAll('li').forEach(li => {
    tasks.push({
      text: li.querySelector('span').textContent,
      completed: li.querySelector('span').classList.contains('completed'),
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// 🚀 Load from localStorage
function loadTasks() {
  const saved = JSON.parse(localStorage.getItem('tasks') || '[]');
  saved.forEach(t => addTask(t.text, t.completed));
}

// 🌙 Toggle Theme
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
});
