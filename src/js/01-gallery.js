// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

//Refs
const { gallery } = {
  gallery: document.body.querySelector(".gallery"),
};

//Creating markup
galleryItems.forEach((item) => {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="test" />
</a>`
  );
});

//Initialize SimpleLightBox
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
