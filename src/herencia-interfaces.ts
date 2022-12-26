export{};

enum PhotoOrientation {
    Landscape,
    Portrai,
    Squear,
    Panorama
};

interface EntityBase{
    id: number;
    title: string;
}


interface Album extends EntityBase{
    description: string;
}

interface Picture extends EntityBase{
    orientation: PhotoOrientation;
}

const album: Album = {
    id: 1,
    title: 'Meetups',
    description: 'Community events around the world'
}

const picture: Picture ={
    id: 1,
    title: 'Family',
    orientation: PhotoOrientation.Portrai
}

let newPicture = {} as Picture;

newPicture.id=2;
newPicture.title='Moon';

console.log('album', album);
console.log('picture', picture);
console.log('new picture', newPicture);
