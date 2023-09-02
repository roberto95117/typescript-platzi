export const crProduct = (
    id: string | number,
    stock: number,
    status?: boolean
) => {
    return {
        id,
        stock,
        status: status ?? true
    }
}

let a = crProduct(1,12, false);
let b = crProduct(1,0);

console.log(a);
console.log(b);