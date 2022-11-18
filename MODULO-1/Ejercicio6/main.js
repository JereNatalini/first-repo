
const pokemons = [
    {
        nombre : "Charizard",
        tipoDePokemon : "fuego"
    },
    {
        nombre : "Snorlax",
        tipoDePokemon : "normal"
    },
    {
        nombre : "Rapidash",
        tipoDePokemon : "fuego"
    }
]

for(let i = 0; i < pokemons.length; i++)
{
    if(pokemons[i].tipoDePokemon == "fuego")
    {
        pokemonFuego = pokemons[i].nombre;
        console.log("¡" + pokemonFuego +" "+ "es un pokemon de Fuego!")
    }
}

