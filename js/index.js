// variables
let position = -80;
let isDrawerOpen = false;

//selectors
const menuBar = document.querySelector(".menubar");
const dropdownContainer = document.querySelector(".dropdown_container");

//for icons
const menuBtn = document.createElement("img")
menuBtn.classList.add("menu_icon")
menuBtn.src = "./assets/icons/bars-solid.svg"
menuBar.appendChild(menuBtn);
//eventlisteners
menuBar.addEventListener("click", () => {
  isDrawerOpen ? menuBtn.src = "./assets/icons/bars-solid.svg" : menuBtn.src = "./assets/icons/xmark-solid.svg";

  isDrawerOpen = !isDrawerOpen;
  console.log(isDrawerOpen);
  let a = setInterval(() => {
    slidedrawer();
    dropdownContainer.style.left = position + "vw";
    if (position >= 0 || position <= -80) {

      clearInterval(a);
      isDrawerOpen ? position = 0 : position = -80;
    }
  }, 5);

});

// functions

const slidedrawer = () => {
  if (isDrawerOpen) {
    position += 1;
  }
  else {
    position -= 1;
  }
  console.log(position);
};


