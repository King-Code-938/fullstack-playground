const form = document.getElementById('loginForm');
const submit = document.getElementById('submit');
const loader = document.getElementById('loader');
const flash = document.getElementById('flashMsg');
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

  flash.style.opacity = 0;
  loader.style.display = 'inline-block';

  setTimeout(() => {
    loader.style.display = 'none';

    // Reset messages
    emailError.innerText = '';
    passwordError.innerText = '';
    statusMsg.innerText = '';

    emailCheck();
    passwordCheck();

    if (!valid) {
      flash.innerText = '❌ Invalid login details.';
      flash.className = 'flash error';
    } else {
      flash.innerText = '✅ Logged in successfully!';
      flash.className = 'flash success';
    }

    flash.style.opacity = 1;
  }, 1500); // simulate loading
});
