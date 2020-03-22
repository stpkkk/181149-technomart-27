var maplink = document.querySelector(".contacts .minimap");
var mapclose = document.querySelector(".map-modal-close");
var mappopup = document.querySelector(".modal-map");


maplink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mappopup.classList.add("modal-show");
});




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
