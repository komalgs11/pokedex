let pokemonList = [ // array of objects ,three keys to each Pokémon object.
    {
        name: 'Bulbasaur',
        height: 0.7,
        types: ['grass', 'poison']
    },
    {
        name: 'Pikachu',
        height: 0.4,
        types: ['electric']
    },
    {
        name:'Squirtle',
        height: 0.5,
        type: ['water']
    },
    {
        name: 'Wigglytuff',
        height: 1,
        type: ['fairy','normal']
    }
];

pokemonList.forEach(function(pokemon) {
    document.write(pokemon.name + " (height: "  + pokemon.height + ") <br>");
  });