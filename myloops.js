/*
 * test basic looping
 */

function forTest() {
    for (i = 0; i < 5; i++) {
        document.writeln("this is line " + i);
        if(i == 2) {
            document.writeln("continuing at " + i);
            continue;
        }
        document.writeln("write something at " + i);
        if(i == 4) {
            document.writeln("breaking at " + i);
            break;
        }
        document.writeln("ending at " + i);
    }
}

/*
 * this is used to print the browser properties
 */
function testBrowser() {
    document.writeln("<hr>Browser properties:")
    for (i in navigator) {
        document.writeln(i + ": " + navigator[i]);
    }
}

function dealWithNames() {
    var names = new Array();
    i = 0;
    do {
        next = window.prompt("Enter name: ", "");
        if(next > " ") {
            names[i++] = next;
        }
    } while(next > " ");
    document.write("<h3>" + names.length + (names.length == 1 ? " name" :  " names") + " entered</h3>");
    document.write("<ol>");
    for (i in names) {
        document.writeln("<li>" + names[i]);
    }
    document.write("</ol>");
}

