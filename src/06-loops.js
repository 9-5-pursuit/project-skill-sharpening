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
// declaring a variable to hold the sum total.
  let result = 0; 
//  A for ... loop to look through all the numbers 
  for (let i = min; i <= max; i++){
  // add the min and the max 
  result += i;
  }
  // return the values.
  return result;
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
function rangeOdd(min, max) {
  // declring an array variable
  let array = [];
  // A foor ... loop to  run through all the numbers
  for (let i = min; i <= max; i++) {
    // conditional statement to check the if the number is odd or even
    if (i % 2 !== 0) {
 //code's line allowing to add the number at the beginning of the array.
      array.unshift(i);
    }
  }
return array;

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
function rangeEveryOther(min, max) {
// declaring an empty array variable result
  let result = [];
  // A for ... loop to run through all the numbers from the smallest to the greatest. By increementing by 2
  for (let i = min; i <= max; i += 2) {
  // code's line that allows to add an element at the end of the array.
    result.push(i)
  }
  // return the empty array.
  return result;

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
function containsWhileLoop(array, target) {
// declaring a new variable as our default one.
  let gettingTarget = false;
// initiation of the while loop by declaring the value of i to zero.
  let i = 0;
//  a while ... loop checking the length of the array.
  while (i < array.length) {
    // conditional statement to compare the value of the array to the target argument one.
    if (array[i] === target) {
  //  the returning boolean value after comparaison. 
      gettingTarget = true;
    }
    // increementation of the while loop.
    i++
  }
// returning the default value.
  return gettingTarget;

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
function containsForLoop(array, target) {
  // A for ... loop to run through each element of the array argument. 
  for (let i = 0; i < array.length; i++) {
    // conditional statement
    if (array[i] === target) {
      return true;
    }
  }
  return false;
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
function targetCount(array, target) {

  let result = 0;
  for (let x = 0; x < array.length; x++){
    if (array[x] === target) {
      result++;
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
function firstIndexFound(array, target) {
  // A for ...lop to run through the array to get the index.
  for (let x = 0; x < array.length; x++) {
  //  conditional statement to check if the index is equal to the target(number) by incrementing.
   if (array[x] === target) {
     return x;
   }
 }
  // negative one become our default
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
function lastIndexFound(array, target) {
// a for... loop to run through each element of the array until the end of the length.
  for (let x = array.length - 1; x >= 0; x--) {
    //  conditional statement to check if the index is equal to the target(number) by decrementing
    if (array[x] === target) {
      // commend line to return the value of the index comparing to the target
      return x;
    }
  }
  // negative one become our default
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
function timesIndex(array) {
// declaring a variable for an empty new array 
  let newArray = [];
  // A for ... loop to run thorugh the valeus/ items of the array
  for (let i = 0; i < array.length; i++){ 
  //  conditional statement to check the index and multiply it by the value of that index by itself. 
     newArray.push(array[i] * i);
 }

  return newArray;
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
function cumulativeSum(array) {
//  declaring a new variable to get the value total.
  let result = 0;
  // commend line declaring a new array.
  let newArray = [];
  // A for ... loop to run to each element of the arry until the end.
  for (let i = 0; i < array.length; i++){
    // commend line passing the value of array index to result.
    result += array[i];
    // commend line that putting the value total to the new array.
    newArray.push(result);
  }
  // the default value.
  return newArray;


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
