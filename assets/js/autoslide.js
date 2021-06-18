$(document).ready(function () {

    var slide1Index = 0;
    autoSlide1();

    function autoSlide1() {
        let slideArray = $('.slide1');

        for (var i = 0; i < slideArray.length; i++) {
            slideArray[i].style.display = 'none';
        }

        slide1Index++;
        if (slide1Index > slideArray.length) {
            slide1Index = 1
        }
        slideArray[slide1Index - 1].style.display = "inline-block";
        setTimeout(autoSlide1, 3000);
    }

    var slide2Index = 0;
    autoSlide2();

    function autoSlide2() {
        let slideArray = $('.slide2');

        for (var i = 0; i < slideArray.length; i++) {
            slideArray[i].style.display = 'none';
        }

        slide2Index++;
        if (slide2Index > slideArray.length) {
            slide2Index = 1
        }
        slideArray[slide2Index - 1].style.display = "inline-block";
        setTimeout(autoSlide2, 3000);
    }

});