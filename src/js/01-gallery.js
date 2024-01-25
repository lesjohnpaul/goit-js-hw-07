import { galleryItems } from './gallery-items.js';

document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery');

    // Render gallery items
    galleryItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('gallery__item');

        const link = document.createElement('a');
        link.classList.add('gallery__link');
        link.href = item.original;

        const image = document.createElement('img');
        image.classList.add('gallery__image');
        image.src = item.preview;
        image.setAttribute('data-source', item.original);
        image.alt = item.description;

        link.appendChild(image);
        listItem.appendChild(link);
        gallery.appendChild(listItem);
    });

    // Open modal on image click
    gallery.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.tagName === 'IMG') {
            const largeImageUrl = event.target.dataset.source;

            const instance = basicLightbox.create(`
                <img src="${largeImageUrl}" alt="${event.target.alt}" />
            `);

            instance.show();

            // Close modal on Escape key press
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') {
                    instance.close();
                }
            });
        }
    });
});

console.log(galleryItems);
