var myCarousel = document.querySelector('#myCarousel');
var carousel = new bootstrap.Carousel(myCarousel)

$('.slick-slider').slick({
    dots: true
});

$(window).scroll(function(){
    
    if($(this).scrollTop() > 10){
        $(".navbar").addClass("navbg");
    } else{
        $(".navbar").removeClass("navbg");
    }
    var k = $(window).scrollTop()
    // console.log(k)
}) 

