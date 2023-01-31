/*Create a function getStudentsByLocation that returns an array of objects who are located in a specific city.

It should accept a list of students (from getListStudents) and a city (string) as parameters.

You must use the filter function on the array.*/


function getStudentsByLocation(list, city) {
  if (!Array.isArray(list) || typeof city !== 'string') return [];
  return list.filter(value => value.location === city)
}

const list =  [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

console.log(getStudentsByLocation(list, 'San Francisco'));
