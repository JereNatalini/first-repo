//Inicial A
const palabras = ['arbol','Amarillo','Auto','cama','juguete'];

const empiezaPorA = (palabras) => 
    palabras.filter(palabra => palabra[0].toLowerCase() === 'a') 

console.log(empiezaPorA(palabras));



//Funcion reutilizable por letra

function filteredWordByLetter(word,letter)
{
    //Devolver una:   palabra que su primera letra sea igual a letter.
    return word.filter((word) => word[0].toLowerCase() === letter.toLowerCase())
}

const x = prompt("Ingrese una letra")
console.log(filteredWordByLetter(palabras,x))
