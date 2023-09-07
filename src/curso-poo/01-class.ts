const date = new Date();
const date2 = new Date(1995,12,7);

console.log(date);
console.log(date2);



class MyDate{
    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day: number){
        this.year = year;
        this.month = month;
        this.day = day;
    }
}

const myDate = new MyDate(1990,12,5);


console.log(myDate);