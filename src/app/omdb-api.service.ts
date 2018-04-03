import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Movie } from './movie';

@Injectable()
export class OmdbApiService {
    apiKey: String = 'c129b39a';

    constructor(private http: HttpClient) { }
    searchMovies(text: string): Observable<any> {
        const url = 'http://www.omdbapi.com/?apikey=' + this.apiKey + '&s=' + text;
        return this.http.get(url);
    }

    searchMovies2(text: string): Observable<any> {
        const url = 'http://www.omdbapi.com/?apikey=' + this.apiKey + '&s=' + text;
        return this.http.get(url);
    }
}
