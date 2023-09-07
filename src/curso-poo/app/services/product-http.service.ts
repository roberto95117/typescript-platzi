import { UpdateProductDto, CreateProductDto } from "../dto/product.dto.model";
import { ProductService } from "../model/product-service.model";
import { Product } from "../model/product.model";
import  axios from 'axios';
export class ProductHttpService implements ProductService{

    private ulr = 'https://api.escuelajs.co/api/v1/products';

    async getAll(){
        const {data} = await axios.get<Product[]>(this.ulr);
        return data;
    }

    async update(id: number, changes: UpdateProductDto){
        const { data } = await axios.put<Product>(`${this.ulr}/${id}`, changes);
        return data;

    }

    async create(dto: CreateProductDto){
        const { data } = await axios.post<Product>(this.ulr, dto);
        return data;
    }

    async findOne(id: number){
        const { data } = await axios.get(`${this.ulr}/${id}`);
        return data;
    }
    
}