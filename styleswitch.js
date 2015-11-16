/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function styleSwitch(n, enable) {
    if(!document.getElementsByTagName) return;
    links = document.getElementsByTagName("link");
    links[n].disabled = !enable;
    links[1-n].disabled = true;
}

styleSwitch(0, true);



