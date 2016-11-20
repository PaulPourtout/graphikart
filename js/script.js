$(document).ready(function() {

    var lastLocation = 0;
    $(window).scroll(function() {
        var currentLocation = $(this).scrollTop();
        // $("#scroll-score").html(currentLocation);
        if (currentLocation > 70) {
            if (currentLocation > lastLocation) {
                $("#main-nav").stop().animate({
                    top: -70
                }, 'fast');
                //   $("#main-nav").slideUp();

            } else {
                $("#main-nav").stop().animate({
                    top: 0
                }, 'fast');
                //   $("#main-nav").slideDown();
            }
            lastLocation = currentLocation;
        }
    });
});
