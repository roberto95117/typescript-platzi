//<> angle bracket syntax
let username: any;
username = 'roberto';

//tenemos una cadena, ts confia en nosotros

let message: string = (<string>username).length > 5 ?
    `Welcome ${username}` :
    'Username is too short';

console.log('message', message);

let usernameAndId: any = 'rmxocopc 1';

username= (<string>usernameAndId).substring(0,8);

console.log('username', username);

//sintaxis "as"

let message1= (username as string).length > 5 ?
    `Welcome ${username}` :
    'Username is too short';

console.log('message', message1);