import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'home', component: WelcomeComponent },
  { path: 'forms', component: FormsComponent },
  // {
  //   path: 'movies',
  //   children: [
  //     { path: '', component: MoviesListComponent, pathMatch: 'full' },
  //     { path: 'add', component: AddMovieFormComponent },
  //     { path: 'edit/:id', component: EditMovieFormComponent },
  //     { path: ':id', component: MovieDetailsPageComponent },
  //   ],
  // },
  // { path: 'movies', component: MoviesListComponent },
  { path: 'films', redirectTo: '/movies', pathMatch: 'full' },
  // { path: 'addmovie', component: AddMovieFormComponent },
  // { path: 'movies/:id', component: MovieDetailsPageComponent },
  // { path: 'movies/edit/:id', component: EditMovieFormComponent },

  {
    path: 'movies',
    loadChildren: () =>
      import('./movies/movies.module').then((m) => m.MoviesModule),
    canActivate: [authGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
