var maplink=document.querySelector(".contacts .minimap"),mapclose=document.querySelector(".map-modal-close"),mappopup=document.querySelector(".modal-map");maplink.addEventListener("click",function(e){e.preventDefault(),mappopup.classList.add("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&mappopup.classList.contains("modal-show")&&(e.preventDefault(),mappopup.classList.remove("modal-show"))}),mapclose.addEventListener("click",function(e){e.preventDefault(),mappopup.classList.remove("modal-show")});