import $ from 'jquery';
import API from './api';
require('imports-loader?jQuery=jquery!../node_modules/simplelightbox/dist/simple-lightbox.jquery.js');
import '../node_modules/simplelightbox/dist/simple-lightbox.css';

$(() => {
    const imageTemplate = $('#imageTemplate').html();
    const $gallery = $('#gallery');

    API.getPhotos().then(setGallery);

    function setGallery(imagesArray) {
        renderImages(imagesArray);

        initGallery();
    }

    function renderImages(images) {
        $gallery.html(images.map(getImageHtml).join('\n'));
    }

    function getImageHtml(image) {
        return imageTemplate
            .replace('{{url}}', image.url)
            .replace('{{thumbnailUrl}}', image.thumbnailUrl)
            .replace('{{title}}', image.title);
    }

    function initGallery() {
        $gallery.find('a').simpleLightbox({
            fileExt: false
        });
    }
});
