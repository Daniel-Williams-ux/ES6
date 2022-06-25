/*
In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
*/
function howMany(...args) {
  return "You have passed " + args.length + " arguments."
}
const result1 = howMany(2, 3, 4)
const result2 = howMany(howMany("string", null, [1, 2, 3], { }))
console.log(result1);
console.log(result2);
console.log(typeof(howMany()));

//The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.

//Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.
const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}

//==>
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

console.log (sum(5, 6))

//using regular function
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log (sum(5, 6))
  