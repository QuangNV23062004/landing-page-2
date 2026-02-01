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
  loadComponent(
    "../components/ambasador/video-list.html",
    "ambasador-video-list-container",
  ),
])
  .then(() => {
    // Dispatch event only after all components are loaded
    document.dispatchEvent(new Event("ambasadorComponentsLoaded"));
  })
  .catch((error) => {
    console.error("Error loading components:", error);
  });
