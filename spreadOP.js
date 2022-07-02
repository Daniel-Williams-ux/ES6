/*
Use the Spread Operator to Evaluate Arrays In-Place
ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

The ES5 code below uses apply() to compute the maximum value in an array: */
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
maximus would have a value of 89.
/*
We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain.
*/
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr)
console.log(maximus);//89

/*...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:*/
const spreaded = ...arr;

//Copy all contents of arr1 into another array arr2 using the spread operator.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line
console.log(arr2);

/*Code Explanation
Unpacking the arr1 using the spread operator and then copying those values to arr2*/
 


//IMPORTANT USES OF THE SPREAD OPERATOR

//1.Using spread operator to concatenate
arr1 = ["Thywill"];
arr2 = ["Olayemi"];
arr1 = [...arr1,...arr2];
console.log(arr1) //["Thywill", "Olayemi"]

//2.copy arrays
arr1 = [1, 2, 3,];
arr2 = [...arr1];
arr2.push(4)
console.log(arr1)//[1, 2, 3,]
console.log(arr2)//[1, 2, 3, 4]

//3.Add the element of an existing array into a new array
const day1 = ['fri', 'sat',];
const day2 = ['mon', 'tues', 'wed', 'thurs', ...day1, 'sun'];
console.log(day2);//['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

//pass elements of an array as arguments to a function
let nums = [1, 2, 3];
function addThreeNumbers(x, y, z) {
  return 1 + 2 + 3;
}
console.log(addThreeNumbers(...nums));//6

let nums = [1, 2, 3];
function addThreeNumbers(x, y, z) {
  let nums = [1, 2, 3];
  console.log(x+y+z)
}
addThreeNumbers(...nums);//6
