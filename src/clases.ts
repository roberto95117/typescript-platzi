export{};

enum PhotoOrientation {
    Landscape,
    Portrai,
    Squear,
    Panorama
};


class Picture {
    //prppiedades
    private _id: number; //privado
    private _title: string; //publico
    private _orientation: PhotoOrientation; //privado poner # ECMAScript 2015

    constructor(id: number, title: string, orientation: PhotoOrientation){
        this._id=id;
        this._title=title;
        this._orientation=orientation;
    }
    get id(){
        return this._id;
    }
    set id(val: number){
        this._id = val;
    }
    get title(){
        return this._title;
    }
    set title(val : string){
        this._title = val;
    }
    get orientation(){
        return this._orientation;
    }
    set orientation(val : PhotoOrientation){
        this._orientation=val;
    }
    //comportamiento
    toString(){
        return `id: ${this.id} titulo: ${this.title} orientation: ${this.orientation}`;
    }
}


class Album{
    private id:number;
    title: string;
    pictures: Picture[];

    constructor(id:number, titlle: string){
        this.id=id;
        this.title=titlle;
        this.pictures=[];
    }

    addPicture(picture: Picture){
        this.pictures.push(picture);
    }
}


const alubm: Album = new Album(1,'Personal Pictures');
const picture1: Picture = new Picture(1,'Platzi sesion', PhotoOrientation.Squear);
const picture2: Picture = new Picture(2,'Platzi end', PhotoOrientation.Panorama);

alubm.addPicture(picture1);
alubm.addPicture(picture2);

console.log('album',alubm);


//accediendo a los miembros publicos
picture1.title='another title';

alubm.title='personal activities';

console.log('album',alubm);