/* 
 * ajax search client
 */

var t;

function startSearch() {
    if(t) window.clearTimeout(t);
    t = window.setTimeout("liveSearch()", 200);
}

function liveSearch() {
    query = document.getElementById("searchlive").value;
    filename = "search.php?query=" + query;
    ajaxCallback = displayResults;
    ajaxRequest(filename);
}

function displayResults() {
    //remove old results
    ul = document.getElementById("list");
    div = document.getElementById("results");
    div.removeChild(ul);
    //create new list
    ul = document.createElement("UL");
    ul.id = "list";
    //get response
    names = ajaxreq.responseXML.getElementsByTagName("name");

    //render results
    for (i = 0; i < names.length; i++) {
        li = document.createElement("LI");
        name = names[i].firstChild.nodeValue;
        text = document.createTextNode(name);
        li.appendChild(text);
        ul.appendChild(li);
    }

    //empty results
    if(names.length == 0) {
        li = document.createElement("LI");
        text = document.createTextNode("no result found");
        li.appendChild(text);
        ul.appendChild(li);
    }

    //show new list
    div.appendChild(ul);
}

//event handlers
obj = document.getElementById("searchlive");
obj.onkeydown = startSearch;