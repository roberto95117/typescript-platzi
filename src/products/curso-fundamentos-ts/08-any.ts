(() => {
    let myAny : any = 123;

    myAny = '4';
    myAny = 5;
    myAny = true;
    myAny = 'hola';

    console.log('myAny', myAny);

    const castMyAny = (myAny as string).toLowerCase();
    console.log(castMyAny);

    myAny = 3.151416;
    const cast2 = (<number>myAny).toFixed(2);
    console.log('cast2', cast2);

})();