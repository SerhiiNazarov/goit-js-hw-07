import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");
const ItemsGallery = createGalleryCardMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", ItemsGallery);

galleryRef.addEventListener("click", onGalleryClick);

function createGalleryCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    })
    .join("");
}

function onGalleryClick(event) {
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  event.preventDefault();
  instance.show();

  galleryRef.addEventListener("keydown", onEscapeClick);

  function onEscapeClick(evt) {
    if (evt.code === "Escape") {
      instance.close();
      galleryRef.removeEventListener("keydown", onEscapeClick);
    }
    console.log(evt.code);
  }
}

console.log(galleryItems);
