import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions'; 
//
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');

const API_KEY = '44426411-2b9aaab226d67ab5863731517'; // KEY API

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();

    if (!query) {
        iziToast.error({
            title: 'Error',
            message: 'Search query cannot be empty!',
        });
        return;
    }

    gallery.innerHTML = '';
    loader.style.display = 'block';

    try {
        const response = await fetch(https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true);
        const data = await response.json();

        if (data.hits.length === 0) {
            iziToast.warning({
                title: 'No Results',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        } else {
            displayImages(data.hits);
        }
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Please try again later!',
        });
    } finally {
        loader.style.display = 'none';
    }
});

// function displayImages(images) {
//     const imageCards = images.map(image => {
//         return `
//             <a href="${image.largeImageURL}" class="gallery-item">
//                 <img src="${image.webformatURL}" alt="${image.tags}" />
//                 <div class="info">
//                     <p><b>Likes:</b> ${image.likes}</p>
//                     <p><b>Views:</b> ${image.views}</p>
//                     <p><b>Comments:</b> ${image.comments}</p>
//                     <p><b>Downloads:</b> ${image.downloads}</p>
//                 </div>
//             </a>
//         `;
//     }).join('');

//     gallery.innerHTML = imageCards;
//     new SimpleLightbox('.gallery a').refresh();
// }