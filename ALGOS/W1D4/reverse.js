// ? how do i swap 2 variables?

// var A = "grape";
// var B = "orange";
// * create a temp var to store one of the values
// var temp = A;

// * swap
// A = B;
// B = temp;
// console.log(A, B, temp)

// console.log(B + " and " + A);

//-----------------
// Reversing an array
// Write a function `reverseArray` that takes in an array, and returns the array reversed,
// try it without creating a new array

var arr1 = [11, 22, 33, 44, 55];
// arr1[2]      i        j

// expected // [55, 44, 33, 22, 11];

var arr2 = ["a", "b", "c", "d", "e"];
// ["e", "d", "c", "b", "a"];

// swap
function reverse(genericArray) {
	// code here
	// Loop through the genericArray
	for (var i = 0; i < genericArray.length / 2; i++) {
		// create a temp variable
		var temp = genericArray[i];
		genericArray[i] = genericArray[genericArray.length - 1 - i];
		genericArray[genericArray.length - 1 - i] = temp;
	}
	return genericArray;
}

// return a new array
function reverse2(someArray) {
	var newArray = [];

	// loop over the arry
	for (var i = someArray.length - 1; i >= 0; i--) {
		newArray.push(someArray[i]);
	}
	return newArray;
}
console.log(arr2);
console.log(reverse(arr2));
