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