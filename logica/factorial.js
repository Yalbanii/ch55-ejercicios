/* Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.

1.Pedirle al usuario un numero
2. Utilizar la formula para sacar un factorial
3. Usar el numero ingresado en la formula para obtener su factorial.
4. Mostrar el resultado.
5. Informar al usuario si el numero que ingreso no es entero o positivo.
*/

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

const numero = prompt('Ingresa un numero entero positivo para saber su factorial:  ');
if (numero >= 1) {
    const result = factorial(numero); //aqui mando a llamar la funcion//
    console.log(`El factorial del numero ${numero} es ${result}`);
    alert (`El factorial del numero ${numero} es ${result}`)
}
else {
    console.log('Ese numero no es entero positivo');
    alert (`Ese numero no es entero positivo`) //sin ` no sirve//
}


/*formula n!

recursiveFunc function calls itself within the body of the function.
The Three Parts of a Recursive Function
Every time you write a recursive function, three elements must be present. They are:

The function definition.

The base condition.

The recursive call.
*/