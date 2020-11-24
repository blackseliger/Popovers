const formPopevers = [...document.querySelector('.form-popovers')];
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

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const firstNoValid = formPopevers.find((el) => (!el.validity.valid));
  console.log(firstNoValid);
  formPopevers[0].validuty();
  // ('#popever').popover('show');
  // (() => {
  //   ('[data-toggle="popover"]').popover();
  // });
  // popoverMessage.textContent = 'test';

  // if (tooptip.classList.contains('.tooptip-hidden')) {
  //   tooptip.classList.remove('.tooptip-hidden');
  //   console.log('gdhkjgd');
  // }

  // tooptip.style.left = `${btn.offsetWidth - btn.offsetWidth}px`;
  // tooptip.style.top = `${btn.offsetTop - btn.offsetHeight * 2}px`;
});
