const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');

const openModal = () => {
  modal.classList.remove('off');
  overlay.classList.remove('off');
};

const closeModal = function () {
  modal.classList.add('off');
  overlay.classList.add('off');
};

openBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);