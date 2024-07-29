import { Film } from "../entities/film.entity";

import {
    FilmDTO,
    CreateFilmDTO,
    UpdateFilmDTO
} from "../../../../../dtos/FilmDTO";

import { BaseRepositoryImpl } from "../../../../../../../base/BaseRepositoryImpl";

export class FilmRepositoryImpl 
extends BaseRepositoryImpl<FilmDTO, CreateFilmDTO, UpdateFilmDTO> {
    constructor() {
        super('filmId', Film);
    }
}