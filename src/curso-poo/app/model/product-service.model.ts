import { CreateProductDto, UpdateProductDto } from "../dto/product.dto.model";
import { Product } from "./product.model";

export interface ProductService{
    getAll(): Product[] | Promise<Product[]>;
    update(id: Product['id'], changes: UpdateProductDto): Product | Promise<Product>;
    create(dto: CreateProductDto): Product | Promise<Product>;
    findOne(id: Product['id']): Product | null | Promise<Product | null>;
}