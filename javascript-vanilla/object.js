const emptyObject = {};

const user = {
    name: "Maël",
    age: 31,
    nationality: "French",
    avatars: [
        'http://mael-vincent.com/img/profile.png',
        'http://static8.viadeo-static.com/2S5QSpF_YBTPbVUrQ6Hc7hfQgzY=/300x300/member/0022b2vd5cgq89hi%3Fts%3D1274267058000',
    ],
    hobbies: [
        {
            name: 'Overwatch',
            hours: 400
        },
        {
            name: 'Monster Hunter World',
            hours: 30
        }
    ]
};

console.log(user['name']);
console.log(user.name);
console.log(user.avatars[1]);
console.log(user.hobbies[1].name);

user.name = "Maëlle";
console.log(user.name);

console.log("Parcours des propriétés d'un objet");
for (let propertyName in user) {
    // user.propertyName <=== INVALID
    console.log(propertyName, '=', user[propertyName]);
}

let keys = Object.keys(user);
console.log(keys);

let values = Object.values(user);
console.log(values);