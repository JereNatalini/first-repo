
const pokemons = [
    {nombre : "Charmander" , tipo : "fuego"},
    {nombre : "Bulbasur" , tipo : "planta"},
    {nombre : "Squirtle" , tipo : "agua"},
    {nombre : "Ponyta" , tipo : "fuego"},
    {nombre : "Magmar" , tipo : "fuego"},
    {nombre : "Suicune" , tipo : "agua"},
];

pokemonsFuego = (pokemons) =>
{
    for (let i = 0; i < pokemons.length; i++) {
        
        if(pokemons[i].tipo == "fuego")
        {
            console.log(pokemons[i].nombre)
        }
    }
}

pokemonsFuego(pokemons)