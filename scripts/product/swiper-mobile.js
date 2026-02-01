document.addEventListener("productComponentsLoaded", () => {
  // Initialize mobile swiper (.mySwiper2)
  if (typeof Swiper === "undefined") {
    console.warn("[swiper-mobile] Swiper library not found.");
    return;
  }

  var swiper = new Swiper(".mySwiper2", {
    pagination: {
      el: ".mySwiper2 .swiper-pagination",
      clickable: true,
    },
  });
});
