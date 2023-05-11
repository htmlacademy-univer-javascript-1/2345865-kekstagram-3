function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isShorter(str, size) {
  return str.length <= size;
}

function isEscKey(evt) {
  return evt.key ==='Escape';
}
export {getRandomInt, isShorter, isEscKey};
