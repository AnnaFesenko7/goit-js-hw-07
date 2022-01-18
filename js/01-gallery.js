import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(evt) {
    const isImgGalleryEl = evt.target.classList.contains('gallery__image');

    if (!isImgGalleryEl) {
        return
    }
    const ImgActiveEl = evt.target;
    
    console.log("ImgActiveEl", ImgActiveEl)
    
    const largeImgActiveEl = ImgActiveEl.dataset.source;
    console.log(" largeImgActiveEl", largeImgActiveEl);

    modalActive(largeImgActiveEl);

}


function createGalleryCardMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" >
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `;
    }).join("");
}


console.log(galleryItems);



function modalActive(largeImgActiveEl) {

	basicLightbox.create(`
		<img width="1400" height="900" src='${largeImgActiveEl}'>
	`).show()

}


