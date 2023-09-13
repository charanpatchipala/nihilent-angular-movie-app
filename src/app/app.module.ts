import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1AngularComponent } from './task1-angular/task1-angular.component';
import { Task2AngularComponent } from './task2-angular/task2-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1AngularComponent,
    Task2AngularComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
