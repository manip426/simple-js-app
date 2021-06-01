let pokemonRepository = (function () {
  let repository = [
    {
      name: "Charmander",
      height: 10,
    },
    {
      name: "Hypno",
      height: 16,
    },
    {
      name: "Bulbasaur",
      height: 7,
    },
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
   function getAll() {
    return repository;
  }

  function showDetails(pokemon) {
    console.log(pokemon)

  }
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function() {
      showDetails(pokemon);
      });
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();

pokemonRepository.add({ name: "Pikachu", height: 0.3 });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
