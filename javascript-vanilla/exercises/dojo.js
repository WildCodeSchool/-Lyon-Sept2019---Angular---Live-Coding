// Données fournies
var movies = [
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
var characters = [
    'Jar Jar Binks',
    'Qui Gon Jinn',
    'Obiwan Kenobi',
    'Anakin Skywalker'
];
function getMoviesByCharacters(movies, characters) {
    var results = {};
    for (var _i = 0, characters_1 = characters; _i < characters_1.length; _i++) {
        var character = characters_1[_i];
        results[character] = [];
        console.log(character);
        for (var _a = 0, movies_1 = movies; _a < movies_1.length; _a++) {
            var movie = movies_1[_a];
            if (movie.characters.indexOf(character) != -1) {
                results[character].push(movie.title);
                console.log(movie.title);
            }
        }
    }
    //return results;
}
var moviesByCharacters = getMoviesByCharacters(movies, characters);
console.log(moviesByCharacters);
