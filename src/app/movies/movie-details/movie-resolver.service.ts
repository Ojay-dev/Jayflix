import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService, IMovie } from '../../shared/index';

@Injectable()
export class MovieResolver implements Resolve<any> {
  constructor(private movieService:MovieService) {

  }

  resolve(route:ActivatedRouteSnapshot) {
    return this.movieService.getMovie(route.params['id'])
  }
}
