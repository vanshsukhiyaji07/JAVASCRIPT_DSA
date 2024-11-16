// Altered Two Sum solution

/**
 * @param {number[]} arr
 * @param {number} sum
 * @return {number[]}
 */
var findTwoSum = function (arr, sum) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] + arr[i] === sum && i !== j) {
                return [i, j];
            }
        }
    }
};
