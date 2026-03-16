
(function () {

    const prod_add_btns = Array.from(document.querySelectorAll('.product-carousel-add'));
    console.log('hey')
    prod_add_btns.map(btn => {

        const quick = btn.previousSibling();
        console.log(quick)

        btn.addEventListener('click', function () {

        })
    })



}());
