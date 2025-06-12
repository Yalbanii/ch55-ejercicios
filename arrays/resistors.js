/**
 YA VA A SER RESUELTO COMO FUNCION DESDE EL INICIO

Sum of Resistors in Series
 
Calculate the sum of all resistors connected in series.
Examples:
- `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values are positive.
*1. Un array de resistencias (HAY QUE CONOCER SU VALOR ABSOLUTO: DISTANCIA ENTRE 0 Y EL VALOR)
2.Usando Math.abs obtener el valor absoluto de los elementos del array
  2.1 
3.reduce, usar ciclos para hacer la suma
4. retornar un mensaje del tipo `"15 ohms"

.Suma de las resistencias en serie (SOLO SUMAN SU VALOR ABSOLUTO. LAS EN PARALELO SE DIVIDE SEPARADO)

 */

function sumOfResistors (resistorsArray){
const resistorsAbs = resistorsArray.map((resistor) => Math.abs(resistor)); 
  //el map regresa cada elemento con una operacion nueva. recibe una funcion callback porque regresa como argumento//
  console.log(resistorsAbs);
  const totalResistance = resistorsAbs.reduce((total,current) => total + current, 0);
  return `${totalResistance} ohms`
}
console.log(sumOfResistors([-1,5,-6,3, -9])); //para comprobar que funcione//
console.log(sumOfResistors([-1,5,6,3])); 
console.log(sumOfResistors([14, 3.5, 6])); 
console.log(sumOfResistors([8, 15, 100])); 

//Math.abs(): hace que los numeros negativos se vuelvan positivos
// .map():aplica algo a todos los elementos de una lista

/**
 * Sum of Resistors in Series
 

Calculate the sum of all resistors connected in series.
Examples:
sumResitance([-1,5,6,3]) should return "15 ohms". (|−1| + 5 + 6 + 3 = 15)
sumResitance([14,3.5,6]) should return '23.5 ohms'. (14 + 3.5 + 6 = 23.5)
sumResitance([8,15,100]) should return '123 ohms'. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values 
are positive.
 * 1. un array de resistencias
   2. usando Math.abs obtener el valor absoluto de los elementos del array
      2.1 usar un map para sacar todos los valores absolutos
   3. reduce, usar ciclos para hacer la suma
   4. retornar un mensaje del tipo "15 ohms"
 * 
 */