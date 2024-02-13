'use strict';
const modal = document.getElementById('modal');
const btn = document.querySelector('.hamburger-icon');
btn.addEventListener('click', () => {
  modal.classList.toggle('show-modal');
  //   console.log('button Clicked');
});
