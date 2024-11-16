function QuickSort(Arr , Left = 0 , Right = Arr.length - 1) {
    if(Left >= Right) {
        return;
    }

    const PivotIndex = Partition(Arr , Left , Right);

    QuickSort(Arr , Left , PivotIndex - 1);
    QuickSort(Arr , PivotIndex + 1 , Right)
}

function Partition(Arr , Left , Right) {
    const Pivot = Arr[Right]

    let i = Left - 1 ; 

    for(let j = Left ; j < Right ; j++) {
        if(Arr[j] < Pivot) {
            i++;
            const temp = Arr[i];
            Arr[i] = Arr[j];
            Arr[j] = temp; 
        }
    }

    const temp  = Arr[i + 1];
    Arr[i + 1] = Arr[Right];
    Arr[Right] = temp;

    return i + 1;
}

let arr = [344, 3445, 67, 123, 534 , 787 , 3 , 85 ,1]

QuickSort(arr);

console.log(arr)

/*
Dry Run of the QuickSort Code

The input array:  
`[344, 3445, 67, 123, 534, 787, 3, 85, 1]`

---

Step 1: Initial Call to `QuickSort(arr, Left = 0, Right = 8)`
- Array: `[344, 3445, 67, 123, 534, 787, 3, 85, 1]`
- Left: `0`, Right: `8`
- Call `Partition(arr, Left = 0, Right = 8)`.

---

Step 2: Partition Step with `Pivot = 1` (Last Element)
- Array: `[344, 3445, 67, 123, 534, 787, 3, 85, 1]`
- Initialize `i = -1`
- Iterate `j` from `0` to `7`:
  - No swaps as no element is smaller than `1`.
- Swap `arr[i + 1]` with `arr[Right]`:
  - Swap `arr[0]` and `arr[8]` → `[1, 3445, 67, 123, 534, 787, 3, 85, 344]`.
- Return `PivotIndex = 0`.

---

Step 3: Recursive Calls After First Partition
- Left Subarray (`Left = 0, Right = -1`): Base case, return.
- Right Subarray (`Left = 1, Right = 8`): Call `QuickSort(arr, Left = 1, Right = 8)`.

---

Step 4: Partition Step with `Pivot = 344`
- Array: `[1, 3445, 67, 123, 534, 787, 3, 85, 344]`
- Pivot: `344`
- Initialize `i = 0`
- Iterate `j` from `1` to `7`:
  - `3445 > 344`: No swap.
  - `67 < 344`: Swap `arr[1]` with `arr[2]` → `[1, 67, 3445, 123, 534, 787, 3, 85, 344]`.
  - `123 < 344`: Swap `arr[2]` with `arr[3]` → `[1, 67, 123, 3445, 534, 787, 3, 85, 344]`.
  - `534 > 344`: No swap.
  - `787 > 344`: No swap.
  - `3 < 344`: Swap `arr[3]` with `arr[6]` → `[1, 67, 123, 3, 534, 787, 3445, 85, 344]`.
  - `85 < 344`: Swap `arr[4]` with `arr[7]` → `[1, 67, 123, 3, 85, 787, 3445, 534, 344]`.
- Swap `arr[i + 1]` with `arr[Right]`:
  - Swap `arr[5]` and `arr[8]` → `[1, 67, 123, 3, 85, 344, 3445, 534, 787]`.
- Return `PivotIndex = 5`.

---

Step 5: Recursive Calls After Second Partition
- Left Subarray (`Left = 1, Right = 4`): Call `QuickSort(arr, Left = 1, Right = 4)`.
- Right Subarray (`Left = 6, Right = 8`): Call `QuickSort(arr, Left = 6, Right = 8)`.

---

Step 6: Partition for Left Subarray with `Pivot = 85`
- Array: `[1, 67, 123, 3, 85, 344, 3445, 534, 787]`
- Pivot: `85`
- Initialize `i = 0`
- Iterate `j` from `1` to `3`:
  - `67 < 85`: Swap `arr[1]` with itself.
  - `123 > 85`: No swap.
  - `3 < 85`: Swap `arr[2]` with `arr[3]` → `[1, 67, 3, 123, 85, 344, 3445, 534, 787]`.
- Swap `arr[i + 1]` with `arr[Right]`:
  - Swap `arr[3]` and `arr[4]` → `[1, 67, 3, 85, 123, 344, 3445, 534, 787]`.
- Return `PivotIndex = 3`.

---

Step 7: Recursive Calls for Left Subarray of `[67, 3]`
- Left Subarray (`Left = 1, Right = 2`): Call `QuickSort(arr, Left = 1, Right = 2)`.

---

Step 8: Partition for `[67, 3]` with `Pivot = 3`
- Array: `[1, 67, 3, 85, 123, 344, 3445, 534, 787]`
- Pivot: `3`
- Initialize `i = 0`
- Iterate `j = 1`:
  - `67 > 3`: No swap.
- Swap `arr[i + 1]` with `arr[Right]`:
  - Swap `arr[1]` and `arr[2]` → `[1, 3, 67, 85, 123, 344, 3445, 534, 787]`.
- Return `PivotIndex = 1`.

---

Step 9: Recursive Calls for Right Subarray of `[3445, 534, 787]`
- Left Subarray (`Left = 6, Right = 7`): Call `QuickSort(arr, Left = 6, Right = 7)`.

---

Step 10: Partition for `[3445, 534]` with `Pivot = 534`
- Array: `[1, 3, 67, 85, 123, 344, 3445, 534, 787]`
- Pivot: `534`
- Initialize `i = 5`
- Iterate `j = 6`:
  - `3445 > 534`: No swap.
- Swap `arr[i + 1]` with `arr[Right]`:
  - Swap `arr[6]` and `arr[7]` → `[1, 3, 67, 85, 123, 344, 534, 3445, 787]`.
- Return `PivotIndex = 6`.

---

Step 11: Final Recursive Calls
- Remaining subarrays are either empty or have one element, so the recursion terminates.

---

Final Output:
Sorted Array: `[1, 3, 67, 85, 123, 344, 534, 787, 3445]`
*/