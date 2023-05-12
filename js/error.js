function showError(msg) {
  const error = document.createElement('div');
  error.style.zIndex = '100';
  error.style.position = 'absolute';
  error.style.left = '0';
  error.style.top = '0';
  error.style.right = '0';
  error.style.padding = '10px 3px';
  error.style.fontSize = '26px';
  error.style.textAlign = 'center';
  error.style.backgroundColor = 'red';
  error.textContent = msg;

  document.body.append(error);
  setTimeout(() => {
    error.remove();
  }, 3000);
}

export {showError};
