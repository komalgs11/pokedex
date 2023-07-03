// wrap pokemonList array in an IIFE
let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50';
    let modalContainer = document.querySelector('#exampleModal');


    function showModal(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {

            let titleElement = document.querySelector(".modal-title");
            titleElement.innerHTML = pokemon.name;

            let imageElement = document.querySelector(".pokemon-image");
            imageElement.src = pokemon.imageUrl;

            let heightElement = document.querySelector(".pokemon-height");
            heightElement.innerText = "Height: " + pokemon.height;

            modalContainer.classList.add('is-visible');
        });

    }

    function hideModal() {
        modalContainer.classList.remove('is-visible');
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });

    modalContainer.addEventListener('click', (e) => {
        // Since this is also triggered when clicking INSIDE the modal
        // We only want to close if the user clicks directly on the overlay
        let target = e.target;
        if (target === modalContainer) {
            hideModal();
        }

    });

    function add(pokemon) {
        if (typeof pokemon === "object" && "name" in pokemon) {
            pokemonList.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }
    }
    // getAll return all items
    function getAll() {
        return pokemonList;
    }
    // to add list on html and Function creates a button element for each Pokémon.
    function addListItem(pokemon) {
        let pokemonsList = document.querySelector(".list-group");

        let listPokemons = document.createElement("li");
        listPokemons.classList.add("list-group-item");


        let btn = document.createElement("button");
        btn.innerText = pokemon.name;
        btn.classList.add("btn-secondary");
        btn.setAttribute("data-toggle", "modal");
        btn.setAttribute("data-target", "#exampleModal");

        listPokemons.appendChild(btn);
        pokemonsList.appendChild(listPokemons);

        //showDetails logs the Pokémons name to the console.
        btn.addEventListener("click", function () {
            showDetails(pokemon);
        });
    }

    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    }


    // this use to fetch data from json
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url,
                    height: item.height,
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
        }).catch(function (e) {
            console.error(e);
        });
    }


    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
        showModal: showModal,
        hideModal: hideModal

    };

})();

pokemonRepository.loadList().then(function () {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

