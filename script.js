const button = document.getElementById('main-button');
const body = document.body;

button.addEventListener('click', (e) => {
  const ripple = document.createElement('div');
  ripple.id = 'ripple';
  document.body.appendChild(ripple);

  const rect = body.getBoundingClientRect();
  const maxDim = Math.max(rect.width, rect.height);
  const rippleSize = maxDim * 2;

  const x = e.clientX - rippleSize / 2;
  const y = e.clientY - rippleSize / 2;

  ripple.style.width = ripple.style.height = rippleSize + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';

  setTimeout(() => {
    ripple.style.transform = 'scale(1)';
  }, 10);

  setTimeout(() => {
    body.classList.remove('dark');
    body.classList.add('light');
    button.textContent = 'Все добре';
    button.disabled = true;
  }, 600);

  setTimeout(() => {
    ripple.remove();
  }, 1500);
});
