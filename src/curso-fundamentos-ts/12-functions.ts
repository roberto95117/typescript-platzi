(() => {
    type Sizes = 'S' | 'M' | 'L';

    function createProductJSON(
        title: string,
        createdAt: Date,
        stock: number,
        size: Sizes
    ){
        return {
            title,
            createdAt,
            stock,
            size
        }
    };

    const createProductJSONv2 = (
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    ) => ({
            title,
            createdAt,
            stock,
            size        
    });


    const product1 = createProductJSON('P1', new Date(), 12, 'S');
    const product2 = createProductJSONv2('P2', new Date(), 12);
    console.log(product1);
    console.log(product2);
})()