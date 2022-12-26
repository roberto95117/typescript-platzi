import { Item } from "./item";
import { PhotoOrientation } from "./photo-orientation";

export class Picture extends Item{    
    private _orientation: PhotoOrientation; //privado poner # ECMAScript 2015
    static photoOrientation = PhotoOrientation;

    constructor(id: number, title: string,private date: string, orientation: PhotoOrientation){
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