import { galleryItems } from "./gallery-items.js";

//console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

//const { preview, original, description } = galleryItems;

const galleryMarkup = createGalleryMarkup();

function createGalleryMarkup() {
	return galleryItems
		.map(
			({ preview, original, description }) =>
				`<div class="gallery__item">
<a class="gallery__link" href=${original} 
    target="_blank" rel="noreferrer noopener">
  <img
    class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
  />
</a>
</div>`,
		)
		.join("");
}

galleryRef.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryRef.addEventListener("click", onImageClick);

function onImageClick(evt) {
	evt.preventDefault();
	if (!evt.target.classList.contains("gallery__image")) {
		return;
	}

	//console.log(evt.target.dataset.source);

	const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

	instance.show();

	galleryRef.addEventListener("keydown", (evt) => {
		if (evt.code === "Escape") {
			instance.close();
		}
	});


	// const currentActiveCard = document.querySelector('.color-card.is-active')
	// if (currentActiveCard) {
	//   currentActiveCard.classList.remove('is-active')
	// }
}


