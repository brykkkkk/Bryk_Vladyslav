'use strict';

const btnBackground = document.querySelector('#btn_background');
const btnBorder = document.querySelector('#btn_border');
const btnList = document.querySelector('#btn_list');
const btnMargin = document.querySelector('#btn_margin');
const btnText = document.querySelector('#btn_text');

btnBackground.addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('body').style.backgroundColor = '#ffcc00';
});

btnBorder.addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('body').style.border = '2px dashed #3366cc';
  document.querySelector('body').style.outlineStyle = 'solid';
});

btnList.addEventListener('click', e => {
  e.preventDefault();
  const listItems = document.querySelectorAll('.parallel-list li');
  listItems.forEach(item => {
    item.style.listStyleType = 'number';
  });
});

btnMargin.addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('body').style.marginLeft = '50px';
  document.querySelector('body').style.padding = '50px';
});

btnText.addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('body').style.fontFamily = 'Arial, sans-serif';
  document.querySelector('body').style.fontSize = 'x-Large';
  document.querySelector('body').style.color = 'blue';
});
