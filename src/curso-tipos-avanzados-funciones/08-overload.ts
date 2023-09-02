function parseString(input: string | string[]): string | string[]{
    if(Array.isArray(input)){
        return input.join();
    }
    return input.split('');
}

console.log(parseString('roberto'));
console.log(parseString(['r','o','b','e','r','t','o']));