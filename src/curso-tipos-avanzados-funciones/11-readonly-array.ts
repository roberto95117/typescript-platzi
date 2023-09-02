const numbers: number[] = [1,2,3,4,5];

numbers.push(6);
numbers.pop();
numbers.unshift(7);


const numbersReadOnly: ReadonlyArray<number>= [1,2,3,4,5];

numbers.push(6);
numbers.pop();
numbers.unshift(7);
