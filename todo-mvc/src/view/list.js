export default class ListView {
    constructor() {
        this.createElement();
    }

    createElement() {
        this.el = document.createElement('div');
        this.el.className = 'task-list u-full-width';
    }

    render(data) {
        this.el.innerHTML = data.map(this.renderItem).join('\n');
    }

    renderItem(item) {
        const isDoneClass = item.completed ? 'done' : '';
        return `<div class="task-item u-full-width ${isDoneClass}" data-id="${item.id}">
                    ${item.title}
                    <span class='delete-btn'>x</span>
                </div>`;
    }
}
