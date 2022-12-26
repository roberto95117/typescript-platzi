export{};
//orientacion para fotografias
enum PhotoOrientation {
    Landscape=1,//0
    Portrait=4,//1
    Squeare=5,//2
    Panorama=3//3
};

const landscape: PhotoOrientation = PhotoOrientation.Landscape;

console.log('PhotoOrientation landscape', landscape);
console.log('PhotoOrientation landscape', PhotoOrientation[landscape]);

enum PictureOrientation {
    Landscape =8,
    Portrait,
    Squeare,
    Panorama
};

console.log('PictureOrientation landscape', PictureOrientation.Portrait);

enum Country{
    Bolivia ='bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'us',
    Espana = 'esp'
};

const country: Country= Country.Bolivia;

console.log('country bolivia', country);