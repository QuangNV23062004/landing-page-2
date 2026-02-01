document.addEventListener("componentsLoaded", function () {
  const discoverHover = document.getElementById("discover-hover");
  const discoverExtended = document.getElementById("discover-extended");

  if (discoverHover && discoverExtended) {
    let isHoveringButton = false;
    let isHoveringDropdown = false;

    function updateDropdownState() {
      if (isHoveringButton || isHoveringDropdown) {
        discoverExtended.classList.remove("hidden");
        discoverHover.classList.add("underline");
      } else {
        discoverExtended.classList.add("hidden");
        discoverHover.classList.remove("underline");
      }
    }

    discoverHover.addEventListener("mouseenter", function () {
      isHoveringButton = true;
      updateDropdownState();
    });

    discoverHover.addEventListener("mouseleave", function () {
      isHoveringButton = false;
      updateDropdownState();
    });

    discoverExtended.addEventListener("mouseenter", function () {
      isHoveringDropdown = true;
      updateDropdownState();
    });

    discoverExtended.addEventListener("mouseleave", function () {
      isHoveringDropdown = false;
      updateDropdownState();
    });
  }
});
