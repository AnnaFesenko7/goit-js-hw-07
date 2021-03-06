import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', lightbox);




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





var lightbox = new SimpleLightbox('.gallery a', {
    captionPosition: 'bottom',
    captionDelay: 300,
    captionsData: 'alt'
    });





