/*
Destructuring Assignment to Extract Values from Objects
Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

Consider the following ES5 code:
*/

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
//name would have a value of the string John Doe, and age would have the number 34.


//Here's an equivalent assignment statement using the ES6 destructuring syntax:

const { name, age } = user;
/*Again, name would have a value of the string John Doe, and age would have the number 34.

Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.

You can extract as many or few values from the object as you want.
*/

const info = {
  name: 'Dave Joe',
  age: 32
}
 const {name, age} = info;
console.log(name, age)// Dave Joe 32



const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
onst {today, tomorrow} = HIGH_TEMPERATURES
console.log(today, tomorrow)//77 80


let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
//console.log(duck.sayName()); //The name of this duck is Aflac.
const {sayName} = duck;
console.log(sayName())//The name of this duck is Aflac
