$(document).ready(function(){

$(".btn-link:nth-child(1)").addClass("active");

$(".btn-link:nth-child(2)").click(function(){
    $(".btn-link:nth-child(1)").removeClass("active");
    $(this).addClass("active");
    $(".number-perc").html("55");
})

$(".btn-link:nth-child(1)").click(function(){
    $(".btn-link:nth-child(2)").removeClass("active");
    $(this).addClass("active");
    $(".number-perc").html("78");
})

/* Animate Count Numbers */
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });

});
/* Animate Count Numbers */


});