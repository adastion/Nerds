'use strict';
// navigation button
const btnMenu = document.querySelector('.header__btn-menu');
const btnClose = document.querySelector('.modal__close');
const menu = document.querySelectorAll('.navigation');

btnMenu.addEventListener('click', (e) => {
  e.preventDefault();
  menu.forEach((element) => {
    element.classList.toggle('navigation__show');
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

// Filter button
const filterBtn = document.querySelector('.page-content__filter-btn');
const filterHiddenVisually = document.querySelector('.filter');

filterBtn.addEventListener('click', () => {
  filterHiddenVisually.classList.toggle('filter__active');
});
