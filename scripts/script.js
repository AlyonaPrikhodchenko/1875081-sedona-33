let searchButton = document.querySelector('.search-link');
let modalWindow = document.querySelector('.fixed-overlay');
let modalCloseButton = document.querySelector('.modal-close-button');

searchButton.onclick = function () {
  modalWindow.classList.remove('modal-container-close');
}

modalCloseButton.onclick = function () {
  modalWindow.classList.add('modal-container-close');
}
