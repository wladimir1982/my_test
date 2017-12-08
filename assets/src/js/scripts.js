;
(function ($) {

//    Slick slider Begin

    $('.slider').slick({
        dots: true,
        infinite: true,
    });

//    Slick slider End


// Responsive Slider Begin

    $('.team__slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
// Responsive Slider End


    //Slider-jq Begin

    var $item = $('.slider-jq__content');
    var $next = $('.next');

    $item.first().addClass('active');

    $next.click(function () {
        var index = $item.filter('.active').index();
        if (index === $item.length - 1) {
            index = -1
        }
        $item.eq(index - 1).addClass('active').siblings().removeClass('active');
    });

    //Slider-jq End

    //Tabs Begin

    $(".weather__tab-item").not(":first").hide();
    $(".weather__tab").click(function () {
        $(".weather__tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".weather__tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    //Tabs End

    //Calendar Begin

    $(function () {
        $('#calendar').datepicker({
            inline: true,
            firstDay: 1,
            showOtherMonths: true,
            dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        });
    });

    //Calendar End

    //Accordion Begin




    $(document).ready(function(e) {
        $('.has-sub').click(function () {
            $(this).toggleClass('tap');
        });
    });



    //     var $headings = $('.accordion__item-heading'),
    //         $texts = $('.accordion__item-text');
    //
    //     // hide all text except first
    //     $texts.not(':first').show();
    //
    //     // click on item heading
    //     $headings.on('click', function() {
    //
    //         // if already open, than do nothing
    //         if ($(this).next().is(':visible')) return;
    //
    //         // hide all texts
    //         $texts.slideUp(600);
    //
    //         // open this text
    //         $(this).next('.accordion__item-text').slideDown(600);
    //
    //     });
    //
    // });
    //Accordion End


    //    Кнопка вверх (.btn_up) Begin

    $('body').append('<button class="btn_up" />');

    $('.btn_up').click(function () {
        $('body').animate({
            'scrollTop': 0
        }, 1000);
        $('html').animate({
            'scrollTop': 0
        }, 1000);
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('.btn_up').addClass('active');
        } else {
            $('.btn_up').removeClass('active');
        }
    });

    //    Кнопка вверх (.btn_up) End


// Плавный скрол по якорям начало

    $(document).ready(function () {
        $("#menu").on("click", "a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();

            //забираем идентификатор бока с атрибута href
            var id = $(this).attr('href'),

                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;

            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

    // Плавный скрол по якорям конец

//    Скрипт анимации ачало

    new WOW().init();

    //    Скрипт анимации конец


    // Cкрипт для фиксации меню начало
    jQuery(document).ready(function ($) {
        var

            $window = $(window), // Основное окно

            $target = $(".top-bar"), // Блок, который нужно фиксировать при прокрутке

            $h = $target.offset().top; // Определяем координаты верха нужного блока (например, с навигацией или виджетом, который надо фиксировать)

        $window.on('scroll', function () {

            // Как далеко вниз прокрутили страницу
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Если прокрутили скролл ниже макушки нужного блока, включаем ему фиксацию
            if (scrollTop > $h) {

                $target.addClass("sheensay_fixed");

                // Иначе возвращаем всё назад
            } else {

                $target.removeClass("sheensay_fixed");
            }
        });

    });

// Cкрипт для фиксации меню конец


    var colors = new Array(
        [0, 0, 255],
        [255, 0, 255],
        [60, 255, 60],
        [0, 0, 205],
        // [62,35,255],
        [0, 95, 90],
        [255, 35, 98],
        [45, 175, 230],
        [0, 0, 205],
        [255, 128, 0]);

    var step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
    var colorIndices = [0, 1, 2, 3];

//transition speed
    var gradientSpeed = 0.002;

    function updateGradient() {

        if ($ === undefined) return;

        var c0_0 = colors[colorIndices[0]];
        var c0_1 = colors[colorIndices[1]];
        var c1_0 = colors[colorIndices[2]];
        var c1_1 = colors[colorIndices[3]];

        var istep = 1 - step;
        var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
        var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
        var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
        var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

        var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
        var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
        var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
        var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

        $('#gradient').css({
            background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
        }).css({
            background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
        });

        step += gradientSpeed;
        if (step >= 1) {
            step %= 1;
            colorIndices[0] = colorIndices[1];
            colorIndices[2] = colorIndices[3];

            //pick two new target color indices
            //do not pick the same as the current one
            colorIndices[1] = ( colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
            colorIndices[3] = ( colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

        }
    }

    setInterval(updateGradient, 10);


    $(document).foundation();

})(jQuery);