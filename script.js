let btnMenu = document.querySelector("#icon-menu");
let btnClose = document.querySelector("#icon-close");
let btnContainer = document.querySelector(".side-nav__menu-icon");
let menuContainer = document.querySelector(".menu-container");
let sliderContainer = document.querySelector(".testimonials__slider-container");
let sliderIndicators = document.querySelectorAll(".slider-indicator");

btnContainer.addEventListener("click", toggleMenu);

let slideIndex = 1;

function autoRotate() {
  sliderIndicators.forEach((element) => {
    element.classList.remove("active");
  });
}

function toggleMenu(e) {
  console.log(e.target.id);
  if (e.target.id.includes("menu")) {
    btnMenu.style.display = "none";
    btnClose.style.display = "block";
    console.log("ggg");
    menuContainer.classList.add("active");
  } else {
    btnMenu.style.display = "block";
    btnClose.style.display = "none";
    menuContainer.classList.remove("active");
  }
}
