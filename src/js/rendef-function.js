import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css'; 

export function renderImages(images) {
    const gallery = document.getElementById('gallery');
    const imageCards = images.map(image => {
        return `
            <a href="${image.largeImageURL}" class="gallery-item">
                <img src="${image.webformatURL}" alt="${image.tags}" />
                <div class="info">
                    <p><b>Likes:</b> ${image.likes}</p>
                    <p><b>Views:</b> ${image.views}</p>
                    <p><b>Comments:</b> ${image.comments}</p>
                    <p><b>Downloads:</b> ${image.downloads}</p>
                </div>
            </a>
        `;
    }).join('');

    gallery.innerHTML = imageCards;
    new SimpleLightbox('.gallery a').refresh();
}
