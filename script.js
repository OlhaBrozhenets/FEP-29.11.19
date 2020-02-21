$('ul')
    .on('click', 'li', function(e) {
        const $el = $(e.target);
        $el.hide();

        setTimeout(() => $el.show(), 2000);
    })
    .css('color', 'red')
    .css('backgroundColor', 'blue');
