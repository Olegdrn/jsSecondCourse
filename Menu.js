"use strict";

const menuButton = document.querySelector('.right_img');
const naviEl = document.querySelector('.navigation');


menuButton.addEventListener('click', (event) => {
  if (!event.target.classList.contains('.third_img')) {
    return;
  }
  naviEl.classList.toggle('hidden');
});
