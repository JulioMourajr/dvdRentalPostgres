import { BaseService } from "../../../../base/BaseService";

import {
    FilmDTO,
    CreateFilmDTO,
    UpdateFilmDTO
} from "../../dtos/FilmDTO";

export interface FilmService 
extends BaseService<FilmDTO, CreateFilmDTO, UpdateFilmDTO> {}