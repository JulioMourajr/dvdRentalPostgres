import { injectable, inject } from "tsyringe";

import { BaseServiceImpl } from "../../../../../base/BaseServiceImpl";

import { 
    CategoryDTO,
    CreateCategoryDTO,
    UpdateCategoryDTO
} from "../../../dtos/CategoryDTO";

import { CategoryRepository } from "../../../database/repositories/CategoryRepository";

@injectable()
export class CategoryServiceImpl extends BaseServiceImpl<
    CategoryDTO,
    CreateCategoryDTO,
    UpdateCategoryDTO
> {
    constructor(
        @inject('CategoryRepository')
        categoryRepository: CategoryRepository
    ) {
        super(categoryRepository);
    }
}