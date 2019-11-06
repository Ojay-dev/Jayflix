import { Routes } from '@angular/router';
import {
  MoviesListComponent,
  MovieDetailsComponent,
  MovieListResolver,
  MovieResolver
} from '../movies'
import { Error404Component } from '../errors/404.component';
// import { Error404Component } from './errors/404.component';
// import { MovieListResolver } from './movies/movies-list-resolver.service';

export const appRoutes:Routes = [
  {path: '', component: MoviesListComponent, resolve: {movies:MovieListResolver}},
  // {path: '', component: MoviesListComponent},
  {path: 'movie/:id', component: MovieDetailsComponent, resolve: {movie:MovieResolver}},
  {path: '404', component: Error404Component},
  {path: '**', redirectTo: '/404'},
  // {path: '', redirectTo: '/movies', pathMatch:'full'},
]
