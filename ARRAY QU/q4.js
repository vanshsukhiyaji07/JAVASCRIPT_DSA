// Single Number from Leet Code

/**
 * @param {number[]} arr
 * @return {number}
 */

var findUnique = function(arr) {
    let xorValue = 0;
    for (let index = 0; index < arr.length; index++) {
        xorValue ^= arr[index];
    }
    return xorValue;  
};
