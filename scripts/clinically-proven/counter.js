document.addEventListener("clinicallyProvenComponentsLoaded", () => {
  // Counter animation with varying speeds
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target"));
    const speed = parseFloat(counter.getAttribute("data-speed"));
    const increment = target / (100 * speed);

    let current = 0;

    const updateCounter = () => {
      current += increment;

      if (current < target) {
        counter.textContent = Math.floor(current);
        setTimeout(updateCounter, 10 * speed);
      } else {
        counter.textContent = target;
      }
    };

    // Start animation when element is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateCounter();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(counter);
  });
});
