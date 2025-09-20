const sumAll = function(numA, numB) {
    if (!Number.isInteger(numA) || !Number.isInteger(numB)) {
        return "ERROR";
    } else if (numA < 0 || numB < 0) {
        return "ERROR";
    }
    
    let start = numA;
    let end = numB;

    if (numB < numA) {
        start = numB;
        end = numA;
    }

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
