function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isShorter(str, size) {
  return str.length <= size;
}

function getPhoto(id) {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    desciption: 'just photo',
    likes: getRandomInt(15, 200),
    comments: getRandomInt(0, 200)
  }
}

function getPhotosArray(size) {
  return Array.from({length: size}, (_, i) => getPhoto(i + 1));
}