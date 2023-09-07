import { BaseHttpService } from "./base.http.service";
import { Product } from "../model/product.model";
import { UpdateProductDto } from "../dto/product.dto.model";

export class ProductCrudService{
    private url = 'https://api.escuelajs.co/api/v1';

    private http = new BaseHttpService<Product>(this.url);

    async update(id: Product['id'], dto: UpdateProductDto){
        return this.http.update(id, dto);
    }
}