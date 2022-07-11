// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//Refs
const { gallery } = {
  gallery: document.body.querySelector('.gallery'),
};

//Creating markup
const markup = galleryItems.map(item => {
  return `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="test" />
</a>`;
});

gallery.insertAdjacentHTML('beforeend', markup.join(''));

//Initialize SimpleLightBox
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
