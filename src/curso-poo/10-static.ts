console.log(Math.PI);


export class MyMath{
    static PI = 3.141616;

    static max(...numbers: number[]){
        return numbers[0];
    }
}

console.log(MyMath.PI);
console.log(MyMath.max(1,2,3,4,5));