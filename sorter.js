var numNames = 0;
var names = new Array();

function sortNames() {
    //read name
    var theName = document.sortForm.newName.value;
    //add name to array
    names[numNames] = theName.toUpperCase();
    numNames++;
    //sort names in the array
    names.sort();
    //add position number - it has some bugs
    /* for (i = 0; i < names.length; i++) {
        //only once!
        if(names[i].charAt(0) != i) {
            names[i] = i + ": " + names[i];
        }
        
    }
    */
    document.sortForm.sorted.value = names.join("\n");
}

