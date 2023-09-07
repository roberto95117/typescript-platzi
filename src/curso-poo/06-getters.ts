export class MyDate{
    
    constructor(
        public year: number = 1990, 
        public month: number = 1, 
        private _day: number = 1
    ){}

    printFormat(): string{
        return `${this.year}-${this.month}-${this.addPadding(this.day)}`;
    }

    add(amount : number, type : 'days' | 'months' | 'years'){
        if(type == 'days'){
            this._day += amount;
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

    get day(){
        return this._day;
    }

    get isLeapYer(): boolean {
        return true;
    }
}

const myDate3 = new MyDate(2023);
console.log(myDate3.printFormat());
console.log(myDate3.day);
console.log(myDate3.isLeapYer);