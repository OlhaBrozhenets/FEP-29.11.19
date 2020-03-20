import Collection from '../model/Collection';
import List from '../view/List';

export default class Controller {
    constructor() {
        console.log('init');
        this.lisView = new List();
        this.container = document.getElementById('root');

        this.contactsCollection = new Collection();
        this.contactsCollection
            .fetch()
            .then(() => this.lisView.render(this.contactsCollection.list));

        this.container.append(this.lisView.el);

        console.log(this.lisView);
    }
}
