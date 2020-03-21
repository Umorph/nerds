var firstButton = document.querySelector('.first-slide-btn');
var secondButton = document.querySelector('.second-slide-btn');
var thirdButton = document.querySelector('.third-slide-btn');
var firstSlide = document.querySelector('.first-item');
var secondSlide = document.querySelector('.second-item');
var thirdSlide = document.querySelector('.third-item');

firstButton.addEventListener('click', function () {
    if (!firstSlide.classList.contains('slider-item-current')) {
        firstSlide.classList.add('slider-item-current');
        secondSlide.classList.remove('slider-item-current');
        thirdSlide.classList.remove('slider-item-current');

        firstButton.classList.add('active');
        secondButton.classList.remove('active');
        thirdButton.classList.remove('active');
    }
    
});

secondButton.addEventListener('click', function () {
    if (!secondSlide.classList.contains('slider-item-current')) {
        firstSlide.classList.remove('slider-item-current');
        secondSlide.classList.add('slider-item-current');
        thirdSlide.classList.remove('slider-item-current');

        firstButton.classList.remove('active');
        secondButton.classList.add('active');
        thirdButton.classList.remove('active');
    }
});

thirdButton.addEventListener('click', function () {
    if (!thirdSlide.classList.contains('slider-item-current')) {
        firstSlide.classList.remove('slider-item-current');
        secondSlide.classList.remove('slider-item-current');
        thirdSlide.classList.add('slider-item-current');

        firstButton.classList.remove('active');
        secondButton.classList.remove('active');
        thirdButton.classList.add('active');
    }
});