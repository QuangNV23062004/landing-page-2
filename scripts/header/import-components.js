// Helper function to fetch and insert component
function loadComponent(url, containerId) {
  return fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(containerId).innerHTML = data;
    });
}

// Load all components in parallel and dispatch event when all are done
Promise.all([
  // Desktop
  loadComponent(
    "../components/header/desktop/discount.html",
    "discount-container",
  ),
  loadComponent(
    "../components/header/desktop/currency-modal.html",
    "currency-modal-container",
  ),
  loadComponent("../components/header/desktop/logo.html", "logo-container"),
  loadComponent(
    "../components/header/desktop/left-header.html",
    "left-header-container",
  ),
  loadComponent(
    "../components/header/desktop/right-header.html",
    "right-header-container",
  ),
  loadComponent(
    "../components/header/desktop/shop-extended.html",
    "shop-extended-container",
  ),
  loadComponent(
    "../components/header/desktop/discover-extended.html",
    "discover-extended-container",
  ),
  // Mobile
  loadComponent(
    "../components/header/mobile/mobile-header.html",
    "mobile-header-container",
  ),
  loadComponent(
    "../components/header/mobile/mobile-nav-drawer.html",
    "mobile-nav-drawer-container",
  ),
  loadComponent(
    "../components/header/mobile/currency-modal.html",
    "currency-modal-mobile-container",
  ),
])
  .then(() => {
    // Dispatch event only after all components are loaded
    document.dispatchEvent(new Event("componentsLoaded"));
  })
  .catch((error) => {
    console.error("Error loading components:", error);
  });
