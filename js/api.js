import {createPhotoElements} from './render.js';
import {showError} from './error.js';

const dataUrl = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const sendUrl = 'https://27.javascript.pages.academy/kekstagram-simple';

function getData() {
  fetch(dataUrl)
    .then((response) => response.json())
    .then((response) => createPhotoElements(response))
    .catch(() => showError('Не удалось получить изображения от сервера'));
}

function sendData(okFunction, errFunction, data) {
  fetch(sendUrl,
    {
      method: 'POST',
      body: new FormData(data.target),
    },
  )
    .then((response) => {
      if (response.ok) {
        okFunction();
      } else {
        errFunction();
      }
    })
    .catch(errFunction);
}

export {getData, sendData};
