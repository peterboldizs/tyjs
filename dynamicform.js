/* 
 * supports the dynamic form rendering
 */

var items = 1;

/*
 * add a new product item dynamically to the form
 */
function addItem() {
    if(!document.getElementById) return;
    div = document.getElementById("items");
    button = document.getElementById("add");
    items++;
    newitem = "<b>Amount: </b>";
    newitem += "<input type=\"text\" name=\"amount" + items;
    newitem += "\"size=\"3\"> ";
    newitem += "<b>Item: </b>";
    newitem += "<input type=\"text\" name=\"item" + items;
    newitem += "\"size=\"45\"><br> ";
    newnode = document.createElement("span");
    newnode.innerHTML = newitem;
    div.insertBefore(newnode, button);
}

/*
 * displays he other address
 */
function showAdd(a) {
    if(!document.getElementById) return;
    obj = document.getElementById("shipto");
    if(a) {
        obj.style.display = "block";
    } else {
        obj.style.display = "none";
    }
}


