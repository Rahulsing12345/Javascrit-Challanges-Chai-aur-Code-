// Control Structure 

// Write a program to check if a number is positive, negative or zero , and log the result to the console.
 
const num = -8

if (num < 0) {
    console.log(" Given number is negative"); 
} else if ( num === 0){
    console.log("Zero");
}else {
    console.log("Given number is positive");
}
    
// Solve using Ternary Operator

const result = num === 0 ? "The number is zero" :
 num < 0 ? " The number is negative " :
  "The number is positive"

  console.log(result);



//   Write a program to check a person is eligible to vote  (age>=18) and log the result to the console.

const age = 18;
const readyForVote = (age < 18) ? "Sorry! You are not eligible for vote" : "Congratulation! You are eligible for vote"
console.log(readyForVote);




// Nested if else statement

// Write a program to find the largest of three numbers using nested if else statement.

const a = 77
const b = 9
const c =  2222

if (a>b ) {
    if (a>c) {
        console.log(`${a} is greater number`
    )} else {console.log(`${c} is greater number`
    )}

} 

if (b>a){
    if (b>c) {
        console.log(`${b} is greater number`
        )
    } else {console.log(`${c} is greater number`
    )}
} 


// Solve using Ternary Operator
const greaterNumber = (a>b && a>c ) ? `${a} is greater` : (b>a && b>c) ? `${b} is greater` : `${c} is greater`
console.log(greaterNumber);




// Switch Case
// Write a program that uses a switch case statement to determine the day of the week
// based on the number (1-7) and log the day name to the console.

let day = 1
switch (day) {
    case 1:
        console.log("Monday");
        break;

        case 2:
        console.log("Tuesday");
        break;

        case 3:
        console.log("Wednesday");
        break;

        case 4:
        console.log("Thursday");
        break;

        case 5:
        console.log("Friday");
        break;

        case 6:
        console.log("Saturday");
        break;

        case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Out of range");
        break;
}



// Ternary Operator

// Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
 
let myNum = 7
let numEvenOddCheck  = (myNum%2==0) ? "Even number" : "Odd number"
console.log(numEvenOddCheck);






































//Practice Question (Find Leap Year)

// Write a priogram to check if a number is leap year using multiple conditions 
// (divisible by 4 but not 100 unless also divisible by 400) and log the result to the console.

// let year= 2020;
// if (year % 4 === 0 && year % 100 != 0) {
//     console.log("Leap year."); 
// }

// if (year % 4 === 0 && year % 100 != 0 && year % 400 === 0) {
//     console.log("Leap year."); 
// }

// if (year % 4 === 0 && year % 100 != 0 && year % 400 != 0) {
//     console.log("Not Leap year."); 
// }

// else {
//     console.log("Not Leap year."); 
// }

