import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { AddMovieFormComponent } from '../add-movie-form/add-movie-form.component';
import { EditMovieFormComponent } from '../edit-movie-form/edit-movie-form.component';
import { MovieDetailsPageComponent } from '../movie-details-page/movie-details-page.component';
import { MoviesListComponent } from '../movies-list/movies-list.component';
import { Task2AngularComponent } from '../task2-angular/task2-angular.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BoxComponent } from '../box/box.component';
import { CounterComponent } from '../counter/counter.component';
import { FormsComponent } from '../forms/forms.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    Task2AngularComponent,
    MoviesListComponent,
    AddMovieFormComponent,
    CounterComponent,
    MovieDetailsPageComponent,
    EditMovieFormComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
  ],
})
export class MoviesModule {}
