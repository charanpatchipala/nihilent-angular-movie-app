import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Movie } from '../app.component';
import { Router } from '@angular/router';
import { MovieslistService } from '../movieslist.service';
import { debounceTime, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-task2-angular',
  templateUrl: './task2-angular.component.html',
  styleUrls: ['./task2-angular.component.css'],
})
export class Task2AngularComponent {
  @Input() movie: Movie = {
    poster: '',
    name: '',
    featured: false,
    rating: 9,
    summary: '',
    id: '',
    trailer: '',
    like: 0,
    dislike: 0,
    releaseYear: '',
    languages: [''],
    cast: [''],
    genres: [''],
    censorRating: '',
  };
  // @Input() src = '';
  // @Input() moviename = '';
  // @Input() rating = '';
  // @Input() content = '';
  @Input() idx: number = 0;
  // @Output() Mindex = new EventEmitter<number>();
  @Output() rmvmovie = new EventEmitter();
  likeSubject = new Subject<number>();
  disLikeSubject = new Subject<number>();
  // delMovie() {
  //   // this.Mindex.emit(this.idx);
  // }
  show = true;
  // movieService: any;
  constructor(private router: Router, private movieService: MovieslistService) {
    this.likeSubject
      .pipe(
        debounceTime(2000),
        switchMap((count) => {
          this.movie = { ...this.movie, like: count };
          return this.movieService.updateMovie(this.movie, this.movie.id);
        })
      )
      .subscribe();

    this.disLikeSubject
      .pipe(
        debounceTime(2000),
        switchMap((count) => {
          this.movie = { ...this.movie, dislike: count };
          return this.movieService.updateMovie(this.movie, this.movie.id);
        })
      )
      .subscribe();
  }

  deleteMovie() {
    this.movieService.deleteMovieById(this.movie.id).subscribe(() => {
      console.log('Movie deleted successfully');
      this.rmvmovie.emit();
    });
  }

  updateDislikes(count: number) {
    this.disLikeSubject.next(count);
    // this.movie = { ...this.movie, dislike: dlcount };
    // this.movieService
    //   .updateMovie(this.movie, this.movie.id)
    //   .subscribe(() => {});
  }
  updateLikes(count: number) {
    this.likeSubject.next(count);
    // this.movie = { ...this.movie, like: lcount };
    // this.movieService.updateMovie(this.movie, this.movie.id).subscribe();
  }
  editMovie() {
    this.router.navigate(['/movies/edit', this.movie.id]);
  }
  toggle() {
    this.show = !this.show;
  }
  getdetails() {
    this.router.navigate(['/movies', this.movie.id]);
  }
  // showResult() {
  //   let showLess = true;
  // }

  // hideResult() {
  //   let showLess = false;
  // }
}
