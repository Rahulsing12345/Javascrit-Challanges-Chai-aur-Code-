// Array

// Create an array of a numbers from 1 to 5 and log the array to the console.

const myArray = [1, 2, 3, 4, 5];
console.log(myArray); 
//OUTPUT :  [ 1, 2, 3, 4, 5 ]

// Access the first and last elements of the array and log them to the console.

console.log(`First element of array is ${myArray[0]}`); 

console.log(`Last element of array is ${myArray[(myArray.length - 1)]}` ); 

//OUTPUT :  
// First element of array is 1
// Last element of array is 5



//**********************************************************************************************************//



// Array methods basics

// Use push method to add a new number to the end of the array and log the updated array.

myArray.push(6);
console.log(myArray);
myArray.push(8, 9, 10, 11);
console.log(myArray);

// OUTPUT:

// [ 1, 2, 3, 4, 5, 6 ]

// [
//   1, 2, 3,  4,  5,
//   6, 8, 9, 10, 11
// ]


// Use pop method to remove the last element of the array and log the updated array.


myArray.pop();
console.log(myArray);

//OUTPUT   :    
// [
//   1, 2, 3,  4, 5,
//   6, 8, 9, 10
// ]


// Use shift method to remove the first element of the array and log the updated array.

myArray.shift();
console.log(myArray);

//OUTPUT   : 
// [
//     2, 3, 4,  5,
//     6, 8, 9, 10
//   ]


// Use unshift method to add a new number to the beginning of the array and log the updated array.

myArray.unshift(15);
console.log(myArray);

//OUTPUT   :
// [
//     15, 2, 3,  4, 5,
//      6, 8, 9, 10
//   ]




