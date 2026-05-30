import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let page = 1;
let searchQuery = '';
let totalHits = 0;

form.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSubmit(event) {
  event.preventDefault();

  searchQuery = event.currentTarget.elements['search-text'].value.trim();

  if (!searchQuery) return;

  page = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(searchQuery, page);

    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });

      return;
    }

    createGallery(data.hits);

    if (totalHits > 15) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong!',
    });
  } finally {
    hideLoader();
  }
}

async function onLoadMore() {
  page += 1;

  showLoader();

  try {
    const data = await getImagesByQuery(searchQuery, page);

    createGallery(data.hits);

    const totalPages = Math.ceil(totalHits / 15);

    if (page >= totalPages) {
      hideLoadMoreButton();

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }

    const card = document
      .querySelector('.gallery-item')
      .getBoundingClientRect();

    window.scrollBy({
      top: card.height * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong!',
    });
  } finally {
    hideLoader();
  }
}