import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/shared/models/Genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http:HttpClient) { }
  getAllGenres():Observable<Genre[]>{
    return this.http.get<Genre[]>("https://localhost:7076/api/Genres");
  }
  //addGenre(genre:Genre):Observable<boolean>{
    //return this.http.post<Genre>()
  //}
  // deleteGenre(genreId:number):Observable<boolean>{
  //   return this.http.delete<boolean>();
  // }
}
