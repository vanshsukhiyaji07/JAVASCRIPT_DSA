const BubbleSort = (arr) => {
    let IsSwap
    do{
        IsSwap = false
        for(let i = 0 ; i < arr.length - 1 ; i++) {
            if(arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp 
                IsSwap = true
            }
        }
    } while (IsSwap)
        return arr
}

console.log(BubbleSort([6, 5, 4, 3, 2, 1]))


/*
Outer Loop (Iteration 1):
 step 1 :- IsSwap = false

Inner Loop (Iteration 1):
    LOOP 1 :-
        step 1 :- i = 0
        step 2 :- 6 > 5 => true, swap
                IsSwap = true
                Array after swap: [5, 6, 4, 3, 2, 1]
        step 3 :- i++ 

    LOOP 2 :-
        step 1 :- i = 1
        step 2 :- 6 > 4 => true, swap
                IsSwap = true
                Array after swap: [5, 4, 6, 3, 2, 1]
        step 3 :- i++
    
    LOOP 3 :-
        step 1 :- i = 2
        step 2 :- 6 > 3 => true, swap
                IsSwap = true
                Array after swap: [5, 4, 3, 6, 2, 1]
        step 3 :- i++

    LOOP 4 :-
        step 1 :- i = 3
        step 2 :- 6 > 2 => true, swap
                IsSwap = true
                Array after swap: [5, 4, 3, 2, 6, 1]
        step 3 :- i++

    LOOP 5 :- 
        step 1 :- i = 4
        step 2 :-  6 > 1 => true, swap
                IsSwap = true
                Array after swap: [5, 4, 3, 2, 1, 6]
        step 3 :- i++

End of Inner Loop.

Outer Loop (Iteration 2):
step 1 :- IsSwap = false

Inner Loop (Iteration 2):
    LOOP 1 :- 
        step 1 :- i = 0
        step 2 :- 5 > 4 => true, swap
            IsSwap = true
            Array after swap: [4, 5, 3, 2, 1, 6]
        step 3 :- i++

    LOOP 2 :-
        step 1 :- i = 1
        step 2 :- 5 > 3 => true, swap
            IsSwap = true
            Array after swap: [4, 3, 5, 2, 1, 6]
        step 3 :- i++

    LOOP 3 :-
        step 1 :- i = 2 
        step 2 :- 5 > 2 => true, swap
            IsSwap = true
            Array after swap: [4, 3, 2, 5, 1, 6]
        step 3 :- i++

    LOOP 4 :-
        step 1 :- i = 1
        step 2 :- 5 > 1 => true, swap
            IsSwap = true
            Array after swap: [4, 3, 2, 1, 5, 6]
        step 3 :- i++

End of Inner Loop.

Outer Loop (Iteration 3):
    step 1 :- IsSwap = false initially.
Inner Loop (Iteration 3)
    LOOP 1:-
        step 1 :- i = 0
        step 2 :- 4 > 3 => true, swap
            IsSwap = true
            Array after swap: [3, 4, 2, 1, 5, 6]
        step 3 :- i++
    LOOP 2 :- 
        step 1 :- i = 1
        step 2 :- 4 > 2 => true, swap 
            IsSwap = true
            Array after swap: [3, 2, 4, 1, 5, 6]
        step 3 :- i++
    LOOP 3 :- 
        step 1 :- i = 2
        step 2 :- 4 > 1 => true, swap 
            IsSwap = true
            Array after swap: [3, 2, 1, 4, 5, 6].
        step 3 :- i++

End of Inner Loop.

Outer Loop (Iteration 4) :-
    step 1 :- IsSwap = false
Inner Loop (Iteration 4) :-

    LOOP 1 :- 
        step 1 :- i = 0
        step 2 :- 3 > 2 => true, swap 
            IsSwap = true.
            Array after swap: [2, 3, 1, 4, 5, 6].
        step 3 :- i++
    LOOP 2 :-
        step 1 :- i = 1
        step 2 :- 3 > 1 => true, swap
            IsSwap = true.
            Array after swap: [2, 1, 3, 4, 5, 6].
        step 3 :- i++

End of Inner Loop.

Outer Loop (Iteration 5) :-
    step 1 :- IsSwap = false
Inner Loop (Iteration 5) :-

    LOOP 1:-
        step 1 :- i = 0
        step 2 :- 2 > 1 => true, swap 
            IsSwap = true.
            Array after swap: [1, 2, 3, 4, 5, 6].
        step 3 :- i++

End of Inner Loop.

Outer Loop (Iteration 6) :-
    step 1 :- IsSwap = true

SORTED ARRAY :- [1, 2, 3, 4, 5, 6]
*/