/* 
 * this script is used to position a div layer
 */
var x = 100;
var y = 150;

function pos(dx, dy) {
    x += 20 * dx;
    y += 20 * dy;
    obj = document.getElementById("square");
    obj.style.top = y;
    obj.style.left = x;
}

function hideSquare() {
    if(!document.getElementById) return;
    obj = document.getElementById("square");
    obj.style.display = "none";
}

function showSquare() {
    if(!document.getElementById) return;
    obj = document.getElementById("square");
    obj.style.display = "block";
}

