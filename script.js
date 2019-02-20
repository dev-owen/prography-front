const scrollDown = function (n) {
    if(n === 1) {
        $("html, body").animate({
            scrollTop: $("#secondPage").offset().top
        }, 1000);
        return false;
    } else if(n === 2) {
        $("html, body").animate({
            scrollTop: $("#thirdPage").offset().top
        }, 1000);
        return false; 
    } else if(n === 3) {
        $("html, body").animate({
            scrollTop: $("#fourthPage").offset().top
        }, 1000);
        return false; 
    } else if(n === 4) {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
        return false; 
    }
}