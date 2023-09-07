export class Animal{

    constructor(protected nombre: string){}

    move(){
        console.log('move');
    }

    saludar(){
        console.log(`te saluda ${this.nombre}`);
    }

    protected doSomething(){
        console.log('doSomething');
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
        console.log(`woof ${this.nombre}`);
        this.doSomething();
    }

    move(): void {
        console.log('dog moving');
        super.move();
    }
}

const a1 = new Animal('pollo');

console.log(a1.saludar());


const a2 = new Dog('Doqui','Roberto');

console.log(a2.saludar());
console.log(a2.woof());
console.log(a2.move());