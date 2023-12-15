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

    $('.events-anons-slider').slick({
        prevArrow: $('.events-anons-slider-arrows .prev-slide'),
        nextArrow: $('.events-anons-slider-arrows .next-slide'),
        infinite: false,
        slidesToShow: 2,
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
});