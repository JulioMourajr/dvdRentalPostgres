import { Category } from "../entities/category.entity";

import {
    CategoryDTO,
    CreateCategoryDTO,
    UpdateCategoryDTO
} from "../../../../../dtos/CategoryDTO";

import { BaseRepositoryImpl } from "../../../../../../../base/BaseRepositoryImpl";

export class CategoryRepositoryImpl extends 
BaseRepositoryImpl< CategoryDTO, CreateCategoryDTO, UpdateCategoryDTO> {
    constructor() {
        super('categoryId', Category);
    }
}