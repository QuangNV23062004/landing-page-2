// Helper function to fetch and insert component
function loadComponent(url, containerId) {
  return fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(containerId).innerHTML = data;
    });
}

// Helper function to load and execute a script
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
    "../components/brilliant-minds/brilliant-minds.html",
    "brilliant-minds-container",
  ),
])
  .then(() => {
    // Load the modal script after component is loaded
    return loadScript("../scripts/brilliant-minds/modal.js");
  })
  .then(() => {
    // Dispatch event only after all components and scripts are loaded
    document.dispatchEvent(new Event("brilliantMindsFooterComponentsLoaded"));
  })
  .catch((error) => {
    console.error("Error loading components:", error);
  });
