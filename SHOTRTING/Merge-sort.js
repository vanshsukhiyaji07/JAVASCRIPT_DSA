function Mergesort(arr) {
    if(arr.length <= 1) {
        return arr;
    }

    const Mid = Math.floor(arr.length / 2);

    const Left = new Array();
    const Right = new Array(arr.length - Mid);

    for(let i = 0 ; i < Mid ; i++){
        Left[i] = arr[i];
    }

    for(let i = Mid ; i < arr.length ; i++) {
        Right[i - Mid] = arr[i];
    }

    const SortLeft = Mergesort(Left);
    const SortRight = Mergesort(Right);

    return Merge(SortLeft , SortRight);
}

function Merge(Left , Right) {
    const Result = new Array(Left.length + Right.length);

    let i = 0, j = 0 , k = 0;

    while (i < Left.length && j < Right.length) {
        if (Left[i] < Right[j]) {
            Result[k++] = Left[i++];
        } else {
            Result[k++] = Right[j++];
        }
    }
    while (i < Left.length) {
        Result[k++] = Left[i++];
    }
    while (j < Right.length) {
        Result[k++] = Right[j++];
    }
    return Result;
}

let arr = [344, 3445, 67, 123, 534 , 787 , 3 , 85 ,1]

const SortArr = Mergesort(arr);

console.log(SortArr)

/*
arr :- [344, 3445, 67, 123, 534 , 787 , 3 , 85 ,1]

Dry Run of the Mergesort Code

The input array:  
`[344, 3445, 67, 123, 534, 787, 3, 85, 1]`  

Step 1: First Call to `Mergesort(arr)`
- Array: `[344, 3445, 67, 123, 534, 787, 3, 85, 1]`
- Midpoint (`Mid`): `4`
- Left: `[344, 3445, 67, 123]`
- Right: `[534, 787, 3, 85, 1]`
- Recursive calls are made for `Left` and `Right`.

---

Step 2: Recursive Call to `Mergesort([344, 3445, 67, 123])`
- Array: `[344, 3445, 67, 123]`
- Midpoint (`Mid`): `2`
- Left: `[344, 3445]`
- Right: `[67, 123]`
- Recursive calls are made for `Left` and `Right`.

---

Step 3: Recursive Call to `Mergesort([344, 3445])`
- Array: `[344, 3445]`
- Midpoint (`Mid`): `1`
- Left: `[344]` (base case)
- Right: `[3445]` (base case)
- Call `Merge([344], [3445])`.

Merge Step
- Merged Result: `[344, 3445]`

---

Step 4: Recursive Call to `Mergesort([67, 123])`
- Array: `[67, 123]`
- Midpoint (`Mid`): `1`
- Left: `[67]` (base case)
- Right: `[123]` (base case)
- Call `Merge([67], [123])`.

Merge Step
- Merged Result: `[67, 123]`

---

Step 5: Merge `[344, 3445]` and `[67, 123]`
- Call `Merge([344, 3445], [67, 123])`.
- Comparison:
  - `67 < 344` → Add `67` to result.
  - `123 < 344` → Add `123` to result.
  - Add remaining elements: `344` and `3445`.
- Merged Result: `[67, 123, 344, 3445]`.

---

Step 6: Recursive Call to `Mergesort([534, 787, 3, 85, 1])`
- Array: `[534, 787, 3, 85, 1]`
- Midpoint (`Mid`): `2`
- Left: `[534, 787]`
- Right: `[3, 85, 1]`
- Recursive calls are made for `Left` and `Right`.

---

Step 7: Recursive Call to `Mergesort([534, 787])`
- Array: `[534, 787]`
- Midpoint (`Mid`): `1`
- Left: `[534]` (base case)
- Right: `[787]` (base case)
- Call `Merge([534], [787])`.

Merge Step
- Merged Result: `[534, 787]`

---

Step 8: Recursive Call to `Mergesort([3, 85, 1])`
- Array: `[3, 85, 1]`
- Midpoint (`Mid`): `1`
- Left: `[3]` (base case)
- Right: `[85, 1]`
- Recursive call is made for `[85, 1]`.

---

step 9: Recursive Call to `Mergesort([85, 1])`
- Array: `[85, 1]`
- Midpoint (`Mid`): `1`
- Left: `[85]` (base case)
- Right: `[1]` (base case)
- Call `Merge([85], [1])`.

Merge Step
- Merged Result: `[1, 85]`

---

Step 10: Merge `[3]` and `[1, 85]`
- Call `Merge([3], [1, 85])`.
- Comparison:
    step 1 :- compare Left[0] = 3 and Right[0] = 1
         `1 < 3` → Add `1` to result.
    step 2 :- compare Right[1] = 85 and Left[0] = 3
         `3 < 85` → Add `3` to result.
  - Add remaining element: `85`.
- Merged Result: `[1, 3, 85]`.

---

Step 11: Merge `[534, 787]` and `[1, 3, 85]`
- Call `Merge([534, 787], [1, 3, 85])`.
- Comparison:
    step 1 :- compare Left[0] = 534 and Right[0] = 1
         `1 < 534` → Add `1` to result.
    step 2 :- compare Left[0] = 534 and Right[1] = 3
         `3 < 534` → Add `3` to result.
    step 3 :- compare Left[0] = 534 and Right[2] = 85
         `85 < 534` → Add `85` to result.
  - Add remaining elements: `534` and `787`.
- Merged Result: `[1, 3, 85, 534, 787]`.

---

Step 12: Merge `[67, 123, 344, 3445]` and `[1, 3, 85, 534, 787]`
- Call `Merge([67, 123, 344, 3445], [1, 3, 85, 534, 787])`.
- Comparison:
    step 1 :- compare Left[0] = 67 and Right[0] = 1 
         `1 < 67` → Add `1` to result.
    step 2 :- compare Left[0] = 67 and Right[1] = 3
         `3 < 67` → Add `3` to result.
    step 3 :- compare Left[0] = 67 and Right[2] = 85
         `67 < 85` → Add `67` to result.
    step 4 :- compare Left[1] = 123 and Right[2] = 85 
         `85 < 123` → Add `85` to result.
    step 5 :- compare Left[2] = 344 and Left[1] = 123
         `123 < 344` → Add `123` to result.
    step 6 :- compare Right[4] = 787 and Left[2] = 344
         `344 < 534` → Add `344` to result.
    step 7 :- compare Right[4] = 787 and Right[3] = 534 
         `534 < 787` → Add `534` to result.
  - Add remaining elements: `787` and `3445`.
- Final Merged Result: `[1, 3, 67, 85, 123, 344, 534, 787, 3445]`.

---

Final Output:
Sorted Array: `[1, 3, 67, 85, 123, 344, 534, 787, 3445]`
*/