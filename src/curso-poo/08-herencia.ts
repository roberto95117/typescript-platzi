export class Animal{

    constructor(public nombre: string){}

    move(){
        console.log('move');
    }

    saludar(){
        console.log(`te saluda ${this.nombre}`);
    }
    
}

export class Dog extends Animal{

    constructor(
        nombre: string,
        public owner: string
    ){
        super(nombre);
    }

    woof(){
        console.log('woof');
    }
}

const a1 = new Animal('pollo');

console.log(a1.saludar());


const a2 = new Dog('Doqui','Roberto');

console.log(a2.saludar());

console.log(a2.woof());