export class MyService{

    private static instance: MyService | null = null;

    private constructor(private name: string){}

    getName(){
        return this.name;
    }

    static create(name: string){
        if(MyService.instance === null){
            console.log('1 vez');
            MyService.instance = new MyService(name);
        }
        return MyService.instance;
    }
}

const a = MyService.create("1");
const b = MyService.create("b");
const c = MyService.create("c");

console.log(a === b)