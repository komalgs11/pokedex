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

// document.write() Pokémon’s height next to its name, for example, “Bulbasaur (height: 7)”
for (let i = 0; i < pokemonList.length; i++){ 
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")<br>");
    if (pokemonList[i].height > 0.8){
        document.write('<p> --Wow! that’s big pokemon!</p>');
    }else{
        document.write('<p> --Wow! this pokemon is cute.</p>');
    }
}

