/* Work through the 4 parts of the problem solving process the best you can
with this one, there is a part 2 explained in the Scrimba link for this Notion
Page.

DESCRIPTION:
The year is 1985. Your job is to build a text-based (console) RPG
game. The point is to better master JavaScript functions, loops, conditionals,
and some data types. */


var rs = require('readline-sync');

var winDefault = false;

console.log('Welcome to 622 South Alexander Alley');
const playerName = rs.question('What is your name? ');
rs.question("Hi, " + playerName + "! " + "Press Enter to Begin: ");

const options = ['walk', 'run', 'print', 'quit'];

const gifts = ['money bags', 'mase', 'potato chips'];
//push enemies into an empty array
var mother = ['Mom']
var enemies = ['Drug Dealers', 'Thugs', 'Hoodlums'];
var weapons = ['Guns', 'Bats & Chains', 'Brass Knuckles'];
// Enemies and their different weapons and other things
let userNameHealth = 45;
let pickItUp = gifts[Math.floor(Math.random()*gifts.length)];
let armed = weapons[Math.floor(Math.random()*weapons.length)];
var time = [];   


function walk() {
    const fightPower = Math.floor(Math.random() * (10 - 1) + 2);
    const enemy = enemies[Math.floor(Math.random() * enemies.length)];
    let enemiesHealth = 45;
    const enemiesPower = Math.floor(Math.random() * (10 - 3) + 2);
    
    
    const choose = rs.keyInSelect(options, 'What do you want to do now? ');

    if (options[choose] == 'quit') {
        return userNameHealth = 0;
        // When a User chooses this option... it will end the game.
    } else if (options[choose] == 'print') {
        console.log(playerName + ': \n' + userNameHealth + '\nGift: ' + pickItUp);
        // This option will print the player's name, health, and gift.        
    } else if (options[choose] == 'run') {
        console.log("There is still a chance that you can make it home and chill!!!");
        
    } else if (options[choose] === 'walk') {
        let key = Math.random();
        if (key <= .3) {
            console.log("It's gonna take you a National Holiday to get home!!!");
        } else if (key >= .3) {
            console.log("The " + enemy + " have made their way to you with " + armed + " Watch Out!!");
              
    
        
            // User and Enemy Information and different choice console logs.
        
            while(enemiesHealth > 0 && userNameHealth > 0) {
                
                const user = rs.question('Is there something else that you want to do? Enter "p" to panic. Enter "a" to attack, or Enter "d" to dodge them. ' );

                switch (user) {

                    case 'p':
                        const panic = Math.random();
                        if(panic < .3) {
                            console.log("Don't worry, it's too early to come inside right now!!!");
                        } else {
                            console.log("It's too late to panic now, either fight or die!!!");
                            break;
                        }
                    
                
            
                    case 'a':
                        enemiesHealth -= fightPower;
                        console.log('You attacked the ' + enemy + ' with ' + fightPower + ' attack power.');

                        userNameHealth -= enemiesPower;
                        console.log('The Enemy just attacked you with ' + enemiesPower + ' attack power.');

                        if (enemiesHealth <= 0) {
                            console.log('You killed ' + enemy + '.\n' + enemy + ' left: ' + pickItUp);
                            let extraGift = Math.random();
                            if (extraGift <= .5) {
                                time.push(pickItUp);
                            }
                        } else if (userNameHealth <= 0) {
                            console.log(enemy + " have defeated you and now you are dead. At least your " + mother + " won't come looking for you!! ");
                        }
                    


                    case 'd':
                        const dodge = Math.random();
                        if (dodge >= .5) {
                            console.log(playerName + " you won't make it home like that, the way you are lolly gaging... ")
                        } else {
                            console.log(playerName + " why won't you just fight and get this over with... You can't go anywhere now")
                            winDefault = true;
                        }
                    

                }
            }
        }   
    } 
}    
// If User's Health is equal to 45, The game restores and starts over.
while(userNameHealth > 0) {
    userRestore = function(){
        playerNameActive = true;
        userNameHealth = 45;
    };
    userRestore();
    walk();
}


 

winDefault ? console.log(playerName + " CNBC is saying some bad things about you and your Neighborhood, Bro!!!") : console.log(playerName + " you made it home... You sly fox. Don't stay out like that again bro or " + mother + " gonna put a beating on you!!") 