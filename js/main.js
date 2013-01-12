$(document).ready(function() {
    $("#page-holder").css('margin-top', $("#page-title").height() - 50);

    $(window).resize(function() {
        $("#page-holder").css('margin-top', $("#page-title").height() - 50);
    });
});
