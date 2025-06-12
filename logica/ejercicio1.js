let counter = 0;
const username = prompt("Hola, ingresa tu nombre de usuario: ");
const age = prompt("Ahora ingresa tu edad: "); //no es necesario convertirla a number porque no se va a usar
const favoriteMovies = [];
alert("A continuacion te vamos a pedir tus 5 peliculas favoritas");
for(let i = 1; i <=5; i++){
    //los string dentro de  ` `se conocen como string literal,
    //concatenar variables y texto de una forma mas sencilla y legible
favoriteMovies.push(prompt(`Ingresa la pelicula numero ${i}: `));
//equivalente a "ingresa la pelicula numero " + i + ": "
} //el for necesita saber cuando parar//
console.log(`Hola soy ${username}, tengo ${age} años y mis peliculas favoritas son:`);
//sin ` no funciona

while(counter < favoriteMovies.length){
    console.log(`Mi pelicula favorita numero ${counter + 1} es: ${favoriteMovies[counter]}`);
    counter++;
}
//empieza desde 0