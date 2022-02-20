function tabs(selectorTabLink, selectorTabArea) {
    const tabLinks = $(selectorTabLink),
        tabArea = $(selectorTabArea);

    tabLinks.eq(0).addClass('active')
    tabArea.eq(0).addClass('tab-active').addClass('d-flex')

    tabLinks.on('click tap', function(){
        tabLinks.removeClass('active');
        $(this).addClass('active');

        tabArea.removeClass('tab-active')
        tabArea.removeClass('d-flex')

        tabArea.eq(tabLinks.index($(this))).addClass('d-flex')

        setTimeout( () => {
            tabArea.eq(tabLinks.index($(this))).addClass('tab-active')
        }, 200)

    });
}

tabs('.tab-link', '.tab')
