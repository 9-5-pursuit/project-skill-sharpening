/**
 * isEqual()
 * ---------------------
 * Takes in two values and returns if they are strictly equal or not
 * HINT: The prompt says STRICTLY equal. What does that mean in JavaScript?
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 *
 * EXAMPLE:
 *  isEqual(10, 10);
 *  //> true
 *
 *  isEqual(10, "10");
 *  //> false
 */
function isEqual(a, b) { 
  return a === b; //checks if they are strictly equal or not
}
  
console.log(isEqual(10, 10)); // true if they are equal
console.log(isEqual(10, "10")); // false if they are not equal


/**
 * findLarger()
 * ---------------------
 * Takes in two numbers and returns the larger number. The numbers are guaranteed to be unique (not equal to each other).
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * 
 * EXAMPLE:
 *  findLarger(19, 7);
 *  //> 19
 */
function findLarger(a, b) {
    return a > b ? a : b;//function compares using the comparison operator "<"
  }

  console.log(findLarger(19, 7)); //19 is greater than 7 so the function returns 19.


/**
 * findLargerOrTie()
 * ---------------------
 * Takes in two numbers and returns the larger number. Returns the string "tie" if both numbers are the same.
 * @param {number} a
 * @param {number} b
 * @returns {number|string}
 *
 * EXAMPLE:
 *  findLargerOrTie(0, 1);
 *  //> 1
 *
 *  findLargerOrTie(0, 0);
 *  //> "tie"
 */
function findLargerOrTie(a, b) {
  if (a === b) { // checks to see if they are equal
    return "tie";
    
} else if (a > b) {//compares two numbers and returns the larger one.
    return a;
  } else {
    return b;
  }
}  
console.log(findLargerOrTie(0, 1)); //returns 1 because the number is larger than 0
console.log(findLargerOrTie(0, 0));  //returns "tie" because the numbers are equal.


/**
 * positiveNegativeOrZero()
 * ---------------------
 * Takes in a number and returns whether that number is "Positive", "Negative", or "Zero".
 * HINT: Capitalization and spelling count!
 * @param {number} a
 * @returns {string}
 *
 * EXAMPLE:
 *  positiveNegativeOrZero(-1);
 *  //> "Negative"
 *
 *  positiveNegativeOrZero(0);
 *  //> "Zero"
 *
 *  positiveNegativeOrZero(1);
 *  //> "Positive"
 */
