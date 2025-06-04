const popupBtn = document.querySelector(".popup-btn");
const closeBtn = document.querySelector(".close-btn");
const popupDiv = document.querySelector(".popup-div");
const background = document.querySelector(".background");
// const body = document.querySelector(".showBack");

popupBtn.addEventListener("click", () => {
  popupDiv.classList.add("open");
  background.classList.add("showBack");
});

closeBtn.addEventListener("click", () => {
  popupDiv.classList.remove("open");
  background.classList.remove("showBack");
});

background.addEventListener("click", () => {
  popupDiv.classList.remove("open");
  background.classList.remove("showBack");
});
