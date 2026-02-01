function toggleAccordion() {
  const content = document.getElementById("accordionContent");
  const icon = document.getElementById("accordionIcon");
  const imagesContainer = document.getElementById("imagesContainer");

  const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

  if (isOpen) {
    // Closing: collapse content and move images back to row 1 (right side)
    content.style.maxHeight = "0px";
    icon.style.transform = "rotate(0deg)";

    // reset images placement to row 1 right
    imagesContainer.classList.remove("mt-5");
    imagesContainer.style.gridColumn = "2 / 3";
    imagesContainer.style.gridRow = "1";
    imagesContainer.style.justifyContent = "flex-end";

    const onCloseEnd = (e) => {
      if (e.target !== content || e.propertyName !== "max-height") return;
      content.classList.add("hidden");
      // remove inline styles so default classes govern placement
      imagesContainer.style.removeProperty("gridColumn");
      imagesContainer.style.removeProperty("gridRow");
      imagesContainer.style.removeProperty("justifyContent");
      content.removeEventListener("transitionend", onCloseEnd);
    };

    content.removeEventListener("transitionend", onCloseEnd);
    content.addEventListener("transitionend", onCloseEnd);
  } else {
    // Opening: show content and move images down (mobile) or left (desktop)
    content.classList.remove("hidden");

    // force reflow
    void content.offsetHeight;

    content.style.maxHeight = content.scrollHeight + "px";
    icon.style.transform = "rotate(180deg)";

    imagesContainer.classList.add("mt-5");

    if (window.innerWidth < 1024) {
      // mobile: place images below content spanning both columns
      imagesContainer.style.gridColumn = "1 / -1";
      imagesContainer.style.gridRow = "3";
      imagesContainer.style.justifyContent = "center";
    } else {
      // desktop: images left, content right
      imagesContainer.style.gridColumn = "1 / 2";
      imagesContainer.style.gridRow = "2";
      imagesContainer.style.justifyContent = "flex-start";
    }
  }
}
