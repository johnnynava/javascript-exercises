function convertToCelsius(temperature){
  return temperature = +((temperature-32)*(5/9)).toFixed(1);
}

function convertToFahrenheit(temperature){
  return temperature = +(temperature*(9/5)+32).toFixed(1);
}

convertToCelsius(32) // fahrenheit to celsius, should return 0

convertToFahrenheit(0) // celsius to fahrenheit, should return 32

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
