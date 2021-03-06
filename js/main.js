// Slider

$('.slider').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.reply ul').slick({
    arrows: false,
    autoplay: true,
    dots: false,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.reply__nav.prev').click(function(){
    $('.reply ul').slick('slickPrev');
});

$('.reply__nav.next').click(function(){
    $('.reply ul').slick('slickNext');
});


$(".showcase input[type='radio']").ionCheckRadio();


$(".btn-modal").fancybox({
    'padding'    : 0,
    'tpl'        : {
        closeBtn : '<a title="Close" class="popup__close" href="javascript:;"><i class="fa fa-times"></i></a>'
    }
});


// Map

ymaps.ready(init);

var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [55.7178,37.6472],
        zoom: 14,
        controls: ['smallMapDefaultSet']
    });

    myPlacemark = new ymaps.Placemark([55.7216,37.6468], {
        hintContent: ''
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/placemark.png',
        iconImageSize: [33, 39],
        iconImageOffset: [-16, -40]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('multiTouch');
    myMap.geoObjects.add(myPlacemark);
}


$(function () {
    $('.select-style').ikSelect({
        autoWidth: false,
        ddFullWidth: false,
        dynamicWidth: false,
        equalWidths: true,
        extractLink: false,
        linkCustomClass: '',
        ddCustomClass: '',
        filter: false,
        ddMaxHeight: 300,
        customClass: 'select-main'
    });
});


$('.header-location').tooltip();
$('.header-action').tooltip();
$('.header-delivery').tooltip();

// Minibasket

$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});


// scroll

$('.btn-up').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 500, {offset:0 });
    return false;
});


$(function() {
    $(".btn-up").hide();
    $(window).scroll(function() {
        if($(this).scrollTop() > 200) {
            $('.btn-up').fadeIn();
        } else {
            $('.btn-up').fadeOut();
        }
    });
});