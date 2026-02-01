document.addEventListener(
  "physiciansNutritionExpertComponentsLoaded",
  function () {
    var swiper = new Swiper(".nutrients-expert-swiper", {
      slidesPerView: "auto",
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
    });
  },
);
