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
  let chunk;
  let result = []
  for (let i = 0; i < array.length;) {
    chunk = array.splice(i, 1)
    let newChunk = chunk[0] + "!"
    result.push(newChunk)
  }
    return result;
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
  let chunk;
  let result = [];
  let i = 0;
  while (i < array.length) {
    chunk = array.splice(i, 1);
    let updatedChunk = chunk[0] + "!"
    result.push(updatedChunk)
  }
  return result;
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
  let result = [];
  let chunk;
  for (const element of array) {
    chunk = element + "!";
    result.push(chunk);
  }
  return result;
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
  result = 0;
  for (let i = 0; i < array.length;) {
    arr = array.splice(i, 1)
    result += arr[i];
  }
  return result;
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
  let result = [];
  for (const element of array) {
    if (element % 2 === 1) {
      result.push(element);
    }
  }
  return result;
}
// {
//   result = [];
//   for (let i = 0; i < array.length;) {
//     if (array[i] % 2 === 0) {
//       let throwAways = array.splice(i, 1);
//     } 
//     if (array[i] % 2 === 1) {
//       let addThis = array.splice(i, 1) 
//        result.push(addThis)
//     }
//   }
//   return result;
// }

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
  let result = [];
  for (const element of array) {
    if (element % 2 === 0) {
      result.push(element);
    }
  }
  return result;
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
  let result;
  let arr = array.splice(0,1);
  for (let i = 0; i < array.length;) {
    if (array[i] < arr[0]) {
      arr = array.splice(i,1);
    }
    if (array[i] > arr[0]) {
      let throwAway = array.splice(i, 1);
    }
  }
  result = arr[0];
  return result;
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
  let result;
  let arr = array.splice(0, 1);
  for (let i = 0; i < array.length;) {
    if (array[i] > arr[0]) {
      arr = array.splice(i, 1);
    }
    if (array[i] < arr[0]) {
      let throwAways = array.splice(i, 1);
    }
  }
  result = arr[0];
  return result;
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
  let result = false
  for (let i = 0; i < array.length; i ++) {
    if (array[i] === selected) {
      result = true;
    } else {
      continue;
    }
  }
  return result;
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
  result = array.splice(0, 1);
  for (let i = 0; i < array.length;) {
    if (result.includes(array[i])) {
      let throwAways = array.splice(i, 1);
    } 
    else {
      let pushThis = array.shift();
      result.push(pushThis) 
    }
    return result
  }
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
