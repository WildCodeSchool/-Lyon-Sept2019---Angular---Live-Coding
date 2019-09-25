// Declare an object property
const wilder = {
    name: 'Maël',
    city: 'Lyon',
    age: 31,
    isLearningJs: true
};

// Browse an object
for (let property in wilder) {
    console.log(property, '=', wilder[property]);
}

console.log("is name property exist ?", wilder.hasOwnProperty('name'));
console.log("is isLeaningJs property exist ?", wilder.hasOwnProperty('isLearningJs'));
console.log("is isLearningPHP property exist ?", wilder.hasOwnProperty('isLearningPHP'));

wilder['knowsHTML'] = true;
wilder['knowsCSS'] = true;
wilder.hobbies = ['Jeux Vidéos', 'Photographie'];

delete wilder.name;
wilder.firstName = "Maël";
wilder.lastName = "VINCENT";
console.log(wilder);