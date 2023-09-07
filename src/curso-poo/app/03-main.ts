import { ProductHttpService } from "./services/product-http.service";


const productService = new ProductHttpService();

(async () => {
    const products = await productService .getAll();
    console.log('--'.repeat(50));
    console.log(products.length);

    const id = products[0].id;

    console.log(products[0]);

    await productService.update(id, {
        price: 1500,
        title: 'nuevo',
        description: 'nuevo'
    });

    console.log('--'.repeat(50));
    const prod = await productService.findOne(id);

    console.log(prod);


})();
