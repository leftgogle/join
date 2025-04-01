$(document).ready(function() {
    $(".tab-link").click(function() {
        $(".tab-link").removeClass("active");
        $(this).addClass("active");
        $(".tab-content").hide();
        $("#" + $(this).data("tab")).show();
    });

    $("#openPopup").click(function() {
        $("#popup").fadeIn();
    });

    $(".close").click(function() {
        $("#popup").fadeOut();
    });

    $(".accordion-header").click(function() {
        $(this).next(".accordion-content").slideToggle();
        $(".accordion-content").not($(this).next()).slideUp();
    });
});