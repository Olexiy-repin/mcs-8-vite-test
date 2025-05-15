// import { saveToLS, loadFromLS } from './localstorage.js';
// import someObj from './localstorage.js';
// import * as localStorageApi from './localstorage.js';

// console.log(localStorageApi);

// const refs = {
//   readLSBtn: document.querySelector('.js-read-ls-btn'),
// };

// const product = {
//   title: 'New title',
//   price: 10000,
// };

// saveToLS('product-info', product);

// refs.readLSBtn.addEventListener('click', event => {
//   const dataFromLS = loadFromLS('product-info');

//   if (dataFromLS === null) {
//     return;
//   }

//   console.log(dataFromLS);
// });

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const simpleLightboxInstance = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionDelay: 1000,
});
