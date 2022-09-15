import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const ItemsGallery = createGalleryCardMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", ItemsGallery);

// galleryRef.addEventListener("click", onGalleryClick);

function createGalleryCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    })
    .join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

console.log(galleryItems);
