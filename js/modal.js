let openmodal = document.querySelector(".korzina");
let modalsWrapper = document.querySelector(".cart-container");
let closemodal = document.querySelector(".closest-btn");

openmodal.addEventListener("click", () => {
  modalsWrapper.classList.add("shows_modal");
});

closemodal.addEventListener("click", () => {
  modalsWrapper.classList.remove("shows_modal");
});

//_______________________________________________________________________________________________

const minusBtn = document.querySelector(".minusBtn");
const plusBtn = document.querySelector(".plusBtn");
const btnniOrasidagi2 = document.querySelector(".quantity");
const oxirgi_son_33000 = document.querySelector(".item-price");
const oxirgi_span_66000 = document.querySelector(".oxirgi_span");

let quantity = 2;
const pricePerItem = 33000;

function BtnFunction() {
  btnniOrasidagi2.textContent = quantity;
  const total = quantity * pricePerItem;
  oxirgi_span_66000.textContent = total.toLocaleString("ru-RU") + "₽";
}

minusBtn.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    // btnniOrasidagi2.innerHTML = quantity;
    BtnFunction();
  }
});

plusBtn.addEventListener("click", () => {
  quantity++;
  // btnniOrasidagi2.innerHTML = quantity;
  BtnFunction();
});

BtnFunction();

//__________________________________________________________________
