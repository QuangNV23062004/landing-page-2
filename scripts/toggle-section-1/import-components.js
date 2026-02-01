// Helper function to fetch and insert component
function loadComponent(url, containerId) {
  return fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(containerId).innerHTML = data;
    });
}

// Helper function to load external JS scripts
function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

// Load all components in parallel and dispatch event when all are done
Promise.all([
  loadComponent(
    "../components/toggle-section1/bg-grid.html",
    "toggle-bg-grid-container",
  ),
  loadComponent(
    "../components/toggle-section1/product-toggle.html",
    "product-toggle-container",
  ),
  loadComponent(
    "../components/toggle-section1/essentials/header.html",
    "header-essentials-container",
  ),
  loadComponent(
    "../components/toggle-section1/essentials/card-grid.html",
    "card-grid-essentials-container",
  ),
  loadComponent(
    "../components/toggle-section1/essentials/detail.html",
    "detail-essentials-container",
  ),

  loadComponent(
    "../components/toggle-section1/longevity/header.html",
    "header-longevity-container",
  ),
  loadComponent(
    "../components/toggle-section1/longevity/card-grid.html",
    "card-grid-longevity-container",
  ),
  loadComponent(
    "../components/toggle-section1/longevity/detail.html",
    "detail-longevity-container",
  ),
])
  .then(() => {
    // Dispatch event only after all components and scripts are loaded
    document.dispatchEvent(new Event("toggleSection1ComponentsLoaded"));
  })
  .catch((error) => {
    console.error("Error loading components:", error);
  });
