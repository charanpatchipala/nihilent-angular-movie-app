import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Movie } from '../app.component';
import { Router } from '@angular/router';
import { MovieslistService } from '../movieslist.service';

@Component({
  selector: 'app-task2-angular',
  templateUrl: './task2-angular.component.html',
  styleUrls: ['./task2-angular.component.css'],
})
export class Task2AngularComponent {
  @Input() movie: Movie = {
    poster: '',
    name: '',
    rating: 9,
    summary: '',
    id: '',
    trailer: '',
  };
  // @Input() src = '';
  // @Input() moviename = '';
  // @Input() rating = '';
  // @Input() content = '';
  @Input() idx: number = 0;
  // @Output() Mindex = new EventEmitter<number>();
  @Output() rmvmovie = new EventEmitter();

  // delMovie() {
  //   // this.Mindex.emit(this.idx);
  // }
  show = true;
  // movieService: any;
  constructor(
    private router: Router,
    private movieService: MovieslistService
  ) {}

  deleteMovie() {
    this.movieService.deleteMovieById(this.movie.id).subscribe(() => {
      console.log('Movie deleted successfully');
      this.rmvmovie.emit();
    });
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
