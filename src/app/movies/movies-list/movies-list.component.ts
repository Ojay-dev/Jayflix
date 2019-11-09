import { Component, OnInit } from '@angular/core';
import { MovieService, IMovie } from '../../shared/index';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies:IMovie[];
  errorMessage:string;

  constructor(private movieService:MovieService, private route:ActivatedRoute) {

  }

  ngOnInit(){
    this.movies = this.route.snapshot.data['movies'];
    console.log(this.movies);
    // this.movieService.getMovies().subscribe({
    //   next: movies => this.movies = movies,
    //   error: error => this.errorMessage = error
    // });
  }

}
