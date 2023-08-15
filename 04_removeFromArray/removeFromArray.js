function removeFromArray(){
    const args = Array.from(arguments);
    let originalArray = args.shift();
    for (i=0; i<args.length; i++){    
        originalArray = originalArray.filter((word) => word !== args[i]);
    }
    return originalArray;
}

// Do not edit below this line
module.exports = removeFromArray;