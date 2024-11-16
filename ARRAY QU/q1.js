// Remove duplicate values from an array (altered version)

let dataArray = [1,2,2,3,3,4,4,4,5,5,6,6,7,8,9,9];
let distinctValues = [];
let dLength = 0;

for(let i = 0; i < dataArray.length; i++) {
    let found = false;
    for(let y = 0; y < dLength; y++) {
        if(dataArray[i] === distinctValues[y]) {
            found = true;
            break;
        }
    }
    if(!found) {
        distinctValues[dLength] = dataArray[i];
        dLength++;
    }
}
console.log(distinctValues);
