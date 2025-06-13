/* Array of Multiples

Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 
Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.

1. Definir 2 variables (number, length)
2. Crear una funcion para obtener multiplos del numero las veces que sea length de largo.
3. Crear un array vacio con el resultado y push del tamaño de length.
4. Mostrar el resultado en consola.
*/
function arrayMultiplos(number, length){
      let multiplos = []
      number = parseInt(number);
      length = parseInt(length);
for (let i = 0; i < length; i++) {
      multiplos.push(number * (i + 1));
}
return multiplos;
}

console.log(arrayMultiplos(2, 10));
console.log(arrayMultiplos(17, 6));

/* parseInt(string, base); Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.
arr.push(element1[, ...[, elementN]]) elementN
Los elementos a añadir al final del array.

Valor devuelto
La nueva propiedad length del objeto sobre el cual se efectuó la llamada.
*/