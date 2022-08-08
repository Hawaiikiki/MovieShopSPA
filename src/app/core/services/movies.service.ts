import { Injectable } from '@angular/core';
import {Movie} from 'src/app/shared/models/Movie';
import {HttpClient} from '@angular/common/http';
import { MovieDetails } from 'src/app/shared/models/MovieDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getTopRevenueMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>("https://localhost:7076/api/Movies/top-revenue");

  }

  getMovieDetails(id:number):Observable<MovieDetails>{
    return this.http.get<MovieDetails>("https://localhost:7076/api/Movies/"+id);

  }

  getMovieByGenre(genreId:number):Observable<Movie[]>{
    return this.http.get<Movie[]>("https://localhost:7076/api/Movies/genre/"+genreId);

  }
}
