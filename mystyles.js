/* 
* this script will manipulate styles
*/

function changeHead() {
    i = document.form1.heading.selectedIndex;
    headcol = document.form1.heading.options[i].value;
    document.getElementById("head1").style.color = headcol;
}


function changeBody() {
    i = document.form1.body.selectedIndex;
    bodycol = document.form1.body.options[i].value;
    document.getElementById("p1").style.color = bodycol;
}
