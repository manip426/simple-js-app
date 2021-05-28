
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
function getAll() {
  return repository;
}

function addlistItem(pokemon) {
  let pokemonList = document.querySelector(".pokemon-list");
  let listPokemon = document.createElement("li");
}

return {
  add: add,
  getAll: getAll,
  addlistItem: addlistItem
};
})();

pokemonRepository.getAll().forEach(function
  (pokemon) {
    if (pokemon.height>10) {
      document.write('${pokemon.name}, height: ${pokemon.height}. Oh! That is huge "<br>" ')
} else {
  document.write('${pokemon.name}, height: ${pokemon.height}.  "<br>" ')
}
});
