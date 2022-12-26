export{};
type SquareSize = '100X100' | '500X500' | '1000X1000';

function createPicture(title: string,date: string,size: SquareSize){
    console.log('crate picture using', title, date, size);
}

createPicture('My birthday', '07/11/1995', '1000X1000');

//parameetros opcionales
function createPictureOp(title?: string,date?: string,size?: SquareSize){
    console.log('crate picture using', title, date, size);
}

createPictureOp('07/11/1995', '1000X1000');

//Flat array functions
let createPic = (title: string, date: string, size: SquareSize): object=>{
    return {
        title,
        date,
        size
    };
}

const picture = createPic('Platzi session', '2021-03-10', '500X500');

console.log('picture', picture);


function handleError(code: number, message: string): never | string {
    if(message === 'error'){
        throw new Error(`${message}. Code error:  ${code}`);
    }else{
        return 'An erorr has not occurred';
    }
}

let result = handleError(200,'OK');
console.log('result', result);

result = handleError(404,'error');
console.log('result', result);