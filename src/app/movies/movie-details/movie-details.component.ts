import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieService } from '../../shared';
import { IMovie } from '../../shared/model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie:IMovie

  constructor(private movieService:MovieService, private route:ActivatedRoute) {

  }

  ngOnInit(){
    this.route.data.forEach((data) => {
      this.movie = data['movie']
    })
  }

  runtimeConvert(time) {
    let num = time;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + "hr " + rminutes + "min";
  }

}

