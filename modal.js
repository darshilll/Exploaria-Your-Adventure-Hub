const modalOverlayEl = document.querySelector('.modal_overlay');
const closeModalBtnEl = document.querySelector('.close_modal_btn');
const modalContainerEl = document.querySelector('.modal_container');
const scheduleNowEl = document.querySelector('.btn-1');
const bookNowEl = document.querySelector('.book_now_btn');

scheduleNowEl.addEventListener('click' , function(){
    modalOverlayEl.classList.remove('hidden')
    modalContainerEl.classList.remove('hidden')
})

closeModalBtnEl.addEventListener('click' , function(){
    modalOverlayEl.classList.add('hidden')
    modalContainerEl.classList.add('hidden')
})

modalOverlayEl.addEventListener('click' , function(){
    modalOverlayEl.classList.add('hidden')
    modalContainerEl.classList.add('hidden')  
})