function hello(firstName) {
    return "Hello " + firstName + "welcome into the Wild.";
}
// Translate the previous function to an arrow function
const helloArrow = firstName => {
    console.log("Isabelle");
    return `Hello ${firstName} welcome into the wild`;
}

const returnedValue = helloArrow("André");
console.log(returnedValue);
//console.log(hello("André"));

// The same without the return statement
const helloArrow2 = firstName => `Hello ${firstName} welcome into the wild`;
console.log(helloArrow2("Hakim"));

// Concatenate arrays
const fruits = ["Bananas", "Oranges", "Strawberries"];
const vegetables = ["Cabbages", "Carotts"];
const results = [...fruits, ...vegetables]
console.log(results);
// Another way more conventional
const results2 = fruits.concat(vegetables);
console.log(results2);