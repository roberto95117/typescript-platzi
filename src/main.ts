console.log("hola platzi 2");

//Number
//Explicita
let phone: number;
phone = 30594429;

//Inferido
let phoneNumber = 40593399;
phoneNumber = 33449954;   

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let isPro: boolean = true;
let userPro = false;

let userName: string = "Roberto Xocop";
userName = 'Martin Xocop';

//uso back-tick
let userInfo: string;
userInfo= `
    User info:  
    User Name: ${userName}
    First Name: ${userName+ 'Aviles'}
    Phone: ${phone} 
    isPro: ${isPro}
`;

console.log("userInfo ", userInfo);




