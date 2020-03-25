var link = document.querySelector(".contacts .write-us-button");
var close = document.querySelector(".modal-close");
var popup = document.querySelector(".modal-write-us");
var form = popup.querySelector("form");
var username = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=e-mail]");
var text = popup.querySelector("[name=text]");
var cartpopup = document.querySelector(".modal-cart");
var cartclose = document.querySelector(".cart-modal-close");
var cartlinks = document.querySelectorAll(".catalog-item-hammer .buy");
var maplink = document.querySelector(".contacts .minimap");
var mapclose = document.querySelector(".map-modal-close");
var mappopup = document.querySelector(".modal-map");

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
  if (mappopup.classList.contains("modal-show")) {
    evt.preventDefault();
    mappopup.classList.remove("modal-show");
  }
  }
  });

mapclose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mappopup.classList.remove("modal-show");
});

maplink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mappopup.classList.add("modal-show");
});



link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    username.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});


window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (popup.classList.contains("modal-show")) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  }
}
});

form.addEventListener("submit", function (evt) {
  if (!text.value || !email || !username) {
    evt.preventDefault();
    console.log("Нужно ввести имя, e-mail и текст");
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
  //  else {
  //   localStorage.setItem("user-name", username.value);
  //   localStorage.setItem("e-mail", email.value);
  //   localStorage.setItem("text", text.value);
  // }
});

cartclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartpopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartpopup.classList.contains("modal-show")) {
      evt.preventDefault;
      cartpopup.classList.remove("modal-show");
    }
  }
});

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















