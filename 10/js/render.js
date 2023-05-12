function createPhotoElements(imgs) {
  const frag = document.createDocumentFragment();
  const temp = document.querySelector('#picture').content;
  for (const img of imgs) {
    const post = temp.cloneNode(true);
    post.querySelector('.picture__img').src = img.url;
    post.querySelector('.picture__comments').textContent = img.comments;
    post.querySelector('.picture__likes').textContent = img.likes;
    frag.append(post);
  }
  document.querySelector('.pictures').appendChild(frag);
}

export {createPhotoElements};
