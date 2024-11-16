// Median of two sorted arrays

/**
 * @param {number[]} firstArray
 * @param {number[]} secondArray
 * @return {number}
 */
var getMedianOfSortedArrays = function (firstArray, secondArray) {
    let mergedArray = [...firstArray, ...secondArray];  
    mergedArray.sort((x, y) => x - y);
    let middle = Math.floor(mergedArray.length / 2);
    if (mergedArray.length % 2 !== 0) {
        return mergedArray[middle]; 
    } else {
        return (mergedArray[middle - 1] + mergedArray[middle]) / 2; 
    }
};
