function sumAll(a,b){;
    result = 0
    if (a<0 || b< 0 || typeof a != typeof 1 || typeof b != typeof 1){
        result = "ERROR";
    }
    else if (a>b){
        for (i=b; i <= a; i++){
            result += i;
        }
    }
    else for (i=a; i <= b; i++){
        result += i;
    }
    return result;
}

// Do not edit below this line
module.exports = sumAll;
