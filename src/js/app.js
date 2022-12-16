'use strict';
// navigation button
const btnMenu = document.querySelector('.header__btn-menu');
const btnClose = document.querySelector('.modal__close');
const menu = document.querySelectorAll('.navigation');
const visually = document.querySelector('.show');

btnMenu.addEventListener('click', (e) => {
  e.preventDefault();
  menu.forEach((element) => {
    element.classList.toggle('show');
  });
});

//modal write us
const modalBtn = document.querySelector('.contacts__btn');
const modalWriteUs = document.querySelector('.modal');

modalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modalWriteUs.classList.add('show');
});

btnClose.addEventListener('click', (e) => {
  e.preventDefault();
  modalWriteUs.classList.remove('show');
});

// pointer on the googlle map

