import { Album } from "./album";

export class User{
    private _album: Album[];

    constructor(private id:number,private username: string, private firstname: string, private idPro: boolean){
        this._album=[];
    }
    addAlbum(val: Album){
        this._album.push(val);
    }

    removeAlbum(album: Album): Album | undefined{
        const index=this._album.findIndex(a => a.id === album.id);
        let deletedAlbum;
        if(index>=0){
            deletedAlbum = this._album[index];
            this._album.splice(index,1);
        }
        return deletedAlbum;
    }
}