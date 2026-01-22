/*q2 remove all negative numbers from an array
only using push pop shift unshift
let arr1 = [-5,-9,-3,-7,8,16,1]
result = [8,16,1]*/

let arr = [-5,-9,-3,-7,8,16,1];
let result = []; //empty array to store resultant array

while (arr.length > 0) {
  let num = arr.shift();   // remove first element and store it 

  if (num >= 0) {
    result.push(num);     // keep non-negative and store it in num 
  }
}

console.log(result); 


/*q3 check if array is palindrome or not
print message if palindrome or not .
only using shift unshift push pop*/


function palindrome(){
    let arr2 = [1,2,3,2,1]
    let original = [] //1,2,3,2,1
    let reverse = []  //1,4,3,2,1
    //copy all the elements of given array to the original array
    for(let i = 0; i < arr2.length; i++)
        original.push(arr2[i]);

    //reverse the given array
    while(arr2.length > 0){
        reverse.push(arr2.pop())
    }
    for( i = 0; i < original.length; i++){
        if (original[i] !== reverse[i]){
            return "It is not a palindrome"
        }
    }
    return "It is a palindrome";
}
console.log(palindrome());