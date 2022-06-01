/*
  const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, 
  JavaScript provides a function Object.freeze to prevent data mutation.

  Any attempt at changing the object will be rejected, with an error thrown if the script is running in strict mode.
  */
let data = {
	name: "Thompson",
	age: 23,
	region: "Asia"
};
Object.freeze(data);
object.age = 30;//The obj.data  assignments will result in errors, because our editor runs in strict mode by default.
console.log(data)
