document.addEventListener("componentsLoaded", function () {
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const menuContainer = document.getElementById("menu-container");
  const menuDrawer = document.getElementById("menu-drawer");
  const menuBackdrop = document.getElementById("menu-backdrop");

  let isMenuOpen = false;

  function openMenu() {
    isMenuOpen = true;

    // Show container and enable pointer events
    menuContainer.classList.remove("opacity-0", "pointer-events-none");
    menuContainer.classList.add("opacity-100", "pointer-events-auto");

    // Slide drawer in from left
    menuDrawer.classList.remove("-translate-x-full");
    menuDrawer.classList.add("translate-x-0");

    // Lock body scroll
    document.body.classList.add("overflow-hidden");

    // Switch icons
    menuIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  }

  function closeMenu() {
    isMenuOpen = false;

    // Slide drawer out to left
    menuDrawer.classList.remove("translate-x-0");
    menuDrawer.classList.add("-translate-x-full");

    // Fade out container
    menuContainer.classList.remove("opacity-100", "pointer-events-auto");
    menuContainer.classList.add("opacity-0", "pointer-events-none");

    // Unlock body scroll
    document.body.classList.remove("overflow-hidden");

    // Switch icons
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }

  function toggleMenu() {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Toggle button click
  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }

  // Close when clicking backdrop
  if (menuBackdrop) {
    menuBackdrop.addEventListener("click", closeMenu);
  }

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isMenuOpen) {
      closeMenu();
    }
  });

  // Expose functions globally for other scripts
  window.mobileMenu = {
    open: openMenu,
    close: closeMenu,
    toggle: toggleMenu,
  };
});
