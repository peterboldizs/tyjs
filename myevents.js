/* 
 * this script gives examples for event handling
 */

/*
 * output mouse status
 */
function mouseStatus(e) {
    if(!e) e = window.event;
    btn = e.button;
    whichone = (btn < 2 ) ? "left" : "right";
    message = e.type + ": " + whichone + "\n";
    document.form1.info.value += message;
}

obj = document.getElementById("testlink");
obj.onmousedown = mouseStatus;
obj.onmouseup = mouseStatus;
obj.onmouseover = mouseStatus;
obj.onclick = mouseStatus;
obj.ondblclick = mouseStatus;


/*
 * handle keyboard events
 */
function displayKey(e) {
    if(e.keyCode) {
        keycode = e.keyCode;
    } else {
        keycode = e.which;
    }
    character = String.fromCharCode(keycode);
    k = document.getElementById("keys");
    k.innerHTML += character;
}
