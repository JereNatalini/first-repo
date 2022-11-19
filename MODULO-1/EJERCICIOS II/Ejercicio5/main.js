
const personas = [

    { nombre: 'Juan', edad: 18 },
  
    { nombre: 'María', edad: 16 },
  
    { nombre: 'Pedro', edad: 20 },
  
    { nombre: 'Pablo', edad: 15 },
  
    { nombre: 'Laura', edad: 19 },
  ];

var mayor;
var menor;
var edadMenor;

esMayorDeEdad = (personas) => {
    const mayoresDeEdad = [];
    for (let i = 0; i < personas.length; i++) 
    {
        if(i==0)
        {
            edad = personas[i].edad
        }

        if(personas[i].edad >= 18)
        {
            mayoresDeEdad.push(personas[i].nombre)
        }

        //Mayor
        if(edad < personas[i].edad)
        {
            edad = personas[i].edad
            mayor = personas[i].nombre
        }

        //Menor
        if(edad > personas[i].edad)
        {
            edad = personas[i].edad
            menor = personas[i].nombre
        }
            

    }

    console.log("Mayores de Edad : " + mayoresDeEdad);
    console.log("Mayor: " + mayor);
    console.log("Menor: " + menor);

}

esMayorDeEdad(personas);