let pokemonRepository = (function () {
  let pokemonList = [];
  // Loads API url
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
// Adding a pokemon to pokemon list
  function add(pokemon) {
    // Validate pokemon
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  //Gets the entire list from pokemonList Array
  function getAll() {
    return pokemonList;
  }
   // Add each item to li
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    // Event Listener for button
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }
// Loads Pokemon List
  function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
// Load Details of each
  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (details) {
      // Now we add the details to the item
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = [...details.types];
    })
    .catch(function (e) {
      console.error(e);
    });
  }

 function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function() {
      let modalBody = $('.modal-body');
      let modalTitle = $('.modal-title');

      modalTitle.empty();
      modalBody.empty();

      let pokemonName = $('<h1>' + pokemon.name + '</h1>');
      let pokemonImage = $('<img class="modal-img" style="width:50%">');
      pokemonImage.attr('src', pokemon.imageUrl);
      let pokemonHeight = $('<p>' + 'Height: ' + pokemon.height + '</p>');
      let pokemonTypes = document.createElement('span');
      let types = 'Types: ';
      pokemon.types.forEach(function(item) {
        types += item.type.name + ' ';
      });
      pokemonTypes.innerHTML = types;

      modalTitle.append(pokemonName);
      modalBody.append(pokemonImage);
      modalBody.append(pokemonHeight);
      modalBody.append(pokemonTypes);

      $('#pokemonModal').modal('toggle');
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
