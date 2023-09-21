import { Component } from '@angular/core';
import { MovieslistService } from '../movieslist.service';
import { Movie } from '../app.component';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { LANGUAGES, GENRES } from '../movies-list/global';
@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.css'],
})
export class AddMovieFormComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];

  languages = LANGUAGES;

  genres = GENRES;
  movieForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    featured: [false],
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
    censorRating: ['', [Validators.required]],
    genres: [[''], [Validators.required]],
    languages: [[''], [Validators.required]],
    cast: this.fb.array(['']),
    like: [0],
    dislike: [0],
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

  get cast() {
    return this.movieForm.get('cast') as FormArray;
  }

  addCastName(event: MatChipInputEvent) {
    const name = (event.value || '').trim();
    if (name) {
      this.cast.push(this.fb.control(name));
    }

    event.chipInput!.clear();
  }

  removeCastName(index: number) {
    this.cast.removeAt(index);
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
