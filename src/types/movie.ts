export interface IMovie {
  kinopoiskId: number;
  filmId?: number;
  nameRu: string;
  posterUrlPreview: string;
  year: string;
  genres: { genre: string }[];
}
