function greetUser() {
  const name = document.getElementById('nameInput').value;
  const message = name.trim() ? `Hello, ${name}! 👋` : 'Please enter a valid name!';
  setTimeout(() => {
    document.getElementById('greeting').innerText = message;
  }, 3000);
}

function reset() {
  document.getElementById('nameInput').value = '';
  document.getElementById('greeting').innerText = '';
}

document.getElementById('nameInput').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    greetUser();
  }
});

document.getElementById('nameInput').addEventListener('keydown', function (event) {
  if (event.key === 'Backspace') {
    reset();
  }
});
