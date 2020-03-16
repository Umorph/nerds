var writeUsButton = document.querySelector('.map-description-btn');
var modalWindow = document.querySelector('.modal-write');
var modalCloseButton = document.querySelector('.modal-close');

writeUsButton.addEventListener('click', function () {
    modalWindow.classList.add('modal-show');
});

modalCloseButton.addEventListener('click', function() {
    modalWindow.classList.remove('modal-show');
});