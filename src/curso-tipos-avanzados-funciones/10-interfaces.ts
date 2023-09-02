type Size = 'A' | 'B' | 'C';

interface Product {
    id: string | number;
    title: string;
    createdAt: Date;
    stock: number;
    size?: Size;
}

const products : Product[] = [];

products.push({
    id: 1,
    title: '1',
    createdAt: new Date(),
    stock : 1000
});
