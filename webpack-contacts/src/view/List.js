export default class List {
    constructor() {
        this.el = document.createElement('ul');
    }

    render(list) {
        this.el.innerHTML = list.map(this.createTemplate).join('\n');
    }

    createTemplate(item) {
        return `<li>${item.name}</li>`;
    }
}
