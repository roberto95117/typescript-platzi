(() => {
    let userId : string | number | null;

    userId = 123456;
    userId = '123456';

    function saludar(text: string | number){
        if(typeof text === 'string'){
            console.log('string',text);
        }else if(typeof text === 'number'){
            console.log('number', text);
        }        
    }

    saludar('hola mundo');
    saludar(123456789);


})();