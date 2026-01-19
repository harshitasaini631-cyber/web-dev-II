let fruits1 = ["apple","banana"];
let newLength1 = fruits1.push("cherry");
console.log(fruits1)

let fruits2 = ["apple","banana","cherry"];
let newLength2 = fruits2.pop();
console.log(fruits2)

let fruits3 = ["apple","banana","cherry"];
let newLength3 = fruits3.shift();
console.log(fruits3)

let fruits4 = ["banana","cherry"];
let newLength4 = fruits4.unshift("apple");
console.log(fruits4)

/*db pop push && shift unshift*/ 



/*q1 reverse the array using push and pop method. */
let arr = [1,2,3,4,5]
let reverse = []

while (arr.length > 0){
    reverse.push(arr.pop())
}

console.log(reverse)

/*q2 remove all negative numbers from an array
only using push pop shift unshift*/
let arr1 = [-5,-9,-3,-7,8,16,1]
result = [8,16,1]

/*q3 check if array is palindrome or not
print message if palindrome or not .
only using shift unshift push pop*/