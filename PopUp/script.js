const button = document.querySelector("button");
const closeBtn = document.querySelector(".closeBtn");
const popupContainer = document.querySelector(".container");
const overlay = document.querySelector(".overlay");

button.addEventListener("click", (e) => {
  popupContainer.classList.add("open");
  e.stopPropagation();
});

closeBtn.addEventListener("click", () => {
  popupContainer.classList.remove("open");
});

// Close when clicking outside the popup
overlay.addEventListener("click", () => {
  popupContainer.classList.remove("open");
});
