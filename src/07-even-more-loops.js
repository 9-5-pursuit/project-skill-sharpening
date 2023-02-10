/**
 * shoutForLoop()
 * ---------------------
 * Takes in an array and returns a new array, adding "!" to each string.
 *
 * NOTE: You must use a `for` loop.
 *
 * @param {string[]} array
 * @returns {string[]}
 *
 * EXAMPLE:
 *  shoutForLoop([ "A", "Very", "Happy", "Array" ]);
 *  //> [ "A!", "Very!", "Happy!", "Array!" ];
 */

// adds "!" to each string
// default val is [];

function shoutForLoop(array) {
  
let shoutArr = [];

  for (let i = 0; i < array.length; i++) {
    shoutArr[i] = array[i] + "!";
  }

return shoutArr;

}

/**
 * shoutWhileLoop()
 * ---------------------
 * Takes in an array and returns a new array, adding "!" to each string.
 *
 * NOTE: You must use a `while` loop.
 *
 * @param {string[]} array
 * @returns {string[]}
 *
 * EXAMPLE:
 *  shoutWhileLoop([ "A", "Very", "Happy", "Array" ]);
 *  //> [ "A!", "Very!", "Happy!", "Array!" ];
 */

// same thing but with ah while loop
function shoutWhileLoop(array) {

let shoutArr = [];
let i = 0;

  while (i < array.length) {
    shoutArr[i] = array[i] + "!";
    i++;
  }

  return shoutArr;

}

/**
 * shoutForOfLoop()
 * ---------------------
 * Takes in an array and returns a new array, adding "!" to each string.
 *
 * NOTE: You must use a `for...of` loop.
 *
 * @param {string[]} array
 * @returns {string[]}
 *
 * EXAMPLE:
 *  shoutForOfLoop([ "A", "Very", "Happy", "Array" ]);
 *  //> [ "A!", "Very!", "Happy!", "Array!" ];
 */

// same as last two but with for of
function shoutForOfLoop(array) {

let shoutArr = [];

  for (let shout of array) {
    shoutArr.push(shout + "!");
  }
  return shoutArr;

}

/**
 * sumArray()
 * ---------------------
 * Returns the sum of all values in the array.
 * @param {number[]} array
 * @returns {number}
 *
 * EXAMPLE:
 *  sumArray([ 10, 0, 10, 11 ]);
 *  //> 31
 */

// adds up all vals in array
// +=

function sumArray(array) {

let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

return sum;

}

/**
 * oddArray()
 * ---------------------
 * Returns a new array of only the odd numbers from the original array.
 * @param {number[]} array
 * @returns {array}
 *
 * EXAMPLE:
 *  oddArray([ 11, 15, 20, 22, 37 ]);
 *  //> [ 11, 15, 37 ]
 */

// find odd number by number % 2 !== 0
// returns new arr of only the odd nums from original arr

function oddArray(array) {

let oddNumArr = [];

  for (let oddNum of array) {
    if (oddNum % 2 !== 0) {
      oddNumArr.push(oddNum);
    }
  }

return oddNumArr;

}

/**
 * evenArray()
 * ---------------------
 * Returns a new array of only the even numbers from the original array.
 * @param {number[]} array
 * @returns {array}
 *
 * EXAMPLE:
 *  evenArray([ 11, 15, 20, 22, 37 ]);
 *  //> [ 20, 22 ]
 */

// same as above but with even numbers this time
// get even number by doing number % 2 === 0
function evenArray(array) {

let evenNumArr = [];

  for (let evenNum of array) {
    if (evenNum % 2 === 0) {
      evenNumArr.push(evenNum);
    }
  }

return evenNumArr;
}

/**
 * findSmallest()
 * ---------------------
 * Returns the smallest number from the array.
 * @param {number[]} array
 * @returns {number}
 *
 * EXAMPLE:
 *  findSmallest([ 0, 11, -2, 5 ]);
 *  //> -2
 */

// set default val as 0 and keep replacing it with the smallest num
// smallest Num < array[i] <- like that
function findSmallest(array) {

let smallestNum = array[0];

for (let i = 1; i < array.length; i++) { // i cant equal 0 because its looking for smallest number
  if (smallestNum > array[i]) {
    smallestNum = array[i];
  }
}

return smallestNum;
}

/**
 * findLargest()
 * ---------------------
 * Returns the largest number from the array.
 * @param {number[]} array
 * @returns {number}
 *
 * EXAMPLE:
 *  findLargest([ 0, 11, -2, 5 ]);
 *  //> 11
 */

// same as above but with largest num
function findLargest(array) {

let largestNum = array[0];

  for (let i = 0; i < array.length; i++) {
    if (largestNum < array[i]) {
      largestNum = array[i];
    }
  }

return largestNum;

}

/**
 * findEqual()
 * ---------------------
 * Returns whether or not the `selected` value can be found in the array.
 * @param {number[]} array
 * @param {number} selected
 * @returns {boolean}
 *
 * EXAMPLE:
 *  findEqual([ 0, 11, -2, 5 ], 11);
 *  //> true
 *
 *  findEqual([ 0, 11, -2, 5 ], 9);
 *  //> false
 */

// returns if selected val is in the array or not
// array.includes()

function findEqual(array, selected) {

return array.includes(selected);

}

/**
 * removeDuplicates()
 * ---------------------
 * Returns a new array like the original array except there are no duplicates. The numbers in the array should be ordered similarly.
 *
 * HINT: The `.includes()` method could help here.
 *
 * @param {number[]} array
 * @returns {number[]}
 *
 * EXAMPLE:
 *  removeDuplicates([ 1, 11, 2, 3, 4, 4, 2, 11, 9 ]);
 *  //> [ 1, 11, 2, 3, 4, 9 ]
 */

// new arr has to resemble old array and be arranged in a similar order without duplicate nums
// default val [];
function removeDuplicates(array) {

let dupArr = [];

for (let i = 0; i < array.length; i++) {
  // if (dupArr.includes(array[i])) 
  if (!dupArr.includes(array[i])) { // if it doesnt have inputted element put it in dupArr arrayo
    dupArr.push(array[i]);
  }
}

return dupArr;
}

// Do not change any code below this line.
module.exports = {
  shoutForLoop,
  shoutWhileLoop,
  shoutForOfLoop,
  sumArray,
  oddArray,
  evenArray,
  findSmallest,
  findLargest,
  findEqual,
  removeDuplicates,
};
