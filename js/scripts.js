
let pokemon = [
  {name: "Charmander", height: 10 },
  {name: "Hypno", height: 16},
  {name: "Bulbasaur", height: 7}
];

for (let i=0; i< pokemon.length +1; i++) {
 if (pokemon[i].height > 10) {
    document.write(pokemon[i].name + "  height:" + pokemon[i].height + " Wow thats big!" + "<br>")
 } else {
    document.write(pokemon[i].name + "  height:" + pokemon[i].height + "<br>")
 }
}
