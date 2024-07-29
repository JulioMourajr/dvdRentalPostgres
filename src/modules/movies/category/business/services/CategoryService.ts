import { BaseService } from "../../../../base/BaseService";

import {
    CategoryDTO,
    CreateCategoryDTO,
    UpdateCategoryDTO
} from "../../dtos/CategoryDTO";

export interface CategoryService extends BaseService<
    CategoryDTO,
    CreateCategoryDTO,
    UpdateCategoryDTO
> {}