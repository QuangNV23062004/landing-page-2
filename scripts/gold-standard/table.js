document.addEventListener("goldStandardComponentsLoaded", () => {
  const seeMoreBtn = document.getElementById("seeMoreBtn");
  const hiddenRows = document.querySelector(".hidden-rows");
  const comparisonRows = document.getElementById("comparisonRows");

  let isExpanded = false;

  seeMoreBtn.addEventListener("click", function () {
    isExpanded = !isExpanded;

    if (isExpanded) {
      hiddenRows.style.display = "block";
      comparisonRows.style.maxHeight = "2000px";
      seeMoreBtn.textContent = "See Less";
    } else {
      hiddenRows.style.display = "none";
      comparisonRows.style.maxHeight = "600px";
      seeMoreBtn.textContent = "See More";
    }
  });
});
