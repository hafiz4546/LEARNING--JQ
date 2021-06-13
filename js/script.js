
var owl = $(".owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    onInitialized: function(e) {
        $(e.target).find('.owl-item').eq(0).find('.owl-slide-text').addClass('slide-up');
    }
});

owl.on('changed.owl.carousel', function(e) {
    var index = e.item.index;
    $(e.target).find('.owl-item .owl-slide-text').removeClass('slide-up');
    $(e.target).find('.owl-item').eq(index).find('.owl-slide-text').addClass('slide-up');
});



$(window).on('scroll', function(){
    if($(this).scrollTop() > 10){
        $(".navbar").removeClass('navbar-dark').addClass("bg-light"); //bg-light
    } else{
        $(".navbar").addClass('navbar-dark').removeClass("bg-light");
    }
    // var k = $(window).scrollTop()
    // console.log(k)
}) 

