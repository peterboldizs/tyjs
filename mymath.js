/* 
 * this script is used to test basic mathematical functions
 */

//random numbers
function createRandom(max, times) {
    document.writeln("starting createRandom...");
    
    for (j = 0; j < times; j++) {
        var total = 0;
        for (i = 1; i < max; i++) {
            //document.writeln("i = " + i);
            num = Math.random();
            total += num;
            if(i % 100 == 0) {
                document.writeln("Generated " + i + " numbers...");
            }
            
        }
        var aver = total / max;
        //rounding up to 2 decimal places
        aver = Math.round(aver * 1000) / 1000;
        document.writeln("<h3>List " + j + "- Average of " + max + " numbers: " + aver + "</h3>");
        
    }
    document.writeln("ending createRandom...");
}




