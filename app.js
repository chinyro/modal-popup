const modal = document.querySelector('#modal-container');
const modalContent = document.querySelector('#modal-content');
const primaryButton = document.querySelector('#btn');
const closeButton = document.querySelector('#close-btn');

// Show modal
function showModal(e) {
  e.preventDefault();
  modal.style.display = 'block';
}
// Close modal
function closeModal() {
  modalContent.classList.add('slide-up');
  setTimeout(() => {
    modal.style.display = 'none';
    modalContent.classList.remove('slide-up');
  }, 500);
}

primaryButton.addEventListener('click', showModal);
closeButton.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);
