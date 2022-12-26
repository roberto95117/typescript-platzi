export {};
//10,'11'
let idUser: number | string;

idUser=10;
idUser='11';

//buscar username dado un id
function getUsernameById(id:number | string){
    return 'rmxocopc';
}

getUsernameById(20);
getUsernameById('11');

//alias de tipos
type IdUsuaro= number | string;
let idUser1: IdUsuaro;

idUser1=10;
idUser1='11';

//buscar username dado un id
function getUsernameById1(id: IdUsuaro){
    return 'rmxocopc';
}

getUsernameById1(20);
getUsernameById1('11');


//tipos literales
//100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000,1000';
let smallPicture: SquareSize =  '100x100';
let mediumPicture: SquareSize = '500x500';

