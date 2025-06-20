const btn = document.getElementById('changeColor');

btn.addEventListener('click', () => {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
  const text = ['wow', 'dope', 'classic', 'hhmmm', 'whoa'];
  const rand = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[rand];
  alert(text[rand] + '! ' + colors[rand]);
});

btn.addEventListener('dblclick', () => {
  alert('Double click does nothing');
});

btn.addEventListener('mouseover', () => {
  btn.innerText = 'Hovering';
});

btn.addEventListener('mouseout', () => {
  btn.innerText = 'Change Color';
});
