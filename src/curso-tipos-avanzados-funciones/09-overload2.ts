//sobrecarga
export function parseString(input : string) : string[];
export function parseString(input : string[]) : string;

export function parseString(input: string | string[]): string | string[]{
    if(Array.isArray(input)){
        return input.join();
    }
    return input.split('');
}
//sobrecarga
export function parseString2(input : string) : string[];
export function parseString2(input : string[]) : string;
export function parseString2(input : number) : boolean;

export function parseString2(input: unknown): unknown{
    if(Array.isArray(input)){
        return input.join();
    }else if(typeof input === 'string'){
        return input.split('');
    }else if(typeof input === 'number'){
        return true;
    }
    
}
console.log(parseString('roberto').reverse());
console.log(parseString(['r','o','b','e','r','t','o']).toUpperCase());
console.log(parseString2(1));