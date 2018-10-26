$(document).ready(() => {
  $( ".header_mobile_menu" ).click(function() {
    $(".header_mobile_visible_menu").toggleClass("fixed_menu");
    $(".header_mobile_toggle_menu_new").animate({
       right:  $(".header_mobile_visible_menu").hasClass("fixed_menu") ? "0" : "100%"
      }, 1000 );
    $("body").toggleClass("fixed");
});
$( ".border" ).click(function() {
    $(".detail-work__goods__info").toggle("hidden");
    $(".detail-work__goods__about-size").toggle("hidden");
});
$('#detail-work__laying__cement__catalog').on('mouseover', '.detail-work__laying__cement-items', function() {
    $(this).addClass("detail-work__goods__button-item-color");
});
$('#detail-work__laying__cement__catalog').on('mouseout', '.detail-work__laying__cement-items', function() {
   $(this).removeClass("detail-work__goods__button-item-color");
});

        $('#about__power').owlCarousel({
            items: 1,
            loop: true,
            // autoplay: true,
            // autoplayTimeout: 10000,
            // autoplayHoverPause: true,
            smartSpeed: 1500,
            nav: true,
            dotsEach: true
    });
        $('#detail-work__goods__choice').owlCarousel({
            items: 1,
            nav: true,
            navText: '',
            loop: true,
            autoplay: false,
            smartSpeed: 600,
            autoHeight: false,
            autoWidth: false,
            responsive: {
              0: {
                items: 1,
              },
              768: {
                items: 2,
                margin: 10,
              },
              1024: {
                items: 1,
                margin: 25,
              },
            },
          })
        $('#detail-work__laying-items').owlCarousel({
            items: 1,
            loop: true,
            smartSpeed: 1000,
            dotsEach: true,
            nav: false,
            URLhashListener: true,
            startPosition: 'URLHash'
    });
        $('#detail-work__laying__cement__catalog').owlCarousel({
            items: 4,
            responsive:{ // уменьшаем кол-во слайдов
             0:{ // ширина от 0 px
                items:1
                },
             503:{ // от 503 px
                items:2
                 },
             720:{ // от 720 px
                items:3
                 },
             1000:{ // от 1000 px
                 items:4
                 }
             },
            loop: true,
            smartSpeed: 1000,
            nav: true
    });
         $('#owl').owlCarousel({
            items: 1,
            loop: true,
            smartSpeed: 1500,
            nav: true,
            dotsEach: true
    });
});





