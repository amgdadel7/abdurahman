var swiper = new Swiper(".mySwiper", {
    slidesPerGroup: 1,
    loop: false,
    fade: true,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
    },
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 60,
        },
        868: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1080: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
        1250: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});
// document.getElementById("restart").addEventListener("click", restart);

function restart() {
  swiper.slideTo(0);
}