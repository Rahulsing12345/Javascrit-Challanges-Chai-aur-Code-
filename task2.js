// Challange  2
// Arithmetic Operation
// Write a program to (add, subtract, multiply, divide, and reminder) of two numbers and log the result to the console 

let val1 = 25
let val2 = 5
let result1 = `The sum of ${val1} and ${val2} is ${val1+val2}`
let result2 = `The sub of ${val1} and ${val2} is ${val1-val2}`
let result3 = `The mul of ${val1} and ${val2} is ${val1*val2}`
let result4 = `The divide of ${val1} and ${val2} is ${val1/val2}`
let result5 = `The reminder by dividing ${val1} and ${val2} is ${val1%val2}`

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);




// Assignment Operator
// use "+=" operator to add and "-=" operator for subtract a number to a variable and log the result to the console 

let num1 = 10;
let num2 = 7;

console.log(" sum = ", num1 += num2)
console.log("subtract = ", num1 -= num2)


// Comparison Operator
// Write a program to compare two number using "<, >, <=, >=, ==, ===" and log the result to the console

let firstNum = 54
let secondNum = 10

console.log(firstNum < secondNum);
console.log(firstNum > secondNum);

let compNum1 = 7
let compNum2 = 22

if (compNum1<= compNum2)
    console.log(`${compNum1} is less then or equal to ${compNum2}`);

let compNumber1 = 77
let compNumber2 = 40
if (compNumber1>= compNumber2)
    console.log(`${compNumber1} is greater then or equal to ${compNumber2}`);

const str = "10"
const numb = 10
console.log(str == numb);  //Loose Equality

const str1 = "10"
const numb1 = 10
console.log(str1 === numb1);        //Strict Equality



// write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console
let n = 10
let resultPrint = n<0 ? "negative" : "positve"
console.log(resultPrint);




