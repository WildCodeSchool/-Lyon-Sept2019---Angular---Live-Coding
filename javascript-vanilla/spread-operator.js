const profile = {
    name: "Maël",
    age: 31
};

const account = {
    password: "AZERTY",
    email: "mael@example.com"
};

const user = {
    ...profile,
    avatar: 'une-super-image.jpg',
    ...account
};

console.log(user);

const { name } = profile;
console.log(name);