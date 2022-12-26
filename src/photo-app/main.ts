import { Album } from "./album";
import { Picture } from "./picture";
import { User } from "./user";
import { PhotoOrientation} from "./photo-orientation"

const user = new User(1,'Roberto','Xocop', true);
const album = new Album(10,'Platzi pictures');
const picture= new Picture(1, 'typescript coruse','2021-03-28', PhotoOrientation.Squear);

album.addPicture(picture);
user.addAlbum(album);


console.log('user', user);

user.removeAlbum(album);

console.log('user', user);
