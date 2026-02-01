document.addEventListener("productComponentsLoaded", () => {
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 6,
    slidesPerGroup: 3,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: {
      enabled: true,
    },
  });
});
