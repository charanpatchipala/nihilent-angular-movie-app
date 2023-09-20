import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieslistService } from '../movieslist.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Movie } from '../app.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.css'],
})
export class MovieDetailsPageComponent {
  id: string = '';
  movie: any;

  movies: Array<Movie> = [];
  getMovie: Subscription | any;

  constructor(
    private router: ActivatedRoute,
    private movieservice: MovieslistService,
    private sanitizer: DomSanitizer
  ) {
    const { id } = this.router.snapshot.params;
    this.id = id;
    // this.movie = movieservice.getMovies().find((movie) => movie.id == this.id);
    // this.movie.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(
    //   this.movie.trailer
    // );
  }

  show = true;
  toggle() {
    this.show = !this.show;
  }
  // getdetails() {
  //   this.router.navigate(['/movies', this.movie.id]);
  // }

  ngOnInit() {
    this.movieservice.getMovieById(this.id).subscribe((mv) => {
      this.movie = mv;
      this.movie.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(
        mv.trailer
      );
    });
  }

  // ngOnChanges() {
  //   console.log('Changed: Input or Output');
  //   console.log('Logging');
  // }

  // ngOnDestroy() {
  //   console.log('Destory');
  //   this.getMovieList.unsubscribe();
  // }
}
