import { CreateProductDto, UpdateProductDto, FindProductDto } from './product.dto.model';
import { Product } from './product.model';
import {faker} from '@faker-js/faker';

export const products : Product[] = [];

export const addProduct = (data: CreateProductDto) : Product => {
    const newProduct= {
        ... data,
        id: faker.string.uuid(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        category: {
            id: data.categoryId,
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
            name: faker.commerce.department(),
        }
    }
    products.push(newProduct);

    return newProduct;
}

export const updProduct = (id: Product['id'] | number ,data: UpdateProductDto) : Product => {
    const index = products.findIndex(item => item.id == id);
    const prev = products[index];
    products[index] = {
        ...prev,
        ...data
    }
    return products.at(index);
}

export const findProducts = (dto: FindProductDto): Product[] => {
    return products;
}