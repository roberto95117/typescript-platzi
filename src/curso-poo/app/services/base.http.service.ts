import { Product } from "../model/product.model";
import { Category } from "../model/category.model";
import { UpdateProductDto } from "../dto/product.dto.model";
import  axios from 'axios';

export class BaseHttpService<T>{

    constructor(
        private url: string
    ){}

    async getAll(){
        const {data} = await axios.get<T[]>(this.url);
        return data;
    }

    async update<ID, DTO>(id: ID, changes: DTO){
        const { data } = await axios.put<Product>(`${this.url}/${id}`, changes);
        return data;
    }
}


(async () => {
    const ulr1 = 'https://api.escuelajs.co/api/v1/products';
    const productService = new BaseHttpService<Product>(ulr1);
    const rta1 = await productService.getAll();
    console.log(rta1.length);

    productService.update<Product['id'], UpdateProductDto>(1, { price: 1600 });
    
    const ulr2 = 'https://api.escuelajs.co/api/v1/categories';
    const categoryService = new BaseHttpService<Category>(ulr2);
    let rta2;
    categoryService.getAll().then(res => {
        rta2 = res;
        console.log(rta2.length);
    });

})();