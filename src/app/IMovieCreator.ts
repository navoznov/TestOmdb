import { Movie } from './movie';

export interface IMovieCreator {
    create(obj: any): Movie;
}

