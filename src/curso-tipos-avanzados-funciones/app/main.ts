import { addProduct, products, updProduct, findProducts } from "./products/product.service";
import {faker} from '@faker-js/faker';


for(let i = 0; i<50; i++){
    addProduct({
        title: faker.commerce.productName(),
        stock : faker.number.int({min: 10, max: 100}),
        description: faker.commerce.productDescription(),
        image: faker.image.url(),
        color: faker.color.human(),
        price: parseInt(faker.commerce.price()),
        isNew: faker.datatype.boolean(),
        tags: faker.helpers.arrayElements(['1','2','3']),
        categoryId: faker.string.uuid()
    });
}

console.log(products);

let productUp = products[0];

updProduct(productUp.id,{
    title: faker.commerce.productName()
});

findProducts({
    id: 10,
    color: 'red'
})