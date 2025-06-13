/*Positive dominance in Array
 

Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 

Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
1. Determinar si la mayoria de los numeros dentro de un array son positivos, 
2. Contar cuantos numeros son positivos y cuantos falsos.
3.Si el contador positivo es mayor, entonces el array sera positivamente dominante.
4.Devolver verdadero o falso.
*/

function positiveDom(number) {
let counterPos = 0
let counterNeg = 0
  for (let i = 0; i < number.length; i++) {
    if (number [i] > 0) {
      counterPos++;
    } else {
      counterNeg++;
  } 
 if (counterPos > counterNeg)
  return true
}
 if (counterPos < counterNeg)
  return false
}

console.log(positiveDom([-1, -3, -5, 4, 6767]));
console.log(positiveDom([-1, -3, -5, 4, 6, 656565, 324, 6767]));
console.log(positiveDom([-1, -3, 3, 1, 2]));