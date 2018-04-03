import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { OmdbApiService } from './omdb-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  movies: Movie[];

  constructor(private moviesService: OmdbApiService) {
    this.movies = [];
  }

  ngOnInit() {
    this.search('anna');
  }

  search(text: string): void {
    this.moviesService.searchMovies(text).subscribe(movies => {
      this.movies = (movies.Search || []).map(x => new Movie(x.imdbID, x.Title));
      console.log(this.movies);
      console.log( this.movies[0] instanceof Movie ? 'Да' : 'Нет');
    });
  }
}
