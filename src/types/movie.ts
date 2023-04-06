export interface IMovie{
    id: number;
    poster_path: string;
    title: string;
    release_date: string;
    genres: Array<string>;
}
export type IAddMovie = {
    title: string;
    vote_average: number;
    release_date: string;
    overview: string;
    runtime: number;
    genres: Array<string>;
    poster_path: string;
  };