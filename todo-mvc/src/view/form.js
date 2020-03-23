export default class FormView {
    constructor() {
        this.createElement();
    }

    createElement() {
        this.el = document.createElement('form');
        this.el.innerHTML = `
            <div class="row">
                <div class="ten columns">
                    <input type="text" name="title" id="taskNameInput" class="u-full-width">
                </div>
                <div class="two columns">
                    <input type="submit" class="u-full-width" value="Add">
                </div>
            </div>
        `;
    }
}
