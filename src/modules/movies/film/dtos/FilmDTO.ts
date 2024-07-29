export class FilmDTO {
    filmId: number;
    title: string;
    description: string;
    releaseYear: number;
    languageId: number;
    rentalDuration: number;
    rentalRate: number;
    length: number;
    replacementCost: number;
    rating: string;
    lastUpdate: Date;
    specialFeatures: string;
    fulltext: string;
}

export type CreateFilmDTO = Omit<FilmDTO, 'filmId' | 'lastUpdate'>;
export type UpdateFilmDTO = Partial<FilmDTO>;