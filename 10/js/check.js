import {sendData} from './api.js';
import {closeUploadForm, hideUploadForm} from './form.js';
import {showSuccessMessage, showErrorMessage} from './message.js';

function okFunction() {
  closeUploadForm();
  showSuccessMessage();
}

function errFunction() {
  hideUploadForm();
  showErrorMessage();
}

const uploadForm = document.querySelector('.img-upload__form');
uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(okFunction, errFunction, evt);
});
