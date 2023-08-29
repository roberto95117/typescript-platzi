(() => {
    const login = (data : {user: string, pass: number}) => {
        console.log(data.pass, data.user);
    }
    
    login({user: 'usuario', pass: 123});

    type Sizes = 'M' | 'S' | 'L';

    const products : any[] = [];

    const addProduct = (data : {
        title: string,
        created: Date,
        stock: number,
        size?: Sizes
    }) => {
        products.push(data);
    }

    addProduct({title: 'leisy', created: new Date(), stock: 1000, size: 'M'});
    addProduct({title: 'meme', created: new Date(), stock: 2000});
    addProduct({title: 'glendy', created: new Date(), stock: 1, size: 'S'});
    console.log(products);
})()