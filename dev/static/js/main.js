ymaps.ready(function() {
    var myMap = new ymaps.Map("map", {
            center: [55.784415, 37.614545],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([55.784415, 37.614545], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            iconCaption: 'Институтский пер., д.2/1, офис 50'
            // balloonContentFooter: "Подвал",
        }, {
            preset : 'islands#redDotIconWithCaption'
        });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
    myMap.controls
        .remove('trafficControl')
        .remove('searchControl')
        .remove('typeSelector')
        .remove('geolocationControl')
        .remove('fullscreenControl')
        .remove('rulerControl');
});

$(document).ready(function () {

    // gallery
    $(function () {
        $(".js-gallery").on("click", ".equipment-gallery img", function () {
            var $target = $(this);
            var $context = $target.parents(".js-gallery");
            var $mainImage = $context.find(".equipment-show img");
            $mainImage.attr("src", $target.attr("src"));
        });

    });

    // gallery
    $(function () {
        $(".js-gallery").on("click", ".equipment-gallery span", function () {
            var $target = $(this).parent().find("img");
            var $context = $target.parents(".js-gallery");
            var $mainImage = $context.find(".equipment-show img");
            // var $currentImage = $target.parent().find("img");
            $mainImage.attr("src", $target.attr("src"));
            // $mainImage.attr("src", $currentImage.attr("src"));
        });

    });

    // анимация шапки при скроле
    $(function () {
        $(window).scroll(function(){
            // $('.header').addClass('scroll');
            if ($(window).scrollTop()) {

                $('header').addClass('scroll');
            }
            else {
                $('header').removeClass('scroll');
            }
        });
    });



    $('[name="phone"]').inputmask('+7 (999) 999-99-99');


    $('[name="phone"]').attr('type', 'tel');

    // якорь
    $(function() {
        $('.menu__item').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    // form callback
    $('.js-popup-form').magnificPopup({
        items: {
            src: '#popup-form',
            type: 'inline'
        }
    });


    $('.js-specialist').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<a>'+0+(i+1)+'</a>';
        },
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});
