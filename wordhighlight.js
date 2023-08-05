'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const wordHighlightEls = document.querySelectorAll('.green_bg');
    // console.log(wordHighlightEls)

    const callback = (entries, observer) => {
        const [entry] = entries;

        // if(!entry.isIntersecting) return;

        if (entry.isIntersecting) {
            entry.target.classList.add('fade_gradient');
        } else {
            entry.target.classList.remove('fade_gradient');
        }
    };

    const options = {
        root: null,
        threshold: 1,
        rootMargin: '-50px 0px -150px 0px',
    };

    const observer = new IntersectionObserver(callback, options);
    wordHighlightEls.forEach((word, index) => index !== 0 && observer.observe(word));
});