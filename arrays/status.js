/*
Online status

Display online status for a list of users.
 
Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
1. Analizar una lista de usuarios para saber si estan o no estan en linea.
2. Crear un array de usuarios
3. Definir su estado
4. Mostrar el resultado del estado en linea.
function onlineStatus(usuariosOn) {
let usuariosOn = (['mockIng99', 'J0eyPunch', 'glassedFer'])  
usuariosOn.forEach(user => {
  console.log(user);
});}

*/

const user1 = {
 user: "mockIng99 ",
 status: "is online ",
};

const user2 = {
user: 'J0eyPunch ',
 status: "is online ",
}

const user3 = {
user: 'glassedFer ',
 status: "is online",
};

const user4 = {
user: "otro ",
 status: "is offline ",
};

const users = [user1, user2, user3, user4];

const onlineStatus = users.map(objeto => Object.values(objeto));
console.log(onlineStatus);

alert(onlineStatus);

//no quita los offline//