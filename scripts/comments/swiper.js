document.addEventListener("commentsComponentsLoaded", () => {
  const swiper = new Swiper(".testimonial-swiper", {
    // Swiper parameters
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    grabCursor: true,

    // Free mode for continuous smooth scrolling
    freeMode: {
      enabled: true,
      momentum: true,
      momentumRatio: 0.5,
      momentumVelocityRatio: 0.5,
    },

    // Slow continuous autoplay
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 3000, // Slow, smooth transition speed

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Responsive breakpoints
    breakpoints: {
      // When window width is >= 640px
      640: {
        spaceBetween: 20,
      },
      // When window width is >= 1024px
      1024: {
        spaceBetween: 24,
      },
    },

    // Accessibility
    a11y: {
      enabled: true,
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
    },

    // Keyboard control
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
});
