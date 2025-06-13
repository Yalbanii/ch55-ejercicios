/*
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
1. Pedirle una frase o palabra al usuario.
2. Definir si es palindromo o no
3. Informar al usuario el resultado.
*/

  function esPalindromo(palabra) {
  const cadena = palabra.toLowerCase().replace(/\s/g, '');
  const cadenaInvertida = cadena.split('').reverse().join('');
  return cadena === cadenaInvertida;
}
const palabraIngresada = prompt("Ingresa una frase o palabra:");
if (esPalindromo(palabraIngresada)) {
  alert(palabraIngresada + " es un palíndromo");
} else {
  alert(palabraIngresada + " no es un palíndromo");
}

/* Eliminar espacios y convertir a minúsculas para facilitar la comparación (/\s/g, '')
/[^A-Za-z0–9]/g   o
/[\W_]/g */ 
/* \W elimina todos los caracteres no alfanuméricos :
\W coincide con cualquier carácter que no sea una palabra
\W es equivalente a [^A-Za-z0–9_]
\W coincide con cualquier cosa que no esté entre corchetes */