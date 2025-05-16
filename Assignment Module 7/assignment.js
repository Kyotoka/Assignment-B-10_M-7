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

// POSSITIVE OR NEGGETIVE

function checkNumber(number) {
    if (number > 0) {
    return "Positive number";
    } else if (number < 0) {
    return "Negative number";
    } else {
    return "Zero";
    }
}

console.log("Result : " + checkNumber(5));


// MULTIPLY NUMBER
function mlt(x, y) {
    if (typeof x !== "number")
        return "1st entry is not a number"
    else if (typeof y !== "number")
        return "2nd entry is not a number"
    else return x * y;
}
console.log(mlt(10, "s"));
console.log(mlt(12, 7));
console.log(mlt("y", 7));

// MIN TO SEC
function mTs(m) {
    let s;
    s = m * 60;
    return s;
} 
console.log(mTs(5) + "s");


// CONCATE STRING
function strCon(c1, c2) {
    return c1 + c2;
}

console.log("like what", "you see ?")


// CHECK IF THE SENTENCE HAS A CERTAIN WORD
function checkStr(sentence, word) {

return sentence.includes(word);
}
console.log(checkStr("Hi there", "boy"));
console.log(checkStr("Hi there boy", "boy"));
