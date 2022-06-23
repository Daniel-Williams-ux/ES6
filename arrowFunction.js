/*In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

To achieve this, we often use the following syntax: */


//regular function
const myFunc = function() {
  const myVar = "value";
  return myVar;
}

//arrow function
const myFunc = () => {
  const myVar = "value";
  return myVar;
}

const magic = () => {
  return new Date();
};

/*When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:*/
const myFunc = () => "value";

const magic = function() {
  return new Date();
}
//Re-written as
const magic = () => new Date();


