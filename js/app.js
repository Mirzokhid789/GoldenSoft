let headerBurger = document.querySelector(".header__burger");
let headerBurgerList = document.querySelector(".header__burger--list");

headerBurger.addEventListener("click", (e) => {
  let active = headerBurgerList.classList.toggle("active");
  console.log(active);

  if (active) {
    headerBurger.innerHTML = `<i class="bi bi-x" id="menu"></i>`;
  } else {
    headerBurger.innerHTML = `<i class="bi bi-list  " id="menu"></i>`;
  }
});
let kotalog = document.querySelector(".catalog");
console.log(kotalog);

console.log(window.location);

kotalog.addEventListener("click", () => {
  console.log("click");

  window.location.href = "http://127.0.0.1:5500/catalog.html";
});
