/**
 * rangeSum()
 * ---------------------
 * Takes in range (inclusive) and returns the sum of all numbers in that range.
 * @param {number} min
 * @param {number} max
 * @returns {number}
 *
 * EXAMPLE:
 *  rangeSum(3, 7);
 *  //> 25
 *  (3 + 4 + 5 + 6 + 7 = 25)
 */
function rangeSum(min, max) {
// default val 0
let total = 0;

for (let i = min; i <= max; i++) {
  total += i;
}

return total;

}

/**
 * rangeOdd()
 * ---------------------
 * Takes in range (inclusive) and returns an array in decreasing order of only the odd numbers in that range.
 * @param {number} min
 * @param {number} max
 * @returns {number[]}
 *
 * EXAMPLE:
 *  rangeOdd(10, 15);
 *  //> [ 15, 13, 11 ]
 */

// odd number if its number % 2 and the remainder isnt 0
// returns an array so default val is [];
// decreasing order -> use i--? or unshift
// nevermind i-- did an infinite loop so ig unshift

function rangeOdd(min, max) {

let oddNum = [];

for (let i = min; i <= max; i++) {
  if (i % 2 !== 0) {
    oddNum.unshift(i);
  }
}

return oddNum;

}

/**
 * rangeEveryOther()
 * ---------------------
 * Takes in range (inclusive) and returns an array in increasing order of only every other element. Start by including the first number.
 * @param {number} min
 * @param {number} max
 * @returns {number[]}
 *
 * EXAMPLE:
 *  rangeEveryOther(11, 18);
 *  //> [ 11, 13, 15, 17 ]
 */

// default val array
// increasing order + every other number
function rangeEveryOther(min, max) {

  let numArr = [];

  for (let i = min; i <= max; i += 2) { // get every other number
    numArr.push(i);
  }

  return numArr;

}

/**
 * containsWhileLoop()
 * ---------------------
 * Returns whether or not the `target` value exists in the array.
 *
 * NOTE: Must be written with a `while` loop.
 *
 * NOTE: Must NOT contain the `.includes()` method.
 *
 * @param {*[]} array
 * @param {number|string} target
 * @returns {boolean}
 *
 * EXAMPLE:
 *  containsWhileLoop([ 5, 2, 4 ], 4);
 *  //> true
 *
 *  containsWhileLoop([ "left", "up", "right" ], "down");
 *  //> false
 */

// use while loop
// returns whether or not target is in array
// dont use includes though
// default val boolean ??? maybe
// i = 0

function containsWhileLoop(array, target) {

  let result = false; // marked true the first time
  let i = 0;

  while (i < array.length) { // while length of array is greater than i
    if (array[i] === target) {
      result = true;
    }
    i++
  }

  return result;

}

/**
 * containsForLoop()
 * ---------------------
 * Returns whether or not the `target` value exists in the array.
 *
 * NOTE: Must be written with a `for` loop.
 *
 * NOTE: Must NOT contain the `.includes()` method.
 *
 * @param {*[]} array
 * @param {number|string} target
 * @returns {boolean}
 *
 * EXAMPLE:
 *  containsForLoop([ 5, 2, 4 ], 4);
 *  //> true
 *
 *  containsForLoop([ "left", "up", "right" ], "down");
 *  //> false
 */

// same thing as before but for loop

function containsForLoop(array, target) {

  let result = false; // marked true the first time

  for (i = 0; i < array.length; i++) {
    if (array[i] === target) {
      result = true;
    }
  }

  return result;

}

/**
 * targetCount()
 * ---------------------
 * Returns how many times the `target` occurs in the array.
 * @param {*[]} array
 * @param {number|string} target
 * @returns {number}
 *
 * EXAMPLE:
 *  targetCount([ 10, 20, 10, 20, 30 ], 10);
 *  //> 2
 */

// default val 0

function targetCount(array, target) {

  let result = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      result++
    }
  }

  return result;

}

/**
 * firstIndexFound()
 * ---------------------
 * Returns the first index that the `target` is found at in the array. If the `target` is not found, it should return `-1`.
 *
 * NOTE: You may NOT use the `.indexOf()` method.
 *
 * @param {*[]} array
 * @param {number|string} target
 * @returns {number}
 *
 * EXAMPLE:
 *  firstIndexFound([ "left", "right", "left" ], "left");
 *  //> 0
 *
 *  firstIndexFound([ "left", "right", "left" ], "up");
 *  //> -1
 */

// returns first index that target is found, if not found return -1

function firstIndexFound(array, target) {

  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      // result = array.indexOf(target); forgot we werent supposed to use indexof sorry
      return i
     } // else if (array[i] !== target) {
    //   return -1
    // }
  }

  return -1;

}

/**
 * lastIndexFound()
 * ---------------------
 * Returns the last index that the `target` is found at in the array. If the `target` is not found, it should return `-1`.
 *
 * NOTE: You may NOT use the `.indexOf()` method.
 *
 * @param {*[]} array
 * @param {number|string} target
 * @returns {number}
 *
 * EXAMPLE:
 *  lastIndexFound([ "left", "right", "left" ], "left");
 *  //> 2
 *
 *  lastIndexFound([ "left", "right", "left" ], "up");
 *  //> -1
 */

// basically the same as above but for last index

function lastIndexFound(array, target) {
// i = array.length - 1 because its looking for last index
// i needs to be greater than 0

  for (let i = array.length - 1; i > 0; i--) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;

}

/**
 * timesIndex()
 * ---------------------
 * Returns a new array where each element has been multiplied by its index.
 * @param {number[]} elements
 * @returns {number[]}
 *
 * EXAMPLE:
 *  timesIndex([ 7, 10, 11 ]);
 *  //> [ 7 * 0, 10 * 1, 11 * 2 ]
 *  //> [ 0, 10, 22 ]
 */

// new array where each number * its index
// default val [];
// array[i] * i

function timesIndex(array) {

let result = [];

  for (let i = 0; i < array.length; i++) {

    result.push(array[i] * i);

  }

return result;
}

/**
 * cumulativeSum()
 * ---------------------
 * Returns a new array where each element is the cumulative sum in the array, up until that point.
 * @param {number[]} array
 * @returns {number[]}
 *
 * EXAMPLE:
 *  cumulativeSum([ 5, 2, 9 ]);
 *  //> [ 5, 5 + 2, 5 + 2 + 9 ]
 *  //> [ 5, 7, 16 ]
 */

// new arr where each sum is added to each other up until end of arr
// default val [];
// actually there should be two variables one default val and one for the sum
// += adds val of right operand to a var and assigns result to var

function cumulativeSum(array) {

let result = [];
let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    result.push(sum);
  }

return result;

}

// Do not change anything below this line.
module.exports = {
  rangeSum,
  rangeOdd,
  rangeEveryOther,
  containsWhileLoop,
  containsForLoop,
  targetCount,
  firstIndexFound,
  lastIndexFound,
  timesIndex,
  cumulativeSum,
};
