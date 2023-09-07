import axios from 'axios';

(async () => {
    function delay (time: number) {
        const promise = new Promise<boolean>((resolve) => {
            setTimeout(() => {
                resolve(true)
            }, time);
        })
        return promise;
    }

    const rta = await delay(5);
    console.log('----'.repeat(50));
    console.log(rta);

    function getProducts(){
        const res = axios.get(`https://api.escuelajs.co/api/v1/products`);
        return res;
    }

    const prod = await getProducts();
    console.log('----'.repeat(50));
    console.log(prod.data);

    async function getProductsAsync(){
        const res = await axios.get(`https://api.escuelajs.co/api/v1/products`);
        return res.data;
    }

    const prod2 = await getProductsAsync();
    console.log('----'.repeat(50));
    console.log(prod2);


})()