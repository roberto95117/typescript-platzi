import { Item } from "./item";
import { Picture } from "./picture";

export class Album extends Item{
    pictures: Picture[];

    constructor(id:number, titlle: string){
        super(id,titlle);
        this.pictures=[];
    }

    addPicture(picture: Picture){
        this.pictures.push(picture);
    }
}