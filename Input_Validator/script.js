const input = document.getElementById('username');
const feedback = document.getElementById('feedback');

input.addEventListener('input', function () {
  const value = input.value.trim();

  if (value.length < 3) {
    feedback.innerText = '⚠️ Too short!';
    feedback.style.color = 'orange';
  } else if (!/^[a-zA-Z]+$/.test(value)) {
    feedback.innerText = '❌ Letters only, no numbers or symbols!';
    feedback.style.color = 'red';
  } else {
    feedback.innerText = '✅ Looks good!';
    feedback.style.color = 'green';
  }
});
