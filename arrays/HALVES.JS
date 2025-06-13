/* Number divided into halves
 

Given a number, return the number divided into its halves in an array.
 

Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.
1. Dividir un numero a la mitad
2. Mostrar ambas mitades en un array.
*/
const usuario = prompt("Ingresa un numero para obtener sus mitades")
console.log(numDiv(usuario));


function numDiv(n){
  let half=n / 2;
  let halfNum = [];
  for (let i=0; i<2; i++){
    halfNum.push(half);
  }
  return halfNum;
}
alert(numDiv(usuario));