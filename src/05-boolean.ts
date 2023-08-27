(() => {
    let isEnable = true;
    let enable : boolean = false;

    let random = Math.random();

    console.log('random', random);

    enable = random > 0.5;

    console.log('enable', enable);
})()