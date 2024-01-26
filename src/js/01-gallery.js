import { galleryItems } from "./gallery-items.js";

const lightbox = document.querySelector(".gallery");
const images = galleryItems.map(image => `
  <div class="gallery__item">
    <a class="gallery__link" href="${image.original}">
      <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
  </div>`
).join("");

lightbox.innerHTML = images;

lightbox.addEventListener("click", (e) => {
    e.preventDefault();
    const { target } = e;
    if (target.nodeName !== "IMG") return;
    const source = target.dataset.source;
    const instance = basicLightbox.create(`<img src="${source}" width="800" height="600">`, {
        onShow: (instance) => {
            document.addEventListener("keydown", (event) => {
                if (event.key === "Escape") instance.close();
            });
        },
    });
    instance.show();
});

console.log(galleryItems);
