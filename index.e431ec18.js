fetch("https://pokeapi.co/api/v2/pokemon/2/").then((function(o){return o.json()})).then((function(o){console.log(o);var n=pokemonCardTpl(o);console.log(n)})).catch((function(o){console.log(o)}));
//# sourceMappingURL=index.e431ec18.js.map
