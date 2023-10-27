var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random(); // 0 - 0.9999999
    
// console.log(floor);
// console.log(ceiling);
// console.log(random);

// 1 - Dice Roller
//random number must be between 1 and 6 inclusive
function d6() {
    var roll = Math.random(); // 0.0001 *6 .round() --> 0
    // your code here
    // console.log("Ceil == > ",roll * 6);
    // console.log("Floor == > " ,roll * 7);
    var randomValue  = Math.ceil(roll*6)
    console.log("Roll  =  ", roll);
    console.log("Random Value  = ",  randomValue);
    return roll;
}
    
// var playerRoll = d6();
// console.log("The player rolled: " + playerRoll);

// 2 - Consult the Oracle
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function randomAnswer(){
    // return a random answer from the array

    //  1 - Generate a random value
    var randomVal = Math.random()
    //  2 - Get a random Answer from the array 
    var answerIndex = Math.floor(randomVal*lifesAnswers.length)
    //  3 - Return the answer
    return lifesAnswers[answerIndex]
}
// d6()
console.log("Random Answer : ", randomAnswer());