import './css/styles.css';
// import pokemonCardTpl from './templates/pokemon-card.hbs';


// const DEBOUNCE_DELAY = 300;


fetch('https://pokeapi.co/api/v2/pokemon/2/')// пойти на адрес
.then(response => { 
    // console.log(response.json());
    return response.json(); // распарсить ответ, возвращается промис
})
.then(pokemon => {
    console.log(pokemon);
    const markup = pokemonCardTpl(pokemon);
    console.log(markup);
})
.catch(error => {
    console.log(error);
});

