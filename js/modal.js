let openmodal = document.querySelector(".korzina");
let modalsWrapper = document.querySelector(".cart-container");
let closemodal = document.querySelector(".closest-btn");

openmodal.addEventListener("click", () => {
  modalsWrapper.classList.add("shows_modal");
});

closemodal.addEventListener("click", () => {
  modalsWrapper.classList.remove("shows_modal");
});
