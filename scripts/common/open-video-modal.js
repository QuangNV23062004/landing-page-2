(function () {
  window.openVideoModal = function openVideoModal(videoSrc) {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("video-modal-video");
    const closeBtn = document.getElementById("closeVideoModal");

    if (!modal || !video) {
      console.warn("Video modal elements not found");
      return;
    }

    if (videoSrc) {
      video.src = videoSrc;
    }

    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";

    const closeModal = () => {
      video.pause();
      video.removeAttribute("src");
      video.load();
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.body.style.overflow = "";
    };

    closeBtn.onclick = closeModal;
    modal.onclick = (e) => {
      if (e.target === modal) {
        closeModal();
      }
    };

    video.play().catch(() => {});
  };
})();
