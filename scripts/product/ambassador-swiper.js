document.addEventListener("productComponentsLoaded", () => {
  const swiperEl = document.querySelector(".product-ambassador-swiper");
  if (!swiperEl) {
    return;
  }

  new Swiper(".product-ambassador-swiper", {
    slidesPerView: "auto",
    spaceBetween: 12,
    centeredSlides: false,
    loop: true,
  });
});
