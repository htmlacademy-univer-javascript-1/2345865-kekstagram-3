import {getPhotosArray} from './data.js'

function createPhotoElements(){
  let frag = document.createDocumentFragment();
  let temp = document.querySelector('#picture').content;
  let imgs = getPhotosArray(20);
  for (const img of imgs) {
    let post = temp.cloneNode(true);
    post.querySelector('.picture__img').src = img.url;
    post.querySelector('.picture__comments').textContent = img.comments;
    post.querySelector('.picture__likes').textContent = img.likes;
    frag.append(post);
  }
  document.querySelector('.pictures').appendChild(frag);
}

export {createPhotoElements};
