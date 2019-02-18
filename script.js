const scrollDown = function () {
    $("html, body").animate({
        scrollTop: $("#secondPage").offset.top
    }, 1000);
    return false;
}