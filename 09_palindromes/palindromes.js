function palindromes(word){
    array = word.split("");
    filteredArray = array.filter((character) =>
        character !== (" ") && 
        character !== (",") && 
        character !== ("?") && 
        character !== (".") &&
        character !== ("!"));
    filteredWord = (filteredArray.join("")).toLowerCase();
    reversedWord = ((filteredArray.reverse()).join("")).toLowerCase();
    return filteredWord === reversedWord; 
}

// Do not edit below this line
module.exports = palindromes;
