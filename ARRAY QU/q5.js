// 137. Single Number II from Leet Code

/**
 * @param {number[]} arr
 * @return {number}
 */

var number = function(arr) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        let countBits = 0; // Changed variable name from 'sum' to 'countBits'
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] & (1 << i)) {
                countBits++;
            }
        }
        if (countBits % 3 == 1) {
            result = result | (1 << i);
        }
    }
    return result;
};
