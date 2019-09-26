// Function Hello World
function greet() {
    console.log('Hello World');
}

greet();

const greetArrow = () => {
    console.log('Hello World Arrow Function');
}

greetArrow();

// Function Return identical parameter
function identical(param) {
    return param;
}
console.log(identical("N'importe quoi"));

const identicalArrow = (param) => {
    return param;
}
console.log(identicalArrow("N'importe quoi Arrow"));

// Function which return the double of the integer parameter
function double(param) {
    return parseInt(param) * 2;
}
console.log(double(12.5));
console.log(double("99"));
console.log(double(true)); // => NaN : Not a Number

// Function whichn return the multiplication between 2 integer values
function multiplication(a, b) {
    return parseInt(a) * parseInt(b);
}
console.log(multiplication(2, 4));
console.log(multiplication(2.6, 4.1));
console.log(multiplication(0.5, 5));

// Function which return parameter surounded by * character
function surronded(param) {
    return `*${param}*`;
    //return "*" + param + "*";
}
console.log(surronded("Jaune"));
let value = "Hello";
console.log(surronded(value));