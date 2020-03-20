export const URL = '';

export const PHOTOS_URL =
    'https://jsonplaceholder.typicode.com/photos?_limit=50';

export default {
    getPhotos: () => {
        return fetch(PHOTOS_URL).then(res => res.json());
    }
};
