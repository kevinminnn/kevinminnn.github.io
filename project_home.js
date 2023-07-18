$(document).ready(function() {
    var threshold = 200;
    
    $(window).scroll(function() {
        var scrollHeight = $(window).scrollTop();

        $('#content-wrap .image-container').each(function() {
            var itemHeight = $(this).outerHeight();
            var itemOffset = $(this).offset().top;

            if (scrollHeight > itemOffset - threshold && scrollHeight < (itemOffset + itemHeight)) {
                $(this).addClass('sticky');
            } else {
                $(this).removeClass('sticky');
            }
        });
    });
});

