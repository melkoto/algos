// Example with strings
// Capitalise each name
let arrOfStr = ['juan', 'mozart', 'albert', 'movsar'];
let newArrOfStr = arrOfStr.map((name, index) => {
  return `${name[0].toUpperCase()}${name.slice(1)}`;
});
console.log(newArrOfStr);

// Example with numbers
// Multiply each number by 10 and minus 20
let arrOfNums = [1, 2, 3, 4, 5];
let newArrOfNums = arrOfNums.map((num) => num * 10 - 20);
console.log(newArrOfNums);

// Example with objects
// Add isHuman property to each object
let arrOfObjs = [
  { name: 'Mo', year: 31 },
  { name: 'Janetta', year: 22 },
  { name: 'Juan', year: 29 },
];
let newArrOfObjs = arrOfObjs.map((person) => ({ ...person, isHuman: true }));
console.log(newArrOfObjs);

// Example with arrays
// Capitalise each name in every array
let arrOfArrs = [
  ['alina', 25],
  ['albert', 100],
  ['juan', 22],
];
let newArrOfArrs = arrOfArrs.map((arr) => {
  let name = arr[0];
  let age = arr[1];
  let firstLetter = name[0];

  return [`${firstLetter.toUpperCase()}${name.slice(1)}`, age];
});
console.log(newArrOfArrs);

// 4 TASKS

// Chained maps
// Square all numbers and multiply every number by 3
let ans1 = arrOfNums.map((num) => num ** 2).map((num) => num * 3);

// Write a function which takes array of numbers as parameter and returns
// array of char code of every number
const charCodes = (arr) => {
  return arr.map((num) => `${num}`.charCodeAt(0));
};
charCodes(arrOfNums);

// Write a function which takes array of numbers as a parameter
// and returns array with indexes of even numbers
const evenNums = (arr) => {
  return arr.map((num, ind) => {
    if (num % 2 === 0) return ind;
    return -1;
  });
};
evenNums(arrOfNums);

// Write array.map function
function myMap(arr, cb) {
  const arrs = [];

  for (let i = 0; i < arr.length; i++) {
    const res = cb(arr[i], i, arr);
    arrs.push(res);
  }
  return arrs;
}
