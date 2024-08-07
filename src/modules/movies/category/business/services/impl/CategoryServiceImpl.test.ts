// CategoryServiceImpl.test.ts
import 'reflect-metadata';
import { container } from 'tsyringe';
import { CategoryServiceImpl } from './CategoryServiceImpl';
import { CategoryRepository } from '../../../database/repositories/CategoryRepository';
import { CategoryDTO, CreateCategoryDTO, UpdateCategoryDTO } from '../../../dtos/CategoryDTO';


jest.mock('../../../database/repositories/CategoryRepository');

describe('CategoryServiceImpl', () => {
  let categoryService: CategoryServiceImpl;
  let categoryRepository: jest.Mocked<CategoryRepository>;

  beforeEach(() => {
    // Reset all mocks before each test
    jest.resetAllMocks();
    container.clearInstances();

    // Create mocked instance of CategoryRepository
    categoryRepository = {
      getItems: jest.fn(),
      getItemById: jest.fn(),
      createItem: jest.fn(),
      updateItem: jest.fn(),
      deleteItem: jest.fn(),
    } as jest.Mocked<CategoryRepository>;

    // Register the mock in the tsyringe container
    container.register('CategoryRepository', { useValue: categoryRepository });

    // Resolve the CategoryServiceImpl from the container
    categoryService = container.resolve(CategoryServiceImpl);
  });

  it('should be defined', () => {
    expect(categoryService).toBeDefined();
  });

  it('should call the repository to create a category', async () => {
    const createCategoryDTO: CreateCategoryDTO = {
      name: 'New Category',
    };

    const categoryDTO: CategoryDTO = {
      categoryId: 1,
      name: 'New Category',
      lastUpdate: new Date(),
    };

    // Mock the create method
    categoryRepository.createItem.mockResolvedValue(categoryDTO);

    const result = await categoryService.createItem(createCategoryDTO);

    expect(categoryRepository.createItem).toHaveBeenCalledWith(createCategoryDTO);
    expect(result).toEqual(categoryDTO);
  });

  // Add more tests as needed
});