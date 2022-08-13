import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/shared/models/Genre';
import { Movie } from 'src/app/shared/models/Movie';
import { PagedResultSet } from 'src/app/shared/models/PagedResultSet';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http:HttpClient) { }
  getAllGenres():Observable<Genre[]>{
    return this.http.get<Genre[]>("https://localhost:7076/api/Genres");
  }

  getAllMovies(genreId:number):Observable<PagedResultSet>{
    return this.http.get<PagedResultSet>("https://localhost:7076/api/Movies/genre/"+genreId);
  }
  //addGenre(genre:Genre):Observable<boolean>{
    //return this.http.post<Genre>()
  //}
  // deleteGenre(genreId:number):Observable<boolean>{
  //   return this.http.delete<boolean>();
  // }
}
