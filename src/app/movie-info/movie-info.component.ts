import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})

export class MovieInfoComponent implements OnInit {

  @Input()
  movie: Movie;

  constructor() { }

  ngOnInit() {
    console.log(this.movie.title);
  }
}
