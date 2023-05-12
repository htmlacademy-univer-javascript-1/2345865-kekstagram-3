import {isEscKey} from './util.js';
import {uploadWindow, openUploadForm} from './form.js';

function showSuccessMessage() {
  const tmp = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
  const hideButton = tmp.querySelector('.success__button');
  document.body.append(tmp);
  hideButton.addEventListener('click', hideSuccessMessage);
  document.body.addEventListener('click', hideSuccessMessage);
  document.addEventListener('keydown', successEscHandler);
}

function successEscHandler(evt) {
  if (isEscKey(evt)) {
    hideSuccessMessage();
    document.removeEventListener('keydown', successEscHandler);
  }
}

function hideSuccessMessage() {
  const successMessage = document.querySelector('.success');
  document.body.removeChild(successMessage);
  document.body.removeEventListener('click', hideSuccessMessage);
  document.removeEventListener('keydown', successEscHandler);
}

function showErrorMessage() {
  const tmp = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
  const hideButton = tmp.querySelector('.error__button');
  document.body.append(tmp);
  hideButton.addEventListener('click', hideErrorMessage);
  hideButton.addEventListener('click', openUploadForm);
  document.body.addEventListener('click', hideErrorMessage);
  document.addEventListener('keydown', errorEscHandler);
}

function errorEscHandler(evt) {
  if (isEscKey(evt)) {
    hideErrorMessage();
    document.removeEventListener('keydown', errorEscHandler);
  }
}

function hideErrorMessage() {
  const errorMessage = document.querySelector('.error');
  document.body.removeChild(errorMessage);
  uploadWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.body.removeEventListener('click', hideErrorMessage);
  document.removeEventListener('keydown', errorEscHandler);
}

export {showSuccessMessage, showErrorMessage};
