/* Desafio opcional para la entrega de variables y ciclos
Voy a hacer un cuestionario  preguntando a los usuarios sus anime favoritos y
voy a hacer q elijan entre 5 personajes cual es el mejor para ellos
y tambien voy a hacer una encuesta con votacion como ejercicio extra para ir practicando!*/

let nombre = prompt("ingrese su nombre");
let anime = '';

    for (let i = 0; i <5; i++) {
        
        anime += prompt("CUALES SON SUS 5 ANIMES FAVORITOS") + "\n";

    }

    alert ( "Su nombre es " + nombre + " Y sus animes favoritos son : " + "\n" + anime);


/*Este es el cuestionario preguntando si alguno estos personajes es su favorito 
y dondale una pequeña descripcion del personaje
*/

    let personaje = prompt("Cual es tu personaje favorito Asta, Zenitsu, Tanjiro, Ash, Naruto");

    while (personaje !="ninguno")
    { 
        switch (personaje) 
        {
            case "Asta":
            alert ("No tenes magia pero sos super fuerte");
            break;
            case "Zenitsu":
            alert ("Sos el dios del rayo");
            break;
            case "Tanjiro":
            alert ("Sos uno de los pocos q sabe del aliento solar ");
            break;
            case "Ash":
            alert ("Sos un maestro pokemon");
            break;
            case "Naruto":
            alert ("Sos el Hokage de la aldea de la hoja");
            break;
            default:
            alert("No te gusta ninguno de estos personajes, q triste")
            break;
        }
        personaje = prompt("Tenes otro personaje favorito, Asta, Zenitsu, Tanjiro, Ash, Naruto");
    }


/*esta es la encuesta q realize, se q puede haber varias variables pero 
realice varios intentos para lograr q funcione
*/


let entrada = prompt("Cual es tu personaje favorito Asta, Zenitsu, Tanjiro, Ash, Naruto");
const PERSONAJE1 = "Asta";
const PERSONAJE2 = "Zenitsu";
const PERSONAJE3 = "Tanjiro";
const PERSONAJE4 = "Ash";
const PERSONAJE5 = "Naruto";
let votos = 0;
let votos1 = 0;
let votos2 = 0;
let votos3 = 0;
let votos4 = 0;


    while (entrada !="ninguno")
    { 
        switch (entrada) 
        {
            case "Asta":
            PERSONAJE1 + votos++;
            alert ("Asta tiene " + votos + " voto/s.");
            break;
            case "Zenitsu":
            PERSONAJE2 + votos1++;
            alert ("Zenitsu tiene " + votos1 + " voto/s.");
            break;
            case "Tanjiro":
            PERSONAJE3 + votos2++;
            alert ("Tanjiro tiene " + votos2 + " voto/s.");
            break;
            case "Ash":
            PERSONAJE4 + votos3++;
            alert ("Ash tiene " + votos3 + " voto/s.");
            break;
            case "Naruto":
            PERSONAJE5 + votos4++;
            alert ("Naruto tiene " + votos4 + " voto/s.");
            break;
            default:
            alert("No te gusta ninguno de estos personajes, q triste")
            break;
        }
        entrada = prompt("Tenes otro personaje favorito, Asta, Zenitsu, Tanjiro, Ash, Naruto");
    }