let string = "";

function reverseString(string) {
    let array = string.split("");
    array.reverse();
    let reversed = array.join("");
    return reversed;
}

// Do not edit below this line
module.exports = reverseString;
