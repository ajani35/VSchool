const readlineSync = require('readline-sync');

var num1 = readlineSync.questionInt("Enter your first number: ");
var num2 = readlineSync.questionInt("Enter your second number: ");
var interOperation = readlineSync.question("Do you want to add, sub, div, or multiply? ");

function addNumbers(num1, num2) {
    return num1 + num2;
}

function subtractNumbers(num1, num2) {
    return num1 - num2;
}

function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

function divideNumbers(num1, num2) {
    return num1 / num2;
}

function nodeCalculator(num1, num2, interOperation) {
    if (interOperation == "add"){
        console.log("The first number is: " + num1 + "" +  " plus the second number: " + num2 + "" +  " gives you the answer of: " + "" + addNumbers(num1, num2));
    }
    else if (interOperation == "sub"){
        console.log("The first number is: " + num1 + "" +  " minus the second number: " + num2 + "" +  " gives you the answer of: " + "" + subtractNumbers(num1, num2));
    }
    else if (interOperation == "multiply"){
        console.log("The first number is: " + num1 + "" +  " multiply the second number: " + num2 + "" +  " gives you the answer of: " + "" + multiplyNumbers(num1, num2));
    }
    else if (interOperation == "div") {
        console.log("The first number is: " + num1 + "" +  " divided by the second number: " + num2 + "" +  " gives you the answer of: " + "" + divideNumbers(num1, num2));
    }

}
nodeCalculator(num1, num2, interOperation);

/* help with this assignment: Valencia Parr
https://portfolium.com/entry/javascript-calculator-using-node-and-readline-sync*/
