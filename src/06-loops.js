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
  function rangeSum(min, max) {//"min" and "max" represent inclusive range of numbers to sum up.

    let sum = 0;//declares variable called "sum" and initialized it with 0.

    for (let i = min; i <= max; i++) {
  //used for loop to iterate through the range & adds each number to total.
  
  //the value starts at min. Continuing so long as i is less than or equal to the value of "max". Loop will continously increment "i" by 1 on each iteration.
      
    sum += i;//performed on each oteration of the loop.
    }
    console.log(sum);
    
    return sum;
  }
  rangeSum(3, 7); //Should output: 25

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


    let oddNums = [];//initializes empty array called "oddNums" and will be used to store odd numbers.
  
    for (let i = max; i >= min; i--) {
    //loop begins with "max" value and ends with "min" value. 
    //loop will iterate in reverse order by decreasing value of "i" by 1 on each iteration.
    
      if (i % 2 !== 0) {
     //conditional statement checks if current value "i" is odd. 
    //Modulo operator % checks the remainder if "i" divided by 2.
    //If the remainder does not = 0, "i" is an odd number.

          oddNums.push(i);//if "i is odd, this line pushes it to the "oddNums" array.

      }//ends statement
  }//ends loop

  return oddNums;
}
console.log(rangeOdd(10, 15)); // [15, 13, 11]



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
   function rangeEveryOther(min, max) {//range of numbers the function will iterate through.
  
     let result = [];//empty array called "result". Used to store every other number in the range.
  
    for (let i = min; i <= max; i++){
  
    if (i % 2 !== 0) {//will check if current number i is not divisible by 2, if not, it is an odd number.

      result.push(i);//if not divisible by 2, number is pushed to the "result" array. 
  }
}
  console.log(result);
}
rangeEveryOther(11, 18); //output: [11, 13, 15, 17]


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


      let i = 0;////declaring variable "i" and initializing it to 0.
    
  while (i < array.length) {
    //loop will execute continously as long as "i" is less than the length of array.
    //checks if element at "array[i]" is = to the "target" value. If so, will log "true".
    //If element at "array[i]" is not = to the "target" value, function increments "i" by 1 then moves on to the next iteration of the group.
    
     if (array[i] === target) {//checks if the current element of the "array" = the "target" value.
    
  return true;
  }
     i++;//if statement is false , "i" is icremented by 1 using the "i++"statement.
  }
  return false;
  }

  //after completion of loop and the "target" value is not found, will return "false".

  console.log(containsWhileLoop([ 5, 2, 4 ], 4)); // true
  console.log(containsWhileLoop([ "left", "up", "right" ], "down")); // false

  //After loop is complete, function returns "false" as the "target" value was not found in the array. 


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
       for (let i = 0; i < array.length; i++) {
    //intialized vari "i" to 0. Will run continously as long as "i" is less than length of "array".
        
        if (array[i] === target){
    //checks if the current element is equal to the "target" value
          
        return true;
    //If the element is equal to the :target", the function will return "true".
      }
    }
    return false;
    //Function returns "false" if the "target" is not found in the array.
    }
    console.log(containsForLoop([5, 2, 4], 4));// true because 4 is found in the array
    
    console.log(containsForLoop(["left", "up", "right"], "down"));// false because "down" is not found in the array
                


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

  
    let count = 0;
    //initialized to 0. Will keep track of how many times the target value appears in the array.
    
    for (let i = 0; i < array.length; i++) {
   //iterates through the entire "array"
      
      if (array[i] === target) {
    // checks if current element of the array is equal to the target value.
        count++;
        //if current element is equal to target value. the "count" variable is incremented by 1.
        //When the loop is fully executed, the final count of how many times the target value appeared in the array will be logged.
      }
    }
    console.log(count);
    return count;
  }
  
  console.log(targetCount([10, 20, 10, 20, 30], 10)); //ouput is 2 because 10 showed up twice in the array.
  


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
 //this function uses a loop to iterate through each element in the array.
  
    for(let i = 0; i < array.length; i++) {
  //Initializes variable "i" to 0. 
  //The loop continues while "i" is less than the length of the array.
  //"i++" : at the end of the loop variable "i" is incremented by 1.
  
     if (array[i] === target) {
  //used the equality operator "===" to check if the current element is equal to the target value.
  
console.log(i);
return i;
  //If the current element is equal to the target, returns the index.
}
}
  console.log(-1);
 
  return -1;
  //If loop completes without a match, it returns -1 
}
  //these examples calls the functions twice. The   outcome of the function will be the index of the target in the array or -1 if not found.

  firstIndexFound(["left", "right", "left"], "left");// output: 0

  firstIndexFound(["left", "right", "left"], "up");//output: -1
 


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
  
     let lastIndex = -1;
      
       for (let i = 0; i < array.length; i++) {
      //Initializes variable "i" to 0. 
      //The loop continues while "i" is less than the length of the array.
      //"i++" : at the end of the loop variable "i" is incremented by 1.
         
       if (array[i] === target) {
      
      lastIndex = i;
       }
    
     }
       return lastIndex;
      //once the loop completes executing, the function will log the value of the lastIndex variable.
    }
    console.log(lastIndexFound(["left", "right", "left"], "left"));//should return 2 because "left is the last element in the array that matches the target"
    console.log(lastIndexFound(["left", "right", "left"], "up"));// should return -1 because the target "up" is not present in the array.


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
   function timesIndex(elements) {
  
      let newArray = elements.map((element, index) => element * index);
  //map method is used to iterate through each element in the array and perform a transformation on it.

  //The function returns returns the result of multiplying "element" by "index".
    
  
    return newArray;

}
console.log(timesIndex([7, 10, 11]));//output [0, 10, 22]
console.log(timesIndex([1, 2, 3, 4, 5]));//output [0, 2, 6, 12, 20]



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


  let cumulativeArr = [];
  //"cumulativeArr" - empty array that will hold the cumulative sum values.

    let sum = 0;
  //"sum"- variable that will hold the current cumuative sum and starts at 0.

    for (let i = 0; i < array.length; i++) {
       
      sum += array[i];
      //Checks the condition of the array which is true in this case, so it goes inside the loop.
      //First element of the array "[5, 2, 9] is "5", it will add it to the sum variable, 0 + 5 = 5.
      //"5" pushes to the cumulativeArr [5]. Loop continues to the next element in the array, adds it to the sum variable and so forth until the loop finishes.
       
      cumulativeArr.push(sum);
      //pushing the current value of the "sum" to the "cumulativeArr".
    }
      console.log(cumulativeArr);
  
      return cumulativeArr;
}
    //The loop is complete when it has went through all the elements in the array. 
    cumulativeSum([5, 2, 9]); // [5, 7, 16]


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
