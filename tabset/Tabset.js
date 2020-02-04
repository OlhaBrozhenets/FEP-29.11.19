class Tabset {
    static WRAPPER_CLASS = 'tabset-wrapper';
    static ELEMENTS_LIST_CLASS = 'tabset-elements';
    static TITLES_LIST_CLASS = 'tabset-titles';
    static TITLE_CLASS = 'tabset-heading';
    static ACTIVE_CLASS = 'active';
    static BUTTONS_CONTAONER_CLASS = 'tabset-buttons';

    constructor(container) {
        this.container = container;

        this.init();
    }

    init() {
        this.wrapContainer();
        this.copyTitles();
        this.addEventListener();
        this.addButtons();
        this.show(0);
    }

    wrapContainer() {
        this.titlesList = document.createElement('div');
        this.titlesList.className = Tabset.TITLES_LIST_CLASS;

        const wrapper = document.createElement('div');
        wrapper.className = Tabset.WRAPPER_CLASS;
        wrapper.appendChild(this.titlesList);

        this.container.parentNode.insertBefore(wrapper, this.container);
        wrapper.appendChild(this.container);

        this.container.classList.add(Tabset.ELEMENTS_LIST_CLASS);
    }

    copyTitles() {
        const titles = this.container.querySelectorAll(
            `.${Tabset.TITLE_CLASS}`
        );

        Array.prototype.forEach.call(titles, el =>
            this.titlesList.appendChild(el)
        );
    }

    addButtons() {
        const btnsContainer = document.createElement('div');
        btnsContainer.className = Tabset.BUTTONS_CONTAONER_CLASS;

        const prevBtn = document.createElement('span');
        prevBtn.textContent = '<';
        prevBtn.className = 'tabset-button';
        prevBtn.addEventListener('click', () => this.prev());

        const nextBtn = document.createElement('span');
        nextBtn.textContent = '>';
        nextBtn.className = 'tabset-button';
        nextBtn.addEventListener('click', () => this.next());

        btnsContainer.append(prevBtn);
        btnsContainer.append(nextBtn);

        this.titlesList.append(btnsContainer);
    }

    addEventListener() {
        this.titlesList.addEventListener('click', e => this.onTitleClick(e));
    }

    onTitleClick(e) {
        const titleIndex = Array.prototype.indexOf.call(
            this.titlesList.children,
            e.target
        );

        if (titleIndex >= 0) {
            this.show(titleIndex);
        }
    }

    hideAll() {
        Array.prototype.forEach.call(
            this.titlesList.children,
            (titleEl, index) => {
                this.hide(index);
            }
        );
    }

    hide(index) {
        if (!this.titlesList.children[index]) {
            return;
        }
        this.titlesList.children[index].classList.remove(Tabset.ACTIVE_CLASS);
        this.container.children[index].classList.remove(Tabset.ACTIVE_CLASS);
    }

    show(index) {
        if (!this.titlesList.children[index]) {
            return;
        }

        this.hide(this.activeIndex);
        this.activeIndex = index;

        this.titlesList.children[index].classList.add(Tabset.ACTIVE_CLASS);
        this.container.children[index].classList.add(Tabset.ACTIVE_CLASS);
    }

    next() {
        let newIndex = this.activeIndex + 1;

        if (newIndex >= this.titlesList.children.length - 1) {
            newIndex = 0;
        }

        this.show(newIndex);
    }

    prev() {
        let newIndex = this.activeIndex - 1;

        if (newIndex < 0) {
            newIndex = this.titlesList.children.length - 2;
        }

        this.show(newIndex);
    }
}
