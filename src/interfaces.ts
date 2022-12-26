export{};

enum PhotoOrientation {
    Landscape,
    Portrai,
    Squear,
    Panorama
};

interface Picture{
    title?: string;
    date?: string;
    orientation?: PhotoOrientation
}

function generatePicture(config: Picture){
    const pic={title:'default', date: 'default'};
    if(config.title){
        pic.title=config.title
    }
    if(config.date){
        pic.date=config.date;
    }
    return pic;
}
//funcion para mostrar fotografia
function showPicture(picture: Picture){
    console.log(`titile: ${picture.title} , date: ${picture.date}, orientation: ${picture.orientation}`);
}

let myPic ={
    title: 'Test title',
    date: '2021-03',
    orientation :PhotoOrientation.Landscape
};

showPicture(myPic);
showPicture({
    title: 'test',
    date: '2020-04',
    orientation: PhotoOrientation.Panorama
});

let picture = generatePicture({});
console.log('picture', picture);

picture = generatePicture(myPic);
console.log('picture', picture);

interface  User{
    readonly id: number; //solo lectura, solo en la instanciacion puede recibir valor
    username: string;
    isPro: boolean;
}

let user: User;
user = {id:10, username:'rmxocopc', isPro: true};

