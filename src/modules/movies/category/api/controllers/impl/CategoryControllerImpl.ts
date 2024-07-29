import { injectable, inject } from "tsyringe";

import { BaseControllerImpl } from "../../../../../base/BaseControllerImpl";

import {
    CreateCategoryDTO,
    UpdateCategoryDTO,
    CategoryDTO
} from "../../../dtos/CategoryDTO";
import { CategoryService } from "../../../business/services/CategoryService";


@injectable()
export class CategoryControllerImpl extends BaseControllerImpl<CategoryDTO, CreateCategoryDTO, UpdateCategoryDTO> {
    constructor(@inject('CategoryService') 
    categoryService: CategoryService) {
        super(categoryService);
    }
}