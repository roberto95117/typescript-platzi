export type Sizes = 'M' | 'S' | 'L';
export type Product = {
    title: string,
    created: Date,
    stock: number,
    size?: Sizes
}