import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    const isImgGalleryEl = evt.target.classList.contains('gallery__image');

    if (!isImgGalleryEl) {
        return
    }
    const ImgActiveEl = evt.target;
    
    console.log("ImgActiveEl", ImgActiveEl)
    
    // const largeImgActiveEl = ImgActiveEl.dataset.source;
    // console.log(" largeImgActiveEl", largeImgActiveEl);

    modalActive();

}


function createGalleryCardMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
       
            <a class="gallery__item" href="${original}" >
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        
        `;
    }).join("");
}


console.log(galleryItems);




function modalActive() {

    var lightbox = new SimpleLightbox('.gallery a');

}
