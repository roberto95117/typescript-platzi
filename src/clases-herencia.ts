export{};

enum PhotoOrientation {
    Landscape,
    Portrai,
    Squear,
    Panorama
};

abstract class Item{
    protected _id: number; //privado
    protected _title: string; //publico
    constructor(id: number, title: string){
        this._id=id;
        this._title=title;
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
}


class Picture extends Item{    
    private _orientation: PhotoOrientation; //privado poner # ECMAScript 2015
    static photoOrientation = PhotoOrientation;

    constructor(id: number, title: string, orientation: PhotoOrientation){
        super(id,title);
        this._orientation=orientation;
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


class Album extends Item{
    pictures: Picture[];

    constructor(id:number, titlle: string){
        super(id,titlle);
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


console.log('photoOrientation', Picture.photoOrientation.Panorama);