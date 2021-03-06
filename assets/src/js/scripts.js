;
(function ($) {

//    Slick slider Begin

    $('.slider').slick({
        dots: true,
        infinite: true,
    });

//    Slick slider End

    //Slider-jq Begin

    var $item = $('.slider-jq__content');
    var $next = $('.slider-jq__next');

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

    var tabs = $('#nav a');
    tabs.click(function(e){
        e.preventDefault();
        tabs.not(this).siblings('div').animate({
            height: 'hide'
        }, 0);
        var cItem = $(this).siblings('div');
        cItem.animate({
            height: cItem.css('display') == 'none' ? 'show' : 'hide'
        }, 0);
    });

    //Accordion End

    //Search Begin

    $(function() {
        $('#search-input').on('focus', function() {
            $('.search__nav').addClass('active');
        });

        // $('#search-input').on('keyup', function() {
        //   $('#hits-container').scrollTop(0);
        // })

        $('.search__close').on('click', function(evt) {
            evt.preventDefault();
            $('#search-input').val('');
            $('.search__nav').removeClass('active');
        });

        $('#search-input').on('blur', function(evt) {
            if(!evt.isDefaultPrevented) {
                console.log("blur");
                $('.search__nav').removeClass('active');
            }
        });
        let search = instantsearch({
            appId: 'TCEAIJWSQQ',
            apiKey: '0a339ae0728b5cb0c3e80fd18141c8cd',
            indexName: 'bt_support_articles',
            searchParameters: {replaceSynonymsInHighlight: false},
            searchFunction: function(helper) {
                var searchResults = $('.search-results');
                if (helper.state.query === '') {
                    searchResults.hide();
                    return;
                }
                helper.search();
                searchResults.show();
            }
        });

        // add a searchBox widget
        search.addWidget(
            instantsearch.widgets.searchBox({
                container: '#search-input',
                placeholder: 'Search for libraries in France...'
            })
        );

        // start
        search.start();
    });

    function toTitleCase(str) {
        return str.replace(/(?:^|\s)\w/g, function(match) {
            return match.toUpperCase();
        });
    }

    $(function() {
        $('#search-input-1').on('focus', function() {
            $('.search__nav-1').addClass('active');
        });

        // $('#search-input').on('keyup', function() {
        //   $('#hits-container').scrollTop(0);
        // })

        $('.search__close-1').on('click', function(evt) {
            evt.preventDefault();
            $('#search-input-1').val('');
            $('.search__nav-1').removeClass('active');
        });

        $('#search-input-1').on('blur', function(evt) {
            if(!evt.isDefaultPrevented) {
                console.log("blur");
                $('.search__nav-1').removeClass('active');
            }
        });
        let search = instantsearch({
            appId: 'TCEAIJWSQQ',
            apiKey: '0a339ae0728b5cb0c3e80fd18141c8cd',
            indexName: 'bt_support_articles',
            searchParameters: {replaceSynonymsInHighlight: false},
            searchFunction: function(helper) {
                var searchResults = $('.search-results');
                if (helper.state.query === '') {
                    searchResults.hide();
                    return;
                }
                helper.search();
                searchResults.show();
            }
        });

        // add a searchBox widget
        search.addWidget(
            instantsearch.widgets.searchBox({
                container: '#search-input',
                placeholder: 'Search for libraries in France...'
            })
        );

        // start
        search.start();
    });

    function toTitleCase(str) {
        return str.replace(/(?:^|\s)\w/g, function(match) {
            return match.toUpperCase();
        });
    }

    $(function() {
        $('#search-input-2').on('focus', function() {
            $('.search__nav-2').addClass('active');
        });

        // $('#search-input').on('keyup', function() {
        //   $('#hits-container').scrollTop(0);
        // })

        $('.search__close-2').on('click', function(evt) {
            evt.preventDefault();
            $('#search-input-2').val('');
            $('.search__nav-2').removeClass('active');
        });

        $('#search-input-2').on('blur', function(evt) {
            if(!evt.isDefaultPrevented) {
                console.log("blur");
                $('.search__nav-2').removeClass('active');
            }
        });
        let search = instantsearch({
            appId: 'TCEAIJWSQQ',
            apiKey: '0a339ae0728b5cb0c3e80fd18141c8cd',
            indexName: 'bt_support_articles',
            searchParameters: {replaceSynonymsInHighlight: false},
            searchFunction: function(helper) {
                var searchResults = $('.search-results');
                if (helper.state.query === '') {
                    searchResults.hide();
                    return;
                }
                helper.search();
                searchResults.show();
            }
        });

        // add a searchBox widget
        search.addWidget(
            instantsearch.widgets.searchBox({
                container: '#search-input',
                placeholder: 'Search for libraries in France...'
            })
        );

        // start
        search.start();
    });

    function toTitleCase(str) {
        return str.replace(/(?:^|\s)\w/g, function(match) {
            return match.toUpperCase();
        });
    }

    $(function() {
        $('#search-input-3').on('focus', function() {
            $('.search__nav-3').addClass('active');
        });

        // $('#search-input').on('keyup', function() {
        //   $('#hits-container').scrollTop(0);
        // })

        $('.search__close-3').on('click', function(evt) {
            evt.preventDefault();
            $('#search-input-3').val('');
            $('.search__nav-3').removeClass('active');
        });

        $('#search-input-3').on('blur', function(evt) {
            if(!evt.isDefaultPrevented) {
                console.log("blur");
                $('.search__nav-3').removeClass('active');
            }
        });
        let search = instantsearch({
            appId: 'TCEAIJWSQQ',
            apiKey: '0a339ae0728b5cb0c3e80fd18141c8cd',
            indexName: 'bt_support_articles',
            searchParameters: {replaceSynonymsInHighlight: false},
            searchFunction: function(helper) {
                var searchResults = $('.search-results');
                if (helper.state.query === '') {
                    searchResults.hide();
                    return;
                }
                helper.search();
                searchResults.show();
            }
        });

        // add a searchBox widget
        search.addWidget(
            instantsearch.widgets.searchBox({
                container: '#search-input',
                placeholder: 'Search for libraries in France...'
            })
        );

        // start
        search.start();
    });

    function toTitleCase(str) {
        return str.replace(/(?:^|\s)\w/g, function(match) {
            return match.toUpperCase();
        });
    }

    //Search End


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
    // jQuery(document).ready(function ($) {
    //     var
    //
    //         $window = $(window), // Основное окно
    //
    //         $target = $(".top-bar"), // Блок, который нужно фиксировать при прокрутке
    //
    //         $h = $target.offset().top; // Определяем координаты верха нужного блока (например, с навигацией или виджетом, который надо фиксировать)
    //
    //     $window.on('scroll', function () {
    //
    //         // Как далеко вниз прокрутили страницу
    //         var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //
    //         // Если прокрутили скролл ниже макушки нужного блока, включаем ему фиксацию
    //         if (scrollTop > $h) {
    //
    //             $target.addClass("sheensay_fixed");
    //
    //             // Иначе возвращаем всё назад
    //         } else {
    //
    //             $target.removeClass("sheensay_fixed");
    //         }
    //     });
    //
    // });

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