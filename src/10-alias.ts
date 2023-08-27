(() => {
    //types
    type UserId = string | number | boolean; 

    let userId : UserId;

    userId = 123456;
    userId = '123456';

    function saludar(text: UserId, size: TypeSize){
        if(typeof text === 'string'){
            console.log('string',text);
        }else if(typeof text === 'number'){
            console.log('number', text);
        }else if(typeof text === 'boolean'){
            console.log(`boolean ${text}`);
        }
    }



    //literal type
    let size : 'S' | 'M' | 'L' | 'XL';

    type TypeSize = 'S' | 'M' | 'L' | 'XL';

    let mySize : TypeSize = 'XL';

    saludar('hola mundo', 'L');
    saludar(123456789, 'M');
    saludar(true, 'XL');

    console.log(mySize);

})();