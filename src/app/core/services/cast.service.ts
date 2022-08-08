import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CastDetails } from 'src/app/shared/models/CastDetails';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private http:HttpClient) { }
  getCastDetails(castId:number):Observable<CastDetails>{
    return this.http.get<CastDetails>("https://localhost:7076/api/Cast/"+castId);
  }
}
