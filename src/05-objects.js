/**
 * createEmptyObject()
 * ---------------------
 * Returns an empty object.
 * Should return a new empty object each time the function is called.
 * @returns {Object}
 *
 * EXAMPLE:
 *  createEmptyObject()
 *  //> {}
 */
function createEmptyObject() {

    return {}
  }
  console.log(createEmptyObject());// outputs {}

/**
 * createObjectWithValue()
 * ---------------------
 * Creates an object with the input as a value. The key can be anything.
 * @param {*} val
 * @returns {Object}
 *
 * EXAMPLE:
 *  createObjectWithValue(19);
 *  //> { whateverKey: 19 }
 */
function createObjectWithValue(val) {
// ** creates an object with a given value as its key. 
    const whateverKey = val;

    const obj = {whateverKey};

    console.log(obj);
    
    return obj;
  }
  
  console.log(createObjectWithValue(19));// output: {whateverKey: 19}


/**
 * createObjectWithKey()
 * ---------------------
 * Creates an object with the input as a key. The value can be anything.
 * @param {*} key
 * @returns {Object}
 *
 * EXAMPLE:
 *  createObjectWithKey("left");
 *  //> { left: false }
 */
function createObjectWithKey(key) {
  let obj = {};

  obj[key] = false;

  console.log(obj);

  return obj;
}
console.log(createObjectWithKey("left")); //output: {left: false}


/**
 * createObjectWithKeyValuePair()
 * ---------------------
 * Creates an object with the inputs as a key-value pair.
 * @param {*} key
 * @param {*} val
 * @returns {Object}
 *
 * EXAMPLE:
 *  createObjectWithKeyValuePair("left", "right");
 *  //> { left: "right" }
 */
function createObjectWithKeyValuePair(key, val) {

  const obj = {};//empty object
  
  obj[key] = val;
  
  console.log(obj);
  
  return obj;
}
//"left" as the key and "right" as the value.
createObjectWithKeyValuePair("left", "right");
// output: { left: "right" }


/**
 * getNameFromObject()
 * ---------------------
 * Returns the value of the `name` key from the inputted object.
 * @param {Object} object
 * @returns {*}
 *
 * EXAMPLE:
 *  getNameFromObject({ name: "Jay" });
 *  //> "Jay"
 */
function getNameFromObject(object) {
  return object.name;
}

console.log(getNameFromObject({ name: "Jay" })); // output: "Jay"


/**
 * getAgeFromObject()
 * ---------------------
 * Returns the value of the `age` key from the inputted object.
 * @param {Object} object
 * @returns {*}
 *
 * EXAMPLE:
 *  getAgeFromObject({ age: 30 });
 *  //> 30
 */
function getAgeFromObject(object) {
  console.log(object.age);
  return object.age
} 
getAgeFromObject({age: 30 });



/**
 * addValueToObject()
 * ---------------------
 * Adds the input as a value on the given object. The key can be anything.
 * @param {Object} object
 * @param {*} val
 * @returns {Object}
 *
 * EXAMPLE:
 *  addValueToObject({ left: true }, false);
 *  //> { left: true, key: false }
 */
function addValueToObject(object, val) {

    object.key = val;
    
    console.log(object);
    
    return object;
  }
  addValueToObject({ left: true }, false);
  


/**
 * addKeyToObject()
 * ---------------------
 * Adds the input as a key on the given object. The value can be anything.
 * @param {Object} object
 * @param {*} key
 * @returns {Object}
 *
 * EXAMPLE:
 *  addKeyToObject({ right: false }, "left");
 *  //> { right: false, left: true }
 */
function addKeyToObject(object, key) {

    object[key] = true;

    console.log(object);
    return object;

    }
    addKeyToObject({ right: false }, "left");
    // { right: false, left: true }
    
    const obj = {a: 1, b: 2};
    addKeyToObject(obj, "c");

    console.log(obj);
    // {a: 1, b: 2, c: true}
    //required hours of google to get this one to pass. I couldnt figure out what was wrong


/**
 * addKeyValuePairToObject()
 * ---------------------
 * Adds the inputted key and value as a key-value pair on the given object.
 * @param {Object} object
 * @param {*} key
 * @param {*} val
 * @returns {Object}
 *
 * EXAMPLE:
 *  addKeyValuePairToObject({ up: true }, "left", false);
 *  //> { up: true, left: false }
 */
function addKeyValuePairToObject(object, key, val) { //takes in 3 parameters

    object[key] = val;
      
    console.log(object);
      
    return object;
    }
    addKeyValuePairToObject({up: true},"left", false);
    
    

/**
 * deleteKeyFromObject()
 * ---------------------
 * Remove the key from the given object. You may use the `delete` keyword.
 * @param {Object} object
 * @param {string} key
 * @returns {Object}
 *
 * EXAMPLE:
 *  deleteKeyFromObject({ left: true, right: false }, "left");
 *  //> { right: false }
 */
function deleteKeyFromObject(object, key) {

  delete object[key];
  
    console.log(object);
  
    return object;
}

let exampleObject = { left: true, right: false };
console.log(exampleObject);// output: { left: true, right: false }
deleteKeyFromObject(exampleObject, "left");// output: { right: false }
console.log(exampleObject);// output: { right: false }


// Do not change any code below this line.
module.exports = {
  createEmptyObject,
  createObjectWithValue,
  createObjectWithKey,
  createObjectWithKeyValuePair,
  getNameFromObject,
  getAgeFromObject,
  addValueToObject,
  addKeyToObject,
  addKeyValuePairToObject,
  deleteKeyFromObject,
};
