/*Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".

1. Preguntarle al usuario una cantidad de segundos hasta que la alarma se ejecute
2. Que corra en reversa el tiempo
3. Al finalizar, sale un mensaje con texto que muestre los segundos que pasaron.
4. En tiempo real (cuanto vale un segundo)
*/
const alarma = prompt("Cuantos SEGUNDOS necesitas para ir a dormir?:");;
  let segundos = alarma;
   const timerInterval = setInterval(function() {
       console.log(segundos);
       segundos--;

       if (segundos < 0) {
           clearInterval(timerInterval);
           console.log("A DORMIR!");
             alert("A dormir!");  
       }
   }, (alarma * 1000)); //(1 second) Runs every 1000 milliseconds 
