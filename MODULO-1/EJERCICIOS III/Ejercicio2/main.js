
const pinCorrecto = '1234';
let pin = prompt("Ingrese el PIN:")
let intentos = 0;

while(intentos < 3)
{
    if(pin == pinCorrecto)
    {
        document.write("Eso fue correcto")
        intentos=4;
    }
    else
        pin = prompt("Intente nuevamente:")
        intentos++;
}


//Intentos infinitos

let pin2 = prompt("Ingrese un PIN:")
while (pin2 !== 'salir')
{
    if (pin2 == pinCorrecto){
        document.write("Eso fue correcto")
        break;
    }
    else{
        pin = prompt("Ingrese nuevamente su PIN o escriba salir:")
    }
}




