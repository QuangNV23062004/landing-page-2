// Wait for the toggle section component to be loaded
document.addEventListener("toggleSection1ComponentsLoaded", function () {
  // Small delay to ensure DOM is fully updated
  setTimeout(() => {
    initToggleSection();
  }, 100);
});

function initToggleSection() {
  // Product Toggle
  const btnEssentials = document.getElementById("btn-essentials");
  const btnLongevity = document.getElementById("btn-longevity");
  const contentEssentials = document.getElementById("content-essentials");
  const contentLongevity = document.getElementById("content-longevity");

  if (!btnEssentials || !btnLongevity) {
    console.error("Toggle buttons not found");
    return;
  }

  if (!contentEssentials || !contentLongevity) {
    console.error("Content containers not found");
    return;
  }

  btnEssentials.addEventListener("click", () => {
    // Update button styles
    btnEssentials.style.background =
      "linear-gradient(135deg, #50000B 0%, #A40011 100%)";
    btnEssentials.style.color = "white";
    btnEssentials.style.boxShadow = "0 4px 16px rgba(80, 0, 11, 0.25)";
    btnLongevity.style.background = "transparent";
    btnLongevity.style.color = "#6B7280";
    btnLongevity.style.boxShadow = "none";

    // Toggle content visibility
    contentEssentials.classList.remove("hidden");
    contentLongevity.classList.add("hidden");
  });

  btnLongevity.addEventListener("click", () => {
    // Update button styles
    btnLongevity.style.background =
      "linear-gradient(135deg, #3A0000 0%, #E78D2D 100%)";
    btnLongevity.style.color = "white";
    btnLongevity.style.boxShadow = "0 4px 16px rgba(231, 141, 45, 0.3)";
    btnEssentials.style.background = "transparent";
    btnEssentials.style.color = "#6B7280";
    btnEssentials.style.boxShadow = "none";

    // Toggle content visibility
    contentLongevity.classList.remove("hidden");
    contentEssentials.classList.add("hidden");
  });

  // Initialize Essentials organ cards
  initOrganCards();

  // Initialize Longevity cellular cards
  initCellularCards();
}

function initOrganCards() {
  // Wait for elements to be available
  const organCards = document.querySelectorAll(
    "#content-essentials .organ-card",
  );
  const detailContents = document.querySelectorAll(
    "#detail-essentials-container .detail-content",
  );

  if (organCards.length === 0) {
    console.warn("No organ cards found");
    return;
  }

  if (detailContents.length === 0) {
    console.warn("No detail contents found");
    return;
  }

  console.log("Organ cards found:", organCards.length);
  console.log("Detail contents found:", detailContents.length);

  organCards.forEach((card) => {
    card.addEventListener("click", function () {
      const index = this.dataset.index;
      console.log("Organ card clicked with index:", index);

      // Update card states
      organCards.forEach((c) => {
        if (c.dataset.index === index) {
          c.classList.add("active");
          c.style.background =
            "linear-gradient(145deg, #A40011 0%, #50000B 60%)";
          c.style.boxShadow = "0 8px 32px rgba(164, 0, 17, 0.18)";
          const label = c.querySelector("span:last-child");
          if (label) label.style.color = "white";
          const svg = c.querySelector("svg");
          if (svg) svg.style.color = "white";
        } else {
          c.classList.remove("active");
          c.style.background = "rgba(255, 255, 255, 0.95)";
          c.style.boxShadow = "0 4px 20px rgba(164, 0, 17, 0.06)";
          const label = c.querySelector("span:last-child");
          if (label) label.style.color = "#50000B";
          const svg = c.querySelector("svg");
          if (svg) svg.style.color = "#50000B";
        }
      });

      // Update detail contents
      detailContents.forEach((detail) => {
        if (detail.dataset.index === index) {
          detail.classList.add("active");
          detail.classList.remove("hidden");
        } else {
          detail.classList.remove("active");
          detail.classList.add("hidden");
        }
      });
    });
  });
}

function initCellularCards() {
  const cellularCards = document.querySelectorAll(
    "#content-longevity .cellular-card",
  );
  const cellularDetails = document.querySelectorAll(
    "#detail-longevity-container .cellular-detail",
  );

  if (cellularCards.length === 0) {
    console.warn("No cellular cards found");
    return;
  }

  console.log("Cellular cards found:", cellularCards.length);
  console.log("Cellular details found:", cellularDetails.length);

  cellularCards.forEach((card) => {
    card.addEventListener("click", function () {
      const index = this.dataset.index;
      console.log("Cellular card clicked with index:", index);

      // Update card states
      cellularCards.forEach((c) => {
        if (c.dataset.index === index) {
          c.classList.add("active");
          c.style.background =
            "linear-gradient(145deg, #E78D2D 0%, #3A0000 60%)";
          c.style.boxShadow = "0 8px 32px rgba(231, 141, 45, 0.25)";
          const label = c.querySelector("span:last-child");
          if (label) label.style.color = "white";
          const svg = c.querySelector("svg");
          if (svg) svg.style.color = "white";
        } else {
          c.classList.remove("active");
          c.style.background = "rgba(255, 255, 255, 0.95)";
          c.style.boxShadow = "0 4px 20px rgba(231, 141, 45, 0.08)";
          const label = c.querySelector("span:last-child");
          if (label) label.style.color = "#3A0000";
          const svg = c.querySelector("svg");
          if (svg) svg.style.color = "#3A0000";
        }
      });

      // Update detail contents
      cellularDetails.forEach((detail) => {
        if (detail.dataset.index === index) {
          detail.classList.add("active");
          detail.classList.remove("hidden");
        } else {
          detail.classList.remove("active");
          detail.classList.add("hidden");
        }
      });
    });
  });
}
