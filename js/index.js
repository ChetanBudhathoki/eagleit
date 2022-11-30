// variables

let position = -80;
//selectors
const menuBar = document.querySelector(".menubar");
const dropdownContainer = document.querySelector(".dropdown_container");
console.log(menuBar);
//eventlisteners

menuBar.addEventListener("click", () => {
  console.log("hwlloe");
  // slidedrawer();

  
  while(position<=0){
    setInterval(() => {
        slidedrawer();
      }, 10);
  }
});

// functions

const slidedrawer = () => {
  console.log("hellow there");
  dropdownContainer.style.left = position + "vw";
  position=position+10;
};
