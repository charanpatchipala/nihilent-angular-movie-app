import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { AddMovieFormComponent } from './add-movie-form/add-movie-form.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MovieDetailsPageComponent } from './movie-details-page/movie-details-page.component';
import { EditMovieFormComponent } from './edit-movie-form/edit-movie-form.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'forms', component: FormsComponent },
  { path: 'movies', component: MoviesListComponent },
  { path: 'films', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'addmovie', component: AddMovieFormComponent },
  { path: 'movies/:id', component: MovieDetailsPageComponent },
  { path: 'movies/edit/:id', component: EditMovieFormComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
