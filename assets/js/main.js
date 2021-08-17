/* customize header on scroll */
$(window).scroll(function () {
    var altHeader = $('header').outerHeight();
    if ($(this).scrollTop() > altHeader) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});
/* tab function */
function openTab(tab) {
    $(".loader-tab").show();
    $('.tab-content .tab p').hide()
    $('.tab-btn .active').removeClass('active')
    $('.tab-btn .' + tab).addClass('active')
    $.ajax('assets/ajax/' + tab + '.json').then(function (result) {
        $('.tab-content .tab p').html(result.item.content);
        $(".loader-tab").hide();
        $('.tab-content .tab p').show()
    });
}
/* set cookies */
$(".set-cookies").click(function () {
    localStorage.setItem('cookies', 'accepted')
    $(".cookies").fadeOut("slow");
})
/* check form */
$(".send-form").click(function () {
    const messageForm = $('.form .message').val()
    const emailForm = $('.form .email').val()

    if (!messageForm && !emailForm) {
        $(".err-text").show();
        $(".err-val-email").hide();
    } else if (!messageForm) {
        $(".err-message").show();
    } else if (!emailForm) {
        $(".err-email").show();
    } else if (!isEmail(emailForm)) {
        $(".err-val-email").show();
    }
})
/* check email format */
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
/* input change */
$('input, textarea').on('input', function () {
    $(".err-text").hide();
});
/* open mobile menu */
$(".open-menu").click(function () {
    $("nav .mobile-menu").fadeIn();
})
$(".close-menu").click(function () {
    $("nav .mobile-menu").fadeOut();
})
$(".mobile-menu a").click(function () {
    $("nav .mobile-menu").fadeOut();
})


$(document).ready(function () {
    /* loader animation */
    $(".loader-intro").fadeOut("slow");
    /* initialize slick carousel */
    $('.hero').slick({
        slidesToShow: 1,
        dots: true
    });
    /* default tab */
    openTab('tab1')
    /* check cookies */
    if (!localStorage.getItem('cookies')) {
        $(".cookies").fadeIn('slow');
    }
    $('nav a, .menu a').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + 'px'
        }, 1000, 'swing');
    });
});