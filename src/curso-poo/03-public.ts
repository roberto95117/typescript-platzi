export class MyDate{
    public year: number;
    public month: number;
    public day: number;

    constructor(year: number, month: number, day: number){
        this.year = year;
        this.month = month;
        this.day = day;
    }

    public printFormat(): string{
        return `${this.year}-${this.month}-${this.day}`;
    }

    public add(amount : number, type : 'days' | 'months' | 'years'){
        if(type == 'days'){
            this.day += amount;
        }else if(type == 'months'){
            this.month += amount;
        }else if(type == 'years'){
            this.year += amount;
        }
    }
}

const myDate = new MyDate(1990, 12, 1);

console.log(myDate.printFormat());

myDate.add(3, 'days');

console.log(myDate.printFormat());

myDate.add(3, 'months');

console.log(myDate.printFormat());