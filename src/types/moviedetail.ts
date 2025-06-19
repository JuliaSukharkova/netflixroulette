export interface IMovieDetail {
    kinopoiskId: number;
    nameRu: string;
    posterUrl: string;
    year: number;
    filmLength: number;
    ratingKinopoisk: number;
    description: string;
    genres: { genre: string }[];
  }
  