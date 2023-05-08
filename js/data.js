import {getRandomInt} from './util.js';

function getPhoto(id) {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    desciption: 'just photo',
    likes: getRandomInt(15, 200),
    comments: getRandomInt(0, 200)
  };
}

function getPhotosArray(size) {
  return Array.from({length: size}, (_, i) => getPhoto(i + 1));
}

export {getPhotosArray};