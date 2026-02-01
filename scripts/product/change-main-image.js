document.addEventListener("productComponentsLoaded", () => {
  window.changeImage = function changeImage(imgSrc) {
    const mainImage = document.querySelector("#product-desktop-main-image img");
    if (mainImage) {
      mainImage.src = imgSrc;
    }
  };
});
