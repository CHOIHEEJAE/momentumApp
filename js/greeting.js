const loginForm = document.querySelector('#loginForm');
const loginInput = document.querySelector('#loginForm input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASS = 'hidden';
const USERNAME = 'username';

function onLoginSubmit(e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const username = loginInput.value;
    localStorage.setItem(USERNAME, username);
    paintGreeting(username);
}

function paintGreeting(username) {
    greeting.classList.remove(HIDDEN_CLASS);
    greeting.innerText = `Hello ${username} Nice to Meet you !`;
}

const savedUserName = localStorage.getItem(USERNAME);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreeting(savedUserName);
}
