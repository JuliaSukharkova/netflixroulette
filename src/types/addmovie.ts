export interface IAddMovie {
    title: string,
    vote_average: number,
    release_date: string,
    overview: string;
    runtime: number;
    genres: Array<string>;
    poster_path: string;
}