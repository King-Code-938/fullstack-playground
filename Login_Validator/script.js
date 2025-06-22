const form = document.getElementById('loginForm');
const submit = document.getElementById('submit');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const statusMsg = document.getElementById('statusMsg');

let valid = true;

const button = () => {
  if (valid) {
    submit.classList.remove('disabled');
  } else {
    submit.classList.add('disabled');
  }
};
let emailIsValid = false;
const emailCheck = () => {
  if (!email.value.includes('@')) {
    emailError.innerText = 'Invalid email address.';
    valid = false;
    email.focus();
  } else {
    emailError.innerText = '';
    valid = true;
    emailIsValid = true;
  }
  button();
};

const passwordCheck = () => {
  if (password.value.length < 6) {
    passwordError.innerText = 'Password must be at least 6 characters.';
    valid = false;
    password.focus();
  } else {
    passwordError.innerText = '';
    valid = true;
  }
  button();
};

email.addEventListener('input', () => {
  emailCheck();
});

password.addEventListener('input', () => {
  passwordCheck();
});

submit.addEventListener('mouseover', () => {
  emailCheck();
  if (!emailIsValid) {
    return;
  }
  passwordCheck();
});

form.addEventListener('submit', e => {
  e.preventDefault(); // Stop actual submit

  // Reset messages
  emailError.innerText = '';
  passwordError.innerText = '';
  statusMsg.innerText = '';

  if (valid) {
    statusMsg.innerText = '✅ Login successful!';
    statusMsg.className = 'success';
  } else {
    statusMsg.innerText = '❌ Please fix the errors above.';
    statusMsg.className = 'error';
  }
});
