import { 
    FilmDTO, 
    CreateFilmDTO, 
    UpdateFilmDTO 
} from "../../dtos/FilmDTO";

import { BaseRepository } from "../../../../base/BaseRepository";

export interface FilmRepository extends 
BaseRepository<FilmDTO, CreateFilmDTO, UpdateFilmDTO> {}
