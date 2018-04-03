import { Movie } from './movie';
import { IMovieCreator } from './IMovieCreator';

export class OmdbMovieCreator implements IMovieCreator {
    create(obj: any): Movie {
       return new Movie(obj.imdbID, obj.Title, obj.Year, obj.Director);
    }
}
