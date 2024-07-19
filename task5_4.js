// Function parameters and default values.

// Write a function that takes two parameters  and returns there product.
// Provide a default value for the second parameter.

const mulTwoNum = ( a, b = 5) => {
    return a*b

}

console.log(mulTwoNum(2));                                // default value = 5
console.log(mulTwoNum(4, 7)); 




// Write a function that takes the persons name and age and returns a greeting message. Provide a default value for the age.

const PersonName = ( name, age = 19 ) => {
    return (`Welcome ${name} your age is ${age}` )
}


console.log(PersonName("Mohan Singh"));
console.log(PersonName("Rahul Singh", 22));

