const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

const IconVisibility = () => {
    let scrollRightValue = Math.ceil(-tabMenu.scrollLeft);
    let scrollablewidth = tabMenu.scrollWidth - tabMenu.clientWidth;
    // console.log(scrollRightValue);
    // console.log(scrollablewidth);
    // let scrollLeftValue = tabMenu.scrollLeft;
    // btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
    btnRight.style.display = scrollRightValue > 0 ? "block" : "none";
    btnLeft.style.display = scrollablewidth > scrollRightValue ? "block" : "none";
}

btnRight.addEventListener("click", () => {
    tabMenu.scrollLeft += 120;
    setTimeout(() => IconVisibility(), 100);
});
btnLeft.addEventListener("click", () => {
    tabMenu.scrollLeft -= 120;
    // IconVisibility();
    setTimeout(() => IconVisibility(), 100);
});

window.onload = function() {
    btnLeft.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    btnRight.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
}
window.onresize = function() {
    btnLeft.style.display = tabMenu.scrollWidth > tabMenu.clientWidth || tabMenu.scrollWidth >= window.innerWidth ? "block" : "none";
    btnRight.style.display = tabMenu.scrollWidth >= window.innerWidth ? "" : "none";

    let scrollRightValue = Math.round(-tabMenu.scrollLeft);

    btnRight.style.display = scrollRightValue > 0 ? "block" : "none";
}

let activeDrag = false;

tabMenu.addEventListener("mousemove", (drag) => {
    if (!activeDrag) return;
    tabMenu.scrollLeft -= drag.movementX;
    IconVisibility();
    tabMenu.classList.add("dragging");
});

document.addEventListener("mouseup", () => {
    activeDrag = false;
    tabMenu.classList.remove("dragging");

});

tabMenu.addEventListener("mousedown", () => {
    activeDrag = true;
});

const tabs = document.querySelectorAll(".tab");
const tabBtns = document.querySelectorAll(".tab-btn");

const tab_Nav = function(tabBtnClick) {
    tabBtns.forEach((tabBtn) => {
        tabBtn.classList.remove("active");
    });
    tabs.forEach((tab) => {
        tab.classList.remove("active");
    });
    tabBtns[tabBtnClick].classList.add("active");
    tabs[tabBtnClick].classList.add("active");
    restart(tabBtnClick)
}
tabBtns.forEach((tabBtn, i) => {
    tabBtn.addEventListener("click", () => {
        tab_Nav(i);
       
    });
});



////////////////////////////////////////////////
// var swiper = new Swiper(".slide-content", {
//     slidesPerView: 3,
//     spaceBetween: 25,
//     loop: true,
//     centerSlide: 'true',
//     fade: 'true',
//     grabCursor: 'true',
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         dynamicBullets: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },

//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         520: {
//             slidesPerView: 2,
//         },
//         950: {
//             slidesPerView: 3,
//         },
//     },
// });

//////////////////////////////////////////
// $(document).ready(function() {
//     $('.card-slider').slick({
//         dots: false,
//         arrows: true,
//         slidesToShow: 4,
//         infinite: false,
//         responsive: [{
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2
//                 }
//             },
//             {
//                 breakpoint: 800,
//                 settings: {
//                     slidesToShow: 2
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1
//                 }
//             }
//         ]
//     });
// });