const hamburger = document.querySelector("#ham");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
// controls

let left= document.querySelector("#left");
let right= document.querySelector("#right");
var imgArray = new Array();
imgArray[0] = new Image();



document.getElementById("CrouselImg").style.backgroundColor="black";
document.getElementById("ContentControls").style.backgroundColor="red";