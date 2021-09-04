function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  const element = document.querySelector('#text');
  button.addEventListener('click', () => element.hidden = !element.hidden);
}
