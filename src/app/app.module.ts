import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {
  MoviesListComponent,
  MovieDetailsComponent,
  FooterComponent,
  NavbarComponent,
  MovieListResolver,
  MovieResolver
} from './movies';
import { MovieService } from './shared';
import { appRoutes } from './routes/routes';
import { Error404Component } from './errors/404.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    FooterComponent,
    NavbarComponent,
    Error404Component
  ],
  providers: [
    MovieService,
    MovieListResolver,
    MovieResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
