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
imgArray[0].src = './images/desktop-image-hero-1.jpg';

imgArray[1] = new Image();
imgArray[1].src = './images/desktop-image-hero-2.jpg';

imgArray[2] = new Image();
imgArray[2].src = './images/desktop-image-hero-3.jpg';
function nextImage(){
    var img = document.getElementById("mainImage");
    for(var i = 0; i < imgArray.length;i++){
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){
                document.getElementById("mainImage").src = imgArray[0].src;
                break;
            }
            document.getElementById("mainImage").src = imgArray[i+1].src;
            break;
        }
    }
}
function previousImage(){
    var img = document.getElementById("mainImage");
    for(var i = imgArray.length-1; i >=0 ;i--){
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){
                document.getElementById("mainImage").src = imgArray[2].src;
                break;
            }
            document.getElementById("mainImage").src = imgArray[i-1].src;
            break;
        }
    }
}



document.getElementById("CrouselImg").style.backgroundColor="white";
document.getElementById("ContentControls").style.backgroundColor="white";