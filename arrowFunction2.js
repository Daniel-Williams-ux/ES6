//Just like a regular function, you can pass arguments into an arrow function.
const doubler = (item) => item * 2;
doubler(4);

//If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.
const doubler = item => item * 2;

//It is possible to pass more than one argument into an arrow function.
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);

const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));