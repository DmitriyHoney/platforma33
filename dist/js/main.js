$(document).ready(function(){
    const concatTextByWordsAndReplaceIt = (selector, countWords = 120) => {
        const $el = document.querySelector(selector);
        if (!$el) return;
        const lines = $el.innerHTML.split(' ');
        $el.innerHTML = lines.splice(0, countWords).join(' ').trim() + '...';
    };

    concatTextByWordsAndReplaceIt('.offer-text__range-words', 120);
    concatTextByWordsAndReplaceIt('.offer-text__range-words2', 140);

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
});