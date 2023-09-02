export const crProduct = (
    id: string | number,
    stock: number = 10,
    status: boolean = true
) => {
    return {
        id,
        stock,
        status
    }
}

let a = crProduct(1,12, false);
let b = crProduct(1,0);
let c = crProduct(1);
console.log(a);
console.log(b);
console.log(c);