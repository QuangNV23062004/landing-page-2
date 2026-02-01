// Sync buy button text with selected plan
function initBuyButtonState() {
  const buyButton = document.getElementById("buy-button");
  const planRadios = document.querySelectorAll(".plan-radio");
  const plan1 = document.getElementById("plan1");
  const plan2 = document.getElementById("plan2");

  if (!buyButton || planRadios.length === 0 || !plan1 || !plan2) {
    return false;
  }

  const updateButtonText = (selectedId) => {
    const isQuarterly = selectedId === "plan-90day";
    plan1.classList.toggle("hidden", !isQuarterly);
    plan2.classList.toggle("hidden", isQuarterly);
  };

  planRadios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      updateButtonText(e.target.id);
    });
  });

  const checkedRadio = document.querySelector(".plan-radio:checked");
  if (checkedRadio) {
    updateButtonText(checkedRadio.id);
  }

  return true;
}

// Init after components load
window.addEventListener("productComponentsLoaded", () => {
  setTimeout(() => {
    initBuyButtonState();
  }, 50);
});

// Fallback
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    initBuyButtonState();
  }, 100);
});
