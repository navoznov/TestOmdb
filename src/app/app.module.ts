import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OmdbApiService } from './omdb-api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieInfoComponent } from './movie-info/movie-info.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // RouterModule
  ],
  providers: [ OmdbApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
