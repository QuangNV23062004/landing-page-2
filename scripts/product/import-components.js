// Helper function to fetch and insert component
function loadComponent(url, containerId) {
  return fetch(url)
    .then((response) => response.text())
    .then((data) => {
      const container = document.getElementById(containerId);
      if (!container) {
        console.warn(`[Import Components] Missing container: ${containerId}`);
        return;
      }
      container.innerHTML = data;
    });
}
Promise.all([
  fetch("../components/product/product-info/result.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("product-result-container").innerHTML = data;
    }),
  fetch("../components/product/product-info/review.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("product-review-container").innerHTML = data;
    }),

  fetch("../components/product/product-info/info.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("product-info-container").innerHTML = data;
    }),
  fetch("../components/product/product-images/desktop/images-list.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("product-desktop-images-container").innerHTML =
        data;
    }),

  fetch("../components/product/product-images/desktop/main-image.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("product-desktop-main-image").innerHTML = data;
    }),

  fetch("../components/product/product-info/format-selection.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("product-format-selection-container").innerHTML =
        data;
    }),

  fetch("../components/product/product-info/plan-selection.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("product-plan-selection-container").innerHTML =
        data;
    }),

  fetch("../components/product/product-info/buy-button.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("product-buy-button-container").innerHTML = data;
    }),
  fetch("../components/product/product-info/influencer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("product-influencers-container").innerHTML = data;
    }),
])
  .then(() => {
    // Dispatch event only after all components are loaded
    console.log("[Import Components] All components loaded, dispatching event");
    document.dispatchEvent(new Event("productComponentsLoaded"));
    console.log("[Import Components] Event dispatched");
  })
  .catch((error) => {
    console.error("Error loading components:", error);
  });
