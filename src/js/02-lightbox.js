import { galleryItems } from './gallery-items.js';
const galleryContainer = document.querySelector(".gallery");

const galleryHTML = galleryItems.map(image => {
  return `
    <div class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img
          class="gallery__image"
          src="${image.preview}"
          alt="${image.description}"
          title="${image.description}"
        />
      </a>
    </div>
  `;
}).join("");


galleryContainer.innerHTML = galleryHTML;
new SimpleLightbox(".gallery a", { captionDelay: 250 });
console.log(galleryItems);
