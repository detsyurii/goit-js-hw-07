import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup();

function createGalleryMarkup() {
	return galleryItems
		.map(
			({ preview, original, description }) =>
				`<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`,
		)
		.join("");
}

galleryRef.insertAdjacentHTML("afterbegin", galleryMarkup);

//////

galleryRef.addEventListener("click", onImageClick);

function onImageClick(evt) {
	evt.preventDefault();
	if (evt.target.nodeName !== "IMG") {
		return;
	}
}
const lightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionsDelay: 250,
});
