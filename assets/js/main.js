$(document).ready(function()
{
    $('.prev').on('click', function() {
        let showImg = $('.show');
        let prevImg = showImg.prev();
        
        if(prevImg.length == 0) {
            showImg.removeClass('show');
            $('.slide').last().addClass('show');
        }
        
        else {
            showImg.removeClass('show');
            prevImg.addClass('show');

        }
    });

    $('.next').on('click', function() {
        let showImg = $('.show');
        let nextImg = showImg.next();

        if(nextImg.length == 0) {
            showImg.removeClass('show');
            $('.slide').first().addClass('show');            
        }
        else {
            showImg.removeClass('show');
            nextImg.addClass('show');
        }
    });
});
