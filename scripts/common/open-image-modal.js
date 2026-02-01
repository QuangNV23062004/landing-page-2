document.addEventListener("productComponentsLoaded", () => {
  window.openImageModal = function openImageModal(imgSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("image-modal-img");
    const closeBtn = document.getElementById("closeImageModal");

    if (!modal || !modalImg) {
      return;
    }

    modalImg.src = imgSrc;
    modal.classList.remove("hidden");
    modal.classList.add("flex");

    const closeModal = () => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      modalImg.src = "";
    };

    if (closeBtn) {
      closeBtn.onclick = closeModal;
    }

    modal.onclick = (event) => {
      if (event.target === modal) {
        closeModal();
      }
    };
  };
});