function positiveNegativeOrZero(a) {
  if (a > 0) {
    return "Positive";
  } else if (a < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}  
console.log(positiveNegativeOrZero(-1)); // "Negative"
console.log(positiveNegativeOrZero(0)); //"Zero" 
console.log(positiveNegativeOrZero(1)); //"Positive"

//if value of "a" is greater than 0, returns Positive.
//if the value of "a" is less than 0, returns Negative.
//if no conditions are met, the function returns Zero 


/**
 * aroundTheWorldGreeting()
 * ---------------------
 * Takes in a `language` (e.g "english", "spanish", or "german") and returns "Hello World" in that language. Must work for at least "english", "spanish", and "german". It should default to English if no argument is passed in.
 *
 * TRANSLATIONS: english -> "Hello World"
 *               spanish -> "Hola Mundo"
 *               german  -> "Hallo Welt"
 * HINT: The function expects lowercase names of languages.
 * @param {string} language
 * @returns {string}
 *
 * EXAMPLE:
 *  aroundTheWorldGreeting("spanish");
 *  //> "Hola Mundo"
 *
 *  aroundTheWorldGreeting();
 *  //> "Hello World"
 */
function aroundTheWorldGreeting(language = "english") {

    let greeting;
    //Switch statement is used to perform different actions based on different conditions. 
    switch (language) {
      case "english":
        greeting = "Hello World";
        break;
      case "spanish":
        greeting = "Hola Mundo";
        break;
      case "german":
        greeting = "Hallo Welt";
        break;
      default:
        greeting = "Hello World";
    }
    return greeting;
  }
  
  console.log(aroundTheWorldGreeting("spanish")); //> "Hola Mundo"
  console.log(aroundTheWorldGreeting()); //> "Hello World"

  // used syntax of switch statement and break statement to stop the execution of the code onece match has been found.
  
  // The first exapmle gives the function "Spanish" as the language. The second does not give any language so by default it will be "English".
  


/**
 * aroundTheWorldGreetingWithSwitch()
 * ---------------------
 * Takes in a language (e.g "english", "spanish", "german") and returns "Hello World" in that language. Must work for at least "english", "spanish", and "german". It should default to English if no argument is passed in.
 *
 * TRANSLATIONS: English -> "Hello World"
 *               Spanish -> "Hola Mundo"
 *               German  -> "Hallo Welt"
 *
 * NOTE: You must use a `switch` statement in solving this.
 *
 * @param {string} language
 * @returns {string}
 *
 * EXAMPLE:
 *  aroundTheWorldGreetingWithSwitch("german");
 *  //> "Hallo Welt"
 *
 *  aroundTheWorldGreetingWithSwitch();
 *  //> "Hello World"
 */
function aroundTheWorldGreetingWithSwitch(language = "english") {

    let greeting;
    switch (language) {
      case 'english':
        greeting = "Hello World";
        break;
      case 'spanish':
        greeting = "Hola Mundo";
        break;
      case 'german':
        greeting = "Hallo Welt";
        break;
      default:
        greeting = "Hello World";
    }
    return greeting;
  }
  console.log(aroundTheWorldGreetingWithSwitch("german")); //> "Hallo Welt"
  console.log(aroundTheWorldGreetingWithSwitch()); //> "Hello World"
  console.log(aroundTheWorldGreetingWithSwitch("spanish")); //> "Hola Mundo"
  
  // used syntax of switch statement to check the language param and break statement to stop the execution of the code once match has been found.
  
  // The first exapmle gives the function "german" as the language so it reurns "Hallo Welt". 
  // The second does not give any language so by default it will be "English". 
  // The last example gives the function "spanish" as the language so it returns "Hola Mundo". 


/**
 * calculateLetterGrade()
 * ---------------------
 * Takes in a number and returns the letter grade corresponding to that number. Letter grades consist of "A", "B", "C", "D", or "F".
 *
 * SCORING: 90 and above is an A
 *          80 and above is a B
 *          70 and above is a C
 *          60 and above is a D
 *          Anything lower than 60 is an F
 * @param {number} grade
 * @returns {string}
 *
 * EXAMPLE:
 *  calculateLetterGrade(99);
 *  //> "A"
 */
function calculateLetterGrade(grade) {
  
    if (grade >= 90) {
      return "A";
    } else if   (grade >= 80) {
      return "B";
    } else if   (grade >= 70) {
      return "C";
    } else if   (grade >= 60) {
      return "D"
    } else { 
      return "F";
    }
     }
               
    console.log(calculateLetterGrade(99));
               


/**
 * animalCounts()
 * ---------------------
 * Returns the count of animals, properly pluralizing the animal if there is more than one.
 * The animal is guaranteed to be one you can pluralize by adding `s`. (NO geese, fish, deer, oxen, etc.)
 * @param {string} animal
 * @param {number} numberOfAnimals
 * @returns {string}
 *
 * EXAMPLE:
 *  animalCounts("dog", 2);
 *  //> "2 dogs"
 *
 *  animalCounts("pig", 1);
 *  //> "1 pig"
 */
function animalCounts(animal, numberOfAnimals) {
// This function uses the parameters that says the count of the animal and the animal.
// If numberOfAnimals equals 1, the function says the number and animal. If not equal to 1, the function says the number and the animal plus adds an "s".
    if (numberOfAnimals === 1) {
        return `${numberOfAnimals} ${animal}`;
    } else {
        return `${numberOfAnimals} ${animal}s`;
    }
}
console.log(animalCounts("dog", 2)); // "2 dogs"
console.log(animalCounts("pig", 1)); // "1 pig"



/**
 * evenOrOdd()
 * ---------------------
 * Takes in a number and returns whether that number is "Even" or "Odd".
 * HINT: How is this similar to isOdd() or isEven() from part 2? 
 * //They both use "%" to check if the number is divisible by 2.
 * @param {number} a
 * @returns {string}
 *
 * EXAMPLE:
 *  evenOrOdd(11);
 *  //> "Odd"
 * 
 *  evenOrOdd(48);
 *  //> "Even"
 */
function evenOrOdd(a) {
    if (a % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(evenOrOdd(11)); // should output "Odd"
console.log(evenOrOdd(48)); // should output "Even"


/**
 * evenOrOddWithTernary()
 * ---------------------
 * Takes in a number and returns whether that number is even or odd.
 *
 * NOTE: You must use a ternary to solve this.
 *
 * @param {number} a
 * @returns {string}
 *
 * EXAMPLE:
 *  evenOrOddWithTernary(8);
 *  //> "Even"
 */
function evenOrOddWithTernary(a) {
  return (a % 2 == 0) ? "Even" : "Odd";
}
console.log(evenOrOddWithTernary(8));//output is even
console.log(evenOrOddWithTernary(11));// output is odd
////This function uses ternary operator to check if the number is even or odd. If the number is divisible 2 with no remainder, it return "Even", otherwise returns "Odd".

//***(Something to remember) Ternary is a shorthand way of writing an "if-else" statement in JavaScript. It can also be written as;

// (condition) ? statement1 : statement2
//If true, the statement before the ? is executed. If false, statement after the : is executed. 

//   if (condition) {
//   statement1;
//   } else {
//   statement2;



// Do not change any code below this line.
module.exports = {
  isEqual,
  findLarger,
  findLargerOrTie,
  positiveNegativeOrZero,
  aroundTheWorldGreeting,
  aroundTheWorldGreetingWithSwitch,
  calculateLetterGrade,
  animalCounts,
  evenOrOdd,
  evenOrOddWithTernary,
};
