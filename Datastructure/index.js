/* ------------------------------ Iterative Linear Search----------------------------------=*/

function LinearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) { return i + 1 }
    }
    return -1
}
console.log("Linear search");
const res = LinearSearch([1, 3, 3, 2, 2, 4, 3, 4, 54, 3, 2, 5, 5, 3,], 5)
console.log(res)


/* ------------------------------ Iterative Binary Search----------------------------------=*/


function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (target === arr[middle]) {
            return middle
        }
        if (target <= arr[middle]) {
            right = middle - 1
        }
        else {
            left = middle + 1
        }

    }
    return -1
}
console.log("binary search");
console.log(binarySearch([4, 2, 43, 543, 2, 5, 2, 4, 4, 3, 32, 3], 5))


/* ------------------------------ Recursive Binary Search----------------------------------=*/
function RecursiveBinary(arr, target) {

    return search(arr, target, 0, arr.length - 1)

}

function search(arr, target, left, right) {
    if (left > right) { 
        return -1 }

    let middle = Math.floor((left + right) / 2);

    if (target === arr[middle]) {
         return middle }

    if (target < arr[middle]) {
         return search(arr, target, left, middle - 1) }

    else {
         return search(arr, target, middle + 1, right) }
}

console.log("Recursive Binary Search");

console.log(RecursiveBinary([4, 2, 43, 543, 2, 5, 2, 4, 4, 3, 32, 3], 543))



/* ------------------------------ Bubble sorting----------------------------------=*/
function bubblesort(arr) {
    let swapped 
do {
 swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            swapped=true
        }
    }
} while (swapped);
    
}

let arr1 = [4, 2, 43, 543, 2, 5, 2, 4, 4, 3, 32, 3];
bubblesort(arr1);
console.log("Bubble sort");

console.log(arr1);

/* ------------------------------ Insertion sorting----------------------------------=*/

function insertionSort(arr){

for(let i=1;i<arr.length;i++){
    let temp = arr[i]
    let j = i-1
    while(j>=0 && arr[j]>temp){
        arr[j+1]=arr[j]
        j=j-1
    }
    arr[j+1]=temp
}

}

let arr2 = [4, 2, 43, 543, 2, 5, 2, 4, 4, 3, 32, 3];
insertionSort(arr2)
console.log("insertion sort");

console.log(arr2);

/* ------------------------------ Quick Sorting----------------------------------=*/

function quicksort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0;i<arr.length -1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return [...quicksort(left),pivot,...quicksort(right)]
}

const arr3 = [4,44,26,32,6,53,-12]
console.log("quick sort");
console.log(quicksort(arr3));



/* ------------------------------ Merge Sorting----------------------------------=*/

function mergesort(arr){
    if(arr.length < 2){
        return arr
    }


}


//ascending order
const arr4 = [4,44,26,32,6,53,-12]
console.log("Merge sort");
console.log(mergeSort(arr4));