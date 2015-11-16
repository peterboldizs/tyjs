/* 
 * animated slideshow engine
 */

var numslides = 0;
var currentslide = 0;
var oldslide = 4;
var x = 0;
var slides = new Array();

function makeSlideShow() {
    imgs = document.getElementsByTagName("img");
    for (i = 0; i < imgs.length; i++) {
        if(imgs[i].className != "slide") {
            continue;
        }
        slides[numslides] = imgs[i];

        if(numslides == 0) {
            imgs[i].style.zIndex = 10;
        } else {
            imgs[i].style.zIndex = 0;
        }
        imgs[i].onclick = nextSlide;
        numslides++;
    }
}

function nextSlide() {
    slides[currentslide].style.zIndex = 9;
    slides[oldslide].style.zIndex = 0;
    oldslide = currentslide;
    currentslide++;

    if(currentslide >= numslides) currentslide = 0;
    slides[currentslide].style.left = 640;
    x = 640;
    slides[currentslide].style.zIndex = 10;
    animateSlide();
}

function animateSlide() {
    x -=25;
    slides[currentslide].style.left = x;
    slides[oldslide].style.left = x - 640;
    if(x > 0) {
        window.setTimeout("animateSlide();", 10);
    }
}

window.onload = makeSlideShow;

