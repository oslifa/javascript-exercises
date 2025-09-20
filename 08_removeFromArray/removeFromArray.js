const removeFromArray = function(array, ...numbers) {
    return array.filter(element => numbers.includes(element) ? false : true);
};

// Do not edit below this line
module.exports = removeFromArray;
