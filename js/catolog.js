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
