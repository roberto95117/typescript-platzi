export{};
//1,'usename'
let user: [number,string];
user =[1,'robertoXocop'];

console.log('user',user);
console.log('username', user[1]);
console.log('username length', user[1].length);
console.log('id', user[0]);

//tuplas con varios valores
//id,username,esPro
let userInfo: [number,string,boolean];
userInfo=[2,'platzi',true];

console.log('userInfo', userInfo);

//arreglo de tuplas
//se agrega al final [] para indicar que tendremos un conjunto
//de elementos, no solo 1 como los ejemplos de arriba
//hay que recordar inicializarlo

let array: [number,string][]=[];
array.push([1,'rmxocopc']);
array.push([2,'platzi']);
array.push([3,'dido']);

console.log('array ', array);

//uson de funciones array
array[2][1]=array[2][1].concat('001');

console.log('array ', array);

