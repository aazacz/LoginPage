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
        return -1
    }

    let middle = Math.floor((left + right) / 2);

    if (target === arr[middle]) {
        return middle
    }

    if (target < arr[middle]) {
        return search(arr, target, left, middle - 1)
    }

    else {
        return search(arr, target, middle + 1, right)
    }
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
                swapped = true
            }
        }
    } while (swapped);

}

let arr1 = [4, 2, 43, 543, 2, 5, 2, 4, 4, 3, 32, 3];
bubblesort(arr1);
console.log("\n Bubble sort");

console.log(arr1);

/* ------------------------------ Insertion sorting----------------------------------=*/

function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = temp
    }

}

let arr2 = [4, 2, 43, 543, 2, 5, 2, 4, 4, 3, 32, 3];
insertionSort(arr2)
console.log("\ninsertion sort");

console.log(arr2);

/* ------------------------------ Quick Sorting----------------------------------=*/

function quicksort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }
    return [...quicksort(left), pivot, ...quicksort(right)]
}

const arr3 = [4, 44, 26, 32, 6, 53, -12]
console.log("\n quick sort");
console.log(quicksort(arr3));



/* ------------------------------ Merge Sorting----------------------------------=*/

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            sortedArr.push(leftArr.shift())
        }
        else {
            sortedArr.push(rightArr.shift())
        }
        return [...sortedArr, ...leftArr, ...rightArr]
    }
}


//ascending order
const arr4 = [4, 44, 26, 32, 6, 53, -12]
console.log("\n Merge sort");
console.log(mergeSort(arr4));

/* ------------------------------ DS Moderate Level----------------------------------=*/


/* ------------------------------------ Arrays---------------------------------------=*/
console.log("\n Array  DataStructure");


const arr5 = [1, 2, 3, "abhilash"]
arr5.push(5)
arr5.unshift(10)
arr5.pop()
arr5.shift()



for (const i of arr5) {
    console.log(i);
}



/* ------------------------------------ Objects---------------------------------------=*/
console.log("\n Object  DataStructure");


const obj = {
    name: "Bruce",
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
const set = new Set([1, 3, 3, 2, 454, 3])
set.add(54)
console.log(set.has(4));
set.delete(3)
console.log(set.size);
set.clear()

//cannot add duplicate values in set

for (const num of set) {
    console.log(num);
}



/* ------------------------------------ MAP ---------------------------------------*/
console.log("\n MAP DataStructure");

const mao = new Map()

/* ------------------------------------ Linked List ---------------------------------------*/
console.log("\nLinkedlist DataStructure");

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }

}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {                  //Check the LinkedList is empty or not
        return this.size === 0
    }
    getSize() {
        console.log(this.size);              //get the size of the linked list
        return this.size;
    }

    prepend(value) {             //adding at the beginning of the linked list

        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
        } else {
            newNode.next = this.head;
            this.head = newNode
        }
        this.size++

    }


    append(value) {              //adding at the last of  the linked list
        const node = new Node(value)

        if (this.isEmpty()) {
            this.head = node
        }
        else {

            let current = this.head
            while (current.next !== null) {
                current = current.next
            }

            current.next = node
        }
        this.size++

    }


    print() {                    //printing the linked list
        let current = this.head
        let list = " "
        if (this.isEmpty()) {
            return 0
        }
        while (current !== null) {
            list += `${current.value} `
            current = current.next


        }
        console.log(list)

    }

    insert(value, index) {            //insert at a specific index
        if (index <= 0) {
            this.prepend(value)
        }
        else if (index > this.size) {
            this.append(value)
        }
        else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            const node = new Node(value)
            node.next = prev.next
            prev.next = node
            this.size++

        }
    }

    removeFrom(index) {      //remove a node from an index

        if (index < 0 || index > this.size) {
            return
        }
        let current = this.head
        let prev = this.head

        if (index === 0) {
            this.head = this.head.next

            return current.value
        }
        else {

            for (let i = 0; i < index - 1; i++) { prev = prev.next }
            let removeNode = prev.next
            console.log(removeNode);
            prev.next = removeNode.next
        }

        this.size--
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null
        }


        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        }
        else {
            let prev = this.head
            while (prev.next && value !== prev.next.value) {
                prev = prev.next
            }
            if (prev.next) {
                let removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                console.log(removeNode.value);
                return removeNode.value
            }
            return null
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return -1
        }
        let index = 0
        let current = this.head
        while (current) {
            if (current.value == value) {
                return index
            }
            current = current.next
            index++
        }
        return -1
    }
}



const list = new LinkedList()
console.log(list.isEmpty());
list.append(10)
list.append(20)
list.append(30)
list.print();
list.insert(44, 2)
list.removeFrom(3)
list.append(37)
list.getSize()
console.log("value removed");
list.removeValue(20)
list.getSize()
list.print();
list.getSize()





/* ------------------------------------ Stack ---------------------------------------*/
console.log("\nStack DataStructure");


class stack{
    constructor(){
        this.items = []
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }

    isEmpty(){
        return this.items.length === 0

    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString());
    }

}

const Stack = new stack()
console.log(Stack.isEmpty());
Stack.push(10)
Stack.push(20)
Stack.push(30)
Stack.print()
console.log(Stack.peek());



/* ------------------------------------ Queue ---------------------------------------*/ //linear time complexity
console.log("\nQueue DataStructure");

class queue{
    constructor(){
        this.items = []
    }
    enqueue(value){
        this.items.push(value)
    }
    dequeue(){
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length===0
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString());
    }
}

const Queue = new queue
console.log(Queue.isEmpty());
Queue.enqueue(10)
Queue.enqueue(20)
Queue.enqueue(23)
Queue.enqueue(44)
Queue.print()
Queue.dequeue()
Queue.print()
console.log(Queue.peek());



/* ------------------------------------ Queue ---------------------------------------*/ //constant time complexity
console.log("\nQueue-Optimised DataStructure");


