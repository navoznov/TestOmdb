import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OmdbApiService } from './omdb-api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
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
