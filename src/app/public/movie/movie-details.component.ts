import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/core/services/movies.service';
import { MovieDetails } from 'src/app/shared/models/MovieDetails';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie!: MovieDetails;
  id!: number;
  constructor(private activateRoute:ActivatedRoute, private movieService:MoviesService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
      console.log(params);
      this.id = params['movieId'];
      console.log(this.id);
    })
    this.movieService.getMovieDetails(this.id).subscribe(m=>{
      this.movie = m;
      console.log(this.movie);
    })
  }

}
