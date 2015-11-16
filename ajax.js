/* 
 * this is a reusable AJAX library
 */

var ajaxreq = false;
var ajaxCallback;

function ajaxRequest(filename) {
    try {
        ajaxreq = new XMLHttpRequest();
    } catch(error) {
        try {
            // IE 5, IE 6
            ajaxreq = new ActiveXObject("Microsoft.XMLHTTP");
        } catch(error) {
            return false;
        }
    }
    ajaxreq.open("GET", filename);
    ajaxreq.onreadystatechange = ajaxResponse;
    ajaxreq.send(null);
}

function ajaxResponse() {
    if(ajaxreq.readyState != 4) return;
    if(ajaxreq.status == 200) {
        if(ajaxCallback) ajaxCallback();
    } else {
        alert("request failed " + ajaxreq.statusText);
    }
    return true;
}

