import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';
import { MoviesService } from 'src/app/core/services/movies.service';
import { MovieDetails } from 'src/app/shared/models/MovieDetails';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  isLoggedIn:boolean = false;
  currentUser: User;
  movie!: MovieDetails;
  id!: number;
  constructor(private activateRoute:ActivatedRoute, private movieService:MoviesService, private accountService:AccountService) { }

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
    this.accountService.isLoggedIn.subscribe(data=>{
      this.isLoggedIn = data;
    })
    this.accountService.currentUser.subscribe(data=>{
      this.currentUser=data;
    })
  }

}
