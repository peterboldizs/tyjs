test1 = "This is part1.";
test2 = "This is part2.";
alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
both = test1 + test2;
//alert(both);
document.writeln("Tests: ")
document.writeln("concat: " + both + " length: " + both.length);
document.writeln(both.toUpperCase());
document.writeln(both.toLowerCase());
document.writeln(both.substr(2, 8));
document.writeln("length of alphabet: " + alphabet.length);
intVar1 = 12;
intVar2 = 23;
sum = intVar1 + intVar2;
document.writeln("sum: " + sum);
document.writeln(alphabet.substr(0, 4));
document.writeln(alphabet.substr(24, 26));
document.writeln(alphabet.charAt(0));
document.writeln(alphabet.charAt(4));
document.writeln(alphabet.charAt(25));
loc = alphabet.indexOf("XY");
document.writeln("loc:" + loc);

