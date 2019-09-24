let school = [
    {
        name: "John",
        age: 24
    },
    {
        name: "Barbara",
        age: 28
    },
    {
        name: "Patrick",
        age: 32
    },
    {
        name: "Benjamin",
        age: 17
    },
    {
        name: "Sylvie",
        age: 36
    },
    {
        name: "Ana",
        age: 64
    }
];

let sum = 0;
for (let i = 0; i < school.length; i++) {
    sum += school[i].age;
    console.log(school[i].name);
}
console.log(sum);

let avg = sum / school.length;
console.log("Moyenne", avg);

/*

const john = 24;
const barbara = 28;
const patrick = 32;
const benjamin = 17;
const sylvie = 36;

let sumAge = john + barbara + patrick + benjamin + sylvie;
console.log("La somme des âges est " + sumAge);

let avg = sumAge / 5;
console.log("La moyenne des âges est", avg);

let diff = sylvie - benjamin;
console.log("La différence d'âge entre Sylvie et Benjamin est de", diff, "ans");

if (diff > 10) {
    console.log('vrai');
}
else {
    console.log('faux');
}

console.log("La diff d'age est > 10", diff > 10 ? 'vrai' : 'faux');

if (john < 25 && benjamin < 25) {
    console.log('vrai');
}
else {
    console.log('faux');
}

console.log("John et benjamin < 25 ?", john < 25 && benjamin < 25 ? 'vrai' : 'faux');

console.log(sylvie < 35 ? "Il n'y a personn
*/