import { Component } from '@angular/core';
import { MovieslistService } from '../movieslist.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {
  movies;
  constructor(movieslist: MovieslistService) {
    this.movies = movieslist.movies;
  }

  newMovie = {
    src: '',
    moviename: '',
    rating: '',
    content: '',
  };

  deleteMovie(idx: number) {
    this.movies.splice(idx, 1);
  }

  addMovie() {
    // const movie = {
    //   src: this.newMovie.src,
    //   moviename: this.newMovie.moviename,
    //   rating: this.newMovie.rating,
    //   content: this.newMovie.content,

    this.movies.push(this.newMovie);
    this.newMovie = {
      src: '',
      moviename: '',
      rating: '',
      content: '',
    };
  }
}
