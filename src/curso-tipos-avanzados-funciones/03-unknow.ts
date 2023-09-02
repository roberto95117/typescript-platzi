let unknowVar : unknown;

unknowVar = true;
unknowVar = undefined;
unknowVar = null;

if(typeof unknowVar === 'string'){
    console.log(unknowVar.toUpperCase());
}

const parse = (str: string): unknown => {
    return JSON.parse(str);
}

let callParse = parse('123');

if(typeof callParse  === 'number'){
    const myNum: number = callParse;
    console.log(myNum);
}

console.log(parse('{ "nombre": "hola", "apellido": "mundo" }'));