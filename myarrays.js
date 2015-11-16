//helper for numeric sort
function sorthelp(a,b) {
    return a-b;
}

points1 = new Array(5);
points1[0] = 5;
points1[1] = 2;
points1[2] = 33;
points1[3] = 14;
points1[4] = 6;
document.writeln("unsorted: ");
for (i = 0; i < points1.length; i++) {
    document.writeln(points1[i]);
}

points1.sort(sorthelp);
document.writeln("sorted: ");
for (i = 0; i < points1.length; i++) {
    document.writeln(points1[i]);
}


points2 = new Array("red", "green", "blue");

for (j = 0; j < points2.length; j++) {
    document.writeln(points2[j]);
}

strtosplit = "this is a string to split";
splitstr = strtosplit.split(" ");


for (k = 0; k < splitstr.length; k++) {
    document.writeln("part " + k + ": " + splitstr[k]);
}

rejoined = splitstr.join(" ");
document.writeln("rejoined: " + rejoined);

splitstr2 = splitstr.sort();
rejoined2 = splitstr2.join(" ");
document.writeln("rejoined sorted: " + rejoined2);
