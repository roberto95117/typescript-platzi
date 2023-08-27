(() => {
    let myNull: null = null;
    let myUndefined: undefined = undefined;

    let myNumber : number | undefined = undefined;

    myNumber = 12;

    let autoAny = null;

    function saludar(nombre: string | null){
        let hola = ' hola ';
        hola += nombre?.toLowerCase() || 'nobody';
        console.log(hola);
    }

    console.log(typeof myNumber);
    console.log(typeof myNull);
    console.log(typeof myUndefined);
    console.log(typeof autoAny);
    saludar('Roberto');
    saludar(null);
}
)();