/* ------------------------------ Iterative Linear Search----------------------------------=*/

function LinearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) { return i + 1 }
    }
    return -1
}
console.log("\n Linear search");
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
console.log("\n binary search");
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

console.log("\n Recursive Binary Search");

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
console.log("\n Bubble sort");

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
console.log("\ninsertion sort");

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
console.log("\n quick sort");
console.log(quicksort(arr3));



/* ------------------------------ Merge Sorting----------------------------------=*/

function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }
const mid = Math.floor(arr.length/2)
const leftArr = arr.slice(0,mid)
const rightArr = arr.slice(mid)
return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    const sortedArr=[]
while(leftArr.length&&rightArr.length){
    if(leftArr[0]<rightArr[0]){
        sortedArr.push(leftArr.shift())
    }
    else{
        sortedArr.push(rightArr.shift())
    }
    return [...sortedArr,...leftArr,...rightArr]
}
}


//ascending order
const arr4 = [4,44,26,32,6,53,-12]
console.log("\n Merge sort");
console.log(mergeSort(arr4));

/* ------------------------------ DS Moderate Level----------------------------------=*/


/* ------------------------------------ Arrays---------------------------------------=*/
console.log("\n Array  DataStructure");


const arr5 = [1,2,3,"abhilash"]
arr5.push(5)
arr5.unshift(10)
arr5.pop()
arr5.shift()



for (const i of arr5){
        console.log(i);
}



/* ------------------------------------ Objects---------------------------------------=*/
console.log("\n Object  DataStructure");


const obj = {
    name:"Bruce",
    age: 25
}
console.log(obj);


                                 //Big O complexity
/*                                     insert = O{n}
                                    remove = O(1)
                                    Access = O(1)
                                    Search = O(n)
                                    Object.keys()  = O(n)
                                    Object.value() = O(n)
 */

/* ------------------------------------ Set ---------------------------------------*/
console.log("\n SET DataStructure");
const set = new Set([1,3,3,2,454,3])
set.add(54)
console.log(set.has(4));
set.delete(3)
console.log(set.size);
set.clear()

//cannot add duplicate values in set

for (const num of set){
    console.log(num);
}



/* ------------------------------------ MAP ---------------------------------------*/
console.log("\n MAP DataStructure");

const mao = new Map()

/* ------------------------------------ Linked List ---------------------------------------*/
console.log("\nLinkedlist DataStructure");

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }

}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
     return this.size===0
    }
    getSize(){
        return this.size;
    }

    prepend(value){
        
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
        }else{
            newNode.next=this.head;
            this.head = newNode
       }
            this.size++

    }


    print(){
        let current=this.head
        if(this.isEmpty){
            return 0
        }
        while(!current==null){
            current=this.next
            console.log(current)
        }
    }

}



const list = new LinkedList()
console.log(list.isEmpty());
list.prepend(10)
list.prepend(20)
list.prepend(30)
console.log(list.print());

