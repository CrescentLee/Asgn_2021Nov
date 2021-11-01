//init element when DOM is loaded
$(window).ready(function () {
    togglebuttoncheck();
})

//resize event
$(window).resize(function () {
    togglebuttoncheck();
});

//toggle function for button
function triggerToggle() {
    $('#nav_bar').slideToggle("slow", function () {
    });
}

//check width to show/hide the nav bar
function togglebuttoncheck() {
    if ($(window).width() <= 540) {
        $('#nav_bar').css('display', 'none');
    } else {
        $('#nav_bar').css('display', 'block');
    }
}