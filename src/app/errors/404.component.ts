import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../shared/movie.service';

@Component({
  template: `
    <div class="container center">
      <h1 style="font-size: 10rem;">404'd</h1>
    </div>
  `,
  styles: [`
    .center {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `]
})
export class Error404Component {
  constructor(private movieService:MovieService, private route:ActivatedRoute) {

  }

}
