import {isEscKey} from './util.js';

const uploadButton = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const hashtag = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');

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
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.addEventListener('keydown', formEscHandler);
}

function closeUploadForm() {
  document.body.classList.remove('modal-open');
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.removeEventListener('keydown', formEscHandler);
  purge();
}

uploadButton.addEventListener('change', openUploadForm);
cancelButton.addEventListener('click', closeUploadForm);
