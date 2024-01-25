import { galleryItems } from './gallery-items.js';

document.addEventListener('DOMContentLoaded', function () {
    const galleryList = document.querySelector('.gallery');

    const createGallery = items => {
        return items.map(({ preview, original, description }) => {
            return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>
      `;
        }).join('');
    };

    const photosMarkup = createGallery(galleryItems);
    galleryList.innerHTML = photosMarkup;

    // Initialize SimpleLightbox
    const gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250
    });
});
