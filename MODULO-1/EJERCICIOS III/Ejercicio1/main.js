

const palabras = ['arbol','Amarillo','Auto','cama','juguete'];
const empiezaConA = [];

for (let i = 0; i < palabras.length; i++) {
    const palabra = palabras[i].toUpperCase();

    console.log(palabra)

    if(palabra.charAt(0) == "A")
    {   
        empiezaConA.push(palabra)
    }
        
        
}

console.log(empiezaConA)









