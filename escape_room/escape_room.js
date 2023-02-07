/* 

This is a Escape Room Project.

The game compose of the user being stuck inside a room.
You, being the user, need to find the key in order to leave the room.
There is also a hole in the wall in your room. If you put your hand in the hole.
You as the user dies.

const readline = require("readline-sync");
const name - readline.question("What is your name?");

*/

var rs = require("readline-sync")


var foundKey = false;
var winDefault = false;
var endEscapeRoom = false


while (!endEscapeRoom){


    var options = ["Put hand in Hold","Open the door", "Look Dumb", "Find the key"];
    var array = rs.keyInSelect(options, "What are you going to do, Sir?");

    switch (array) {
        case 0:
            endEscapeRoom = true;
            break;
        case 1:
            if (!foundKey) {
                foundKey = true;
                console.log("Is this the Key your looking for!\n")
            } else {
                console.log("You might want to look for something else besides your reflection in the mirror.\n ")
            }
            break;

        case 2:
            if (!foundKey) {
                console.log("The door is opened, Homie.... I lied, no it's not!!!\n")
            } else {
                console.log("Congratuations, you get to used whatever you have left of a brain to escape the hole in the room.\n")
            }
            break;
        case 3:
            if (!foundKey) {
                console.log("The door is locked, Bro!!")
            } else {
                console.log("You have escaped with your wits about you, Thanks for playing!!")
                winDefault = true;
                endEscapeRoom = true;
            }
            break;

        default:
            console.log("You won't get out alive going that way....")

    }
} // with help from Kensnow

winDefault ? console.log("EveryBody is happy to see you, man!!!") : console.log("You made the CBS Evening News!!!")

