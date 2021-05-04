$(document).ready(function () {

    // Header on scroll
    $(window).on('scroll load', function () {
        if ($(window).scrollTop() > 100) {
            $('#header').css({
                'background': '#EB4D4B',
                'box-shadow': '0 2px 5px #999'
            });
        } else {
            $('#header').css({
                'background': '#4b6584',
                'box-shadow': 'none'
            });
        }
    });

    // When search-container is mouseentered, logo hides
    $(".search-container").mouseenter(() => {
        $(".logo").hide();
    });
    // When search-container is mouseleft, logo shows again
    $(".search-container").mouseleave(() => {
        $(".logo").show();
    });

    // Toggling navbar
    $(".bi-list").click(() => {
        $(".navbar").toggle();
        $(".bi-list").toggleClass("bi-x-circle");
    });

    // Owl carousel for home section
    $('.home-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        // autoplay: true
    })

    // Owl carousel for products section
    $('.product-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        // autoplay: true,
        center: true,
        responsive:{
            1:{
                items:1,
                nav:true,
            },
            800:{
                items:2
            },
            1000:{
                items:3
            }
        }

    })

    $('.review-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
    })
});