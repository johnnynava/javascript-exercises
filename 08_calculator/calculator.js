function add(a,b){
  return a+b
};

function subtract(a,b){
  return a-b;
}

const sum = function(array) {
  return array.reduce((result, currentValue) => result + currentValue, 0);
};

function multiply(array) {
  return array.reduce((result, currentValue) => result*currentValue, 1);
}

function power(a,b) {
  return a**b;
}

function factorial(a) {
  let total = 1;
  for (i=1; i<=a; i++){
    total *= i
  };
  return total;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
