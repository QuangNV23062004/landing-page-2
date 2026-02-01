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
  loadComponent(
    "../components/product/product-info/result.html",
    "product-result-container",
  ),
  loadComponent(
    "../components/product/product-info/review.html",
    "product-review-container",
  ),
  loadComponent(
    "../components/product/product-info/info.html",
    "product-info-container",
  ),
  loadComponent(
    "../components/product/product-images/desktop/images-list.html",
    "product-desktop-images-container",
  ),
  loadComponent(
    "../components/product/product-images/desktop/main-image.html",
    "product-desktop-main-image",
  ),
  loadComponent(
    "../components/product/product-info/format-selection.html",
    "product-format-selection-container",
  ),
  loadComponent(
    "../components/product/product-info/plan-selection.html",
    "product-plan-selection-container",
  ),
  loadComponent(
    "../components/product/product-info/buy-button.html",
    "product-buy-button-container",
  ),
  loadComponent(
    "../components/product/product-info/influencer.html",
    "product-influencers-container",
  ),
  loadComponent(
    "../components/product/product-info/what-ambasador-say.html",
    "product-ambassador-say-container",
  ),
  loadComponent(
    "../components/product/modal/image-modal.html",
    "product-image-modal-container",
  ),
  loadComponent(
    "../components/product/modal/video-modal.html",
    "product-video-modal-container",
  ),
  loadComponent(
    "../components/product/product-info/accordion.html",
    "product-accordion-container",
  ),

  loadComponent(
    "../components/product/product-images/mobile/images.html",
    "product-mobile-images-container",
  ),
  loadComponent(
    "../components/product/product-info/what-ambasador-say.html",
    "product-what-ambasador-say-container",
  ),
])
  .then(() => {
    // Dispatch event only after all components and scripts are loaded
    console.log(
      "[Import Components] All components and scripts loaded, dispatching event",
    );
    document.dispatchEvent(new Event("productComponentsLoaded"));
    console.log("[Import Components] Event dispatched");
  })
  .catch((error) => {
    console.error("Error loading components:", error);
  });

// Utility to dynamically load a script and return a Promise
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = (e) => reject(e);
    document.head.appendChild(s);
  });
}
