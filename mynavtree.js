function toggleMenu(e) {

    //if(!document.getElementById) return;

    if(!e) var e = window.event;
    
    whichlink = (e.target) ? e.target.id : e.srcElement.id;

    obj = document.getElementById(whichlink + "menu");

    var visible = (obj.style.display == "block");
    
    key = document.getElementById(whichlink);
    keyname = key.firstChild.nodeValue.substring(3);

    if(visible) {
        obj.style.display = "none";
        key.firstChild.nodeValue = "[+]" + keyname;
    } else {
        obj.style.display = "block";
        key.firstChild.nodeValue = "[-]" + keyname;
    }

   
}

document.getElementById("products").onclick = toggleMenu;
document.getElementById("support").onclick = toggleMenu;
document.getElementById("contact").onclick = toggleMenu;


