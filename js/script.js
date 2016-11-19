$(document).ready(function() {

    var lastLocation = 0;
    $(window).scroll(function() {


        var currentLocation = $(this).scrollTop();
        $("#scroll-score").html(currentLocation);
        if (currentLocation > lastLocation) {
            $("#main-nav").animate({
                top: -70
            }, 500);
            //   $("#main-nav").slideUp();

        } else {

            $("#main-nav").animate({
                top: 0
            }, 500);
            //   $("#main-nav").slideDown();

        }
        lastLocation = currentLocation;
    });
});
