AOS.init({
    once: true
})
new WOW().init();





// scrool top animation 

var btn = $('#button_top');

$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '100');
});


$('.owl-carousel').owlCarousel({
    autoWidth: true,
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 2
        }
    }
})