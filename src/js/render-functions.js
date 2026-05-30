import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadbtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
 } ) ;

export function createGallery(images) {
    const markup = images.map(image => `
    <li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      alt="${image.tags}"
    />
  </a>
  <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${image.likes}
            </p>

            <p class="info-item">
              <b>Views</b>
              ${image.views}
            </p>

            <p class="info-item">
              <b>Comments</b>
              ${image.comments}
            </p>

            <p class="info-item">
              <b>Downloads</b>
              ${image.downloads}
            </p>
          </div>
</li>`).join('');
    
    gallery.insertAdjacentHTML('beforeend', markup);
    
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = '';
}

export function showLoader() {
    loader.classList.remove('is-hidden');
}

export function hideLoader() {
    loader.classList.add('is-hidden');
}

export function showLoadMoreButton() { 
    loadbtn.classList.remove('is-hidden')
};

export function hideLoadMoreButton() {
    loadbtn.classList.add('is-hidden')
 };