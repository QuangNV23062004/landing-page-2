document.addEventListener("faqComponentsLoaded", () => {
  window.toggleFAQ = function toggleFAQ(id) {
    const content = document.getElementById(`content-${id}`);
    const icon = document.getElementById(`icon-${id}`);

    const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

    if (isOpen) {
      // Close
      content.style.maxHeight = "0px";
      icon.textContent = "+";
      icon.style.transform = "rotate(0deg)";
    } else {
      // Close all other FAQs first
      for (let i = 1; i <= 6; i++) {
        if (i !== id) {
          const otherContent = document.getElementById(`content-${i}`);
          const otherIcon = document.getElementById(`icon-${i}`);
          otherContent.style.maxHeight = "0px";
          otherIcon.textContent = "+";
          otherIcon.style.transform = "rotate(0deg)";
        }
      }

      // Open
      content.style.maxHeight = content.scrollHeight + "px";
      icon.textContent = "−";
      icon.style.transform = "rotate(180deg)";
    }
  };
});
