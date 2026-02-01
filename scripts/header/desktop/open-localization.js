document.addEventListener("componentsLoaded", function () {
  const button = document.getElementById("currencySvgButton");
  const modal = document.getElementById("currencyModal");
  const svg = document.querySelector("#currencySvgButton .svg-trigger");
  const searchInput = document.getElementById("currencySearch");
  const countryLinks = document.querySelectorAll(
    "#currencyModal a[data-value]",
  );

  let currentCurrency = "US";

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

  // Open modal when button is clicked
  if (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      modal.classList.remove("hidden");
      svg.style.transform = "rotate(180deg)";
    });
  }

  // Close modal when clicking outside, and support Escape key
  if (modal) {
    // stop clicks inside the panel from propagating to document
    const panel = modal.querySelector(".bg-white") || modal.firstElementChild;
    if (panel) {
      panel.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    }

    // Click outside closes the modal
    document.addEventListener("click", function (e) {
      if (
        !modal.classList.contains("hidden") &&
        !modal.contains(e.target) &&
        button &&
        !button.contains(e.target)
      ) {
        modal.classList.add("hidden");
        svg.style.transform = "rotate(0deg)";
      }
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        modal.classList.add("hidden");
        svg.style.transform = "rotate(0deg)";
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

      // Close the modal
      modal.classList.add("hidden");
      svg.style.transform = "rotate(0deg)";

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
