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
    // to add list on html and Function creates a button element for each Pokémon.
    function addListItem(pokemon) {
        let pokemonsList = document.querySelector('.pokemon-list');
        let listPokemons = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listPokemons.appendChild(button);
        pokemonsList.appendChild(listPokemons);
        //showDetails logs the Pokémon's name to the console.
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });
    }
    function showDetails(pokemon) {
        console.log(pokemon.name);
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        showDetails:showDetails
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
    pokemonRepository.addListItem(pokemon);
});


