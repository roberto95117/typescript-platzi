import { Category } from "../model/category.model";
import { IsUrl, IsNotEmpty, validateOrReject } from 'class-validator';

export interface ICreateCategoryDto extends Omit<Category, 'id'> {}
export class CreateCategoryDto implements ICreateCategoryDto {
    
    @IsNotEmpty()
    name: string;

    @IsUrl()
    @IsNotEmpty()
    image: string;
    
}


(async () => {
    try{
        const dto = new CreateCategoryDto();
        dto.name = 'a';
        await validateOrReject(dto);
    }catch(err){
        console.error(err);
    }
})();