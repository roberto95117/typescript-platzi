export class MyDate{
    
    constructor(
        public year: number = 1990, 
        public month: number = 1, 
        public day: number = 1
    ){}

    printFormat(): string{
        return `${this.year}-${this.month}-${this.addPadding(this.day)}`;
    }

    add(amount : number, type : 'days' | 'months' | 'years'){
        if(type == 'days'){
            this.day += amount;
        }else if(type == 'months'){
            this.month += amount;
        }else if(type == 'years'){
            this.year += amount;
        }
    }

    private addPadding(value : number){
        if(value <10){
            return `0${value}`;
        }
        return `${value}`;
    }

    getDay(){
        return this.day;
    }
}

const myDate = new MyDate(1990, 12, 1);

console.log(myDate.printFormat());

myDate.add(3, 'days');

console.log(myDate.printFormat());

myDate.add(3, 'months');

console.log(myDate.printFormat());

const myDate2 = new MyDate();
console.log(myDate2.printFormat());

const myDate3 = new MyDate(2023);
console.log(myDate3.printFormat());