// Write a function expression to find the maximum of two numbers and log the result to the console.

const maxNum = function  (a, b) {
    return (a>b) ? `${a} is greater` : `${b} is greater`
}

console.log(maxNum(55, 6));
console.log(maxNum(55, 256));
console.log(maxNum(6, 6));




// Write a function expression to concatenate two string and return the result.

const concateStr = function (firstName, lastName) {
    return ( "Hello " + firstName +" "+ lastName);
    
}

console.log(concateStr("Rahul", "Singh"));
console.log(concateStr(1, 2));

