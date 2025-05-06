const button = document.getElementById('main-button');
const body = document.body;

button.addEventListener('click', () => {
  button.textContent = 'Все добре';
  button.disabled = true;
  body.classList.remove('dark');
  body.classList.add('light');
});
