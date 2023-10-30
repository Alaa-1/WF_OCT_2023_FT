// console.log("linked !!!");

// console.log(document.querySelector("h1"));

// var nameTag = document.querySelector("#name-tag");
// function setName(element) {
// 	console.log(element.value);
// 	nameTag.innerText = element.value;
// }

function setColor() {
	// target the input and get the user value
	var userColor = document.querySelector(".color-input");
	console.log(userColor.value);

	var pTag = document.querySelector(".card p");

	// grab the element to display
	pTag.innerText = "You chose this color: " + userColor.value;

	// change background color based on user input
	var bodyTag = document.querySelector("body");

	bodyTag.style.backgroundColor = userColor.value;
}

function chooseLunch(element) {
	console.log("You picked " + element.value);
}

// callback function

function message() {
	console.log("Delayed message");
}

console.log("Start");
setTimeout(message, 3000);
setTimeout(function message2() {
	console.log("Delayed 1s");
}, 1000);
console.log("End");
