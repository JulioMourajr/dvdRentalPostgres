export class CategoryDTO {
    categoryId: number;
    name: string;
    lastUpdate: Date;
}

export type CreateCategoryDTO = Omit<CategoryDTO, 'categoryId' | 'lastUpdate'>

export type UpdateCategoryDTO = Partial<CategoryDTO>