var cartpopup = document.querySelector(".modal-cart");
var cartclose = document.querySelector(".cart-modal-close");
var cartlinks = document.querySelectorAll(".catalog-item-hammer .buy");
 
cartlinks[0].addEventListener("click", function (evt) {
    evt.preventDefault();
    cartpopup.classList.add("modal-show");
});

cartlinks[1].addEventListener("click", function (evt) {
    evt.preventDefault();
    cartpopup.classList.add("modal-show");
});

cartlinks[2].addEventListener("click", function (evt) {
  evt.preventDefault();
  cartpopup.classList.add("modal-show");
});

cartlinks[3].addEventListener("click", function (evt) {
  evt.preventDefault();
  cartpopup.classList.add("modal-show");
});

cartlinks[4].addEventListener("click", function (evt) {
  evt.preventDefault();
  cartpopup.classList.add("modal-show");
});

cartlinks[5].addEventListener("click", function (evt) {
  evt.preventDefault();
  cartpopup.classList.add("modal-show");
});

cartlinks[6].addEventListener("click", function (evt) {
  evt.preventDefault();
  cartpopup.classList.add("modal-show");
});

cartlinks[7].addEventListener("click", function (evt) {
  evt.preventDefault();
  cartpopup.classList.add("modal-show");
});

cartlinks[8].addEventListener("click", function (evt) {
  evt.preventDefault();
  cartpopup.classList.add("modal-show");
});

cartclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartpopup.classList.remove("modal-show");
});


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (cartpopup.classList.contains("modal-show")) {
        evt.preventDefault();
        cartpopup.classList.remove("modal-show");
      }
    }
  });