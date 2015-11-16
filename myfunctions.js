/*
 * This is a collection of functions
 */

/*
 * calculates average of four numbers
 */
function average(a,b,c,d) {
    return (a + b + c + d) / 4;
}

/*
 * This represents a business card (kind of a constructor)
 */
function Card(name, address, phone, email) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.printCard = printCard;

}

/*
 * formatted printing of the business card
 */
function printCard() {
    var line0 = "<hr>\n";
    var line1 = "<b>Name: </b> " + this.name + "<br>";
    var line2 = "<b>Address: </b> " + this.address + "<br>";
    var line21 = "<b>Email: </b> " + this.email + "<br>";
    var line3 = "<b>Phone: </b> " + this.phone + "<hr>\n";
    document.write(line0, line1, line2, line21, line3);
}

/*
 * time based greeting
 */
function greet(who1, who2) {
    var now = new Date();
    var greeting = "Good ";
    if(now.getHours() <= 12) {
        greeting += "morning, ";
    } else if((now.getHours() > 12) && (now.getHours() < 18)) {
        greeting += "afternoon, ";
    } else {
        greeting += "evening, ";
    }
    return (greeting + who1 + ' and ' + who2);
}

/*
 * tell what day it is
 */
function tellDay() {
    var now = new Date();
    var greeting = "Today is ";
    switch(now.getDay()) {
        case 1:
            greeting += "monday";
            break;
        case 2:
            greeting += "tuesday";
            break;
        case 3:
            greeting += "wednesday";
            break;
        case 4:
            greeting += "thursday";
            break;
        case 5:
            greeting += "friday";
            break;
        case 6:
            greeting += "saturday";
            break;
        case 0:
            greeting += "sunday";
            break;
    }

    return greeting;
}

