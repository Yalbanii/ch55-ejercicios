 //firma de la funcion
  const fizzBuzz = (counterNumber) => { //que el bucle se repita n veces//
let counter = 1;
 do{
  if(counter % 3 === 0 && counter % 5 === 0) { //en if no usar ;
  //operador estricto
    console.log(`El numero ${counter } es FizzBuzz`);
    //sin ` no funciona
} else if (counter % 3 === 0) {
      console.log(`El numero ${counter } es Fizz`);
} else if (counter % 5 === 0) {
      console.log(`El numero ${counter } es Buzz`);
} else{
  console.log(counter);
}
counter++ //siempre hacer limite al contador
} while(counter <= counterNumber)  //la condcion pare cuando el counter number que ingrese el usuario
 };
 console.log ("50 veces");
 fizzBuzz(50);
  console.log ("200 veces");
 fizzBuzz(200);
 //LA FUNCION FUNCIONA UNA VARIABLE counterNumber que llamamos en la condicion. Agarra el valor que sea pasado en la linea donde se llama la funcion fizzBuzz
 // Necesitamos un bucle que iguale el contador con el counterNumber para que se detenga.
 //El argumento fue 50 y 200
 //La funcion se puede reutilizar durante todo el codigo. La funcion en while permite llamarla las veces que se necesite
 //En cuanto una funcion encuentra un return se va a detener la funcion