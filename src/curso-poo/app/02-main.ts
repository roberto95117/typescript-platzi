import { ProductMemorySercice } from "./services/product.service";


const productService = new ProductMemorySercice;

productService.create({
    title: '1',
    price: 100,
    description: '1',
    categoryId: 1,
    images: null
});

const products = productService.getAll();

console.log(products);

const prodId = products[0].id;

productService.update(prodId, {
    title: 'changed'
});


const updated = productService.findOne(prodId);

console.log(updated);

