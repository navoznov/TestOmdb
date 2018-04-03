import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { OmdbApiService } from './omdb-api.service';
import { OmdbMovieCreator } from './omdb-movie-creator';
import { IMovieCreator } from './IMovieCreator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  movies: Movie[];
  selectedMovie: Movie;

  constructor(private moviesService: OmdbApiService) {
    this.movies = [];
  }

  ngOnInit() {
    this.search('anna');
  }

  search(text: string): void {
    this.moviesService.searchMovies(text).subscribe(movies => {
      const  creator: IMovieCreator = new OmdbMovieCreator();
      console.dir(creator);
      this.movies = (movies.Search || []).map(x => creator.create(x));
      console.log(this.movies);

      this.selectedMovie = null;
    });
  }

  selectMovie(movie: Movie): void {
    this.selectedMovie = movie;
    console.log(`Выбран фильм id=${movie.id}`);
  }
}
