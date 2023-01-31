//Create a function getListStudentIds that returns an array of ids from a list of object.

//This function is taking one argument which is an array of objects - and this array is the same format as getListStudents from the previous task.

//If the argument is not an array, the function is returning an empty array.

//You must use the map function on the array.
function getListStudents(arr) {
   return arr.map(value => value.id)
 }
const arr =  [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
const result = getListStudents(arr)
console.log(result)

//Using ternary operator

const getListStudentIds = (arr) => {
return Array.isArray(arr) ? arr.map(student => student.id) : [];
};
// if it is an empty array
const getListStudents = (arr) => {
   if (!Array.isArray) {
     return [];
   }
   return arr.map(value => value.id)
 }
const arr =  []


const result = getListStudents(arr)

//otherwise
const getListStudents = (arr) => {
   if (!Array.isArray) {
     return [];
   }
   return arr.map(value => value.id)
 }
const arr =  [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
const result = getListStudents(arr)
console.log(result) //[ 1, 2, 5 ]

console.log(result)
