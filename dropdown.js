/* 
 * code for drop-down menu
 */

var t = false; //for timer
var current; //menu item currently open

/*
 *event handlers are configured
 */
function setupMenu() {
    if(!document.getElementsByTagName) return;
    items = document.getElementsByTagName("li");

    for (i = 0; i < items.length; i++) {
        if(items[i].className != "menu") continue;
        thelink = findChild(items[i], "A");
        thelink.onmouseover = showMenu;
        thelink.onmouseout = startTimer;
        if(ul = findChild(items[i], "UL")) {
            ul.style.display = "none";
            for (j = 0; j < ul.childNodes.length; j++) {
                ul.childNodes[j].onmouseover = resetTimer;
                ul.childNodes[j].onmouseout = startTimer;
            }
        }
    }
}

/*
 * find the first child object of a given type
 */
function findChild(obj, tag) {
    cn = obj.childNodes;
    for (k = 0; k < cn.length; k++) {
        if(cn[k].nodeName == tag) {
            return cn[k];
        }
    }
    return false;
}

function showMenu(e) {
    if(!e) var e = window.event;
    thislink = (e.target) ? e.target : e.srcElement;
    resetTimer();
    if(current) {
        hideMenu(current);
    }
    thislink = thislink.parentNode;
    current = thislink;
    ul = findChild(thislink, "UL");
    if(!ul) return;
    ul.style.display = "block";
}

function hideMenu(thelink) {
    ul = findChild(thelink, "UL");
    if(!ul) return;
    ul.style.display = "none";
}

function resetTimer() {
    if(t) window.clearTimeout(t);
}

function startTimer() {
    t = window.setTimeout("hideMenu(current)", 200);
}

window.onload = setupMenu;