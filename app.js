
 const left = document.querySelector('.arrow-left');
const right = document.querySelector('.arrow');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');  
let slideNumber = 1;
const length = images.length;
const nextSlide = () => {
    if (slideNumber < length) {
        slider.style.transform = `translateX(-${slideNumber * 650}px)`; 
        slideNumber++;
    } else {
        getfirstSlide();
    }
};
const previousSlide = () => {
    if (slideNumber > 1) {
        slider.style.transform = `translateX(-${(slideNumber - 2) * 650}px)`; 
        slideNumber--;
    } else {
        getlastSlide();
    }
};
const getfirstSlide = () => {
    slider.style.transform = `translateX(0px)`; 
    slideNumber = 1;
};
const getlastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 650}px)`; 
    slideNumber = length;
};
right.addEventListener('click', nextSlide);
left.addEventListener('click', previousSlide); 
