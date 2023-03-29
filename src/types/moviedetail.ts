export interface IMovieDetail{
    id: number;
    poster_path: string;
    title: string;
    release_date: number;
    genres: Array<string>;
    vote_average: number;
    runtime: number;
    overview: string;
}