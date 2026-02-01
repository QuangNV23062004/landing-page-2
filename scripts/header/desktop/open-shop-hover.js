document.addEventListener("componentsLoaded", function () {
  const shopHover = document.getElementById("shop-hover");
  const shopExtended = document.getElementById("shop-extended");

  if (shopHover && shopExtended) {
    let isHoveringButton = false;
    let isHoveringDropdown = false;

    function updateDropdownState() {
      if (isHoveringButton || isHoveringDropdown) {
        shopExtended.classList.remove("hidden");
        shopHover.classList.add("underline");
      } else {
        shopExtended.classList.add("hidden");
        shopHover.classList.remove("underline");
      }
    }

    shopHover.addEventListener("mouseenter", function () {
      isHoveringButton = true;
      updateDropdownState();
    });

    shopHover.addEventListener("mouseleave", function () {
      isHoveringButton = false;
      updateDropdownState();
    });

    shopExtended.addEventListener("mouseenter", function () {
      isHoveringDropdown = true;
      updateDropdownState();
    });

    shopExtended.addEventListener("mouseleave", function () {
      isHoveringDropdown = false;
      updateDropdownState();
    });
  }
});
