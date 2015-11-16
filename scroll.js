/* 
 * supports text scrolling
 */
var pos = 100;

function scroll() {
    if(!document.getElementById) return;
    obj = document.getElementById("thetext");
    pos -= 1;
    if(pos < 0 - obj.offsetHeight+130) return;
    obj.style.top = pos;
    window.setTimeout("scroll();", 30);
}

window.onload = scroll;


