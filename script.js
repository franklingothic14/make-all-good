const button = document.getElementById('main-button');
const body = document.body;

button.addEventListener('click', () => {
  button.classList.add('clicked');
  setTimeout(() => {
    button.textContent = 'Все добре';
    button.disabled = true;
    body.classList.remove('dark');
    body.classList.add('light');
  }, 300); // даємо час для анімації кнопки
});
