import {getPhotosArray} from './data.js';

function createPhotoElements(){
  const frag = document.createDocumentFragment();
  const temp = document.querySelector('#picture').content;
  const imgs = getPhotosArray(20);
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
