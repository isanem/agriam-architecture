$(document).ready(function () {
    burger();

    function burger() {
        let burgerNav = $('.burger-nav');
        let burgerNavLinks = $('.nav-links');

        burgerNav.on('click', function () {
            burgerNavLinks.toggleClass('burger-nav-active');
            burgerNav.toggleClass('toggle');
        })

        burgerNavLinks.on('click', function () {
            burgerNavLinks.toggleClass('burger-nav-active');
            burgerNav.toggleClass('toggle');
        })
    }
});