import {
    CategoryDTO,
    CreateCategoryDTO,
    UpdateCategoryDTO
} from "../../dtos/CategoryDTO";

import { BaseRepository } from "../../../../base/BaseRepository";

export interface CategoryRepository extends BaseRepository<CategoryDTO, CreateCategoryDTO, UpdateCategoryDTO> { }