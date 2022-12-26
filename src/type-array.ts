//corchetes
//Explicito
let users: string[];
users = ['roberto','martin','xocop','cuxil'];

//Inferido
let otherUsers = ['roberto','martin','xocop','cuxil'];


//Array<TIPO>
let pictureTitles: Array<string>;
pictureTitles = ['favoritas','destacadas','vacaciones'];

//Accediendo
console.log('first user', users[0]);
console.log('first otherusers', otherUsers[1]);
console.log('titles', pictureTitles[0]);

//Propiedades
console.log('legth', users.length);
let ddd: Array<string>=['1','2'];
//funcioes
users.push('platzi user');

users.sort();

console.log('users', users);