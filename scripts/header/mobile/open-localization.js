document.addEventListener("componentsLoaded", function () {
  const button = document.getElementById("mobile-currency-button");
  const modal = document.getElementById("currency-modal-mobile");
  const panel = document.getElementById("currency-modal-panel");
  const closeButton = document.getElementById("close-currency-modal");
  const svg = document.querySelector("#mobile-currency-button .svg-trigger");
  const searchInput = document.getElementById("currencySearch");
  const countryLinks = document.querySelectorAll(
    "#currency-modal-mobile a[data-value]",
  );

  let currentCurrency = "US";

  closeButton.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    closeModal();
  });

  // Initialize - show checkmark for current currency
  updateCheckmarks(currentCurrency);

  // Add hover listeners to show/hide currency displays
  countryLinks.forEach((link) => {
    const parent = link.parentElement;
    parent.addEventListener("mouseenter", function () {
      const currencyDisplay = link.querySelector(".currency-display");
      if (currencyDisplay) {
        currencyDisplay.classList.remove("opacity-0");
        currencyDisplay.classList.add("opacity-100");
      }
    });
    parent.addEventListener("mouseleave", function () {
      const currencyDisplay = link.querySelector(".currency-display");
      if (currencyDisplay) {
        currencyDisplay.classList.add("opacity-0");
        currencyDisplay.classList.remove("opacity-100");
      }
    });
  });

  // Open modal with slide-up animation
  function openModal() {
    modal.classList.remove("hidden");
    // Trigger reflow to ensure transition works
    requestAnimationFrame(() => {
      panel.classList.remove("translate-y-full");
      panel.classList.add("translate-y-0");
    });
    svg.style.transform = "rotate(180deg)";
  }

  // Close modal with slide-down animation
  function closeModal() {
    panel.classList.remove("translate-y-0");
    panel.classList.add("translate-y-full");
    svg.style.transform = "rotate(0deg)";
    // Wait for animation to finish before hiding
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 300);
  }

  // Open modal when button is clicked
  if (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      openModal();
    });
  }

  // Close modal when clicking the backdrop (outside panel)
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Stop clicks inside panel from closing
    if (panel) {
      panel.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    }

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
      }
    });
  }

  // Search functionality
  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      const searchTerm = e.target.value.toLowerCase();
      countryLinks.forEach((link) => {
        const country = link.textContent.toLowerCase();
        if (country.includes(searchTerm)) {
          link.parentElement.style.display = "block";
        } else {
          link.parentElement.style.display = "none";
        }
      });
    });
  }

  // Close modal when a country is selected and update currency
  countryLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      currentCurrency = this.dataset.value;

      // Get the currency code from the link
      const currencySpan = this.querySelector(".currency-display");
      if (currencySpan) {
        const currencyDisplay = currencySpan.textContent.trim();
        const currencyCode = currencyDisplay.split(" ")[0];

        // Update button text
        const buttonSpan = button.querySelector("span");
        if (buttonSpan) {
          buttonSpan.textContent = currencyCode;
        }
      }

      // Update checkmarks
      updateCheckmarks(currentCurrency);

      // Close the modal with animation
      closeModal();

      // Clear search
      if (searchInput) {
        searchInput.value = "";
        countryLinks.forEach((link) => {
          link.parentElement.style.display = "block";
        });
      }
    });
  });

  function updateCheckmarks(currencyCode) {
    countryLinks.forEach((link) => {
      const checkmark = link.querySelector(".checkmark");
      if (link.dataset.value === currencyCode) {
        checkmark.textContent = "✓";
      } else {
        checkmark.textContent = "";
      }
    });
  }
});
