import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) {}
  getMovies():Observable<any>{
      return this._HttpClient.get("http://api.themoviedb.org/3/movie/popular?api_key=395ec1fcd6739e6e6f57a3cc15ca7398&language=en-US")
  }
}
