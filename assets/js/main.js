let menuOpen = document.querySelector(".menu-toggle");
let menuWrapper = document.querySelector(".menu-wrapper");

menuOpen.addEventListener("click", function () {
  console.log("open app");
  menuOpen.classList.toggle("bx-x");
  menuWrapper.classList.toggle("active");
});
