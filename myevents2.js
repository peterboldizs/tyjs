/* 
 * this script gives examples for event handling
 */

function hover(e) {
    if(!e) {
        var e = window.event;
    }
    whichlink = (e.target) ? e.target.id : e.srcElement.id;
    if(whichlink == "order") {
        desc = "Order a product";
    } else if(whichlink == "email") {
        desc = "Send us email";
    } else if(whichlink == "message") {
        desc = "write a message";
    }
    d = document.getElementById("description");
    d.innerHTML = desc;

}

function clearDesc() {
    d = document.getElementById("description");
    d.innerHTML = "";
}

orderlink = document.getElementById("order");
orderlink.onmouseover = hover;
orderlink.onmouseout = clearDesc;

emaillink = document.getElementById("email");
emaillink.onmouseover = hover;
emaillink.onmouseout = clearDesc;


messagelink = document.getElementById("message");
messagelink.onmouseover = hover;
messagelink.onmouseout = clearDesc;


