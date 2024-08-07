// FilmServiceImpl.test.ts

import 'reflect-metadata';
import { container } from 'tsyringe';
import { FilmServiceImpl } from './FilmServiceImpl';
import { FilmRepository } from '../../../database/repositories/FilmRepository';
import { FilmDTO, CreateFilmDTO, UpdateFilmDTO } from '../../../dtos/FilmDTO';


jest.mock('../../../database/repositories/FilmRepository');

describe('FilmServiceImpl', () => {
  let filmService: FilmServiceImpl;
  let filmRepository: jest.Mocked<FilmRepository>;

  beforeEach(() => {
    // Reset all mocks before each test
    jest.resetAllMocks();
    container.clearInstances();

    // Create mocked instance of FilmRepository
    filmRepository = {
        getItems: jest.fn(),
        getItemById: jest.fn(),
        createItem: jest.fn(),
        updateItem: jest.fn(),
        deleteItem: jest.fn(),
      } as jest.Mocked<FilmRepository>;

    // Register the mock in the tsyringe container
    container.register('FilmRepository', { useValue: filmRepository });

    // Resolve the FilmServiceImpl from the container
    filmService = container.resolve(FilmServiceImpl);
  });

  it('should be defined', () => {
    expect(filmService).toBeDefined();
  });

  it('should call the repository to create a film', async () => {
    const createFilmDTO: CreateFilmDTO = { title: 'Inception', description: 'A movie about dreams', releaseYear: 2010, languageId: 1, 
        rentalDuration: 3, rentalRate: 3, length: 148, replacementCost: 2, rating: 'PG-13', specialFeatures: 'Behind the scenes', 
        fulltext: 'Inception A movie about dreams' };

    // Mock the create method
    filmRepository.createItem.mockResolvedValue(createFilmDTO as FilmDTO);

    const result = await filmService.createItem(createFilmDTO);

    expect(filmRepository.createItem).toHaveBeenCalledWith(createFilmDTO);
    expect(result).toEqual(createFilmDTO);
  });

  // Add more tests as needed
});
