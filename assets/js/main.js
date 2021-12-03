const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 100,
    navigation: {
        nextEl: '.swiper-button-left',
        prevEl: '.swiper-button-right',
    },
    breakpoints: {

        968: {
            slidesPerView: 3,
        }
    }

});