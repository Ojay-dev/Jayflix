import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService, IMovie } from '../../shared/index';

@Injectable()
export class MovieListResolver implements Resolve<any> {
  constructor(private movieService:MovieService) {

  }

  resolve() {
    return this.movieService.getMovies()
  }
}
