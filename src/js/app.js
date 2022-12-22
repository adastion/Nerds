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

//noUiSlider
import '../libs/nouislider/nouislider.min.js';

const slider = document.getElementById('sliderUi');

if (slider) {
  noUiSlider.create(slider, {
    start: [1500, 30000],
    connect: true,
    step: 1,
    range: {
      min: [0],
      max: [35000],
    },
  });

  const inputOne = document.getElementById('input01');
  const inputTwo = document.getElementById('input02');
  const inputs = [inputOne, inputTwo];

  slider.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = Math.round(values[handle]);
  });

  const setSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    slider.noUiSlider.set(arr);
  };

  inputs.forEach((item, index) => {
    item.addEventListener('change', (e) => {
      setSlider(index, e.currentTarget.value);
    });
  });
}
