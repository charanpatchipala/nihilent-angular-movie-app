import { Component } from '@angular/core';
import { MovieslistService } from '../movieslist.service';
import { Movie } from '../app.component';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.css'],
})
export class AddMovieFormComponent {
  movieForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    rating: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
    poster: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^http.*'),
      ],
    ],
    summary: ['', [Validators.required, Validators.minLength(20)]],
    releaseyear: ['', [Validators.required]],
    trailer: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^http.*'),
      ],
    ],
  });

  movies;
  // DI - Dependency Injection
  constructor(
    private movieService: MovieslistService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.movies = movieService.getMovies();
  }

  get name() {
    return this.movieForm?.get('name');
  }

  get rating() {
    return this.movieForm?.get('rating');
  }

  get poster() {
    return this.movieForm?.get('poster');
  }

  get summary() {
    return this.movieForm?.get('summary');
  }

  get trailer() {
    return this.movieForm?.get('trailer');
  }

  addMovie() {
    console.log(this.movieForm.status);

    if (this.movieForm.valid) {
      const newMovie = this.movieForm.value;
      console.log(newMovie);

      this.movieService.addMovie(newMovie as Movie).subscribe(() => {
        this.router.navigate(['/movies']);
      });
      // this.movieService.setMovies(newMovie as Movie);

      // programmatically change
      // this.router.navigate(['/movies']);
    }
  }
}

// export class AddMovieFormComponent {
//   src: string = '';
//   moviename: string = '';
//   rating: number | '' = '';
//   content: string = '';
//   trailer: string = '';
//   id: string = '';
//   movies;
//   constructor(
//     private movieslist: MovieslistService,
//     private router: Router,
//     private fb: FormBuilder
//   ) {
//     this.movies = movieslist.getMovies();
//   }
// newMovie = {
//   src: '',
//   moviename: '',
//   rating: '',
//   content: '',
// };

// addMovie() {
//   let newMovie: Movie = {
//     id: this.id,
//     src: this.src,
//     moviename: this.moviename,
//     rating: this.rating,
//     content: this.content,
//     trailer: this.trailer,
//   };
// src: this.newMovie.src,
// moviename: this.newMovie.moviename,
// rating: this.newMovie.rating,
// content: this.newMovie.content,
//     this.movieslist.setMovies(newMovie);
//     this.router.navigate(['/movies']);
//     newMovie = {
//       id: '',
//       src: '',
//       moviename: '',
//       rating: '',
//       content: '',
//       trailer: '',
//     };
//   }
// }
