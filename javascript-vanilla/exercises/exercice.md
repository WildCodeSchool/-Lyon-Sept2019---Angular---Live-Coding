# Dojo

En typescript, **créer une fonction** qui prend en **paramètre** le **tableau des films** et celui **des personnages** et **retourne** les **films indexés par personnage**.

Durée : 1h

```typescript
// Résultats
const moviesByCharacters = getMoviesByCharacters(...);

// moviesByCharacters
{
  "Jar Jar Binks": [
    "Star Wars - La menace fantôme"
  ],
  "Obiwan Kenobi": [
    "Star Wars - La menace fantôme",
    "Star Wars Episode - L'attaque des clones",
    "Star Wars Episode - La revanche des Sith"
  ],
  ...
}
```

```typescript
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
```