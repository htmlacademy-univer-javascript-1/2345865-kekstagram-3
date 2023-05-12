import {makeListener, removeListener} from './effects.js';
import {resize} from './scale.js';
import {isEscKey} from './util.js';

const uploadButton = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const hashtag = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');
const uploadWindow = document.querySelector('.img-upload__overlay');

function purge() {
  uploadButton.value = '';
  hashtag.value = '';
  comment.value = '';
}

function formEscHandler(evt) {
  if (isEscKey(evt)) {
    evt.preventDefault();
    closeUploadForm();
  }
}

function openUploadForm() {
  document.body.classList.add('modal-open');
  uploadWindow.classList.remove('hidden');
  document.addEventListener('keydown', formEscHandler);
  makeListener();
}

function closeUploadForm() {
  document.body.classList.remove('modal-open');
  uploadWindow.classList.add('hidden');
  document.removeEventListener('keydown', formEscHandler);
  removeListener();
  resize(100);
  purge();
}

function hideUploadForm() {
  uploadWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', formEscHandler);
}

uploadButton.addEventListener('change', openUploadForm);
cancelButton.addEventListener('click', closeUploadForm);

export {openUploadForm, closeUploadForm, hideUploadForm, uploadWindow};
