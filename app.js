let cart = document.querySelector(".cart");
cart.addEventListener("click", () => {
  cart.innerHTML = "CARTED";
  cart.style.backgroundColor = "lightgreen";
});


// let java = document.querySelector("#java");
let box = document.querySelector(".box");
let para = document.querySelector("#box-para")
box.addEventListener("click", () => {
  para.innerHTML = "SEARCHING...";

});

//-----> Menue button  Function 
let msg = 0;
let menue_symb = document.querySelector(".menue_symbol")
let msCard = document.querySelector('.menue-card');
menue_symb.innerHTML = "≡"
menue_symb.addEventListener("click", function () {
  if (msg == 0) {
    menue_symb.innerHTML = "×"
    msCard.style = "display:block"
    msg = 1;
  }
  else {
    menue_symb.innerHTML = "≡"
    msCard.style = "display:none"
    msg = 0;
  }

});
