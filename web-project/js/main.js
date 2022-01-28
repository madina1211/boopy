const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
    speed: 400,
    spaceBetween: 70,
    centeredSlides: true,
    slideToClickedSlide: true,
    toggle: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 70
        }
    }
});

const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelector('.main-display__button');


buttonModal.addEventListener('click', () => {
    modalWindow.classList.add('active')
});

modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');
    if (!isModal) {
        modalWindow.classList.remove('active');
    }

});