'use strict';
const hamburgerEl = document.querySelector('.hamburger');
const ModalOverlayEl = document.querySelector('.modal_overlay');
const sidebarEL = document.querySelector('.side_bar');
const sideBarNavEl = document.querySelector('.side_bar_nav')

hamburgerEl.addEventListener('click' , function(){
    sidebarEL.classList.remove('hidden');
    ModalOverlayEl.classList.remove('hidden')
})

ModalOverlayEl.addEventListener('click' , function(){
    ModalOverlayEl.classList.add('hidden')
    sidebarEL.classList.add('hidden')
})

sideBarNavEl.addEventListener('click' ,function(){
    ModalOverlayEl.classList.add('hidden')
    sidebarEL.classList.add('hidden')
})

