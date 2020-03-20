import { USERS_URL } from '../config';
import Model from './Model';

export default class Collection {
    constructor() {
        console.log('collection init');
    }

    fetch() {
        return fetch(USERS_URL)
            .then(res => res.json())
            .then(data => this.setData(data));
    }

    setData(data) {
        this.list = data.map(item => new Model(item));

        console.log(this.list);
    }
}
