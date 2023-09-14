import { Component } from '@angular/core';
import { MovieslistService } from '../movieslist.service';
@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.css'],
})
export class AddMovieFormComponent {
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
