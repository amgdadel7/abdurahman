// const cardHolder = document
//     .querySelector('.section-two');
// cardHolder
//     .addEventListener('click', e => {

//         const current = e.target;

//         const isReadMoreBtn = current.className.includes('read-more-btn');

//         if (!isReadMoreBtn)
//             return;

//         const currentText = e.target.parentNode.querySelector('.card__read-more');

//         currentText.classList.toggle('card__read-more--open');

//         current.textContent = current.textContent.includes('المزيد') ? 'اقل' : 'المزيد';

//     });

document.addEventListener("DOMContentLoaded", function(event) { 
    document.querySelector('.read-more-btn').addEventListener(
        'click', e => {
    
            const current = e.target;
            document.querySelector('.card__read-more').classList.toggle('card__read-more--open');     
            current.textContent = current.textContent.includes('المزيد') ? 'اقل' : 'المزيد';    
        });
    
});

document.addEventListener("DOMContentLoaded", function(event) { 
    document.querySelector('.read-more-btn-one').addEventListener(
        'click', e => {
    
            const current = e.target;
            document.querySelector('.card__read-more-one').classList.toggle('card__read-more-one--open');     
            current.textContent = current.textContent.includes('المزيد') ? 'اقل' : 'المزيد';    
        });
    
});

