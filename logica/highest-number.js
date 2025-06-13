/*Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
1. ingresar 10 numeros
2. acomodarlos
3. pedir que devuelva el numero de valor mas alto
*/
let counter = 0
const numbers2 = [1, 13, 25, 2, 15 ,9,10,11,123,88];
console.log(numbers2.sort((a, b) => a - b));
const lastElement = numbers2.pop();
console.log(lastElement);
alert("El numero de valor mas alto es: " + lastElement)


/* INTENTO DE LO MISMO PERO PIDIENDOLE AL USUARIO QUE INGRESE LOS NUMEROS
let counter = 0;
const numbersIng = prompt("Hola, ingresa 10 numeros: ");
const numberArray = [];
for(let i = 1; i <=10; i++){
numberArray.push(prompt(`Ingresa el numero ${i}: `));
} //el for necesita saber cuando parar//
while(counter < numberArray.length){
   
  console.log(`Mi pelicula favorita numero ${counter + 1} es: ${numberArray[counter]}`);
    counter++;
}
const number = function(numberArray){
let newArray = "";
const sortedNumber = numberArray.toSorted();
sortedNumber.forEach(number => newArray = newArray + number[0]); //foreach hace nuevo array//
  return newArray;
}
console.log(number([numberArray])); */