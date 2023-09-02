const neverEnd = () => {
    while(true){
        console.log('nunca para');
    } 
}

const fail = (msg : string) => {
    throw new Error(msg);
}

const ex = (input: unknown) => {
    if(typeof input === 'string'){
        return 'string';
    }else if (Array.isArray(input)){
        return 'array';
    }
    return fail('not match');
}

console.log(ex('1234'));
console.log(ex([1,3,4]));
console.log(ex(1234));