// ADD A PAIR OF NUMBERS
function add(x, y) {
    let rslt = x + y;
    return rslt
}
let nxt_rslt = add(75, 25) + add(50, 27) + add(32, 19);
console.log("Result : " + nxt_rslt);

// ODD OR EVEN ?
function isEven(num) {
    let conclusion;
    if (num % 2 === 0) {
        conclusion = "Even";
    } else {
        conclusion = "Odd";
    }
    return conclusion;
}

console.log("Conclusion = Number Is :" + isEven(7));
console.log("Conclusion = Number Is :" + isEven(128));

// CELCIUS TO FARENHEIGHT

function CtoF(C) {
    let F;
    F = ((C * (9 / 5)) + 32);
    return F;
}

console.log("TEMP = " + CtoF(34) + "°F");

// NUMBER SQUARED
function squared(x) {
    let y;
    y = x * x;
    return y;
}

console.log("Number Squared IS = " + squared(5));

// GET FIRST CHARACTER OR A STRING
function getNthChar(str) {
    return str.charAt(0)
}
console.log("The First Character Of The Given String Is :" + getNthChar("Got First Character OF The String"));

// Main 5 Done 


// Extra 5

