import { Sizes } from "../../../products/product.model";
import { BaseModel } from "../base.model";
import { Category } from "../categories/category.model";

export interface Product extends BaseModel{
    title: string;
    stock: number;
    size?: Sizes;
    category: Category;
    image: string;
    description: string;
    color: string;
    price: number;
    isNew: boolean;
    tags: string[];
}