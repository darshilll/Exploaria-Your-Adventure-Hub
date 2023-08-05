'use strict';

const navigationContainerEl = document.querySelector('.navigation_container');

//sticky bar

// const sectionHeroEl = document.querySelector('.hero-section');
const sectionHeroEl = document.querySelector('#header');


const observer = new IntersectionObserver((entries) => {
    const ent = entries[0];

    // console.log('hello world');
    console.log(ent)
    ent.isIntersecting === false 
    ? navigationContainerEl.classList.add('sticky' ,'navbar_blur') 
    : navigationContainerEl.classList.remove('sticky' , 'navbar_blur');
}, {
    // root: null,
    // rootMargin: "-80px",
    // rootMargin:'0px',
    threshold: 0.1,
})

observer.observe(sectionHeroEl);