const formPopevers = document.querySelector('.form-popovers');
const btn = document.querySelector('.btn');
const popoverMessage = document.querySelector('.popover-message');

// () => {
//   btn.popover({
//     container: 'body',
//   });
// };

// document.addEventListener('DOMContentLoaded', () => {
//   ('[data-toggle="popover"]').popover();
//   console.log(`something?`)
// });

formPopevers.addEventListener('submit', (e) => {
  e.preventDefault();
  // const firstNoValid = formPopevers.find((el) => (!el.validity.valid));
  // console.log(firstNoValid);
  // formPopevers[0].validity();
  // ('#popever').popover('show');
  // (() => {
  //   ('[data-toggle="popover"]').popover();
  // });
  // popoverMessage.textContent = 'test';

  if (popoverMessage.classList.contains('popover-hidden')) {
    popoverMessage.classList.remove('popover-hidden');
  } else {
    popoverMessage.classList.add('popover-hidden');
  }

  // tooptip.style.left = `${btn.offsetWidth - btn.offsetWidth}px`;
  // tooptip.style.top = `${btn.offsetTop - btn.offsetHeight * 2}px`;
});
