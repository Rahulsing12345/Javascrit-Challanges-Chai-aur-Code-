// Array methods (Intermediate)       {map,filter reduce method}

// Use map method to create new array where each number is doubled and log the new array.

const myArr= [5, 7, 9 ,4, 2];
const mapArray = myArr.map( (doubleNum) => doubleNum * 2 )
console.log(mapArray);

// OUTPUT : [ 10, 14, 18, 8, 4 ]



// Use filter method to create new array with only even numbers and log the new array.

const evenNumArray = myArr.filter( (evenNum) => evenNum%2==0 )
console.log(evenNumArray);

// OUTPUT :  [ 4, 2 ]




// Use reduce method to calculate the sum of all number in the array and log the result.

const initialValue = 0;
const sumOfArray = myArr.reduce( (accumulator, currentValue) => accumulator + currentValue,
initialValue,
);

console.log(sumOfArray);

// OUTPUT : 27



