
(function () {
    const prod_add_btns = Array.from(document.querySelectorAll('.product-carousel-add'));

    prod_add_btns.map(btn => {

        const quick = btn.parentNode?.querySelector('quick-add-component .quick-add__button');

        btn.addEventListener('click', function () {
            quick?.click();
        })
    })
}());
