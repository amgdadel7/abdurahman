var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,

    // mousewheel: {
    //     invert: true,
    // },

    // autoHeight: true,
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,

    }

});

var navBar = document.getElementById('navBar');
window.onscroll = function() {
    if (window.scrollY > 22) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
};
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: false,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        1026: {
            slidesPerView: 3,
        },
    },
});

var slideAmount = $(".custom-scrollbar-js").height()
$(function() {
    $("#content-1").mCustomScrollbar({
        axis: "y",
        snap: '.custom-scrollbar-js',
        snapAmount: '.custom-scrollbar-js',

        snapAmount: slideAmount,
        // contentTouchScroll: 25,
        theme: "rounded-dark"
    });
});

// background-image: url('../images/Screenshot 2023-02-13 043048.png');
// background-size: 300px 100px;
// background-repeat: no-repeat;
// background-position: center;
var wheel = Draggable.create("#wheel", {
    type: "rotation",
    throwProps: true,
    snap: function(endValue) {
        return Math.round(endValue / 90) * 90;
    },
    onDrag: function() {},
    onThrowComplete: function() {
        dragActive()
    }
});

TweenMax.set('#wheel li:not(.active) .details > *', {
    opacity: 0,
    y: -10
})

// Calculate which product is active
function dragActive() {
    var rot = wheel[0].rotation / 360
    var decimal = rot % 1
    var sliderLength = $('#wheel li').length
    var tempIndex = Math.round(sliderLength * decimal)
    var index

    if (rot < 0) {
        index = Math.abs(tempIndex)
    } else {
        index = sliderLength - tempIndex
    }

    if (decimal === 0) {
        index = 0
    }

    TweenMax.staggerTo('#wheel li.active .details > *', 0.6, {
        opacity: 0,
        y: -10
    }, 0.1)

    $('#wheel li.active').removeClass('active')
    $($('#wheel li')[index]).addClass('active')

    TweenMax.staggerTo('#wheel li.active .details > *', 0.6, {
        opacity: 1,
        y: 0
    }, 0.1)

}

// Tween rotation
function rotateDraggable(deg, callback) {
    var rot = wheel[0].rotation
    var tl = new TimelineMax()

    tl
        .to('#wheel', .5, {
            rotation: rot + deg,
            onComplete: function() {
                callback()
            }
        });

    wheel[0].rotation = rot + deg
}

// Handlers
function nextHandler() {
    var current = $('#wheel li.active')
    var item = current + 1
    if (item > $('#wheel li').length) {
        item = 1
    }
    rotateDraggable(360 / $('#wheel li').length, dragActive);
}

function prevHandler() {
    var current = $('#wheel li.active')
    var item = current - 1
    if (item > 1) {
        item = $('#wheel li').length
    }
    rotateDraggable(-360 / $('#wheel li').length, dragActive);
}

$('.next').on('click', nextHandler);
$('.prev').on('click', prevHandler);

var square = '<svg x="0px" y="0px" width="1200px" height="600px" viewBox="0 0 1200 600"><rect x="0.002" y="0.499" width="1200" height="600"/></svg>'
// document.querySelector('.c').onclick = () => {
//     classList.add('active');

// };
let mymedia = window.matchMedia('(max-width:600px)');

function firstclick(mymedia) {
    if (mymedia.matches) {
        window.open("../personal.html#money-transactions", "_self");

    } else {
        // function firstclick() {

        document.querySelector('.c').classList.add('active');
        // return scoundclick();
        // }
    }
}



function act1(event) {

    document.getElementById("mnuit1").parentElement.classList.remove('active')
    event.stopPropagation();
}

function continerfristscoundimage() {

    return scoundclick(mymedia);
}

function scoundclick(mymedia) {
    if (mymedia.matches) {
        window.open("../personal.html#recharge-balance", "_self");
        

    } else {
        // function () {

        document.querySelector('.scound').classList.add('active');
        // }
    }
}


function act2(event) {

    document.getElementById("mnuit2").parentElement.classList.remove('active')
    event.stopPropagation();
}

function thirdclick(mymedia) {
    if (mymedia.matches) {
       window.open("../personal.html#Cash-deposit", "_self");

    } else {
        // function () {

        document.querySelector('.third').classList.add('active');
        // }
    }
}


function act3(event) {

    document.getElementById("mnuit3").parentElement.classList.remove('active')
    event.stopPropagation();
}

function forthclick(mymedia) {
    if (mymedia.matches) {
        window.open("../personal.html#Payment-services", "_self");

    } else {
        // function () {

        document.querySelector('.forth').classList.add('active');
        // }
    }
}


function act4(event) {

    document.getElementById("mnuit4").parentElement.classList.remove('active')
    event.stopPropagation();
}

function fifthclick(mymedia) {
    if (mymedia.matches) {
        window.open("../personal.html#Payment-purchases", "_self");

    } else {
        // function () {

        document.querySelector('.fifth').classList.add('active');
        // }
    }
}


function act5(event) {

    document.getElementById("mnuit5").parentElement.classList.remove('active')
    event.stopPropagation();
}
// let previewBox = document.querySelector('.c');

// function remfirstclick() {
//     var remfrsele = document.querySelector('.c');
//     remfrsele[0].classList.remove('active');

//     // console.log(remfrsele);
//     // remfrsele.classList.remove;
// }

// let preveiwContainer = document.querySelector('.service-continer');
// let previewBox = document.querySelectorAll('.c');
// previewBox.forEach(close => {
//     close.querySelector('.fa-times').onclick = () => {
//         close.classList.remove('active');
//         // preveiwContainer.classList.remove('active')
//     };
// });

// const post = document.getElementsByClassName("post");
// const b = document.querySelectorAll(".box div");
// const p = post.length;
// let i = 0;

// setInterval(next, 4000);

// function next() {
//     if (i === 0) {
//         post[i + 1].style = "left:269px;z-index:1";
//         b[i + 1].style = "";

//         post[p - 1].style = "left:-269px;z-index:1";
//         b[p - 1].style = "";

//         post[i].style = "left:0;z-index:3";
//         b[i].style = "background-color:aquamarine";
//         i++;
//     } else if (i > 0 && i < p - 1) {
//         post[i - 1].style = "left:-269px;z-index:1";
//         b[i - 1].style = "";

//         post[i].style = "left:0;z-index:3";
//         b[i].style = "background-color:transparent";

//         post[i + 1].style = "left:269px;z-index:1";
//         b[i + 1].style = "";
//         i++;
//     } else if (i === p - 1) {
//         post[i - 1].style = "left:-269px;z-index:1";
//         b[i - 1].style = "";

//         post[i].style = "left:0;z-index:3";
//         b[i].style = "background-color:transparent";

//         i = 0;

//         post[i].style = "left:269px;z-index:1";
//         b[i].style = "";
//     }
// }