// * Data Types
// ?Boolean true false
//? String "hello"
//? numbers 11 3.14
//? undefined / null

// Arrays [1,2,3,4,5]
// Arrays ["a","b","c","d","e"]

var animals = ["Zebra", "Lion", "Turtle"];
var sports = ["football", "ski", "tennis"];

var personArray = ["John", "Doe", 33, "Pizza", false];

// Objects { }
//* creating an object
var personObj = {};
// console.log(personObj);

// create some attr for this obj

personObj.name = "Amy";
personObj.age = 25;

// console.log(personObj);

// create the whole obj
var car = {
	wheels: 4,
	doors: 2,
	engine: "V8",
	isSportCar: true,
};

// console.log(car);

//? dot notation
// console.log(car.wheels);
//? bracket notation
// console.log(car["wheels"]);

var taco1 = {
	tortilla: "soft corn tortilla",
	protein: "tinga chicken",
	cheese: "cotija cheese",
	toppings: ["lettuce", "pico de gallo", "guacamole"],
	tacoInfo: function () {
		console.log("Tortilla: " + taco1.tortilla);
		console.log("Protein:  " + taco1.protein);
		console.log("Cheese:   " + taco1.cheese);
		console.log("Toppings: " + taco1.toppings);
	},
};
taco1.tacoInfo();
// we can now get all the delicious taco facts by
// taco1.tacoInfo(); // note we call this like a function because it is a function
