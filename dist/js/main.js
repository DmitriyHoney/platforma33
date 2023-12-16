$(document).ready(function(){
    Fancybox.bind("[data-fancybox]", {});
    const concatTextByWordsAndReplaceIt = (selector, countWords = 120) => {
        const $el = document.querySelector(selector);
        if (!$el) return;
        const lines = $el.innerHTML.split(' ');
        $el.innerHTML = lines.splice(0, countWords).join(' ').trim() + '...';
    };

    concatTextByWordsAndReplaceIt('.offer-text__range-words', 120);
    concatTextByWordsAndReplaceIt('.offer-text__range-words2', 140);
    concatTextByWordsAndReplaceIt('.about-text', 260);
    // Sliders
    $('.offer-slider').slick({
        prevArrow: $('.offer-slider-arrows .prev-slide'),
        nextArrow: $('.offer-slider-arrows .next-slide'),
        infinite: false,
    });

    $('.events-slider').slick({
        prevArrow: $('.events-slider-arrows .prev-slide'),
        nextArrow: $('.events-slider-arrows .next-slide'),
        infinite: false,
        slidesToShow: 4,
    });

    

    $('.about-slider').slick({
        prevArrow: $('.about-slider-arrows .prev-slide'),
        nextArrow: $('.about-slider-arrows .next-slide'),
        infinite: true,
        slidesToShow: 3,
        variableWidth: true
    });
    $('.galery-slider').slick({
        prevArrow: $('.galery-slider-arrows .prev-slide'),
        nextArrow: $('.galery-slider-arrows .next-slide'),
        infinite: true,
        dots: true,
        slidesToShow: 4,
    });
    $('.resourse-slider').slick({
        prevArrow: $('.resourse-slider-arrows .prev-slide'),
        nextArrow: $('.resourse-slider-arrows .next-slide'),
        infinite: true,
        dots: true,
        slidesToShow: 1,
    });

    $('.resourse-subscribe__slider').slick({
        // prevArrow: $('.resourse-subscribe-slider-arrows .prev-slide'),
        // nextArrow: $('.resourse-subscribe-slider-arrows .next-slide'),
        infinite: true,
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots slick-dots_white',
        slidesToShow: 1,
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
        console.log($dotsParent.length);
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

    fixedSliderArrow('.galery .galery-slider .slick-dots li', '.galery-slider-arrows .next-slide', '.galery-slider-arrows .prev-slide');
    fixedSliderArrow('.resourse .slick-dots li', '.resourse-slider-arrows .next-slide', '.resourse-slider-arrows .prev-slide');
    $('.events-wrap .nav-item').on('click', () => {
        $('.events-anons-slider').slick({
            prevArrow: $('.events-anons-slider-arrows .prev-slide'),
            nextArrow: $('.events-anons-slider-arrows .next-slide'),
            infinite: false,
            slidesToShow: 2,
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

    $('.header-nav__item a').on('click', () => {
        if ($('.header-nav__item a[aria-expanded="true"]').length) $('body').addClass('showCollapseMenu');
        else $('body').removeClass('showCollapseMenu');
        
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
});