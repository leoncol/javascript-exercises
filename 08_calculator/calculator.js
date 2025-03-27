const add = function(num1, num2) {

  return num1 + num2;

};

const subtract = function(num1, num2) {
return num1 - num2;
};

const sum = function(array) {
  let reduced = array.reduce((accumulator, value) => accumulator += value, 0);
  return reduced;
};

const multiply = function(array) {
  let result = array.reduce((accumulator, value) => accumulator * value, 1);
  return result;
};

const power = function(number, power) {
	return number ** power;
};

const factorial = function(number) {
  if (number === 0) {
    return 1;
  } else {
    let newArray = [];
    for (let i = 0; i < number; i++) {
        newArray.push(i + 1);
      }
    let result = newArray.reduce((accumulator, value) => accumulator * value, 1);
    return result;
  }
	

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
