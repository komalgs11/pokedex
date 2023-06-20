// wrap pokemonList array in an IIFE
let pokemonRepository = (function () {
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
            name: 'Squirtle',
            height: 0.5,
            type: ['water']
        },
        {
            name: 'Wigglytuff',
            height: 1,
            type: ['fairy', 'normal']
        }
    ];
    // getAll return all items 
    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    return {
        getAll: getAll,
        add: add
    };

})();

pokemonRepository.add(
    {
        name: 'Leafeon',
        height: 1,
        type: ['grass']
    });
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
    document.write(pokemon.name + " (height: " + pokemon.height + ") <br>");
});