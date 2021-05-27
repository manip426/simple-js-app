
let pokemonRepository = (function () {
  let repository = [
    { name: "Charmander",
    height: 10
  },
  {
    name: "Hypno",
    height: 16
  },
  {
    name: "Bulbasaur",
    height: 7
  }];

  function add(pokemon) {
    if (typeof pokemon === 'object') {
      return repository.push(pokemon);
      console.log(repository);

    } else {
      console.log("Please use objects to input new pokemon")
    }
  }
function getall() {
  return repository;
}

function addlistItem(pokemon) {
  let pokemonList = document.querySelector
  (".pokemon-list");
  let listPokemon = document.createElement("li");
}
}
return {
  add: add,
  getAll: getAll,
  addlistItem: addlistItem
};
})();

document.write(pokemonRepository.getall().foreach(function
  (pokemon) {
    pokemonRepository.addlistItem(pokemon);
  }));
