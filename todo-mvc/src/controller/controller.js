import ToDoCollection from '../model/collection';
import config from '../config';
import ListView from '../view/list';
import FormView from '../view/form';

export default class Controller {
    constructor() {
        this.collection = new ToDoCollection(config.contactsUrl);
        this.listView = new ListView();
        this.formView = new FormView();

        this.container = document.getElementById('root');

        this.container.append(this.listView.el);
        this.container.append(this.formView.el);

        this.refreshData();
    }

    refreshData() {
        this.collection.fetch().then(() => this.renderData());
    }

    renderData() {
        this.listView.render(this.collection.list);
        console.log(this.collection.list);
    }
}
