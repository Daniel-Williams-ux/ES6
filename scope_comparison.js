/*When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.
  When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to th   at block, statement, or expression.
 */

var  numArray = [];
for (var i =0; i < 3; i++) {
	numArray.push(i);
}
console.log(numArray); //[0, 1, 2, 3]
console.log(i); // 3

//This code is similar to the following:

var numArray = [];
var i; 
for (var i = 0; i < 3; i++) {
	numArray.push(i);
}
console.log(numArray);
console.log(i);

/*
 This behavior will cause problems if you were to create a function and store it for later use inside a for loop that us es the i variable. This is because the stored function will always refer to the value of the updated global i variable.
 */

var myNum;
for (var i = 0; i < 3; i++) {
	if (i === 2) {
		myNum = function () {
			return i;
		};
	}
}
console.log(myNum()); // 3

/*
 As you can see, printNumTwo() prints 3 and not 2. This is because the value assigned to i was updated and the printNumT wo() returns the global i and not the value i had when the function was created in the for loop. The let keyword does n ot follow this behavior:
 */

let myNum;
for (let i = 0; i < 3; i++) {
	if (i === 2) {
		myNum = function () {
			return i;
		};
	}
}
console.log(myNum()); // 2
console.log(i) //error



function differentScope() {
	let i = 'function scope';
	if (true) {
		let i = 'block scope';
		console.log('This scope i is: ', i);
	}
	console.log('This scope i is: ', i);
	return i;
}
differentScope();
// This scope i is: block scope
// This scope i is: function scope
