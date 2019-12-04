// Données fournies
const movies = [
    {
        title: "Star Wars - La menace fantôme",
        characters: [
            'Jar Jar Binks',
            'Obiwan Kenobi',
            'Qui Gon Jinn',
            'Anakin Skywalker'
        ]
    },
    {
        title: "Star Wars Episode - L'attaque des clones",
        characters: [
            'Sénateur Organa',
            'Anakin Skywalker',
            'Obiwan Kenobi'
        ]
    },
    {
        title: "Star Wars Episode - La revanche des Sith",
        characters: [
            'Obiwan Kenobi',
            'Dark Vador',
            'Dark Sidious'
        ]
    },
];

const characters = [
    'Jar Jar Binks',
    'Qui Gon Jinn',
    'Obiwan Kenobi',
    'Anakin Skywalker'
];

function getMoviesByCharacters(movies, characters) {
    const results = {};

    for (let character of characters) {
        results[character] = [];

        for (let movie of movies) {
            if (movie.characters.indexOf(character) != -1) {
                results[character].push(movie.title);
            }
        }
    }

    return results;
}

const moviesByCharacters = getMoviesByCharacters(movies, characters);
console.log(moviesByCharacters);