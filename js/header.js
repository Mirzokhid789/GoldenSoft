let headerBurger = document.querySelector(".header__burger");
let headerBurgerList = document.querySelector(".header__burger--list");

headerBurger.addEventListener("click", (e) => {
  let actives = headerBurgerList.classList.toggle("actives");
  console.log(actives);

  if (actives) {
    headerBurger.innerHTML = `<i class="bi bi-x" id="menu"></i>`;
  } else {
    headerBurger.innerHTML = `<i class="bi bi-list  " id="menu"></i>`;
  }
});
let kotalog = document.querySelector(".catalog");

console.log(window.location.href);

kotalog.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/catalog.html";
});

const header = document.querySelector(".accordion-header");
const content = document.querySelector(".accordion-content");

header.addEventListener("click", function () {
  header.classList.toggle("actives");
  content.classList.toggle("show");
});
