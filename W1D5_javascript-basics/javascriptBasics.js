// Comment ctrl+/ 
// One line comment 
/*
Multi 
line
comment
*/ 

// var keyword --- variable name -- value
// ! follow naming convention camelCaseConvention 
var firstName = "Alex"

var i
i  = "Yes"
// - Primitive Types
// 1 - String
var lastName = "Smith"
var y = "12"

// 2 - Number
var age = 35
var  bmi = 1.74

//  3 - Boolean
var hasCovid = false
var isAdmin = false

// Null vs Undefined vs not defined

var bestSinger = null
var favFood
// console.log("Fav Food  = ",favFood);
// console.log(`User Full Name is ${firstName} ${lastName} and he is ${age} years old`)


// Conditionals
var number  = 12
// if(isAdmin){
//     console.log("You are Welcome");
// }else {
//     console.log("Not Authorized");
// }

// if(number == y){
//     console.log("Equal");
// }else {
//     console.log("Not Equal");
// }
/*
 =  asseign
 == compare values as strings
 === compare values & types
*/ 
// if(number === y) {
// console.log("Equal");
// }else {
//     console.log("Not Equal");
// }

// for(var i = 1 ; i<=10; i++) {
//     console.log("Value" , i);
// }

// var e = 10
// while(e<20){
//     console.log(e);
//     e++
// }
// Arrays complex data types  = structured types
//         0                                                                   arr.length-1 
var arr  = [1,2,3,firstName, isAdmin,bmi, "Just test", true,[true, false, "Yes"]]

// console.log(arr[8][1]);

function sayHi(){
    console.log("Hi 😁");
}

function sayHello(name) {
    // console.log(" 1 - Hello " + name);
    // console.log(" 2 - Hello", name);
    // console.log(` 3 - Hello ${name}`);
    return ` 3 - Hello ${name}`
}
// execute the function
// sayHi()
sayHello("Sam")
console.log(console.log("Hi"));