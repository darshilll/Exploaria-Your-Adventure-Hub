'use strict';



(function () {
    const welcomeLeftEl = document.querySelector('.wlc_left_container');
    const welcomeRightCardsEL = document.querySelectorAll('.welcome_right_card');
    const callback = function (entries) {
        const [entry] = entries
        if (!entry.isIntersecting) return;
        // console.log('hello world')
        welcomeLeftEl.textContent = entry.target.dataset.title;
        welcomeLeftEl.style.backgroundImage = `url(${entry.target.dataset.bg})`;
    }
    const options = {
        root: null,
        threshold: 0.9,
        rootMargin: ''
    }
    const observer = new IntersectionObserver(callback, options)
    welcomeRightCardsEL.forEach(card => {
        observer.observe(card)
    })
})()