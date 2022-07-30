/* Desafio opcional para la entrega de variables y ciclos
Voy a hacer un cuestionario  preguntando a los usuarios sus anime favoritos y
voy a hacer q elijan entre 5 personajes cual es el mejor para ellos
y tambien voy a hacer una encuesta con votacion como ejercicio extra para ir practicando!*/

// let nombre = prompt("ingrese su nombre");
// let anime = '';

//     for (let i = 0; i <5; i++) {
        
//         anime += prompt("CUALES SON SUS 5 ANIMES FAVORITOS") + "\n";

//     }

//     alert ( "Su nombre es " + nombre + " Y sus animes favoritos son : " + "\n" + anime);


// /*Este es el cuestionario preguntando si alguno estos personajes es su favorito 
// y dondale una pequeña descripcion del personaje
// */

//     let personaje = prompt("Cual es tu personaje favorito Asta, Zenitsu, Tanjiro, Ash, Naruto");

//     while (personaje !="ninguno")
//     { 
//         switch (personaje) 
//         {
//             case "Asta":
//             alert ("No tenes magia pero sos super fuerte");
//             break;
//             case "Zenitsu":
//             alert ("Sos el dios del rayo");
//             break;
//             case "Tanjiro":
//             alert ("Sos uno de los pocos q sabe del aliento solar ");
//             break;
//             case "Ash":
//             alert ("Sos un maestro pokemon");
//             break;
//             case "Naruto":
//             alert ("Sos el Hokage de la aldea de la hoja");
//             break;
//             default:
//             alert("No te gusta ninguno de estos personajes, q triste")
//             break;
//         }
//         personaje = prompt("Tenes otro personaje favorito, Asta, Zenitsu, Tanjiro, Ash, Naruto");
//     }


/*esta es la encuesta q realize, se q puede haber varias variables pero 
realice varios intentos para lograr q funcione
*/


// let entrada = prompt("Cual es tu personaje favorito Asta, Zenitsu, Tanjiro, Ash, Naruto");
// const PERSONAJE1 = "Asta";
// const PERSONAJE2 = "Zenitsu";
// const PERSONAJE3 = "Tanjiro";
// const PERSONAJE4 = "Ash";
// const PERSONAJE5 = "Naruto";
// let votos = 0;
// let votos1 = 0;
// let votos2 = 0;
// let votos3 = 0;
// let votos4 = 0;


//     while (entrada !="ninguno")
//     { 
//         switch (entrada) 
//         {
//             case "Asta":
//             PERSONAJE1 + votos++;
//             alert ("Asta tiene " + votos + " voto/s.");
//             break;
//             case "Zenitsu":
//             PERSONAJE2 + votos1++;
//             alert ("Zenitsu tiene " + votos1 + " voto/s.");
//             break;
//             case "Tanjiro":
//             PERSONAJE3 + votos2++;
//             alert ("Tanjiro tiene " + votos2 + " voto/s.");
//             break;
//             case "Ash":
//             PERSONAJE4 + votos3++;
//             alert ("Ash tiene " + votos3 + " voto/s.");
//             break;
//             case "Naruto":
//             PERSONAJE5 + votos4++;
//             alert ("Naruto tiene " + votos4 + " voto/s.");
//             break;
//             default:
//             alert("No te gusta ninguno de estos personajes, q triste")
//             break;
//         }
//         entrada = prompt("Tenes otro personaje favorito, Asta, Zenitsu, Tanjiro, Ash, Naruto");
//     }

/* desafio de funciones, condicionales, operadores, ciclos y variables
voy a intentar hacer q un usuario se presente e intente comprar algun producto
de 3 q va a haber y cuando termine la compra se lo salude!!*/


function usuario () {
    let user = prompt ("ingrese su nonmbre de usuario")
    console.log (user);  
    return user;
    
}
function contraseña () {
    let password = parseInt(prompt("ingrese su contraseña en numeros esta vez hasta q aprenda como combinar con letras"));
        while (isNaN(password)) 
            {
            password = parseInt( prompt( "reingrese contraseña"));
        }
        console.log (password);
        return password;
        }
let persona = usuario ();
contraseña ();
alert ("bienvenido querido "  + (persona) + " vamos a realizar la compra de nuestros articulos.");

// let total = 0;
let precioCartera = (1500 * 1.21);
let preciotobillera = (500 * 1.21);
let precioMochila = (2000 * 1.21);
console.log (precioCartera, preciotobillera, precioMochila);
let comprar = confirm ("Quiere comprar algun producto");
let productos = prompt ("SELECCIONAR NUESTROS PRODUCTOS \n 1 - CARTERA \n 2 - TOBILLERA \n 3 -MOCHILA");
while (comprar) {
    switch (productos){
        case "1":
        alert ("esta cartera cuesta $" + precioCartera + " iva incluido."); 
        break;
        case "2":
        alert ("la tobillera cuesta $"+ preciotobillera + " iva incluido.");
        break;
        case "3":
        alert ("Nuestra mochila chanelle cuesta $" + precioMochila+ " iva incluido.");
        default:
        alert ("gracias por tu compra");
        break;
    }
    comprar = confirm ("Quiere comprar algun producto mas?");
}
alert ("Gracias por comprar en MELANIAACCESORIOS");










