const formPopevers = document.querySelector('.form-popovers');
const popoverMessage = document.querySelector('.popover-message');

formPopevers.addEventListener('submit', (e) => {
  e.preventDefault();
  if (popoverMessage.classList.contains('popover-hidden')) {
    popoverMessage.classList.remove('popover-hidden');
    popoverMessage.classList.add('popever-show');
  } else {
    popoverMessage.classList.add('popover-hidden');
    popoverMessage.classList.remove('popever-show');
  }
});
