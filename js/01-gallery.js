import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");

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

	const options = {
		onShow: instance => {
			galleryRef.addEventListener("keydown", evt => {
				if (evt.code === "Escape") {
					return instance.close();
				}
			});
		},
		onClose: instance => {
			galleryRef.removeEventListener("keydown", evt => {
				if (evt.code === "Escape") {
					return instance.close();
				}
			});
		},
	};

	const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600">`, options);

	instance.show();
}

// instance.show();

// galleryRef.addEventListener("keydown", (evt) => {
// 	if (evt.code === "Escape") {
// 		instance.close();
// 	}
// });

// const currentActiveCard = document.querySelector('.color-card.is-active')
// if (currentActiveCard) {
//   currentActiveCard.classList.remove('is-active')
// }
