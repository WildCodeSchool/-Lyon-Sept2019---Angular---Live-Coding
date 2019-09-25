// Initiaze t1 array with 10 values 0, 1, 2, 3...
let t1 = [];
for (let value = 1; value <= 10; value++) {
    t1.push(value);
}
console.log("t1=", t1);

// Reverse an array
//console.log(t1.reverse());

// Create a t2 array which is the inverse of t1 array
let t2 = [];
for (let i = t1.length - 1; i >= 0; i--) {
    t2.push(t1[i]);
}
console.log("t2=", t2);

// Create a t3 array which is the sum between each item of t1 and t2
let t3 = [];
for (let i = 0; i < t1.length; i++) {
    t3.push(t1[i] + t2[i]);
}
console.log("t3=", t3);