const SelectionSort = (arr) => {
    for(let i = 0 ; i < arr.length - 1 ; i++) {
        let MinIndex = i;
        for(let j = i + 1 ; j < arr.length ; j++) {
            if (arr[j] < arr[MinIndex]) {
                MinIndex = j;
            }
        }
        let temp = arr[i]
        arr[i] = arr[MinIndex]
        arr[MinIndex] = temp
    }
    return arr
}

console.log(SelectionSort([6 , 5 , 4 , 3 , 2 , 1 ]))

/*
Dry Run of the SelectionSort Code

Input Array: `[6, 5, 4, 3, 2, 1]`

---

Step 1: Outer Loop `i = 0`
- Initial Array: `[6, 5, 4, 3, 2, 1]`
- `MinIndex = 0`
- Inner Loop:
  - `j = 1`: `arr[1] < arr[0]` → `MinIndex = 1`
  - `j = 2`: `arr[2] < arr[1]` → `MinIndex = 2`
  - `j = 3`: `arr[3] < arr[2]` → `MinIndex = 3`
  - `j = 4`: `arr[4] < arr[3]` → `MinIndex = 4`
  - `j = 5`: `arr[5] < arr[4]` → `MinIndex = 5`
- Swap `arr[0]` with `arr[5]`:
  - Array after swap: `[1, 5, 4, 3, 2, 6]`

---

Step 2: Outer Loop `i = 1`
- Initial Array: `[1, 5, 4, 3, 2, 6]`
- `MinIndex = 1`
- Inner Loop:
  - `j = 2`: `arr[2] < arr[1]` → `MinIndex = 2`
  - `j = 3`: `arr[3] < arr[2]` → `MinIndex = 3`
  - `j = 4`: `arr[4] < arr[3]` → `MinIndex = 4`
  - `j = 5`: No change (`arr[5] > arr[4]`).
- Swap `arr[1]` with `arr[4]`:
  - Array after swap: `[1, 2, 4, 3, 5, 6]`

---

Step 3: Outer Loop `i = 2`
- Initial Array: `[1, 2, 4, 3, 5, 6]`
- `MinIndex = 2`
- Inner Loop:
  - `j = 3`: `arr[3] < arr[2]` → `MinIndex = 3`
  - `j = 4`: No change (`arr[4] > arr[3]`).
  - `j = 5`: No change (`arr[5] > arr[3]`).
- Swap `arr[2]` with `arr[3]`:
  - Array after swap: `[1, 2, 3, 4, 5, 6]`

---

Step 4: Outer Loop `i = 3`
- Initial Array: `[1, 2, 3, 4, 5, 6]`
- `MinIndex = 3`
- Inner Loop:
  - `j = 4`: No change (`arr[4] > arr[3]`).
  - `j = 5`: No change (`arr[5] > arr[3]`).
- No swap needed as `arr[3]` is already in the correct position.

---

Step 5: Outer Loop `i = 4`
- Initial Array: `[1, 2, 3, 4, 5, 6]`
- `MinIndex = 4`
- Inner Loop:
  - `j = 5`: No change (`arr[5] > arr[4]`).
- No swap needed as `arr[4]` is already in the correct position.

---

Final Output:
Sorted Array: `[1, 2, 3, 4, 5, 6]`
*/