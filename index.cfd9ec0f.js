fetch("https://pokeapi.co/api/v2/pokemon/2/").then((o=>o.json())).then((o=>{console.log(o);const e=pokemonCardTpl(o);console.log(e)})).catch((o=>{console.log(o)}));
//# sourceMappingURL=index.cfd9ec0f.js.map
