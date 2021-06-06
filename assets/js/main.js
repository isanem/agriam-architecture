$(document).ready(function()
{
    burger();

    function burger() {
        let burgerNav = $('.burger-nav');
        let burgerNavLinks = $('.nav-links');

        burgerNav.on('click', function() {
            burgerNavLinks.toggleClass('burger-nav-active');

            
        })
    }


    // Manual slideshow in section Projects

    // $('.prev').on('click', function() {
    //     let showImg = $('.show1');
    //     let prevImg = showImg.prev();
        
    //     if(prevImg.length == 0) {
    //         showImg.removeClass('show1');
    //         $('.slide1').last().addClass('show1');
    //     }
        
    //     else {
    //         showImg.removeClass('show1');
    //         prevImg.addClass('show1');

    //     }
    // });

    // $('.next').on('click', function() {
    //     let showImg = $('.show1');
    //     let nextImg = showImg.next();

    //     if(nextImg.length == 0) {
    //         showImg.removeClass('show1');
    //         $('.slide1').first().addClass('show1');            
    //     }
    //     else {
    //         showImg.removeClass('show1');
    //         nextImg.addClass('show1');
    //     }
    // });

    // Automatic slideshow in project 1

    var slide1Index = 0;
    autoSlide1();

    function autoSlide1() {
        let slideArray = $('.slide1');

        for (var i = 0; i < slideArray.length; i++) {
            slideArray[i].style.display = 'none';
        }
        
        slide1Index++;
        if (slide1Index > slideArray.length) {slide1Index = 1}
        slideArray[slide1Index-1].style.display = "inline-block";
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
        if (slide2Index > slideArray.length) {slide2Index = 1}
        slideArray[slide2Index-1].style.display = "inline-block";
        setTimeout(autoSlide2, 3000);
    }
    
});
