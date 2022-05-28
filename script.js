let btnMenu = document.querySelector("#icon-menu");
let btnClose = document.querySelector("#icon-close");
let btnContainer = document.querySelector(".side-nav__menu-icon");
let menuContainer = document.querySelector(".menu-container");

btnContainer.addEventListener("click", toggleMenu);

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
