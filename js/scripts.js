let pokemonRepository = (function () {
  let pokemonList = [
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
  if (typeof pokemon === "object") {
    return repository.pushh(pokemon);
    console.log(repository);
  } else alert("not possible");
	}
}
function getAll() {
		return pokemonList;
	}
function addListItem(pokemon) {
  let pokemonList = document.querySelector(".pokemon-list");
  let listPokemon = document.createElement("li");
}
  return {
    add: function(pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function() {
      return pokemonList;
    }
  };
})();

pokemonRepository.loadList().then(function() {
	pokemonRepository.getAll().forEach(function (pokemon) {
		pokemonRepository.addListItem(pokemon);
	})
});
