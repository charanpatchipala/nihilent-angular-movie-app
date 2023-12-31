import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1AngularComponent } from './task1-angular/task1-angular.component';
import { Task2AngularComponent } from './task2-angular/task2-angular.component';
import { CounterComponent } from './counter/counter.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoxComponent } from './box/box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { AddMovieFormComponent } from './add-movie-form/add-movie-form.component';
import { MatCardModule } from '@angular/material/card';
import { MovieDetailsPageComponent } from './movie-details-page/movie-details-page.component';
import { HttpClientModule } from '@angular/common/http';
import { EditMovieFormComponent } from './edit-movie-form/edit-movie-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  declarations: [
    AppComponent,
    Task1AngularComponent,
    Task2AngularComponent,
    CounterComponent,
    FormsComponent,
    BoxComponent,
    MoviesListComponent,
    AddMovieFormComponent,
    MovieDetailsPageComponent,
    EditMovieFormComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
