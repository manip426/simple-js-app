let pokemonRepository = (function () {
  let pokemonList = [   { name: "Charmander",
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

return {
  add: function(pokemon) {
    pokemonList.push(pokemon);
  },
  getAll: function() {
    return pokemonList;
  }
};
})();

console.log(pokemonRepository.getAll()); // []
pokemonRepository.add({ name: 'Pokemon' });
