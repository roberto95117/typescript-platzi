function getValue<myType>(value: myType){
    const val: myType = value;
    console.log(val);
    return value;
}

let a = getValue(12).toFixed();
let b = getValue('12').toLowerCase();

let c = getValue<number>(12).toFixed();
let d = getValue<string>('12').toLowerCase();