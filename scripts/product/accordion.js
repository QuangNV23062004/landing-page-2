document.addEventListener("productComponentsLoaded", () => {
  const accordionItems = document.querySelectorAll("[data-accordion]");

  if (!accordionItems || accordionItems.length === 0) return;

  function closeItem(item) {
    const answer = item.querySelector(".answer");
    const plus = item.querySelector(".plus-icon");
    item.classList.remove("open");
    item.setAttribute("aria-expanded", "false");
    if (answer) {
      answer.classList.remove("max-h-[1000px]", "opacity-100", "py-4");
      answer.classList.add("max-h-0", "opacity-0", "py-0");
    }
    if (plus) plus.textContent = "+";
  }

  function openItem(item) {
    const answer = item.querySelector(".answer");
    const plus = item.querySelector(".plus-icon");
    item.classList.add("open");
    item.setAttribute("aria-expanded", "true");
    if (answer) {
      answer.classList.remove("max-h-0", "opacity-0", "py-0");
      answer.classList.add("max-h-[1000px]", "opacity-100", "py-4");
    }
    if (plus) plus.textContent = "−";
  }

  accordionItems.forEach((item) => {
    const question = item.querySelector(".question");
    // initialize ARIA if missing
    if (!item.hasAttribute("aria-expanded")) {
      item.setAttribute(
        "aria-expanded",
        item.classList.contains("open") ? "true" : "false",
      );
    }

    // attach keyboard handlers
    if (question) {
      question.setAttribute("tabindex", "0");
      question.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          question.click();
        }
      });

      question.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");

        // Close all items first
        accordionItems.forEach((other) => closeItem(other));

        // Toggle clicked
        if (!isOpen) {
          openItem(item);
        }
      });
    }

    // ensure initial visual state matches 'open' class
    if (item.classList.contains("open")) {
      openItem(item);
    } else {
      closeItem(item);
    }
  });
});
