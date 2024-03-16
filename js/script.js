const navList = document.querySelector(".nav-list");
const menuBtn = document.querySelector("#menu");
const closeBtn = document.querySelector("#close");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("bx-x");
  navList.classList.toggle("show");
};
