import { CreateProductDto, UpdateProductDto } from '../dto/product.dto.model';
import { ProductService } from '../model/product-service.model';
import { Product } from '../model/product.model';
import {faker} from '@faker-js/faker';


export class ProductMemorySercice implements ProductService{
    private products : Product[] = [];

    create(data: CreateProductDto) : Product {
        const newProduct= {
            ... data,
            id: faker.number.int(),
            category: {
                id: data.categoryId,
                name: faker.commerce.department(),
                image: faker.image.url(),
            }
        }
        return this.add(newProduct);
    }

    add(produc: Product){
        this.products.push(produc);
        return produc;
    }

    update(id: Product['id'] | number ,data: UpdateProductDto) : Product {
        const index = this.products.findIndex(item => item.id == id);
        const prev = this.products[index];
        this.products[index] = {
            ...prev,
            ...data
        }
        return this.products.at(index);
    }

    findOne(id: Product['id']): Product{
        return this.products.find(item => item.id == id);
    }

    getAll(): Product[]{
        return this.products;
    }

}







