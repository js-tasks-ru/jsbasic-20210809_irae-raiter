function hideSelf() {
  const element = document.querySelector('.hide-self-button');
  element.addEventListener("click", () => element.setAttribute('hidden', ''));
}
