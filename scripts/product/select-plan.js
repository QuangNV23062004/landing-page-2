console.log("[Plan Selection] Script loaded");

// Single initialization function to avoid duplication
function initializePlanSelection() {
  const planRadios = document.querySelectorAll(".plan-radio");
  const planLabels = document.querySelectorAll(".plan-label");

  if (planRadios.length === 0 || planLabels.length === 0) {
    return false;
  }

  // Add change event listeners
  planRadios.forEach((radio, index) => {
    radio.addEventListener("change", (e) => {
      console.log("[Plan Selection] Radio changed:", e.target.id);
      // Remove selected class from all labels
      planLabels.forEach((label) => {
        label.classList.remove("selected");
      });
      // Add selected class to the associated label
      const label = e.target.nextElementSibling;
      if (label && label.classList.contains("plan-label")) {
        label.classList.add("selected");
        console.log("[Plan Selection] Applied selected class to label");
      }
    });
  });

  // Initialize - apply selected class to checked radio's label
  const checkedRadio = document.querySelector(".plan-radio:checked");
  if (checkedRadio) {
    const label = checkedRadio.nextElementSibling;
    if (label && label.classList.contains("plan-label")) {
      label.classList.add("selected");
    }
  } else {
  }

  return true;
}

// Listen for productComponentsLoaded event
console.log("[Plan Selection] Setting up productComponentsLoaded listener");
document.addEventListener("productComponentsLoaded", () => {
  console.log("[Plan Selection] productComponentsLoaded event fired!");
  setTimeout(() => {
    initializePlanSelection();
  }, 100); // Small delay to ensure DOM is fully rendered
});

// Fallback for DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("[Plan Selection] DOMContentLoaded fired");
  setTimeout(() => {
    // Only initialize if not already initialized
    const alreadyInitialized = document.querySelector(".plan-label.selected");
    if (!alreadyInitialized) {
      console.log(
        "[Plan Selection] No selected label found, running fallback initialization",
      );
      initializePlanSelection();
    } else {
      console.log("[Plan Selection] Already initialized, skipping fallback");
    }
  }, 200);
});
