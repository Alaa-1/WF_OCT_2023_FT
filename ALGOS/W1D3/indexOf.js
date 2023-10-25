/* 
  Given an array and an item to search for,
  return the index where the item is found,

  return -1 to represent not found
  */

const arr1 = ["a", "b", "c"];
const searchItem1 = "c";
const expected1 = 2;

const arr2 = ["a", "b", "c"];
const searchItem2 = 5;
const expected2 = -1;

const arr3 = ["c", "a", "b", "c"];
const searchItem3 = "c";
const expected3 = 0;

const arr4 = [];
const searchItem4 = 5;
const expected4 = -1;

function indexOf(items, searchItem) {
	// code here
	// Iterate/loop through the array(items) Start: i = 0 | Stop: i < itmes.length | Step: i++
	for (var i = 0; i < items.length; i++) {
		// check if the current item's value is equal to searchItem
		if (items[i] === searchItem) {
			// if they're equal return i searchItem's index
			return i;
		}
	}

	return -1;
}

// Tests
// const result1 = indexOf(arr1, searchItem1);
// console.log(result1, "should be", expected1);

// const result2 = indexOf(arr2, searchItem2);
// console.log(result2, "should be", expected2);

// const result3 = indexOf(arr3, searchItem3);
// console.log(result3, "should be", expected3);

// const result4 = indexOf(arr4, searchItem4);
// console.log(result4, "should be", expected4);

// WHILE LOOP VS FOR LOOP

number = 9;
var i = 0;
while (i < 9) {
	console.log("not equal");
	i++;
}
console.log(i);
