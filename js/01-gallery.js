import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onImgClick);

// function onGalleryContainerClick(evt) {
//     evt.preventDefault();
//     const isImgGalleryEl = evt.target.classList.contains('gallery__image');

//     if (!isImgGalleryEl) {
//         return
//     }
//     const ImgActiveEl = evt.target;
    
//     console.log("ImgActiveEl", ImgActiveEl)
    
//     const largeImgActiveEl = ImgActiveEl.dataset.source;
//     console.log(" largeImgActiveEl", largeImgActiveEl);

//     modalActive(largeImgActiveEl);

// }


const instance = basicLightbox.create(
		`<img width="1400" height="900" class = "modal-img" src=''>`,
    {
        onShow: instance => {
        window.addEventListener('keydown', onEscClick);
        }
    },
    {
        onClose: instance => {
        window.removeEventListener('keydown', onEscClick);
    }}
)
function onImgClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    instance.element().querySelector('.modal-img').src = evt.target.dataset.source;
    instance.show();
}

function onEscClick(event) {

  if (event.key==='Escape') {
      instance.close();
      return
  }
    
} 


function createGalleryCardMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}" >
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



// function modalActive(largeImgActiveEl) {

// 	basicLightbox.create(`
// 		<img width="1400" height="900" src='${largeImgActiveEl}'>
// 	`).show()

// }




