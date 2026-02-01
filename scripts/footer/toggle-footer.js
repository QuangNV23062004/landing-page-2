document.addEventListener("footerComponentsLoaded", () => {
  window.footerToggleAccordion = function footerToggleAccordion(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector(".accordion-icon");
    const isActive = content.classList.contains("active");

    // Close all accordions
    document.querySelectorAll(".accordion-content").forEach((item) => {
      item.classList.remove("active");
      item.style.maxHeight = "0";
      item.style.paddingTop = "0";
    });

    document.querySelectorAll(".accordion-icon").forEach((item) => {
      item.style.transform = "rotate(0deg)";
    });

    // Toggle current accordion
    if (!isActive) {
      content.classList.add("active");
      content.style.maxHeight = "800px";
      content.style.paddingTop = "1rem";
      icon.style.transform = "rotate(45deg)";
    }
  };
});
