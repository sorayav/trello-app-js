'use strict';

const tasksList = document.querySelectorAll('.app-list');
const parent = document.querySelector('.app-board');
const form = document.querySelector('.app-list-form');
// const newColumn = document.querySelectorAll('.app-list-form');

function moveList(form) {
  
  const btnLeft = document.querySelectorAll('.btn btn-light text-muted border shadow-sm app-list-move-left');
  const btnRight = document.querySelectorAll('.btn btn-light text-muted border shadow-sm app-list-move-right');

  const moveListLeft = () => {
    document.querySelector('app-board').insertBefore(form, form.previousElementSibling);
    // tasksList.insertBefore(tasksList.previousElementSibling);
  }

  const moveListRight = () => {
    document.querySelector('app-board').insertBefore(form.nextElementSibling, form);

    // tasksList.insertBefore(tasksList.nextElementSibling);
  }

  btnLeft.addEventListener('click', moveListLeft);
  btnRight.addEventListener('click', moveListRight);
}

tasksList.forEach(tasksList => {
  moveList(tasksList);
})

