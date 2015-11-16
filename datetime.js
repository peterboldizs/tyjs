/*
 * this is the basic JS code
 */

//define variables
now = new Date();
hours = now.getHours();
mins = now.getMinutes();
secs = now.getSeconds();
millisecs = now.getMilliseconds();

localdate = now.toLocaleDateString();
localtime = now.toLocaleTimeString();
utctime = now.toUTCString();


if(hours == 10) {
    alert('it is ' + hours + ' o\'clock!');
}

//output results
document.write("<b>Local date:</b> " + localdate + "<br>");
document.write("<b>Local time:</b> " + localtime + "<br>");
document.write("<b>UTC time:</b> " + utctime + "<br>");
document.write("<h2>");
document.write(hours + " : " + mins + " : " + secs + " : " + millisecs);
document.write("</h2>");

document.write("last modified: " + document.lastModified);

//this is some annoying behavior...
/* for (i = 0; i < 3; i++) {
    alert('alert number ' + i );
}
*/

