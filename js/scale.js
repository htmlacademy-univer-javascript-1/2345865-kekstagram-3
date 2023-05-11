const scale = document.querySelector('.scale__control--value');
const smaller = document.querySelector('.scale__control--smaller');
const bigger = document.querySelector('.scale__control--bigger');
const preview = document.querySelector('.img-upload__preview');

function resize(newScale) {
  scale.value = `${newScale}%`;
  preview.style.transform = `scale(${newScale/100})`;
}

smaller.addEventListener('click', () => {
  const currentScale = Number(scale.value.replace('%', ''));
  if (currentScale !== 25) {
    resize(currentScale - 25);
  }
});

bigger.addEventListener('click', () => {
  const currentScale = Number(scale.value.replace('%', ''));
  if (currentScale !== 100) {
    resize(currentScale + 25);
  }
});

export {resize};
