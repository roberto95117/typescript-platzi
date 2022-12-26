export abstract class Item{
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