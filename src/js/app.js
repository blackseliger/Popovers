const formPopevers = document.querySelector('.form-popovers');
const btn = document.querySelector('.btn');
const tooptip = document.querySelector('.tooptip');

formPopevers.addEventListener('submit', (e) => {
  e.preventDefault();
  if (tooptip.classList.contains('.tooptip-hidden')) {
    tooptip.classList.remove('.tooptip-hidden');
    console.log('gdhkjgd');
  }

  tooptip.style.left = `${btn.offsetWidth - btn.offsetWidth}px`;
  tooptip.style.top = `${btn.offsetTop - btn.offsetHeight * 2}px`;
});
