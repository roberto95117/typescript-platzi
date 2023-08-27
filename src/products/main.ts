import { addProduct, calcStock, products } from './product.service';
import { Product } from './product.model';

addProduct({title: 'leisy', created: new Date(), stock: 1000, size: 'M'});
addProduct({title: 'meme', created: new Date(), stock: 2000});
addProduct({title: 'glendy', created: new Date(), stock: 1, size: 'S'});

console.log(products);

const total = calcStock();
console.log('total', total);