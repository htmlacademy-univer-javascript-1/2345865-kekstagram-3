const imgForm = document.querySelector('.img-upload__form');
const preview = imgForm.querySelector('.img-upload__preview img');
const effectButtons = document.querySelectorAll('.effects__radio');

function removeFilter(evt) {
  evt.preventDefault();
  preview.classList = [];
}

function changeFilter(evt) {
  evt.preventDefault();
  const element = evt.target.value;
  preview.classList = [];
  preview.classList.add(`effects__preview--${element}`);
}

function addListener(e) {
  if (e.value === 'none') {
    e.addEventListener('click', removeFilter);
  } else {
    e.addEventListener('click', changeFilter);
  }
}

function makeListener() {
  effectButtons.forEach((e) => addListener(e));
}

function removeListener() {
  effectButtons.forEach((e) => {
    if (e.value === 'none') {
      e.removeEventListener('click', removeFilter);
    } else {
      e.removeEventListener('click', changeFilter);
    }
  });
}

export {makeListener, removeListener};
