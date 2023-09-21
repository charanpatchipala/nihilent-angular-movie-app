import { Component } from '@angular/core';
import { MovieslistService } from '../movieslist.service';
import { Movie } from '../app.component';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subscription,
  switchMap,
} from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {
  movies: Array<Movie> = [];
  getMovieList: Subscription | any;

  searchForm = this.fb.group({
    search: '',
  });

  get search() {
    return this.searchForm.get('search');
  }
  constructor(
    private fb: FormBuilder,
    private movieService: MovieslistService
  ) {
    // this.movies = movieslist.getMovies();
  }

  // ngOnInit() {
  //   this.getMovieList = this.movieService
  //     .getMovieListFromMockAPI()
  //     .subscribe((mvList) => {
  //       this.movies = mvList;
  //     });
  // }

  ngOnInit() {
    this.search?.valueChanges
      .pipe(
        debounceTime(1500),
        distinctUntilChanged(),
        switchMap((name) => this.movieService.searchMovieList(name || ''))
      )
      .subscribe((mvList) => {
        this.movies = mvList;
      });
    this.loadMoviesData();
  }

  loadMoviesData() {
    this.getMovieList = this.movieService
      .getMovieListFromMockAPI()
      .subscribe((mvList) => {
        this.movies = mvList;
      });
  }

  ngOnDestroy() {
    console.log('Destory');
    this.getMovieList.unsubscribe();
  }

  // newMovie = {
  //   src: '',
  //   moviename: '',
  //   rating: '',
  //   content: '',
  // };

  delete(idx: number) {
    this.movies.splice(idx, 1);
  }

  // addMovie() {
  // const movie = {
  //   src: this.newMovie.src,
  //   moviename: this.newMovie.moviename,
  //   rating: this.newMovie.rating,
  //   content: this.newMovie.content,

  //   this.movieslist.setMovies(this.newMovie);
  //   this.newMovie = {
  //     src: '',
  //     moviename: '',
  //     rating: '',
  //     content: '',
  //   };
  // }
}
