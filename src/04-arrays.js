/**
 * createEmptyArray()
 * ---------------------
 * Returns an empty array.
 * Make sure you return a different empty array each time the function is called.
 * You can do this by returning an empty array that is created INSIDE the function (not outside it).
 * @returns {*[]}
 *
 * EXAMPLE:
 *  createEmptyArray();
 *  //> []
 */
function createEmptyArray() {
  console.log([]);
  return [];
} 

/**
 * createArrayWithTwoElements()
 * ---------------------
 * Creates and returns an array where the first element is `a` and the second element is `b`.
 * @param {*} a
 * @param {*} b
 * @returns {*[]}
 *
 * EXAMPLE:
 *  createArrayWithTwoElements(true, false);
 *  //> [ true, false ]
 */
function createArrayWithTwoElements(a, b) {

    var arr = [a, b];
    console.log(arr);
    return arr;
  } 
  module.exports = {
    
    createArrayWithTwoElements,
  };


/**
 * getArrayLength()
 * ---------------------
 * Returns the length of the array
 * @param {*[]} array
 * @returns {number}
 *
 * EXAMPLE:
 *  getArrayLength([ 10, 20, 30 ]);
 *  //> 3
 */
function getArrayLength(array) {

  return array.length;
   
} 
console.log(getArrayLength([10, 20, 30]));//Output is 3 since the array has 3 elements.


/**
 * getFirstElementOfArray()
 * ---------------------
 * Returns the first element of the array.
 * HINT: How is this similar to getFirstAndLastCharacter() in part 1?
 * @param {*[]} array
 * @returns {*}
 *
 * EXAMPLE:
 *  getFirstElementOfArray([ 10, 20, 30 ]);
 *  //> 10
 */
function getFirstElementOfArray(array) {

 
  return array[0];
  
} 
console.log(getFirstElementOfArray([10, 20, 30]));//Output is 10. The first element of the array.


/**
 * getLastElementOfArray()
 * ---------------------
 * Returns the last element of the array.
 * HINT: How is this similar to getFirstAndLastCharacter() in part 1?
 * @param {*[]} array
 * @returns {*}
 *
 * EXAMPLE:
 *  getLastElementOfArray([ null, undefined ]);
 *  //> undefined
 */
function getLastElementOfArray(array) {

  return array[array.length -1];
   
 } 
console.log(getLastElementOfArray([null, undefined]));//output is undefined


/**
 * addElementToEndOfArray()
 * ---------------------
 * Adds an `element` to the end of the inputted `array`. Then, returns the array.
 * @param {*[]} array
 * @param {*} element
 * @returns {*[]}
 *
 * EXAMPLE:
 *  addElementToEndOfArray([ 10 ], 9);
 *  //> [ 10, 9 ]
 */
function addElementToEndOfArray(array, element) {

  array.push(element);
  console.log(array);
  return array;
}

console.log(addElementToEndOfArray([10], 9)); // [10, 9]



/**
 * removeElementFromEndOfArray()
 * ---------------------
 * Removes the last element of the inputted `array`. Then, returns the removed element.
 * @param {*[]} array
 * @returns {*[]}
 *
 * EXAMPLE:
 *  removeElementFromEndOfArray([ 10, 9, 8 ]);
 *  //> 8
 */
function removeElementFromEndOfArray(array) {

  if (array.length === 0) {//check to ensure that the array has at least one element. ***Remember if the array is empty will return undefined.
    return;
}
   var removedElement = array.pop();// used "pop" method to remove the last element of the array and return it.
   return removedElement;
 }

console.log(removeElementFromEndOfArray([10, 9, 8])); // output is 8


/**
 * addElementToFrontOfArray()
 * ---------------------
 * Adds an `element` to the front of the inputted `array`. Then, returns the array.
 * @param {*[]} array
 * @param {*} element
 * @returns {*[]}
 *
 * EXAMPLE:
 *  addElementToFrontOfArray([ 10 ], 9);
 *  //> [ 9, 10 ]
 */
function addElementToFrontOfArray(array, element) {

  array.unshift(element);//adds to the front of the array. The modified array is then returned.
 
  return array;
}
console.log(addElementToFrontOfArray([10], 9)); // [9, 10] 
//9 is added to the front of the original array


/**
 * removeElementFromFrontOfArray()
 * ---------------------
 * Removes the first element of the inputted `array`. Then, returns the removed element.
 * @param {*[]} array
 * @returns {*[]}
 *
 * EXAMPLE:
 *  removeElementFromFrontOfArray([ 10, 9, 8 ]);
 *  //> 10
 */
function removeElementFromFrontOfArray(array) {
  if (array.length === 0){
    console.log("Array is empty");

    return;
}

    let removedElement = array.shift();
    console.log(removedElement);
    return removedElement;
}

console.log(removeElementFromFrontOfArray([10, 9, 8])); // 



  


/**
 * getMiddleElement()
 * ---------------------
 * Returns the element in the middle of the array.
 *
 * NOTE: Inputted arrays will always be of odd length.
 *
 * @param {*[]} array
 * @returns {*}
 *
 * EXAMPLE:
 *  getMiddleElement([ 10, null, "30" ]);
 *  //> null
 */
function getMiddleElement(array) {

//array with odd number of elements and returns element in the middle of the array.

  let middleIndex = (array.length - 1) / 2;
   //calculated by subtracting 1 from the length of the array and dividing it by 2.
  let middleElement = array[middleIndex]; 
   
 console.log(middleElement); 
   //retrieves the element at the index of the middle element.
 return middleElement; 
 } 
 getMiddleElement([ 10, null, "30" ]); //> null 


// Do not change any code below this line.
module.exports = {
  createEmptyArray,
  createArrayWithTwoElements,
  getArrayLength,
  getFirstElementOfArray,
  getLastElementOfArray,
  addElementToEndOfArray,
  removeElementFromEndOfArray,
  addElementToFrontOfArray,
  removeElementFromFrontOfArray,
  getMiddleElement,
};
