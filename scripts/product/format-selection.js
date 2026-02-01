// Simple state management for format selection
function initFormatSelection() {
  const radios = document.querySelectorAll(".format-radio");
  const labels = document.querySelectorAll(".format-label");

  if (radios.length === 0 || labels.length === 0) {
    return false;
  }

  const updateState = (selectedRadio) => {
    labels.forEach((label) => {
      const isSelected = label.htmlFor === selectedRadio.id;
      label.classList.toggle("bg-[#F5EAEA]", isSelected);
      label.classList.toggle("bg-white", !isSelected);
    });
  };

  radios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      updateState(e.target);
    });
  });

  const checkedRadio = document.querySelector(".format-radio:checked");
  if (checkedRadio) {
    updateState(checkedRadio);
  }

  return true;
}

// Initialize after components load
document.addEventListener("productComponentsLoaded", () => {
  setTimeout(() => {
    initFormatSelection();
  }, 50);
});

// Fallback for direct load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    initFormatSelection();
  }, 50);
});
