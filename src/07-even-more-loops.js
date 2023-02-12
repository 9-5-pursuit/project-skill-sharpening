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
function shoutForLoop(array) {
  // set accumulator newArray to empty array
  let newArray = []
  // use for loop to iterate through array
  for (let i = 0; i < array.length; i++) {
    // add "!" after every element in array
    newArray[i] = array[i] + "!"
    }
    // return accumulator
    return newArray
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
function shoutWhileLoop(array) {
  // set newArray to empty array and the index to 0(which is the beginning of the array)
  let newArray = []
  let i = 0
  // starting at 0 loop through array until ened of array(array.length)
  while (i < array.length) {
    newArray[i] = array[i] + "!"
    // iterator
    i++
  }
  // return accumulator
  return newArray
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
function shoutForOfLoop(array) {
  // set accumulator newArray to empty array
  let newArray = []
  // loop through each element of array
  for (let element of array) {
    // push each element and "!" to newArray
    newArray.push(element + "!")
  }
  return newArray
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
function sumArray(array) {
  // set sum to 0
  let sum = 0
  // iterate through array using for loop
  for (let i = 0; i < array.length; i++) {
    // add each element to sum accumulator
    sum += array[i]
    }
    // return sum
    return sum
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
function oddArray(array) {
  // set newArray accumulator and set to empty array
  let newArray = []
  // iterate through the array
  for (let i = 0; i < array.length; i++) {
    //  if element modulo 2 does not equal then it is odd, and push to newArray
    if (array[i] % 2 !== 0) {
      newArray.push(array[i])
    }
    
  }
  return newArray
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
function evenArray(array) {
   // set newArray accumulator and set to empty array
  let newArray = []
   // iterate through the array
  for (let i = 0; i < array.length; i++) {
    // if element modulo 2 is strictly equal to zero, push into newArray
    if (array[i] % 2 === 0) {
      newArray.push(array[i])
    }
    
  }
  return newArray
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
function findSmallest(array) {
  // create variable and set to beginning of array[0]
  let smallNum = array[0]
  // iterate through array
  for (let i = 1; i < array.length; i++) {
  // if element is smaller than variable smallNum, make element the new value of variable
    if (array[i] < smallNum) {
      smallNum = array[i]
    }
    
  }
  return smallNum
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
function findLargest(array) {
  // create variable to store element 
  let largeNum = array[0]
  // iterate through loop
  for (let i = 1; i < array.length; i++) {
  // if element is greater than variable, set variable to greater element
    if (array[i] > largeNum) {
      largeNum = array[i]
    }
    
  }
  return largeNum
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
function findEqual(array, selected) {
  // .includes determines whether an array includes a certain value (selected)
  return array.includes(selected)
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

function removeDuplicates(array) {
  // create accumulator newArray and set to empty array
  let newArray = []
  // iterate through array
  for (let index = 0; index < array.length; index++) {
    // if newArray does not includes element push element
    if (!newArray.includes(array[i])) {
    newArray.push(array[i])
    } 
  }
  return newArray
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
