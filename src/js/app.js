'use strict'
// navigation button
const btnMenu = document.querySelector('.header__btn-menu');
const btnClose = document.querySelector('.modal__close'); 
const menu = document.querySelector('.navigation'); 
const visually = document.querySelector('.show');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('show');
});

//modal write us
const modalBtn = document.querySelector('.contacts__btn');
const modalWriteUs = document.querySelector('.modal');

modalBtn.addEventListener('click', () => {
  modalWriteUs.classList.add('show');
});

btnClose.addEventListener('click', () => {
  modalWriteUs.classList.remove('show');
});