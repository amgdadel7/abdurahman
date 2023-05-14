const btn = document
    .querySelector('.read-more-btn');

const text = document
    .querySelector('.card__read-more');
const pargraph = document
    .querySelector('.read');

const cardHoldertwo = document
    .querySelector('.section-two-patern');

cardHoldertwo
    .addEventListener('click', e => {

        const current = e.target;

        const isReadMoreBtn = current.className.includes('read-more-btn');

        if (!isReadMoreBtn)
            return;

        const currentText = e.target.parentNode.querySelector('.card__read-more');

        currentText.classList.toggle('card__read-more--open');
        current.textContent = current.textContent.includes('المزيد') ? 'اقل' : 'المزيد';

        
        if( currentText.className.includes('card__read-more--open')){
pargraph.classList.add('active');
        }
        else{
            pargraph.classList.remove('active');
            pargraph.scrollTop =0;
        }
        

    });

const cardHolderthree = document
    .querySelector('.section-three');
cardHolderthree
    .addEventListener('click', e => {

        const current = e.target;

        const isReadMoreBtn = current.className.includes('read-more-btn');

        if (!isReadMoreBtn)
            return;

        const currentText = e.target.parentNode.querySelector('.card__read-more');

        currentText.classList.toggle('card__read-more--open');

        current.textContent = current.textContent.includes('المزيد') ? 'اقل' : 'المزيد';

    });

const cardHolderfour = document
    .querySelector('.section-four-patern');
cardHolderfour
    .addEventListener('click', e => {

        const current = e.target;

        const isReadMoreBtn = current.className.includes('read-more-btn');

        if (!isReadMoreBtn)
            return;

        const currentText = e.target.parentNode.querySelector('.card__read-more');

        currentText.classList.toggle('card__read-more--open');

        current.textContent = current.textContent.includes('المزيد') ? 'اقل' : 'المزيد';

    });

const cardHolderfive = document
    .querySelector('.section-five');
cardHolderfive
    .addEventListener('click', e => {

        const current = e.target;

        const isReadMoreBtn = current.className.includes('read-more-btn');

        if (!isReadMoreBtn)
            return;

        const currentText = e.target.parentNode.querySelector('.card__read-more');

        currentText.classList.toggle('card__read-more--open');

        current.textContent = current.textContent.includes('المزيد') ? 'اقل' : 'المزيد';

    });

const cardHoldersix = document
    .querySelector('.section-six-patern');
cardHoldersix
    .addEventListener('click', e => {

        const current = e.target;

        const isReadMoreBtn = current.className.includes('read-more-btn');

        if (!isReadMoreBtn)
            return;

        const currentText = e.target.parentNode.querySelector('.card__read-more');

        currentText.classList.toggle('card__read-more--open');

        current.textContent = current.textContent.includes('المزيد') ? 'اقل' : 'المزيد';

    });

    const container = document.querySelector('#items-container');
                
let startY;
let startX;
let scrollLeft;
let scrollTop;
let isDown;

container.addEventListener('mousedown',e => mouseIsDown(e));  
container.addEventListener('mouseup',e => mouseUp(e))
container.addEventListener('mouseleave',e=>mouseLeave(e));
container.addEventListener('mousemove',e=>mouseMove(e));

function mouseIsDown(e){
  isDown = true;
  startY = e.pageY - container.offsetTop;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
  scrollTop = container.scrollTop; 
}
function mouseUp(e){
  isDown = false;
}
function mouseLeave(e){
  isDown = false;
}
function mouseMove(e){
  if(isDown){
    e.preventDefault();
    //Move vertcally
    const y = e.pageY - container.offsetTop;
    const walkY = y - startY;
    container.scrollTop = scrollTop - walkY;

    //Move Horizontally
    const x = e.pageX - container.offsetLeft;
    const walkX = x - startX;
    container.scrollLeft = scrollLeft - walkX;

  }
}