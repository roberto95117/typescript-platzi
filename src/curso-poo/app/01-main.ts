import axios from 'axios';
import {Product} from './model/product.model';

(async () => {
    async function getProducts(): Promise<Product[]>{
        const res = await axios.get(`https://api.escuelajs.co/api/v1/products`);
        return res.data;
    }

    async function getProducts2(){
        const res = await axios.get(`https://api.escuelajs.co/api/v1/products`);
        const data = res.data as Product[];
        return data;
    }

    async function getProducts3(){
        const {data} = await axios.get<Product[]>(`https://api.escuelajs.co/api/v1/products`);
        return data;
    }

    const prod = await getProducts();
    console.log('----'.repeat(50));
    console.log(prod.map(item => `${item.id} - ${item.title}`));

    const prod2 = await getProducts2();
    console.log('----'.repeat(50));
    console.log(prod2.map(item => `${item.id} - ${item.title}`));

    const prod3 = await getProducts3();
    console.log('----'.repeat(50));
    console.log(prod3.map(item => `${item.id} - ${item.title}`));

})();