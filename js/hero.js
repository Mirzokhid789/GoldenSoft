let btnEl = document.getElementsByClassName("btn");
let cardEl = document.getElementsByClassName("card");

const categoryHTML = document.querySelector(".categories");
const heroImg = document.querySelector(".hero__img"); // Missing '.' for class selector
console.log(heroImg.src);

categoryHTML.addEventListener("click", (evt) => {
    const target = evt.target;

    console.log(target.src);

    if (target.classList.contains("image")) { // Use parentheses, not '='
        heroImg.src = target.src;
    }
});

// let arr =[]


// function addFunct() {
//       for (const element of cardEl) {
//     for (const datas of element.children) {
        
//          arr.push(datas.id)
//         //  console.log(datas) 
        
//     }
// }
// }

// for (const button of btnEl) {

//     button.addEventListener('click', () => {
//       addFunct()
//     })
// } 
// console.log(arr);
