/* 
 * script to support DnD functionality
 */

var obj, x, y, dx, dy;

function setup() {
    if(!document.getElementsByTagName) return;
    divs = document.getElementsByTagName("DIV");
    for (i = 0; i < divs.length; i++) {
        if(divs[i].className != "drag") continue;
        divs[i].onmousedown = dragBox;
    }
}

function dragBox(e) {
    if(!e) var e = window.event;
    obj = (e.target) ? e.target : e.srcElement;
    obj.style.borderColor = "red";
    dx = x - obj.offsetLeft;
    dy = y - obj.offsetTop;
}

function moveBox(e) {
    if(!e) var e = window.event;
    if(e.pageX) {
        x = e.pageX;
        y = e.pageY;
    } else if(e.clientX) {
        x = e.clientX;
        y = e.clientY;
    } else return;

    if(obj) {
        obj.style.left = x -dx;
        obj.style.top = y -dy;
    }
}

function dropBox() {
    if(!obj) return;
    obj.style.borderColor = "black";
    obj = false;
}

//setting event handlers
document.onmousemove = moveBox;
document.onmouseup = dropBox;
window.onload = setup;


