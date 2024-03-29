$(document).ready(function(){
    Fancybox.bind("[data-fancybox]", {});
    const concatTextByWordsAndReplaceIt = (selector, countWords = 120) => {
        const $el = document.querySelector(selector);
        if (!$el) return;
        const lines = $el.innerHTML.split(' ');
        if (lines.length <= countWords) return;
        $el.innerHTML = lines.splice(0, countWords).join(' ').trim() + '...';
    };

    concatTextByWordsAndReplaceIt('.offer-text__range-words', 120);
    concatTextByWordsAndReplaceIt('.offer-text__range-words2', 140);
    concatTextByWordsAndReplaceIt('.about-text', 240);
    // Sliders
    $('.offer-slider').slick({
        prevArrow: $('.offer-slider-arrows .prev-slide'),
        nextArrow: $('.offer-slider-arrows .next-slide'),
        infinite: false,
        responsive: [
            {
              breakpoint: 719,
              settings: {
                slidesToShow: 1,
                adaptiveHeight: true,
              }
            },
        ]
    });

    $('.events-slider').slick({
        prevArrow: $('.events-slider-arrows .prev-slide'),
        nextArrow: $('.events-slider-arrows .next-slide'),
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            },
        ]
    });
    $('.about-slider').slick({
        prevArrow: $('.about-slider-arrows .prev-slide'),
        nextArrow: $('.about-slider-arrows .next-slide'),
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
                breakpoint: 729,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                }
            },
        ]
        
    });
    $('.galery-slider').slick({
        prevArrow: $('.galery-slider-arrows .prev-slide'),
        nextArrow: $('.galery-slider-arrows .next-slide'),
        infinite: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('.resourse-slider1').slick({
        prevArrow: $('.resourse-slider-arrows1.resourse-slider-arrows .prev-slide'),
        nextArrow: $('.resourse-slider-arrows1.resourse-slider-arrows .next-slide'),
        infinite: true,
        dots: true,
        slidesToShow: 1,
        adaptiveHeight: true,
    });
    const existSlider = [];
    $('.events-list .nav-item button').on('click', function(e) {
        
        const slideId = this.getAttribute('data-id');
        if (existSlider.includes(slideId) || slideId === '1') return;
        existSlider.push(slideId);
        $(`.resourse-slider${slideId}`).slick({
            prevArrow: $(`.resourse-slider-arrows${slideId}.resourse-slider-arrows .prev-slide`),
            nextArrow: $(`.resourse-slider-arrows${slideId}.resourse-slider-arrows .next-slide`),
            infinite: true,
            dots: true,
            slidesToShow: 1,
            adaptiveHeight: true,
        });
        fixedSliderArrow(`.resourse-slider${slideId} .slick-dots li`, `.resourse-slider-arrows${slideId} .next-slide`, `.resourse-slider-arrows${slideId} .prev-slide`);
    });
    

    $('.resourse-slider1 .resourse-subscribe__slider').slick({
        prevArrow: $('.resourse-subscribe-slider-arrows .prev-slide'),
        nextArrow: $('.resourse-subscribe-slider-arrows .next-slide'),
        infinite: true,
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots slick-dots_white',
        slidesToShow: 1,
        
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.resourse-subscribe-slider-arrows .prev-slide').on('click', () => {
        $('.resourse-subscribe__slider').slick('slickPrev');
    })
    $('.resourse-subscribe-slider-arrows .next-slide').on('click', () => {
        $('.resourse-subscribe__slider').slick('slickNext');
        // subSlider.slickNext();
    })
    

    const fixedSliderArrow = (dotsSelector, btnNextSelector, btnPrevSelector) => {
        const $dotsParent = document.querySelectorAll(dotsSelector);
        if (!$dotsParent.length) return;
        const initPadding = 140;
        const baseCountSliders = 4;
        let result = initPadding;
        if ($dotsParent.length > baseCountSliders) {
            const diffPadding = ($dotsParent.length - baseCountSliders) * 10;
            result += diffPadding;
        }
        const btnPrev = document.querySelector(btnPrevSelector);
        const btnNext = document.querySelector(btnNextSelector);
        btnPrev.style.transform = `translateX(calc(-50% - ${result}px))`;
        btnNext.style.transform = `translateX(calc(-50% + ${result}px))`;
    }

    window.fixedSliderArrow = fixedSliderArrow;

    fixedSliderArrow('.galery .galery-slider .slick-dots li', '.galery-slider-arrows .next-slide', '.galery-slider-arrows .prev-slide');
    fixedSliderArrow('.resourse-slider .slick-dots li', '.resourse-slider-arrows .next-slide', '.resourse-slider-arrows .prev-slide');
    $('.events-wrap .nav-item').on('click', () => {
        $('.events-anons-slider').slick({
            prevArrow: $('.events-anons-slider-arrows .prev-slide'),
            nextArrow: $('.events-anons-slider-arrows .next-slide'),
            infinite: false,
            slidesToShow: 2,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 1,
                    }
                },
            ]
        });
    });

    // Scroll header
    const fixmeTop = $('.header-submain').offset().top;       // get initial position of the element
    $(window).scroll(function() {                  // assign scroll event listener
        const currentScroll = $(window).scrollTop(); // get current position
        if (currentScroll >= fixmeTop) {           // apply position: fixed if you
            $('.header-submain').addClass('header-submain__fixed');
        } else {                                   // apply position: static
            $('.header-submain').removeClass('header-submain__fixed');
        }
    });

    $('.header-nav__item a').on('click', function() {
        if ($('.header-nav__item a[aria-expanded="true"]').length) {
            $('body').addClass('showCollapseMenu');
        } else $('body').removeClass('showCollapseMenu');
    })

    var myOffcanvas = document.getElementById('offcanvasExample')
        myOffcanvas.addEventListener('hide.bs.offcanvas', function () {
        $('.offcanvas.offcanvas-start.new-leftsidebar.show').removeClass('show');
    })

    $(function() {
        $('#main-menu').smartmenus({
            collapsibleBehavior:'accordion'
        });
    });

    $('.offcanvas').click(function(e) {
        const bsOffcanvas = bootstrap.Offcanvas.getInstance('#offcanvasExample');
        e.target.classList.contains('offcanvas') ? bsOffcanvas.hide() : null;
    })
    $('.close-offcanvas').click(function(e) {
        const bsOffcanvas = bootstrap.Offcanvas.getInstance('#offcanvasExample');
        bsOffcanvas.hide();
    })
});