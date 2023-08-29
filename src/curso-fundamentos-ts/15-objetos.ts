(() => {
    type Sizes = 'M' | 'S' | 'L';
    type Product = {
        title: string,
        created: Date,
        stock: number,
        size?: Sizes
    }

    const products : Product[] = [];

    const addProduct = (data : Product) => {
        products.push(data);
    }

    addProduct({title: 'leisy', created: new Date(), stock: 1000, size: 'M'});
    addProduct({title: 'meme', created: new Date(), stock: 2000});
    addProduct({title: 'glendy', created: new Date(), stock: 1, size: 'S'});
    console.log(products);
})()