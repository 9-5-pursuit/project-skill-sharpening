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
    //declared variable will store the new array with exclamation points.
    
     let shoutedArray = [];
    //iterate through each element in the input array.
    
     for (let i = 0; i < array.length; i++) {
         shoutedArray.push(array[i] + "!");
       //Add an exclamation point at the end of each element and push it to the shouted array.
     }
     return shoutedArray;
 }
 console.log(shoutForLoop([ "A", "Very", "Happy", "Array" ]));
 //output: [ "A!", "Very!", "Happy!", "Array!" ];
 


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
         //declared variable will store the new array with exclamation points.
      
         let i = 0;
         //variable "i" is initialized with the value of 0 and will be used as a counter in the while loop.
      
         while (i < array.length) {
        //checks if the value of "i" is less than the length of the "array". 
        //Loop will continue running if there are more elements in the array to iterate over.
      
         array[i] += "!";
        //the += operator changes the element of the array in place.
      
         i++;
        //"i" is incremented by 1 at the end of the loop.
      
         }
        return array;
        //once the loop has executed all elements the modified array is returned.}
         }
      
        console.log(shoutWhileLoop(["A", "Very", "Happy", "Array"])); 
        // output: [“A!”, "Very!", "Happy!", "Array!"]
       
       


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
    //The function will add an exclamation mark to the "array"
    
         let shoutedArray = []; 
         //This line declares variable and assigns it an empty array. 
         //This variable will store the new array with the exclamation point added to each element.

         for (const element of array)
         //this line starts "for of" loop. This loop will iterate over each element in the array and assign it to the variable "element".

         {
           shoutedArray.push(element + "!");
           //This line takes the current element of the array, adds an exclamation mark to it, and then pushes it to the "shoutedArray" using the push method.
           }
           console.log(shoutedArray);

           return shoutedArray;
         }
          shoutForOfLoop(["A", "Very", "Happy", "Array"]);
          //This line calls the function

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

    let sum = 0; 
    //variable "sum" is declared and is intialized to 0.
    //This variable is used to keep track of the total sum off all numbers in the array.
    
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
      
  }
    return sum;
 
  }
   console.log(sumArray([10, 0, 10, 11]));//output:31


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
 
    return array.filter(num => num % 2 !== 0);
    //determines which elements to keep and which to discard.
    //the function returns "true" if the element is odd and "false" if the element is even.
    //"num % 2 !==" checks if the remainder is not zero then t is odd, so it will remain in the array.
    //"filter" method returns new array only for elements returning "true".
  }
  
    console.log(oddArray([11, 15, 20, 22, 37])); // output: [11, 15, 37]
  //returned array containing odd numbers from the original array

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
  //parameter "array" to filter to only contain even numbers.
 
      return array.filter(num => num % 2 === 0);
      //determines which elements to keep and which to discard.
      //the function returns "true" if the element is even.
      //"num % 2 ===" checks to see if the remainder of the dividing "num" by 2 is equal to zero, it means "num" is even. "num" is even so it will return "true" and be added to the new array.
      //"filter" method returns new array only for elements returning "true".
  }
  
    console.log(evenArray([11, 15, 20, 22, 37])); // output: [20, 22]
  //returned array containing even numbers from the original array


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

  let smallest = array[0];

  for (let i = 1; i < array.length; i++) {
  //for loop that iterates through all elements of the array , beginning at the second element (index 1).
  //variable "i" will be the counter and will be incremented by 1 on each iteration.    
    
  
      if (array[i] < smallest) {
     //for each iteration, checks if the current element of the array is less than the current value of the "smallest" variable.

  
          smallest = array[i];
      }
  }
  return smallest;
}
console.log(findSmallest([ 0, 11, -2, 5 ])); // Output: -2, which is the smallest number in the array

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
    let largest = array[0];

    for (let i = 1; i < array.length; i++) {
    //for loop that iterates through all elements of the array, beginning at the second element (i=1) because the first element is already stored in the "largest variable".
    //variable "i" will be the counter and will be incremented by 1 on each iteration.    
      
      if (array[i] > largest) {
      //for each iteration, checks if the current element of the array is larger than "largest", code inside "if" statement will be executed.
          
 
            largest = array[i];
        }
    }
    return largest;
}

console.log(findLargest([ 0, 11, -2, 5 ])); // Output: 11 because it is the largest number in the array.

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
     //"selected" represents value that we are trying to find in the array.

     return array.includes(selected);
    }
    
    console.log(findEqual([0, 11, -2, 5], 11));
    //> true
    
    console.log(findEqual([0, 11, -2, 5], 9));
    //> false
    
  

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

  let result = []; //initialized as an empty array

  for (let i = 0; i < array.length; i++) {


  if (!result.includes(array[i])) {
   //checks if the current element is not already included in "result" array.

    result.push(array[i]);
   //if the current element is not in the "result" array, it is pushed using the .push method.
}
}
  return result;
}
console.log(removeDuplicates([1, 11, 2, 3, 4, 4, 2, 11, 9])); // output: [1, 11, 2, 3, 4, 9]
//the new array without duplicates is returned.

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
