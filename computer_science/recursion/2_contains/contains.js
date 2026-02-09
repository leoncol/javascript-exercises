const contains =  function(object,value){

    if (object === value){
        return true;
    } else if (Number.isNaN(object) && Number.isNaN(value)){
        return true;
    }

    if (object == null) {
        return;
    } else if (typeof object == 'string'){
        return;
    } else {
         for (let key in object){
            let target = contains(object[key], value);
        if (target === true){
            return target;
        }
    }
       return false;
    }
   
}

  
// Do not edit below this line
module.exports = contains;
// # Exercise 2 - contains

// Write a function that searches for a value in a nested object. It returns true if the object contains that value.

// Objects are compared by reference.

// Examples:

// ```javascript
// contains({ foo: "foo" }, "bar") // false
// contains({ foo: { bar: "bar" } }, "bar") // true
// ```
